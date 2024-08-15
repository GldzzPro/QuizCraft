
"use client";
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

export default function UserUpdateForm({
  user,
}: {
  user: {
    id: string;
    username: string | null;
    email: string;
    role: string;
    score: number;
    createdAt: Date;
    updatedAt: Date;
  };
}) {
  const { form, isLoading, onSubmit } = useUpdateUser({ user });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="p-4">
          <h2 className="text-lg font-semibold">Edit Contact Information</h2>
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
                      Changing the role will affect the permissions of the user
                    </FormDescription>
                  </div>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem className="cursor-pointer" value="USER">
                        User
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="ADMIN">
                        Admin
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="score"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Score</FormLabel>
                  <FormControl>
                    <Input
                      id="score"
                      type="number"
                      autoComplete="score"
                      placeholder="Enter user score"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      value={formatDate(field.value.toString())}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between mt-4 items-center flex-wrap gap-2">
            <Button type="submit">
              {isLoading ? (
                <>
                  <LoaderCircleIcon className="animate-spin " />
                  <p className="ml-2">Loading...</p>
                </>
              ) : (
                "Update"
              )}
            </Button>
            <Button type="reset" variant="secondary">
              <Link href={"/dashboard/users"}>Cancel</Link>
            </Button>
          </div>
        </Card>
      </form>
    </Form>
  );
}
