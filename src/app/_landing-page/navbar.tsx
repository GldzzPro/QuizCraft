import ProfileIsAuth from "@/components/client/core/ProfileIsAuth";
import NavbarMobileUser from "@/components/client/navigations/NavbarMobile";
import { PuzzleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
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
          href={"#testimonials"}
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
        <ProfileIsAuth />
      </nav>
      <NavbarMobileUser />
    </header>
  );
}
