import { toast } from '@/components/ui/use-toast';
import { deleteUser } from '@/repositories/user.repository';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const useDeleteUser = () => {
    const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  const router = useRouter()
  const handleDelete = async (id: string) => {
    try {
      const result = await deleteUser({ id });
      if (result) {
        toast({
          title: "Success",
          description: "Delete User Successful",
        });
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
    return {
        handleDelete,
        handleDeleteClick,
        handleCloseAlert,
        isAlertOpen,
        setIsAlertOpen,
    }
}

export default useDeleteUser