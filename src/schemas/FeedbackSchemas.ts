import { z } from "zod";

export const FeedbackSchema = z.object({
    name: z.string().min(5, "Name must be at least 3 characters").nonempty("Name is required"),
    email: z.string().min(5, "Email must be at least 3 characters").email("Invalid email").nonempty("Email is required"),
    message: z.string().min(10, "Message must be at least 3 characters").nonempty("Message is required"),
})