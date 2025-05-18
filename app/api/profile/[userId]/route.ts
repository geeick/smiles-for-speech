import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  context: { params: { userId: string } }
) {
  const { userId } = (await context).params;

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  try {
    // Fetch user and their selfProfile
    const user = await db.user.findUnique({
      where: { id: userId },
      include: {
      selfProfile: true,
      caretakerProfile: {
      include: {
        lovedOnes: true,
      },
    },
    },

    });

    if (!user || (!user.selfProfile && !user.caretakerProfile)) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }


let profile
let type

if (user.selfProfile) {
  type = "self"
  profile = {
    id: user.id,
    name: user.name,
    age: user.selfProfile.age,
    sex: user.selfProfile.sex,
    diagnosis: user.selfProfile.diagnosis,
    seekingDiagnosis: user.selfProfile.seekingDiagnosis,
    challenges: user.selfProfile.challenges,
    location: user.selfProfile.location,
  }
} else {
  type = "caretaker"
  profile = {
    id: user.id,
    name: user.name,
    lovedOnesCount: user.caretakerProfile.lovedOnesCount,
    lovedOnes: user.caretakerProfile.lovedOnes,
    location: user.caretakerProfile.location,
  }

}

return NextResponse.json({ type, ...profile }, { status: 200 });


    return NextResponse.json(profile, { status: 200 });
  } catch (error) {
    console.error("Profile fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  try {
    const data = await req.json();

    // Update user name if provided
    if (data.name) {
      await db.user.update({
        where: { id: userId },
        data: { name: data.name },
      });
    }

    // Update selfProfile fields
    const updatedProfile = await db.selfProfile.update({
      where: { userId },
      data: {
        age: data.age,
        sex: data.sex,
        diagnosis: data.diagnosis,
        seekingDiagnosis: data.seekingDiagnosis,
        challenges: data.challenges,
        location: data.location,
      },
    });

    return NextResponse.json({ message: "Profile updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}

