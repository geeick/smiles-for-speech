import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  try {
    const user = await db.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ userId: user.id }, { status: 200 });
  } catch (error) {
    console.error("Error in /api/profile/by-email:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
