import { Role } from "@prisma/client";

export const createUserByAdmin = async ({
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
}) => {
  return await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      password,
      confirmPassword,
      role,
      score,
    }),
  });
};
