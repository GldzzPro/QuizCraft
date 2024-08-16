"use client";
import React  from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../ui/card";
import Link from "next/link";
import { Difficulty } from "@prisma/client";
import { Button } from "../../../ui/button";
import PopOver from "../../core/AlertDialog";
import useDeleteQuiz from "@/hooks/quizzes/useDeleteQuiz";
const CardQuizzes = (quiz: {
  id: string;
  title: string;
  description: string | null;
  difficulty: Difficulty; // Adjusted type
  questions: any[];
}) => {
  const {
    handleDelete,
    isAlertOpen,
    handleCloseAlert,
    handleDeleteClick,
    setIsAlertOpen,
  } = useDeleteQuiz({ id: quiz.id });
  return (
    <PopOver
      onDelete={() => handleDelete(quiz.id)}
      isAlertOpen={isAlertOpen}
      setIsAlertOpen={setIsAlertOpen}
      handleCloseAlert={handleCloseAlert}
    >
      <Card key={quiz.id}>
        <CardHeader>
          <CardTitle>{quiz.title}</CardTitle>
          <CardDescription className="truncate">
            {quiz.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                Questions
              </div>
              {quiz.questions.length > 0 ? (
                <div className="text-2xl font-bold ml-1">
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
                {/* {capitalizeFirstLetter(quiz.difficulty)} */}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={`/dashboard/quizzes/${quiz.id}`}>
            <Button variant="default">View Details</Button>
          </Link>
          <Button variant="destructive" onClick={handleDeleteClick}>
            Delete
          </Button>
        </CardFooter>
      </Card>
    </PopOver>
  );
};

export default CardQuizzes;
