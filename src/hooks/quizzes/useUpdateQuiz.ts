import { toast } from "@/components/ui/use-toast";
import { patchQuiz } from "@/repositories/quiz.repository";
import { QuizSchema } from "@/schemas/QuizSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Difficulty } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function useUpdateQuiz({
  quiz,
}: {
  quiz: {
    id: string;
    title: string;
    description: string | null;
    difficulty: Difficulty;
    duration: number;
  };
}) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof QuizSchema>>({
    resolver: zodResolver(QuizSchema),
    defaultValues: {
      title: quiz.title,
      description: quiz.description ?? "",
      difficulty: quiz.difficulty as Difficulty,
      duration: quiz.duration,
    },
  });

  const router = useRouter();
  const onSubmit = form.handleSubmit(
    async ({ title, description, difficulty, duration }) => {
      setIsLoading(true);
      try {
        const updateQuiz = await patchQuiz({
          id: quiz.id,
          title,
          description,
          difficulty: difficulty as Difficulty,
          duration,
        });
        if (updateQuiz) {
          toast({
            variant: "default",
            title: "Success",
            description: "Update Successful",
          });
          router.push(`/dashboard/quizzes/${quiz.id}`);
          router.refresh();
        }

        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          toast({
            variant: "destructive",
            title: "Failed",
            description: error.message,
          });
        }
        setIsLoading(false);
      }
    }
  );

  return {
    form,
    onSubmit,
    isLoading,
  };
}
