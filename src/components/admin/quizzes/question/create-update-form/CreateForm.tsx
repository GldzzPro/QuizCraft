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
import useCreateQuest from "@/hooks/question/useCreateQuest";
import { useRouter } from "next/navigation";

export function QuestionAndAnswerForm({ quizId }: { quizId: string }) {
  const { form, onSubmit, isLoading } = useCreateQuest({ quizId });
  const router = useRouter();
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
                  render={({ field }) => (
                    <>
                      <RadioGroup
                        onValueChange={(value) => {
                          form.setValue(
                            "answers",
                            form.getValues("answers").map((answer, idx) => ({
                              ...answer,
                              isCorrect: idx === parseInt(value, 10),
                            }))
                          );
                        }}
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
                            </div>
                          </FormItem>
                        ))}
                        <FormMessage>
                          {form.formState.errors.answers?.message }
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
              {form.formState.isSubmitSuccessful
                ? isLoading
                  ? "Loading..."
                  : "Added Another Question"
                : isLoading
                ? "Loading..."
                : "Add Question"}
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
