import { toast } from "@/components/ui/use-toast";
import { deleteSpecificQuestionByQuizId } from "@/repositories/quiz.repository";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useDeleteQuest() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteSpecificQuestionByQuizId(id);
      if (result) {
        toast({
          title: "Success",
          description: "Question deleted successfully.",
        });
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting question:", error);
      toast({
        title: "Error",
        description: "Failed to delete the question.",
      });
    }
  };

  const handleDeleteClick = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  return {
    handleDelete,
    handleDeleteClick,
    handleCloseAlert,
    isAlertOpen,
    setIsAlertOpen,
  };
}
