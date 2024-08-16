import { Button } from "@/components/ui/button";
import { getQuizById } from "../../../../../repositories/quiz.repository";
import { capitalizeFirstLetter, toMinutes } from "@/helpers/formatData";
import { Difficulty } from "@prisma/client";
import { SquarePen } from "lucide-react";
import Link from "next/link";
import CreateButton from "@/components/admin/core/CreateButton";

export default async function Quiz({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const quizData = await getQuizById({ id: slug });
  const difficulty = capitalizeFirstLetter(quizData?.difficulty as Difficulty);
  const minutes = toMinutes(quizData?.duration as number);
  return (
    <div className="flex min-h-screen w-full justify-center bg-background rounded-md border">
      <main className="px-4 py-8 sm:px-6 flex-grow">
        <header className="flex justify-between mb-2 flex-col sm:flex-row">
          <div className="flex flex-col gap-3 mb-3">
            <div className="flex gap-2 items-center">
              <h1 className="text-2xl font-bold">{quizData?.title}</h1>
              <Link href={`/dashboard/quizzes/update/${slug}`}>
                <SquarePen className="h-4 w-4 text-muted-foreground transition-all duration-200 hover:text-foreground cursor-pointer" />
              </Link>
            </div>
            <h2 className="text-lg text-muted-foreground">
              {quizData?.description}
            </h2>
            <h3 className="text-muted-foreground">Difficulty: {difficulty}</h3>
            <h4 className="text-muted-foreground">Duration: {minutes}</h4>
          </div>
          <CreateButton
            path={`/quizzes/questions/${slug}`}
            text="Add Questions"
          />
        </header>
        {children}
      </main>
    </div>
  );
}
