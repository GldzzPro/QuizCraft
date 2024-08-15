import { z } from "zod";

export const UserCreateSchema = z.object({
    email: z.string().email().min(6, {
      message: "Email must be at least 6 characters.",
    }),
    username: z.string().min(6, {
      message: "Username must be at least 6 characters.",
    }),
    role: z.string().optional(),
    score: z.coerce.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  });

  export const UserUpdateSchema = z
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
