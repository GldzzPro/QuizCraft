import { toast } from "@/components/ui/use-toast";
import { updateSpecificQuestionByQuizId } from "@/repositories/quiz.repository";
import { QuestforUpdateSchema } from "@/schemas/QuestSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

export default function useUpdateQuest({
  question,
}: {
  question: {
    id: string;
    text: string;
    answers: { id: string; text: string; isCorrect: boolean }[];
  };
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof QuestforUpdateSchema>>({
    resolver: zodResolver(QuestforUpdateSchema),
    defaultValues: {
      text: question.text,
      answers: question.answers.map((answer) => ({
        id: answer.id, // Include the ID in the form's default values
        text: answer.text,
        isCorrect: answer.isCorrect,
      })),
    },
  });

    // Watch the answers array for changes
    const answers = useWatch({ control: form.control, name: "answers" });

    // Custom change handler for the radio buttons
    const handleRadioChange = (selectedId: string) => {
      form.setValue(
        "answers",
        answers.map((answer) => ({
          ...answer,
          isCorrect: answer.id === selectedId, // Set the selected answer's `isCorrect` to true, others to false
        })),
        { shouldValidate: true, shouldDirty: true }
      );
    };

  const onSubmit = form.handleSubmit(async (data) => {
    const { text, answers } = data;
    setIsLoading(true);

    const hasCorrectAnswer = answers.some((answer) => answer.isCorrect === true);
    const hasEmptyAnswers = answers.some((answer) => answer.text.trim() === "");

    if (!text.trim()) {
      toast({
        variant: "destructive",
        title: "Failed!",
        description: "Please enter a question...",
      });
      setIsLoading(false);
      return;
    }

    if (hasEmptyAnswers) {
      toast({
        variant: "destructive",
        title: "Failed!",
        description: "Please enter all options...",
      });
      setIsLoading(false);
      return;
    }

    if (!hasCorrectAnswer) {
      toast({
        variant: "destructive",
        title: "Failed!",
        description: "Please select a correct answer...",
      });
      setIsLoading(false);
      return;
    }

    try {
      const res = await updateSpecificQuestionByQuizId({
        id: question.id,
        text: text.trim(),
        answers: answers.map((answer) => ({
          id: answer.id, // Ensure the ID is included during the update
          text: answer.text.trim(),
          isCorrect: answer.isCorrect,
        })),
      });

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
        description: "Question updated successfully",
      });
      
      router.push(`/dashboard/quizzes/${res.quizId}`);
      router.refresh();
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
    handleRadioChange,
  };
}