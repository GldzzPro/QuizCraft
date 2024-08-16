import { toast } from "@/components/ui/use-toast";
import { createQuestionById } from "@/repositories/quiz.repository";
import { QuestSchema } from "@/schemas/QuestSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function useCreateQuest({ quizId }: { quizId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof QuestSchema>>({
    resolver: zodResolver(QuestSchema),
    defaultValues: {
      text: "",
      answers: [
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ],
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const { text, answers } = data;
    setIsLoading(true);
    const hasCorrectAnswer = answers.some(
      (answer) => answer.isCorrect === true
    );
    const hasEmptyAnswers = answers.some(
      (answer) => answer.text.trim() === ""
    );

    if (!text.trim()) {
      toast({
        variant: "destructive",
        title: "Failed!",
        description: "Please enter a question...",
      });
      return;
    }

    if (hasEmptyAnswers) {
      toast({
        variant: "destructive",
        title: "Failed!",
        description: "Please enter all options...",
      });
      return;
    }

    if (!hasCorrectAnswer) {
      toast({
        variant: "destructive",
        title: "Failed!",
        description: "Please select a correct answer...",
      });
      return;
    }

    try {
      const res = await createQuestionById({ quizId, text, answers });
      if (!res) {
        toast({
          variant: "destructive",
          title: "Failed!",
          description: "Something went wrong...",
        });
        return;
      }
      toast({
        variant: "default",
        title: "Success",
        description: "Question created successfully",
      });
    } catch (error) {
      console.error("Failed to submit question:", error);
    } finally {
      setIsLoading(false);
    }
  });

  return {
    form,
    isLoading,
    onSubmit,
  };
}
