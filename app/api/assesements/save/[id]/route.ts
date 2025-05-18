import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const userId = session.user.id;
    const assessmentId = params.id;
    
    // Find the assessment
    const assessment = await db.assessmentResult.findUnique({
      where: { id: assessmentId },
    });
    
    if (!assessment) {
      return NextResponse.json({ error: "Assessment not found" }, { status: 404 });
    }
    
    // Security check - only allow access if this is the user's own assessment or they created it
    if (assessment.userId !== userId && assessment.createdBy !== userId) {
      // Check if this is a shared assessment
      const sharedAssessment = await db.sharedAssessment.findFirst({
        where: {
          assessmentId,
          sharedWithId: userId,
        },
      });
      
      if (!sharedAssessment) {
        return NextResponse.json({ error: "Unauthorized access to this assessment" }, { status: 403 });
      }
    }
    
    // Parse JSON fields
    const answers = assessment.answers ? JSON.parse(assessment.answers as string) : {};
    const categories = assessment.categories ? JSON.parse(assessment.categories as string) : {};
    
    // Format the response
    const formattedAssessment = {
      id: assessment.id,
      userId: assessment.userId,
      createdBy: assessment.createdBy,
      assessmentType: assessment.assessmentType,
      totalScore: assessment.totalScore,
      maxPossibleScore: assessment.maxPossibleScore,
      scorePercentage: assessment.scorePercentage,
      categories,
      answers,
      date: assessment.date,
      lovedOneId: assessment.lovedOneId,
    };
    
    return NextResponse.json(formattedAssessment, { status: 200 });
    
  } catch (error) {
    console.error("Error retrieving assessment:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}