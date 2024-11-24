"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const TabsListLayout = ({ children }: React.PropsWithChildren) => {
  return <>{children}</>;
  const segment = useSelectedLayoutSegment();

  // Map the segment to the tab value
  const tabValue =
    segment === null ? "all" : segment === "by-quiz" ? "quiz" : "period";
  return (
    <Tabs
      defaultValue="all"
      value={tabValue}
      className="w-full gap-4 flex flex-col"
    >
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger
          value="all"
          className={cn(
            tabValue === "all" ? "bg-primary/10" : "",
            "text-center p-2 box-border rounded-[10px]"
          )}
          asChild
        >
          <Link href="/rank">All Quizzes</Link>
        </TabsTrigger>
        <TabsTrigger
          value="quiz"
          className={cn(
            tabValue === "quiz" ? "bg-primary/10" : "",
            "text-center p-2 box-border rounded-[10px]"
          )}
          asChild
        >
          <Link href="/rank/by-quiz">By Quiz</Link>
        </TabsTrigger>
        <TabsTrigger
          value="period"
          className={cn(
            tabValue === "period" ? "bg-primary/10" : "",
            "text-center p-2 box-border rounded-[10px]"
          )}
          asChild
        >
          <Link href="/rank/by-period">By Period</Link>
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};
