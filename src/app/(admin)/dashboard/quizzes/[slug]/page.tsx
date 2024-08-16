import QuizDetails from "@/components/admin/quizzes/question/QuizDetails";
import { getQuestionsById, getQuizById } from "@/repositories/quiz.repository";

export default async function QuizzesDetailPages({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const questionsData = await getQuestionsById({ id: slug });
  const processedQuestionsData = questionsData.map((question, index) => ({
    id: question.id ?? `question-${index}`, 
    text: question.text,
    answers: question.answers,
  }));
  
  return (
    <div>
      {questionsData.length > 0 ? (
        <QuizDetails id={slug} data={processedQuestionsData} />
      ) : (
        <div className="grid place-items-center ">
          <p className="text-muted-foreground text-lg md:text font-semibold">
            Opps..., No Questions Yet...
          </p>
        </div>
      )}
    </div>
  );
}
