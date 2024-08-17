import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type AnswerItemProps = {
  answer: {
    id: string;
    text: string;
    isCorrect: boolean;
  };
};

export function AnswerItem({ answer }: AnswerItemProps) {
  return (
    <div
      className={`flex items-center gap-2 justify-between rounded-md p-2  ${
        answer.isCorrect === true ? "bg-green-300/70 text-primary" : "bg-muted"
      }`}
    >
      <RadioGroup defaultValue={`${answer.isCorrect}`}>
        <Label className={`flex items-center gap-2 cursor-pointer`}>
          <RadioGroupItem
            value={`${answer.isCorrect}`}
            checked={answer.isCorrect === true}
            className={`${answer.isCorrect && "text-primary"} `}
          />
          <span>{answer.text}</span>
        </Label>
      </RadioGroup>
    </div>
  );
}
