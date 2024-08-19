import { toast } from "@/components/ui/use-toast";
import { patchUser } from "@/repositories/user.repository";
import { UserUpdateSchema } from "@/schemas/UserSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function useUpdateUser({
  user,
}: {
  user: {
    id: string;
    username: string | null;
    email: string;
    role: string;
    scores: {
      quiz: {
        id: string;
        title: string;
      };
      score: number;
    }[];
    createdAt: Date;
    updatedAt: Date;
  };
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(UserUpdateSchema),
    defaultValues: {
      email: user.email,
      username: user.username ?? "", // Use empty string if username is null
      role: user.role as Role, // Ensure role is correctly cast to Role
      scores: user.scores.map((score) => ({
        quizId: score.quiz.id,
        score: score.score,
        title: score.quiz.title,
        
      })),
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });

  const onSubmit = async (data: z.infer<typeof UserUpdateSchema>) => {
    const { email, username, role, scores } = data;
    setIsLoading(true);
    try {
      await patchUser({
        id: user.id,
        email,
        username: username ?? "", // Ensure username is a string
        role: role as Role, // Ensure role is correctly cast to Role
        scores: scores ?? [], // Ensure scores is an array
      });
      toast({
        title: "Success",
        description: "Update Successful",
        variant: "default",
      });
      router.push("/dashboard/users");
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "Failed",
          description: error.message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    isLoading,
  };
}
