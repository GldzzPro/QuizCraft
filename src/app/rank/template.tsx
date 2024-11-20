import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function QuizResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz Results Dashboard</h1>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all" asChild>
            <Link href="/rank">All Quizzes</Link>
          </TabsTrigger>
          <TabsTrigger value="quiz" asChild>
            <Link href="/rank/by-quiz">By Quiz</Link>
          </TabsTrigger>
          <TabsTrigger value="period" asChild>
            <Link href="/rank/by-period">By Period</Link>
          </TabsTrigger>
        </TabsList>
        {children}
      </Tabs>
    </div>
  );
}
