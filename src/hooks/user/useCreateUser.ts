import { toast } from "@/components/ui/use-toast";
import {  findUserEmail } from "@/repositories/user.repository";
import { UserUpdateSchema } from "@/schemas/UserSchemas";
import { createUserByAdmin as postUser } from "@/services/userServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


export default function useCreateUser() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserUpdateSchema>>({
    resolver: zodResolver(UserUpdateSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      role: "USER",
      score: 0,
    },
  });
  const router = useRouter();
  const onSubmit = form.handleSubmit(
    async ({ email, username, password, confirmPassword, role, score }) => {
      setIsLoading(true);
      const existedUser = await findUserEmail({ email });

      if (existedUser && existedUser.email === email) {
        toast({
          variant: "destructive",
          title: "Failed",
          description: "Email already exists",
        });
        setIsLoading(false);
        return;
      }
      try {
        const result = await postUser({
          email,
          username,
          password,
          confirmPassword,
          role: role as Role,
          score: score ?? 0,
        });

        if (result.status === 200) {
          toast({
            title: "Success",
            description: "Inserted Successful",
          });
          router.push("/dashboard/users");
          router.refresh();
        }
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          toast({
            variant: "destructive",
            title: "Failed",
            description: error.message,
          });
        }
        console.log(error);
        setIsLoading(false);
      }
    }
  );

  return {
    form,
    onSubmit,
    isLoading,
  };
}
