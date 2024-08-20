
import QuizzesPageClient from "@/components/admin/fragments/QuizzesPageClient";
import { getAllQuizzes } from "@/repositories/quiz.repository";

export default async function QuizzesPage() {
  const quizzes = await getAllQuizzes();

  return <QuizzesPageClient quizzes={quizzes} />;
}
