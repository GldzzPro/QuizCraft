import QuizDetails from "@/components/admin/quizzes/QuizDetails";
import { capitalizeFirstLetter, toMinutes } from "@/helpers/formatData";
import { getQuestionsById, getQuizById } from "@/repositories/quiz.repository";
import { Difficulty } from "@prisma/client";

export default async function QuizzesDetailPages({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const questionsData = await getQuestionsById({ id: slug });
  return (
    <div>
      {questionsData.length > 0 ? (
        <QuizDetails id={slug} data={questionsData} />
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
