import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { caretakerProfile: true },
    })

    if (!user?.caretakerProfile) {
      return NextResponse.json({ error: "No caretaker profile found" }, { status: 400 })
    }

    const body = await req.json()
    const {
      name,
      age,
      sex,
      diagnosisStatus,
      concerns,
      seekingSupport,
    } = body

    const lovedOne = await prisma.lovedOne.create({
      data: {
        name,
        age: parseInt(age),
        sex,
        diagnosisStatus,
        concerns,
        seekingSupport: seekingSupport === "yes",
        consent: true, // or false if default
        caretaker: { connect: { id: user.caretakerProfile.id } },
      },
    })

    // Optionally update lovedOnesCount
    await prisma.caretakerProfile.update({
      where: { id: user.caretakerProfile.id },
      data: {
        lovedOnesCount: {
          increment: 1,
        },
      },
    })

return NextResponse.json({ success: true, lovedOne, userId: user.id })
  } catch (err) {
    console.error("API Error:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
