import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/helpers/prisma";
export default async function quizzes() {
  const quizzes = await prisma.quiz.findMany({
    select: {
      title: true,
      duration: true,
      createdAt: true
    },
  });

  console.log(quizzes);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background rounded border">
      <main className="flex-1 px-4 py-8 sm:px-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Quizzes</h2>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Create Quiz
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => {
            return (
              <Card>
                <CardHeader>
                  <CardTitle>{quiz.title}</CardTitle>
                  <CardDescription>
                    Test your knowledge of basic math concepts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Questions
                      </div>
                      <div className="text-2xl font-bold">20</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Difficulty
                      </div>
                      <div className="text-2xl font-bold">Medium</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost">Edit</Button>
                  <Button variant="destructive">Delete</Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
