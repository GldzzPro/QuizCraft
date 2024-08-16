import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TrashIcon } from "lucide-react";

type AnswerItemProps = {
    answer: {
      id: string;
      text: string;
      isCorrect: boolean;
    };
  };
  
  

export function AnswerItem({ answer }: AnswerItemProps) {
    return (
      <div className="flex items-center gap-2 justify-between rounded-md p-2 bg-muted">
        <RadioGroup defaultValue={`${answer.isCorrect}`}>
          <RadioGroupItem
            value={`${answer.isCorrect}`}
            id={`answer-${answer.id}`}
            className="peer sr-only"
          />
          <Label
            htmlFor={`answer-${answer.id}`}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-4 h-4 rounded-full border border-muted-foreground peer-checked:bg-primary peer-checked:border-primary" />
            <span>{answer.text}</span>
          </Label>
        </RadioGroup>
        <Button size="icon" variant="ghost">
          <TrashIcon className="w-5 h-5" />
        </Button>
      </div>
    );
  }
  