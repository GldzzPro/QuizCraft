import { UpdateQuestionAndAnswerForm } from "@/components/admin/quizzes/question/create-update-form/UpdateForm";
import { getSpesificQuestionById } from "@/repositories/quiz.repository";

export default async function UpdateQuestionsPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const question = await getSpesificQuestionById({ id: slug });
  
  if (!question) return <div>Question not found</div>;
  return <UpdateQuestionAndAnswerForm question={question} />;
}
