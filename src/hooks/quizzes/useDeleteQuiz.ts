import { toast } from "@/components/ui/use-toast";
import { deleteQuizById } from "@/repositories/quiz.repository";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useDeleteQuiz({ id }: { id: string }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      console.log("Deleting quiz with ID:", id);
      
      const result = await deleteQuizById({ id });
      
      if (result) {
        toast({
          title: "Success",
          description: "Delete Quiz Successfully",
        });
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting quiz:", error);
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
