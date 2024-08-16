"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { TrashIcon } from "lucide-react";
import useDeleteQuest from "@/hooks/question/useDeleteQuest";
import PopOver from "../../core/AlertDialog";
import { AnswerItem } from "./AnswersItem";

type QuestionProps = {
  id: string;
  data: {
    id: string;
    text: string;
    answers: {
      id: string;
      text: string;
      isCorrect: boolean;
    }[];
  }[];
};

export default function QuizDetails({ id, data }: QuestionProps) {
  return (
    <div className="space-y-6">
      {data.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
}

type QuestionCardProps = {
  question: {
    id: string;
    text: string;
    answers: {
      id: string;
      text: string;
      isCorrect: boolean;
    }[];
  };
};

function QuestionCard({ question }: QuestionCardProps) {
  const {
    handleCloseAlert,
    isAlertOpen,
    setIsAlertOpen,
    handleDeleteClick,
    handleDelete,
  } = useDeleteQuest({ id: question.id });

  return (
    <PopOver
      onDelete={() => handleDelete(question.id)}
      isAlertOpen={isAlertOpen}
      setIsAlertOpen={setIsAlertOpen}
      handleCloseAlert={handleCloseAlert}
    >
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">{question.text}</CardTitle>
            <Button
              onClick={handleDeleteClick}
              size="icon"
              variant="ghost"
            >
              <TrashIcon className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-4 space-y-2">
            {question.answers.map((answer) => (
              <AnswerItem key={answer.id} answer={answer} />
            ))}
            <Button size="sm" variant="outline">
              Add Answer
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              Edit
            </Button>
            <Button size="sm" variant="ghost">
              Delete
            </Button>
          </div>
        </CardFooter>
      </Card>
    </PopOver>
  );
}

