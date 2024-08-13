import { toast } from "@/components/ui/use-toast";
import {
  findUserEmail,
  getUserById,
  updateUser,
} from "@/repositories/user.repository";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const UserFormSchema = z.object({
  email: z.string().email().min(6, {
    message: "Email must be at least 6 characters.",
  }),
  username: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  role: z.string().optional(),
  score: z.coerce.number().optional(),
});

export default function useUpdateUser({
  user,
}: {
  user: {
    id: string;
    username: string | null; // Handle username as string or null
    email: string;
    role: string;
    score: number;
  };
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      email: user.email,
      username: user.username ?? "", // Use empty string if username is null
      role: user.role as Role,
      score: user.score ?? 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof UserFormSchema>) => {
    const { email, username, role, score } = data;
    setIsLoading(true);
    
    try {
      const result = await updateUser({
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
