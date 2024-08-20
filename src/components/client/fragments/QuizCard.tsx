import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { capitalizeFirstLetter } from "@/helpers/formatData";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useIsAuth from "../useIsAuth";
import ButtonQuizPath from "../core/ButtonQuizPath";

export default function QuizCard({
  id,
  title,
  description,
  difficulty,
  questions,
}: {
  id: string;
  title: string;
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
        <Link href={`quiz/view/${id}`}>
          <Button variant={"secondary"}>View Quiz</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
