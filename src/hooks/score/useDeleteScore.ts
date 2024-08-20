import { toast } from "@/components/ui/use-toast";
import { deleteScoresByUserId } from "@/repositories/quiz.repository";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useDeleteScore({ userId }: { userId: string }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async (quizId: string) => {
    try {
      const result = await deleteScoresByUserId( quizId);
      if (result) {
        toast({
          title: "Success",
          description: "Score deleted successfully.",
        });
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting Score:", error);
      toast({
        title: "Error",
        description: "Failed to delete the Score.",
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
