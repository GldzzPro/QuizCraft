"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { capitalizeFirstLetter } from "@/helpers/formatData";
import ButtonQuizPath from "../core/ButtonQuizPath";
import DialogCard from "../quiz/card/DialogCard";

export default function QuizCard({
  id,
  title,
  description,
  difficulty,
  duration,
  questions,
}: {
  id: string;
  title: string;
  duration: number;
  description: string;
  difficulty: string;
  questions: any[];
}) {
  return (
    <Card key={id}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center flex-row-reverse justify-between">
          <div className="flex items-end text-end flex-col">
            <div className="text-sm font-medium text-muted-foreground">
              Questions
            </div>
            {questions.length > 0 ? (
              <div className="text-2xl font-bold ">{questions.length}</div>
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
              {capitalizeFirstLetter(difficulty)}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-row-reverse">
        <ButtonQuizPath id={id} />
        <DialogCard
        duration={duration}
          title={title}
          description={description}
          difficulty={difficulty}
          questions={questions}
          id={id}
        >
          <Button variant={"secondary"}>View Quiz</Button>
        </DialogCard>
      </CardFooter>
    </Card>
  );
}
