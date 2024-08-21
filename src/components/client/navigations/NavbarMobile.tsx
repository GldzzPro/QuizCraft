"use client";
import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboardIcon,
  UsersIcon,
  QuoteIcon, // Updated from ShoppingCartIcon to QuoteIcon for consistency
  SettingsIcon,
  MenuIcon,
  SquareTerminalIcon,
  PuzzleIcon, // Updated to match Sidebar
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useIsAuth from "../useIsAuth";

const NavbarMobileUser = () => {
  const pathname = usePathname();
  const { handlePath, isLoading } = useIsAuth({
    currentPath: "/rank",
    id: "",
  });
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <SheetTrigger asChild>
            <Link
              href="/"
              className={`group flex h-10 w-10 shrink-0 items-center bg-primary text-primary-foreground justify-center gap-2 rounded-full  text-lg font-semibold md:text-base`}
              prefetch={false}
            >
              <PuzzleIcon
                className={`h-5 w-5 transition-all ${
                  pathname === "/" ? "scale-110" : ""
                }`}
              />
            </Link>
          </SheetTrigger>

          <SheetTrigger asChild>
            <Link
              href="/"
              className={`flex items-center gap-4 px-2.5 ${
                pathname === "/dashboard" ? "text-primary/80" : "text-primary"
              } hover:text-foreground`}
              prefetch={false}
            >
              Home{" "}
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href="/quiz"
              className={`flex items-center gap-4 px-2.5 ${
                pathname === "/quiz" ? "text-primary/80" : "text-primary"
              } hover:text-foreground`}
              prefetch={false}
            >
              Play Quiz
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href="/rank"
              onClick={handlePath}
              className={`flex items-center gap-4 px-2.5 ${
                pathname === "/rank" ? "text-primary/80" : "text-primary"
              } hover:text-foreground`}
              prefetch={false}
            >
              Rank
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href="/feedback"
              className={`flex items-center gap-4 px-2.5 ${
                pathname === "/feedback" ? "text-primary/80" : "text-primary"
              } hover:text-foreground`}
              prefetch={false}
            >
              Feedback
            </Link>
          </SheetTrigger>
          <Link
            href="#"
            className={`flex items-center gap-4 px-2.5 ${
              pathname === "#"
                ? "text-primary-foreground"
                : "text-muted-foreground"
            } hover:text-foreground`}
            prefetch={false}
          >
            <SettingsIcon className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobileUser;
