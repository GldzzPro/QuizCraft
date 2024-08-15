import { toast } from "@/components/ui/use-toast";
import { registerUser } from "@/services/authServices";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const RegisterFormSchema = z
  .object({
    email: z.string().min(6, {
      message: "Username must be at least 6 characters.",
    }),
    username: z.string().min(6, {
      message: "Username must be at least 6 characters.",
    }),
    password: z.string().min(5, {
      message: "Password must be at least 5 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  });

export function useRegisterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  const router = useRouter();
  const onSubmit = form.handleSubmit(async (data) => {
    const { email, username, password, confirmPassword } = data;
    setIsLoading(true);
    try {
      const result = await registerUser({
        email,
        username,
        password,
        confirmPassword,
      });
 
      if (result.status === 200) {
        toast({
          title: "Success",
          description: "Register Successful, Please Login",
          variant: "default",
        });
        router.push("/signin");
      }

      if (result.status === 400) {
        toast({
          title: "Failed",
          description: "User already exists",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Failed",
          description: error.message,
          variant: "destructive",
        });
      }

      console.log(error);
      setIsLoading(false);
    }
  });

  return { isLoading, form, onSubmit };
}
