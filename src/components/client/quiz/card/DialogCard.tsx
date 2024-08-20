import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { capitalizeFirstLetter } from "@/helpers/formatData";
import ButtonQuizPath from "../../core/ButtonQuizPath";
export default async function DialogCard({
  id,
  title,
  description,
  difficulty,
  questions,
  children,
  duration,
}: {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: number;
  questions: any[];
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium text-muted-foreground">
              Questions
            </div>

            <span>:</span>
            <div className="text-sm font-medium text-muted-foreground">
              {questions.length > 0 ? questions.length : "No questions yet"}
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              Difficulty
            </div>

            <span>:</span>
            <div className={`text-sm font-medium text-muted-foreground`}>
              {capitalizeFirstLetter(difficulty)}
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              Duration
            </div>

            <span>:</span>
            <div className="text-sm font-medium text-muted-foreground">
              {duration} Sec
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start gap-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <ButtonQuizPath id={id} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
