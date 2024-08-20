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

export const createQuestionByQuizId = async ({
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
export const deleteSpecificQuestionByQuizId = async (id: string) => {
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
      id,
    },
  });
};

export const getSpesificQuestionById = async ({ id }: { id: string }) => {
  return await prisma.question.findFirst({
    where: {
      id,
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


type SpecifiedQuestion = {
  id: string;
  text: string;
  answers: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
};

export const updateSpecificQuestionByQuizId = async ({
  id,
  text,
  answers,
}: SpecifiedQuestion) => {
  return await prisma.question.update({
    where: {
      id,
    },
    data: {
      text,
      answers: {
        update: answers.map((answer) => ({
          where: { id: answer.id }, 
          data: {
            text: answer.text,
            isCorrect: answer.isCorrect,
          },
        })),
      },
    },
  });
};

export const getScoreByUserId = async (userId: string) => {
  return await prisma.score.findFirst({
    where: {
      userId
    },
    select: {
      quizId: true,
      score: true
    }
  })
}

export const deleteScoresByUserId = async ( quizId: string) => {
  return await prisma.score.deleteMany({
    where: {
      
      quizId,
    },
  });
};