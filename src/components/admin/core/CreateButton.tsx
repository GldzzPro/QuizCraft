"use client";
import React from "react";
import { Button } from "../../ui/button";
import { LoaderCircleIcon, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const CreateButton = ({ text, path }: { text: string; path: string }) => {
  const [isLaoding, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const directClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/dashboard${path}`);
    setIsLoading(true);
  };
  return (
    <Button onClick={directClick} className="flex gap-3 items-center">
      {isLaoding ? (
        <>
          <LoaderCircleIcon className="h-4 w-4 animate-spin" /> Loading...
        </>
      ) : (
        <>
          <PlusIcon className="h-4 w-4" /> {text}
        </>
      )}
    </Button>
  );
};

export default CreateButton;
