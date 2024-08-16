import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { QuizSchema } from "@/schemas/QuizSchemas";
import { findQuizById, postQuiz } from "@/repositories/quiz.repository";
import { Difficulty } from "@prisma/client";
import { getSession, signOut } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function useCreateQuiz() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm<z.infer<typeof QuizSchema>>({
    resolver: zodResolver(QuizSchema),
    defaultValues: {
      title: "",
      description: "",
      difficulty: "",
      duration: 1,
    },
  });
  const router = useRouter();

  const onSubmit = form.handleSubmit(
    async ({ title, description, difficulty, duration }) => {
      setIsLoading(true);
      const session = await getSession();
      const userId = session?.user?.id;
      if (!userId) {
        toast({
          variant: "destructive",
          title: "Failed",
          description: "Something went wrong, please login again",
        });
        signOut();
        return;
      }
      try {
        const quiz = await postQuiz({
          title,
          description,
          difficulty: difficulty as Difficulty,
          duration,
          userId: userId,
        });
        const quizId = await findQuizById(quiz.id);

        if (quiz) {
          toast({
            variant: "default",
            title: "Success",
            description: "Quiz created successfully",
          });
          router.push(`/dashboard/quizzes/${quizId?.id}`);
          router.refresh();
        }

        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          toast({
            variant: "destructive",
            title: "Failed",
            description: error.message,
          }),
            console.log(error);
        }
        setIsLoading(false);
      }
    }
  );

  return {
    isLoading,
    formData,
    form,
    currentStep,
    onSubmit,
  };
}
