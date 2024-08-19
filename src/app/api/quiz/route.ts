import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { score, userId, quizId } = await req.json();

    if (!score || !userId || !quizId) {
      throw new Error("Score, userId and quizId are required");
    }

    const scoreData = await prisma.score.create({
      data: {
        score,
        userId,
        quizId,
      },
    });

    return NextResponse.json(scoreData, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json("Failed to create score", { status: 500 });
  }
}

export async function GET() {
  try {
    const quiz = await prisma.quiz.findMany({
      select: {
        id: true,
        title: true,
        difficulty: true,
        description: true,
        duration: true,
        createdAt: true,
        questions: true,
      },
    });
    return NextResponse.json(quiz);
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get quiz", { status: 500 });
  }
}
