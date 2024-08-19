import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { text, quizId } = await request.json();

  if (!text || !quizId) {
    return NextResponse.json(
      { Error: "Text and quizId are required" },
      { status: 400 }
    );
  }

  try {
    const question = await prisma.question.create({
      data: {
        text,
        quiz: { connect: { id: quizId } },
      },
    });

    return NextResponse.json(question, { status: 201 });
  } catch (error) {
    console.error("Error creating question:", error);
    return NextResponse.json(
      { Error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  const { id, text } = await request.json();

  try {
    const question = await prisma.question.update({
      where: { id },
      data: { text },
    });

    return NextResponse.json(question);
  } catch (error) {
    console.error("Error updating question:", error);
    return NextResponse.json(
      { Error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  try {
    await prisma.question.delete({ where: { id } });
    return NextResponse.json({ message: "Question deleted" });
  } catch (error) {
    console.error("Error deleting question:", error);
    return NextResponse.json(
      { Error: "Something went wrong" },
      { status: 500 }
    );
  }
}


