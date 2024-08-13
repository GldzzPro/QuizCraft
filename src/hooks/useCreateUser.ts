import { toast } from "@/components/ui/use-toast";
import { createUser, findUserEmail } from "@/repositories/user.repository";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const UserFormSchema = z
  .object({
    email: z.string().email().min(6, {
      message: "Username must be at least 6 characters.",
    }),
    username: z.string().min(6, {
      message: "Username must be at least 6 characters.",
    }),
    password: z.string().min(5, {
      message: "Password must be at least 5 characters.",
    }),
    confirmPassword: z.string(),
    roles: z.string().optional(),
    scores: z.coerce.number().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  });

export default function useCreateUser() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFormSchema>>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      roles: "USER",
      scores: 0,
    },
  });
const router = useRouter()
  const onSubmit = form.handleSubmit(
    async ({ email, username, password, confirmPassword, roles, scores }) => {
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
        const result = await createUser({
          email,
          username,
          password,
          confirmPassword,
          role: roles as Role, // Use `roles` here
          score: scores ?? 0, // Use `scores` here
        });

        if (result) {
          toast({
            title: "Success",
            description: "Inserted Successful, Please Login",
          });
          router.push("/dashboard/users");
          router.refresh()
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
