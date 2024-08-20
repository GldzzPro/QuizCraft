// components/admin/quizzes/QuizzesPageClient.js (Client Component)
"use client";

import { useState } from "react";
import { Reorder } from "framer-motion";
import CreateButton from "@/components/admin/core/CreateButton";
import CardQuizzes from "@/components/admin/quizzes/card/CardQuizzesPages";

export default function QuizzesPageClient({ quizzes }:{
    quizzes: any
}) {
  const [quizzesOrder, setQuizzesOrder] = useState(quizzes);

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Quizzes</h2>
        <CreateButton path="/quizzes/create" text="Create Quiz" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Reorder.Group
          axis="y"
          values={quizzesOrder}
          onReorder={setQuizzesOrder}
        >
          {quizzesOrder.map((quiz: any) => (
            <Reorder.Item key={quiz.id} value={quiz}>
              <CardQuizzes key={quiz.id} {...quiz} questions={quiz.questions} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </>
  );
}
