import UpdateQuizForm from "@/components/admin/quizzes/create-update-form/UpdateForm";
import { getQuizById } from "@/repositories/quiz.repository";

export default async function EditTitleQuizPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const quizId = await getQuizById({ id: slug });
  if (!quizId) return <div>Quiz not found</div>;
  return <UpdateQuizForm quiz={quizId} />;
}
