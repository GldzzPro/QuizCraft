"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCreateUser from "@/hooks/user/useCreateUser";
import { LoaderCircleIcon } from "lucide-react";

export default function CreateUserForm() {
  const { form, onSubmit, isLoading } = useCreateUser();
  return (
    <Form {...form}>
      <form className="  " onSubmit={onSubmit}>
        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="p-4 ">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <Separator className="my-4" />
            <div className="grid gap-4">
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>
          <Card className="p-4 ">
            <h2 className="text-lg font-semibold">Details</h2>
            <Separator className="my-4" />
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        id="confirm-password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="Confirm your password"
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
                    <FormLabel>Select Role</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder="User"
                            defaultValue={field.value}
                          />
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
                    <div className="flex justify-between">
                      <FormLabel>Set Scores</FormLabel>
                      <FormDescription>Optional</FormDescription>
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        id="scores"
                        min="0"
                        placeholder="Enter scores"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>
        </div>
        <Button type="submit" className="w-full sm:w-auto my-4">
          {isLoading ? (
            <>
              <LoaderCircleIcon className="animate-spin " />
              <p className="ml-2">Loading...</p>
            </>
          ) : (
            "Add User"
          )}
        </Button>
      </form>
    </Form>
  );
}
