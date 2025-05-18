import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { location } = await req.json()

  try {
    const user = await db.user.findUnique({
      where: { email: session.user.email },
      include: {
        selfProfile: true,
        caretakerProfile: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    if (user.selfProfile) {
      await db.selfProfile.update({
        where: { userId: user.id },
        data: { location },
      })
    } else if (user.caretakerProfile) {
      await db.caretakerProfile.update({
        where: { userId: user.id },
        data: { location },
      })
    }

    return NextResponse.json({ message: "Location updated" })
  } catch (err) {
    console.error("Error updating location:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
