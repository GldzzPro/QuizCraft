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
}) {
  return await prisma.user.create({
    data: {
      email: data.email,
      username: data.username,
      password: data.password,
      role: "USER",
    },
  });
}

export async function getParticularDetailUser() {
  return await prisma.user.findMany({
    where: {
      role: "USER",
    },
    select: {
      id: true,
      username: true,
      email: true,
      score: true,
    },
  });
}
export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    notFound(); // Redirect to 404 if user is not found
  }

  return user;
}

export async function getALlDetailUser() {
  return await prisma.user.findMany({
    where: {
      role: "USER",
    },
    select: {
      id: true,
      username: true,
      email: true,
      score: true,
      createdAt: true,
      updatedAt: true,
    },
  });
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
  role, // Adjust to accept `role`
  score, // Adjust to accept `score`
}: {
  id: string;
  email: string;
  username: string; // This should be a string, not a number
  role: Role; // Corrected from `roles` to `role`
  score: number;
}) {
  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      email,
      username,
      role,
      score,
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
