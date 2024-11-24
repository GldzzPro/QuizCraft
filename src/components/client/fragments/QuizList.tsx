"use client";

import QuizCard from "./QuizCard";

export default function QuizList({ quizzes }: { quizzes: any[] }) {
  return quizzes.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} {...quiz} />
      ))}
    </div>
  ) : (
    <div className="w-10 h-10 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
  );
}
