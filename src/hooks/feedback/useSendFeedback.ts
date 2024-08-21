import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/helpers/nodemailer";
import { FeedbackSchema } from "@/schemas/FeedbackSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function useSendFeedback() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FeedbackSchema>>({
    resolver: zodResolver(FeedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const { name, email, message } = data;
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    setIsLoading(true);
    try {
      const response = await sendEmail({
        to: email,
        subject: "Feedback",
        text,
      });

      if (response?.messageId) {
        toast({
          title: "Success",
          description: "Thank you for your feedback.",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send feedback.",
        });
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  });

  return {
    form,
    onSubmit,
    isLoading,
  };
}
