import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import prisma from "@/helpers/prisma";
const CardsScore = () => {
  return (
    <div className="grid gap-2 flex-grow overflow-y-auto no-scrollbar ">
      <Card>
        <CardHeader>
          <CardTitle>Math Quiz</CardTitle>
          <CardDescription>
            Test your knowledge of basic math concepts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center flex-row-reverse justify-between">
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                Questions
              </div>
              <div className="text-2xl font-bold">20</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                Difficulty
              </div>
              <div className="text-2xl font-bold">Medium</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>View Quiz</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Math Quiz</CardTitle>
          <CardDescription>
            Test your knowledge of basic math concepts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center flex-row-reverse justify-between">
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                Questions
              </div>
              <div className="text-2xl font-bold">20</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                Difficulty
              </div>
              <div className="text-2xl font-bold">Medium</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>View Quiz</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Math Quiz</CardTitle>
          <CardDescription>
            Test your knowledge of basic math concepts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center flex-row-reverse justify-between">
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                Questions
              </div>
              <div className="text-2xl font-bold">20</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">
                Difficulty
              </div>
              <div className="text-2xl font-bold">Medium</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>View Quiz</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardsScore;
