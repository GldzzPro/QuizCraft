import { z } from "zod";

export const QuestSchema = z.object({
  text: z.string().nonempty("Question is required"),
  answers: z
    .array(
      z.object({
        text: z.string().nonempty("Option text is required"),
        isCorrect: z.boolean({
            message: "You must select one correct answer",
        }).default(false),
      })
    )
    .min(4, "You must provide exactly 4 options")
    .refine(
        (answers) => answers.some((answer) => answer.isCorrect),
        {
          message: "You must select one correct answer",
          path: ["answers"], // Error will be associated with the 'answers' field
        }
      )
      
});
