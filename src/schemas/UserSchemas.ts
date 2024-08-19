import { z } from "zod";

export const UserUpdateSchema = z.object({
  email: z.string().email(),
  username: z.string().optional(),
  role: z.enum(["USER", "ADMIN"]),
  scores: z.array(
    z.object({
      quizId: z.string(),
      score: z.number().min(0),
    })
  ).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
  export const UserCreateSchema = z
  .object({
    email: z.string().email().min(6, {
      message: "Username must be at least 6 characters.",
    }),
    username: z.string().min(6, {
      message: "Username must be at least 6 characters.",
    }),
    password: z.string().min(5, {
      message: "Password must be at least 5 characters.",
    }),
    confirmPassword: z.string(),
    role: z.string().optional(),
    score: z.coerce.number().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  });
