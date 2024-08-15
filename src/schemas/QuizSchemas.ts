import { z } from "zod";

export const QuizSchema = z.object({
  title: z.string().min(6, {
    message: "Title must be at least 6 characters.",
  }),
  description: z.string().min(6, {
    message: "Description must be at least 6 characters.",
  }).max(255, {
    message: "Description must be at most 255 characters.",
  }),
  difficulty: z.string().min(1, {
    message: "Difficulty is required.",
  }),
  duration: z.coerce.number().min(1, {
    message: "Duration must be at least 1 minute.",
  }),
});

export const questionsSchema = z.array(
  z.object({
    text: z.string().min(6, {
      message: "Question must be at least 6 characters.",
    }),
    answer: z.array(
      z.object({
        text: z.string().min(6, {
          message: "Answer must be at least 6 characters.",
        }),
        isCorrect: z.boolean(),
      })
    ),
  })
);
