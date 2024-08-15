import { toast } from "@/components/ui/use-toast";
import {
  findUserEmail,
  getUserById,
  patchUser,
} from "@/repositories/user.repository";
import { UserCreateSchema } from "@/schemas/UserSchemas";
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
    username: string | null; // Handle username as string or null
    email: string;
    role: string;
    score: number;
    createdAt: Date;
    updatedAt: Date;
  };
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(UserCreateSchema),
    defaultValues: {
      email: user.email,
      username: user.username ?? "", // Use empty string if username is null
      role: user.role as Role,
      score: user.score ?? 0,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });

  const onSubmit = async (data: z.infer<typeof UserCreateSchema>) => {
    const { email, username, role, score} = data;
    setIsLoading(true);
    try {
      const result = await patchUser({
        id: user.id,
        email,
        username,
        role: role as Role,
        score: score ?? 0,
      });
      if (result) {
        toast({
          title: "Success",
          description: "Update Successful",
          variant: "default",
        });
        router.push("/dashboard/users");
        router.refresh();
        setIsLoading(false);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "Failed",
          description: error.message,
        });
      }
    }
  };
  return {
    form,
    onSubmit,
    isLoading,
  };
}
