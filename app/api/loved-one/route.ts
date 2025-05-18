import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(
  req: Request,
  context: { params: { userId: string } }
) {
  const { userId } = await context.params

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        selfProfile: true,
        caretakerProfile: {
          include: {
            lovedOnes: true,
          },
        },
      },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Return profile based on type
    if (user.caretakerProfile) {
      return NextResponse.json({
        type: "caretaker",
        caretakerProfile: user.caretakerProfile,
      })
    } else if (user.selfProfile) {
      return NextResponse.json({
        type: "self",
        selfProfile: user.selfProfile,
      })
    } else {
      return NextResponse.json({ error: "No profile found" }, { status: 404 })
    }
  } catch (err) {
    console.error("Profile fetch error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
