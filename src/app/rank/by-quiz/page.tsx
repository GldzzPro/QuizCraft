import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const quizzes = [
  { id: "quiz1", name: "Quiz 1" },
  { id: "quiz2", name: "Quiz 2" },
  { id: "quiz3", name: "Quiz 3" },
];

export default function ByQuizPage() {
  return (
    <div>
      <div className="mb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Quiz" />
          </SelectTrigger>
          <SelectContent>
            {quizzes.map((quiz) => (
              <SelectItem key={quiz.id} value={quiz.id} asChild>
                <Link href={`/quiz-results/by-quiz/${quiz.id}`}>
                  {quiz.name}
                </Link>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 md:grid-cols-2 mb-4">
        <Card>
          <CardHeader>
            <CardTitle>Select a Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Choose a quiz from the dropdown above to view its results.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
