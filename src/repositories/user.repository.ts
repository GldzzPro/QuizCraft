"use server";
import prisma from "@/helpers/prisma";
import { Role } from "@prisma/client";



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

export async function getUserById({ id }: { id: string }) {
  return await prisma.user.findFirst({
    where: {
      id,
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
export async function createUser({
  email,
  username,
  password,
  confirmPassword,
  role,
  score,
}: {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  role: Role;
  score: number;
}) {
  // Ensure password and confirmPassword match
  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  // Create the user without confirmPassword
  return await prisma.user.create({
    data: {
      email,
      username,
      password,
      role, // Pass `role` here
      score, // Pass `score` here
    },
  });
}

export async function updateUser({
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
