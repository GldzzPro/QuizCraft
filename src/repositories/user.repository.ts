"use server";
import prisma from "@/lib/prisma";
import { Role } from "@prisma/client";
import { notFound } from "next/navigation";

export async function findUserEmail(data: { email: string }) {
  return await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
}

export async function createUserRegister(data: {
  email: string;
  username: string;
  password: string;
  role: string;
}) {
  return await prisma.user.create({
    data: {
      email: data.email,
      username: data.username,
      password: data.password,
      role: data.role as Role || "USER",
    },
  });
}

export async function getParticularDetailUser() {
  const userWithScores = await prisma.user.findMany({
    where: {
      role: "USER",
    },
    select: {
      id: true,
      username: true,
      email: true,
      scores: {
        select: {
          score: true,
          quizId: true,
        },
      },
    },
  });

  const calculatedScores = userWithScores.map((user) => {
    const totalScore = user.scores.reduce((acc, score) => acc + score.score, 0);
    return {
      ...user,
      totalScore,
    };
  });
  return calculatedScores;
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      scores: {
        select:{
          score: true,
          quiz: {
            select: {
              id: true,
              title: true,
            },
            
          },
        }
      },
    },
  });

  if (!user) {
    notFound();
  }

  return user;
}
export async function getALlDetailUser() {
  const users = await prisma.user.findMany({
    where: {
      role: "USER",
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      scores: {
        select: {
          score: true,
          quiz: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });
  return users
}

// Function to create a user
export async function createUser({
  email,
  username,
  password,
  role,
  score,
}: {
  email: string;
  username: string;
  password: string;
  role: Role;
  score: number;
}) {
  return await prisma.user.create({
    data: {
      email,
      username,
      password,
      role,
      score,
    },
  });
}
export async function patchUser({
  id,
  email,
  username,
  role,
  scores, // Expecting an array of scores with quizId and score
}: {
  id: string;
  email: string;
  username: string;
  role: Role;
  scores: {
    quizId: string;
    score: number;
  }[];
}) {
  // Fetch the existing scores for the user
  const existingScores = await prisma.score.findMany({
    where: {
      userId: id,
      quizId: {
        in: scores.map((s) => s.quizId),
      },
    },
  });

  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      email,
      username,
      role,
      scores: {
        update: existingScores.map((existingScore) => ({
          where: { id: existingScore.id }, // Use the score's unique ID
          data: {
            score:
              scores.find((s) => s.quizId === existingScore.quizId)?.score ||
              existingScore.score,
          },
        })),
      },
    },
  });
}

export async function deleteUser({ id }: { id: string }) {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
}

export const checkUserExist = async (userId?: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};
