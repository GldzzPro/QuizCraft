"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useLoginForm from "@/hooks/auth/useLoginForm";
import { LoaderCircleIcon } from "lucide-react";

const SigninForm = () => {
  const { form, onSubmit, isLoading } = useLoginForm();
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <div className="-space-y-px rounded-md shadow-sm">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormMessage />
                <FormControl>
                  <Input
                    id="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    placeholder="Email address"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className={`w-full `} disabled={isLoading}>
          {isLoading ? (
            <>
              <LoaderCircleIcon className="animate-spin " />
              <p className="ml-2">Loading...</p>
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
      <div className="flex items-center justify-center">
        <p>Don{"'"}t have an account?</p>
        <Link
          href="/signup"
          className="font-semibold hover:underline"
          prefetch={false}
        >
          Signup
        </Link>
      </div>
    </Form>
  );
};

export default SigninForm;
