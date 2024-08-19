import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { quizId: string } }
) {
  const { quizId } = params;

  try {
    const quizDetail = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
      },
    });
    return NextResponse.json(
      {
        ...quizDetail,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to get questions", { status: 500 });
  }
}
