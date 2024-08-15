import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  const { questionId, text, isCorrect } = await request.json();
  const answer = await prisma.answer.create({
    data: {
      questionId,
      text,
      isCorrect,
    },
  });
  return NextResponse.json(answer, { status: 201 });
}

export async function PUT(request: Request) {
  const { id, text, isCorrect } = await request.json();
  const answer = await prisma.answer.update({
    where: { id },
    data: { text, isCorrect },
  });
  return NextResponse.json(answer);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await prisma.answer.delete({ where: { id } });
  return NextResponse.json({ message: 'Answer deleted' });
}
