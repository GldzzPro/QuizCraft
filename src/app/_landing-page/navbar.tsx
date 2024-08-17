"use client";
import NavbarMobileUser from "@/components/client/navigations/NavbarMobile";
import Profile from "@/components/Profile";
import { Button } from "@/components/ui/button";
import { PuzzleIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const {  status } = useSession();
  return (
    <header className="px-4 lg:px-6 h-14 flex justify-between  items-center">
      <a href="/" className="flex items-center justify-center">
        <PuzzleIcon className="h-6 w-6" />
        <span className="sr-only">Quiz App</span>
      </a>
      <nav className="ml-auto hidden sm:flex gap-4 items-center sm:gap-6">
        <Link
          href="/quiz"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
         Quiz
        </Link>
        <Link
          href="#features"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href="#testimonials"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Testimonials
        </Link>
        <Link
          href="#download"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Download
        </Link>

        {status === "authenticated" && <div className="hidden sm:inline"><Profile /></div>}
        {status === "loading" && <div className="w-5 h-5 border-2 border-primary rounded-full animate-spin border-t-transparent"></div>}
        {status === "unauthenticated" && (
          <Button
            variant="outline"
            className="text-sm font-medium"
            onClick={() => signIn()}
          >
            Sign In
          </Button>
        )}
      </nav>
        <NavbarMobileUser/>
    </header>
  );
}
