import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Difficulty } from "@prisma/client"; // Assuming Difficulty is an enum
import { capitalizeFirstLetter } from "@/helpers/formatData";
import Link from "next/link";

const CardQuizHomePages = (quiz: {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty; // Adjusted type
  questions: any[];
}) => {
  return (
    <Card key={quiz.id}>
      <CardHeader>
        <CardTitle>{quiz.title}</CardTitle>
        <CardDescription>{quiz.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center flex-row-reverse justify-between">
          <div className="flex items-end text-end flex-col">
            <div className="text-sm font-medium text-muted-foreground">
              Questions
            </div>
            {quiz.questions.length > 0 ? (
              <div className="text-2xl font-bold ">
                {quiz.questions.length}
              </div>
            ) : (
              <div className="text-lg text-muted-foreground font-semibold">
                No questions yet
              </div>
            )}
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Difficulty
            </div>
            <div className="text-2xl font-bold">
              {capitalizeFirstLetter(quiz.difficulty)}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href={`/dashboard/quizzes`}>
          <Button variant={"default"}>View Quiz</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardQuizHomePages;
