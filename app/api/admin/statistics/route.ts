import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // Your Prisma client

export async function GET() {
  try {
    // Fetch consenting self profiles
    const selfProfiles = await db.selfProfile.findMany({
      where: { consent: true },
    });

    // Fetch loved ones under caretakers who consented
    const caretakers = await db.caretakerProfile.findMany({
      where: { consent: true },
      include: { lovedOnes: true },
    });

    const lovedOnes = caretakers.flatMap(caretaker => caretaker.lovedOnes);

    return NextResponse.json({ selfProfiles, lovedOnes });
  } catch (error) {
    console.error("Error fetching statistics data:", error);
    return NextResponse.json({ error: "Failed to load statistics" }, { status: 500 });
  }
}
