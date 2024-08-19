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
  PuzzleIcon,
  HelpCircleIcon, // Updated to match Sidebar
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarMobile = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <SheetTrigger asChild>
            <Link
              href="/dashboard"
              className={`group flex h-10 w-10 shrink-0 items-center bg-primary text-primary-foreground justify-center gap-2 rounded-full  text-lg font-semibold md:text-base`}
              prefetch={false}
            >
              <PuzzleIcon
                className={`h-5 w-5 transition-all ${
                  pathname === "/dashboard" ? "scale-110" : ""
                }`}
              />
            </Link>
          </SheetTrigger>

          <SheetTrigger asChild>
            <Link
              href="/dashboard"
              className={`flex items-center gap-4 px-2.5 ${
                pathname === "/dashboard"
                  ? "text-primary/80"
                  : "text-primary"
              } hover:text-foreground`}
              prefetch={false}
            >
              <LayoutDashboardIcon
                className={`h-4 w-4 transition-all  ${
                  pathname === "/dashboard" ? "text-primary/80" : "text-primary"
                }`}
              />
              Dashboard
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href="/dashboard/users"
              className={`flex items-center gap-4 px-2.5 ${
                pathname === "/dashboard/users"
                  ? "text-primary/80"
                  : "text-primary"
              } hover:text-foreground`}
              prefetch={false}
            >
              <UsersIcon className="h-5 w-5" />
              Users
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href="/dashboard/quizzes"
              className={`flex items-center gap-4 px-2.5 ${
                pathname === "/dashboard/quizzes"
                  ? "text-primary/80"
                  : "text-primary"
              } hover:text-foreground`}
              prefetch={false}
            >
              <QuoteIcon className="h-5 w-5" />
              Quizzes
            </Link>
          </SheetTrigger>
          <Link
            href="/dashboard/about"
            className={`flex items-center gap-4 px-2.5 ${
              pathname === "#"
                ? "text-primary-foreground"
                : "text-muted-foreground"
            } hover:text-foreground`}
            prefetch={false}
          >
           <HelpCircleIcon className="h-6 w-6" />
           <span className="sr-only">About & Help</span>

           <p className="">About & Help</p>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
