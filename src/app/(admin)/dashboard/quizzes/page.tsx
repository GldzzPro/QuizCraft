import CreateButton from "@/components/admin/core/CreateButton";
import CardQuizzes from "@/components/admin/quizzes/card/CardQuizzesPages";
import { getAllQuizzes } from "@/repositories/quiz.repository";
export default async function quizzes() {
  const quizzes = await getAllQuizzes();

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Quizzes</h2>
        <CreateButton path="/quizzes/create" text={" Create Quiz"} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => {
          return (
            <CardQuizzes key={quiz.id} {...quiz} questions={quiz.questions} />
          );
        })}
      </div>
    </>
  );
}
