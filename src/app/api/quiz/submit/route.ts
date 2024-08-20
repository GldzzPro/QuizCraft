import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId, quizId, score } = await request.json();

  // Ensure the score is a number and not undefined
  if (!userId || !quizId || typeof score !== "number") {
    return NextResponse.json({ error: "userId, quizId, and score are required" }, { status: 400 });
  }
  try {
    const scoreData = await prisma.score.create({
      data: {
        userId,
        quizId,
        score
      },
    });

    return NextResponse.json(scoreData, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create score", { status: 500 });
  }
}
