import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";

const LoginFormSchema = z.object({
  email: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

export default function useLoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "hello@example.com",
      password: "12345",
    },
  });

  const router = useRouter();

  const onSubmit = form.handleSubmit(async (data) => {
    setIsLoading(true);
    const { email, password } = data;
    try {
      const result = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
        redirect: false,
      });

     

      if (result?.error) {
        console.log(result.error);
        toast({
          variant: "destructive",
          title: "Failed",
          description: "Login Failed, Please try again",
        });
        return;
      } else {
        router.push("/dashboard");
        toast({
          variant: "default",
          title: "Success",
          description: "Login Successful",
        });
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
  });

  return { form, onSubmit, isLoading };
}
