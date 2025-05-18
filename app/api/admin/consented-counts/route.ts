// app/api/admin/consented-counts/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const selfProfiles = await prisma.SelfProfile.count({
      where: {
        consent: true,
      },
    });

    const lovedOneProfiles = await prisma.LovedOne.count({
      where: {
        consent: true,
      },
    });

    return NextResponse.json({
      selfProfileCount: selfProfiles,
      lovedOnesCount: lovedOneProfiles,
    });
  } catch (error) {
    console.error("Error fetching consented counts:", error);
    return NextResponse.json(
      { error: "Failed to fetch consented counts" },
      { status: 500 }
    );
  }
}
