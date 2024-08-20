import QuizCard from "@/components/client/fragments/QuizCard";
import prisma from "@/lib/prisma";

export default async function QuizPage() {
  const data = await prisma.quiz.findMany({
    select: {
      id: true,
      title: true,
      difficulty: true,
      description: true,
      duration: true,
      createdAt: true,
      questions: true,
    },
  });
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
