import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const quizzes = [
  { id: "quiz1", name: "Quiz 1" },
  { id: "quiz2", name: "Quiz 2" },
  { id: "quiz3", name: "Quiz 3" },
];

export default function ByQuizPage({ children }: React.PropsWithChildren) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Select a Quiz</h2>
      <div className="flex flex-wrap gap-4 mb-4">
        {quizzes.map((quiz) => (
          <Link
            key={quiz.id}
            href={`/rank/by-quiz/${quiz.id}`}
            className="flex-1 min-w-[200px]"
          >
            <Card className="h-full transition-colors hover:bg-primary/10 cursor-pointer">
              <CardHeader>
                <CardTitle>{quiz.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Click to view results
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
