import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId, quizId, score } = await request.json();
  console.log(userId, quizId, score);
  

  if (!userId || !quizId || !score) {
    throw new Error("userId, quizId and score are required");
  }
  try {
    const scoreData = await prisma.score.create({
      data: {
        userId,
        quizId,
        score,
      },
    });

    return NextResponse.json(scoreData, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create score", { status: 500 });
  }
}
