"use client";
import ProfileIsAuth from "@/components/client/core/ProfileIsAuth";
import NavbarMobileUser from "@/components/client/navigations/NavbarMobile";
import useIsAuth from "@/components/client/useIsAuth";
import { PuzzleIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { handlePath, isLoading } = useIsAuth({
    currentPath: "/rank",
    id: "",
  });
  return (
    <header className="px-4 lg:px-6 h-14 flex justify-between  items-center">
      <a href="/" className="flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">QuizCraft</span>
        </div>
      </a>
      <nav className="ml-auto hidden sm:flex gap-4 items-center sm:gap-6">
        <Link
          href="/"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Home
        </Link>

        <Link
          href="/quiz"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Quiz
        </Link>
        <Link
          href="/rank"
          onClick={handlePath}
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Rank
        </Link>
        <Link
          href="/feedback"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Feedback
        </Link>

        <ProfileIsAuth />
      </nav>
      <NavbarMobileUser />
    </header>
  );
}
