import { toast } from "@/components/ui/use-toast";
import { deleteSpecificQuestion } from "@/repositories/quiz.repository";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useDeleteQuest({ id }: { id: string }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const router = useRouter();
  const handleDelete = async (id: string) => {
    try {
      const result = await deleteSpecificQuestion({id})
      if (result) {
        toast({
          title: "Success",
          description: "Delete Question Successfully",
        });
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
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
