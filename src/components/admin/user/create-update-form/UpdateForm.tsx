"use client";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useUpdateUser from "@/hooks/user/useUpdateUser";
import { LoaderCircleIcon } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/helpers/formatData";
import useDeleteScore from "@/hooks/score/useDeleteScore";
import PopOver from "../../core/AlertDialog";

interface User {
  id: string;
  username: string | null;
  email: string;
  role: string;
  scores: {
    quiz: {
      id: string;
      title: string;
    };
    score: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

export default function UserUpdateForm({ user }: { user: User }) {
  const { toast } = useToast();
  const { form, isLoading, onSubmit } = useUpdateUser({ user });

  const handleClickWarn = () => {
    toast({
      variant: "destructive",
      title: "Disabled",
      description: "Cannot change the score!",
      action: <Button variant={"ghost"}>OK</Button>,
    });
  };

  const {
    handleDelete,
    handleDeleteClick,
    handleCloseAlert,
    isAlertOpen,
    setIsAlertOpen,
  } = useDeleteScore({ userId: user.id });

  return (
    <PopOver
      onDelete={() => handleDelete(user.scores[0]?.quiz.id)} // Pass the quizId here
      isAlertOpen={isAlertOpen}
      setIsAlertOpen={setIsAlertOpen}
      handleCloseAlert={handleCloseAlert}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="p-4">
            <h2 className="text-lg font-semibold">Edit User Information</h2>
            <Separator className="my-4" />
            <div className="grid gap-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        id="username"
                        type="text"
                        autoComplete="username"
                        required
                        placeholder="Choose a username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email-address"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel>Select Role</FormLabel>
                      <FormDescription className="text-sm text-destructive">
                        Changing the role will affect the permissions of the
                        user
                      </FormDescription>
                    </div>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="USER">User</SelectItem>
                        <SelectItem value="ADMIN">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {user.scores && user.scores.length > 0 && (
                <FormField
                  control={form.control}
                  name="scores"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Scores</FormLabel>
                      {user.scores.map((scoreData, index) => (
                        <div key={index}>
                          <FormControl>
                            <Input
                              id={`score-${index}`}
                              type="number"
                              className="bg-muted"
                              autoComplete="score"
                              value={scoreData.score}
                              onClick={handleClickWarn}
                              disabled
                            />
                          </FormControl>
                          <FormDescription className="my-2 ml-2">
                            Quiz: {scoreData.quiz.title}
                          </FormDescription>
                        </div>
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="createdAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Created At</FormLabel>
                    <FormControl>
                      <Input
                        id="createdAt"
                        type="text"
                        autoComplete="createdAt"
                        disabled
                        className="bg-muted"
                        placeholder="Cannot be changed"
                        onClick={handleClickWarn}
                        value={formatDate(field.value.toString())}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="updatedAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Updated At</FormLabel>
                    <FormControl>
                      <Input
                        id="updatedAt"
                        type="text"
                        disabled
                        className="bg-muted"
                        autoComplete="updatedAt"
                        placeholder="Cannot be changed"
                        onClick={handleClickWarn}
                        value={formatDate(field.value.toString())}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end gap-3 items-center mt-6">
              {user.scores.length > 0 && (
                <Button
                  type="button"
                  onClick={handleDeleteClick}
                  variant={"destructive"}
                >
                  Delete All Scores
                </Button>
              )}
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <LoaderCircleIcon className="animate-spin" />
                ) : (
                  "Save Changes"
                )}
              </Button>
              <Link href={`/dashboard/users`}>
                <Button variant="secondary" className="ml-2">
                  Cancel
                </Button>
              </Link>
            </div>
          </Card>
        </form>
      </Form>
    </PopOver>
  );
}
