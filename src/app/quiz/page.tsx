import { getAllQuizzes } from "@/repositories/quiz.repository";
import QuizList from "@/components/client/fragments/QuizList"; // A new Client Component

export default async function QuizPage() {
  const quizzes = await getAllQuizzes(); // Fetch data on the server
  return <QuizList quizzes={quizzes} />;
}

