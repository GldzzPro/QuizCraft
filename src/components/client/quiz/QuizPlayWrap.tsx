"use client";
import React from "react";
import usePlayQuiz from "../../../hooks/quizzes/usePlayQuiz";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const QuizPlayWrap = ({ children }: { children: React.ReactNode }) => {
    const { currentQuestion, questions, score, time, } = usePlayQuiz();
    if (currentQuestion < questions.length && time > 0) {
      return <>{children}</>;
    }
    return (
      <div className="bg-card rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">
          Time is up! You scored {score} out of {questions.length}
        </h2>
        <p className="text-muted-foreground mb-6">
          Thank you for taking the quiz!
        </p>
        <div>
          <Link href={"/"}>
            <Button variant="outline">Back to Quiz</Button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default QuizPlayWrap;
