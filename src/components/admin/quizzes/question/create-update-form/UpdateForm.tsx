"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import useUpdateQuest from "@/hooks/question/useUpdateQuest";
import { useRouter } from "next/navigation";

export function UpdateQuestionAndAnswerForm({
  question,
}: {
  question: {
    id: string;
    text: string;
    answers: {
      id: string;
      text: string;
      isCorrect: boolean;
    }[];
  };
}) {
  const { form, onSubmit, isLoading } = useUpdateQuest({ question });
  const router = useRouter();

  const correctAnswerIndex = form
    .getValues("answers")
    .findIndex((answer) => answer.isCorrect);

  const handleOnValueChange = (value: any) => {
    form.setValue(
      "answers",
      form.getValues("answers").map((answer, idx) => ({
        ...answer,
        isCorrect: idx === parseInt(value, 10),
      }))
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Quiz</CardTitle>
            <CardDescription>
              Answer the following questions to test your knowledge.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                {/* Question */}
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Question</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What is the capital of France?"
                          className="bg-muted/20 text-muted-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Answer Options */}
                <FormField
                  control={form.control}
                  name="answers"
                  render={() => (
                    <>
                      <RadioGroup
                        value={correctAnswerIndex.toString()} // Set the value based on the correct answer index
                        onValueChange={handleOnValueChange}
                      >
                        {form.getValues("answers").map((_, index) => (
                          <FormItem key={index}>
                            <div className="flex items-center gap-2">
                              <FormControl>
                                <RadioGroupItem value={`${index}`} />
                              </FormControl>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder={`Option ${index + 1}`}
                                  className="bg-muted/20 text-muted-foreground"
                                  {...form.register(`answers.${index}.text`)}
                                  required
                                />
                              </FormControl>
                              <FormMessage>
                                {
                                  form.formState.errors.answers?.[index]?.text
                                    ?.message
                                }
                              </FormMessage>
                            </div>
                          </FormItem>
                        ))}
                        <FormMessage>
                          {form.formState.errors.answers?.message}
                        </FormMessage>
                      </RadioGroup>
                    </>
                  )}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit" variant="outline" disabled={isLoading}>
              {isLoading ? "Loading..." : "Update Question"}
            </Button>
            <Button
              onClick={() => (form.reset(), router.back())}
              type="button"
              variant="outline"
              disabled={isLoading}
            >
              Back
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
