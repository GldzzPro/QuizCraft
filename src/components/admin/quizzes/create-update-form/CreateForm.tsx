"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import useCreateQuiz from "@/hooks/quizzes/useCreateQuiz";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../../../ui/textarea";
import { LoaderCircleIcon } from "lucide-react";

const CreateQuizForm = () => {
  const { form, onSubmit, isLoading } = useCreateQuiz();
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Quiz Title" type="text" {...field} required />
              </FormControl>
              <FormDescription>
                The title of the quiz
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="About the quiz"  {...field} required />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="difficulty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Difficulty</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Difficulty" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem className="cursor-pointer" value="EASY">
                      Easy
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="MEDIUM">
                      Medium
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="HARD">
                      Hard
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration (in seconds)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="1" {...field}  required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isLoading ? (
            <>
              <LoaderCircleIcon className="animate-spin " />
              <p className="ml-2">Loading...</p>
            </>
          ) : (
            "Add Quiz"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CreateQuizForm;