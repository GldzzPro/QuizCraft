"use client";
import React from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import {
  LayoutDashboardIcon,
  QuoteIcon,
  SettingsIcon,
  SquareTerminalIcon,
  UsersIcon,
  PuzzleIcon,
  HelpCircleIcon,
  BrainCircuitIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Link
            href="/dashboard"
            className={`group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full  text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base `}
            prefetch={false}
          >
            <PuzzleIcon className={`h-5 w-5 transition-all text-primary `} />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                className={`group flex h-9 w-9 shrink-0  border  items-center justify-center gap-2 rounded-full ${
                  pathname === "/dashboard" && "bg-primary"
                } text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base `}
                prefetch={false}
              >
                <LayoutDashboardIcon
                  className={`h-4 w-4 transition-all group-hover:scale-110 ${
                    pathname === "/dashboard"
                      ? "text-primary-foreground scale-110"
                      : "text-primary"
                  }`}
                />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/users"
                className={`group flex h-9 w-9 border  shrink-0 items-center justify-center gap-2 rounded-full ${
                  pathname === "/dashboard/users" && "bg-primary"
                } text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base `}
                prefetch={false}
              >
                <UsersIcon
                  className={`h-4 w-4 transition-all group-hover:scale-110 ${
                    pathname === "/dashboard/users"
                      ? "text-primary-foreground scale-110"
                      : "text-primary"
                  }`}
                />
                <span className="sr-only">Users</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Users</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/quizzes"
                className={`group flex h-9 w-9 border  shrink-0 items-center justify-center gap-2 rounded-full ${
                  pathname === "/dashboard/quizzes" && "bg-primary"
                } text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base `}
                prefetch={false}
              >
                <BrainCircuitIcon
                  className={`h-4 w-4 transition-all group-hover:scale-110 ${
                    pathname === "/dashboard/quizzes"
                      ? "text-primary-foreground scale-110"
                      : "text-primary"
                  }`}
                />
                <span className="sr-only">Quiz</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Quizzes</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/about"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  pathname === "/dashboard/about"
                    ? "text-foreground"
                    : "text-muted-foreground "
                }`}
                prefetch={false}
              >
                <HelpCircleIcon className="h-6 w-6" />
                <span className="sr-only">About & Help</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">About & Help</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </>
  );
};

export default Sidebar;
