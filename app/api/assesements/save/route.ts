import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    // Get the authenticated user
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const userId = session.user.id;
    const body = await req.json();
    
    // Validate required data
    const { 
      answers, 
      totalScore, 
      maxPossibleScore, 
      scorePercentage,
      assessmentType = "self" // default to self-assessment
    } = body;
    
    if (!answers || totalScore === undefined || !maxPossibleScore) {
      return NextResponse.json({ error: "Missing required assessment data" }, { status: 400 });
    }
    
    // Determine target user ID (for self or loved-one assessment)
    let targetUserId = userId;
    let lovedOneId = null;
    
    if (assessmentType === "loved-one" && body.lovedOneId) {
      lovedOneId = body.lovedOneId;
      targetUserId = body.lovedOneId;
    }
    
    // Save the assessment result
    const assessmentResult = await db.assessmentResult.create({
      data: {
        userId: targetUserId,
        createdBy: userId,
        assessmentType,
        lovedOneId,
        answers: JSON.stringify(answers),
        totalScore,
        maxPossibleScore,
        scorePercentage,
        categories: JSON.stringify(body.categories || {}),
        date: new Date(),
      },
    });
    
    return NextResponse.json({ 
      success: true, 
      assessmentId: assessmentResult.id,
      scorePercentage
    }, { status: 201 });
    
  } catch (error) {
    console.error("Error saving assessment:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}