import { QuestionAndAnswerForm } from "@/components/admin/quizzes/question/create-update-form/CreateForm";

export default function CreateQuestionsPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <QuestionAndAnswerForm quizId={slug} />;
}
