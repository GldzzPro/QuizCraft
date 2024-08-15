"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { TrashIcon } from "lucide-react";
import useDeleteQuest from "@/hooks/question/useDeleteQuest";
import PopOver from "../core/AlertDialog";

type QuestionProps = {
  id: string;
  data: any[];
};

export default function QuizDetails({ id, data }: QuestionProps) {
  const { handleCloseAlert, isAlertOpen, setIsAlertOpen, handleDeleteClick, handleDelete } =
    useDeleteQuest({ id });
  return (
    <div className="space-y-6">
      {data.map(({id, text, answers }: { id: string; text: string; answers: any[] }) => {
        return (
          <PopOver
          key={id}
          onDelete={() => handleDelete(id)}
            isAlertOpen={isAlertOpen}
            setIsAlertOpen={setIsAlertOpen}
            handleCloseAlert={handleCloseAlert}
          >
            <Card key={id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{text}</CardTitle>
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
                  {answers.map(
                    ({
                      text,
                      isCorrect,
                    }: {
                      text: string;
                      isCorrect: boolean;
                    }) => (
                      <>
                        <div className="flex items-center gap-2 justify-between rounded-md p-2 bg-muted">
                          <RadioGroup defaultValue={`${isCorrect}`}>
                            <RadioGroupItem
                              value={`${isCorrect}`}
                              id="sample-question-1-answer-1"
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor="sample-question-1-answer-1"
                              className="flex items-center gap-2 cursor-pointer"
                            >
                              <div className="w-4 h-4 rounded-full border border-muted-foreground peer-checked:bg-primary peer-checked:border-primary" />
                              <span>{text}</span>
                            </Label>
                          </RadioGroup>
                          <Button size="icon" variant="ghost">
                            <TrashIcon className="w-5 h-5" />
                          </Button>
                        </div>
                      </>
                    )
                  )}
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
      })}
    </div>
  );
}
