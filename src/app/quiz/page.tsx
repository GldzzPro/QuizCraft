"use client";
import QuizCard from "@/components/client/fragments/QuizCard";
import { useEffect, useState } from "react";

export default function QuizPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const res = await fetch("/api/quiz");
      const data = await res.json();
      setData(data);
    })();
  }, []);

  return data.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((quiz: any) => (
        <QuizCard key={quiz.id} {...quiz} />
      ))}
    </div>
  ) : (
    <div className="w-10 h-10 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
  );
}
