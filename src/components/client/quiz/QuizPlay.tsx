"use client";
import { Button } from "@/components/ui/button";
import usePlayQuiz from "./usePlayQuiz";
import Link from "next/link";

export default function QuizPlay() {
  const {
    currentQuestion,
    questions,
    selectAnswer,
    handleAnswerChange,
    handleSubmit,
    score,
    time,
    countDown,
  } = usePlayQuiz();

  return (
    <>
      {countDown ? (
        <div className="flex gap-3 items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
          <h1 className="text-3xl text-primary font-bold">Starting Quizium...</h1>
        </div>
      ) : currentQuestion < questions.length && time > 0 ? (
        <div className="bg-card rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">
            {questions[currentQuestion].text}
          </h2>
          <div className="space-y-4">
            {questions[currentQuestion].answers.map((answer, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 p-2 rounded-md transition-colors peer-checked:bg-primary peer-checked:text-primary-foreground ${
                  selectAnswer === answer
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <input
                  type="radio"
                  id={`answer-${index}`}
                  name="answer"
                  value={index}
                  checked={selectAnswer === answer}
                  onChange={() => handleAnswerChange(answer)}
                  className="peer sr-only"
                />
                <label
                  htmlFor={`answer-${index}`}
                  className="flex-1 cursor-pointer peer-checked:font-bold"
                >
                  {answer.text}
                </label>
              </div>
            ))}
          </div>
          <Button
            onClick={handleSubmit}
            className="mt-6 w-full"
            disabled={selectAnswer === null}
          >
            Submit
          </Button>
          <div className="mt-4">Time left: {time} seconds</div>
        </div>
      ) : (
        <div className="bg-card rounded-lg shadow-lg p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">
            You scored {score} out of {questions.length}
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
      )}
    </>
  );
}
