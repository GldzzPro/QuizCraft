"use server";
import prisma from "@/lib/prisma";
import { Difficulty } from "@prisma/client";

export const getAllQuizzes = async () => {
  return await prisma.quiz.findMany({
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
};

export const postQuiz = async ({
  title,
  description,
  difficulty,
  duration,
  userId,
}: {
  title: string;
  description: string;
  difficulty: Difficulty;
  duration: number;
  userId: string;
}) => {
  return await prisma.quiz.create({
    data: {
      title,
      description,
      difficulty,
      duration,
      userId,
    },
  });
};

export const getQuestionsById = async ({ id }: { id: string }) => {
  return await prisma.question.findMany({
    where: {
      quizId: id,
    },
    select: {
      id: true,
      text: true,
      answers: {
        select: {
          id: true,
          text: true,
          isCorrect: true,
        },
      },
    },
  });
};

export const getQuizById = async ({ id }: { id: string }) => {
  return await prisma.quiz.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      difficulty: true,
      duration: true,
    },
  });
};

export const deleteQuizById = async ({ id }: { id: string }) => {
  return await prisma.quiz.delete({
    where: {
      id,
    },
  });
};

export const patchQuiz = async ({
  id,
  title,
  description,
  difficulty,
  duration,
}: {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  duration: number;
}) => {
  return await prisma.quiz.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      difficulty,
      duration,
    },
  });
};

export const createQuestionById = async ({
  text,
  quizId,
  answers,
}: {
  text: string;
  quizId: string;
  answers: {
    text: string;
    isCorrect: boolean;
  }[];
}) => {
  return await prisma.question.create({
    data: {
      text,
      quizId,
      answers: {
        create: answers.map(({ text, isCorrect }) => ({
          text,
          isCorrect,
        })),
      },
    },
  });
};
export const deleteSpecificQuestion = async (id: string) => {
  try {
    return await prisma.question.delete({
      where: { id },
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to delete question: ${error.message}`);
    }
  }
};

export const findQuizById = async (id: string) => {
  return await prisma.quiz.findFirst({
    where: {
      id
    },
  });
};
