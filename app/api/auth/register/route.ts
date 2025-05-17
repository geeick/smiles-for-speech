// app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, consent, credentials, profile } = body;

    if (!credentials || !credentials.email || !credentials.password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email: credentials.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await hash(credentials.password, 10);

    // Create the user with the appropriate profile type
    if (type === "self") {
      const user = await db.user.create({
        data: {
          email: credentials.email,
          name: profile.name,
          password: hashedPassword,
          selfProfile: {
            create: {
              consent,
              name: profile.name,
              age: profile.age,
              sex: profile.sex,
              diagnosis: profile.diagnosis,
              seekingDiagnosis: profile.seekingDiagnosis,
              challenges: profile.challenges,
              location: profile.location,
            },
          },
        },
      });

      return NextResponse.json(
        { message: "Self profile created successfully", userId: user.id },
        { status: 201 }
      );
    } else if (type === "caretaker") {
      const user = await db.user.create({
        data: {
          email: credentials.email,
          name: profile.name,
          password: hashedPassword,
          caretakerProfile: {
            create: {
              lovedOnesCount: profile.lovedOnesCount,
              diagnosisStatus: profile.diagnosisStatus,
              attendsSchool: profile.attendsSchool,
              receivesServices: profile.receivesServices,
            },
          },
        },
      });

      return NextResponse.json(
        { message: "Caretaker profile created successfully", userId: user.id },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid profile type" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}