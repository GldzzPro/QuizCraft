"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisIcon } from "lucide-react";
import Link from "next/link";
import PopOver from "./AlertDialog";
import useDeleteUser from "@/hooks/user/useDeleteUser";

const DropdownTable = ({
  path,
  onDelete,
}: {
  path: string;
  onDelete: () => void;
}) => {
  const { handleCloseAlert, isAlertOpen, setIsAlertOpen, handleDeleteClick } =
    useDeleteUser();

  return (
    <>
      <PopOver
        onDelete={onDelete}
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
        handleCloseAlert={handleCloseAlert}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-haspopup="true"
              size="icon"
              className="focus:outline-none"
              variant="ghost"
            >
              <EllipsisIcon className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/dashboard/users/${path}`}>
              <DropdownMenuItem className="cursor-pointer">
                Edit
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              className="cursor-pointer text-red-500 focus:text-red-500/70 "
              onClick={handleDeleteClick}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </PopOver>
    </>
  );
};

export default DropdownTable;
