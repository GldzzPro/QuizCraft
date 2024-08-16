import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getAllQuizzes } from "@/repositories/quiz.repository";
import TableDashboard from "@/components/admin/user/table/TableHomePages";
import CardQuizHomePages from "@/components/admin/quizzes/card/CardQuiz";
import { getParticularDetailUser } from "@/repositories/user.repository";
export default async function DasboardPages() {
  const session = await getServerSession(authOptions);
  const name = session?.user?.name;
  const quizzes = await getAllQuizzes();
  const users = await getParticularDetailUser();

  return (
    <div className="flex min-h-full w-full flex-col bg-background rounded border">
      <main className="flex-1 px-4 py-8 sm:px-6">
        <div className="mb-7">
          <h1 className="text-xl md:text-4xl font-bold">
            Welcome to Dashboard {name}!
          </h1>
          <p className="text-muted-foreground text-xs md:text-base ml-2 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum distinctio adipisci cupiditate rerum sequi.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex-grow overflow-x-auto">
            <h1 className="text-xl md:text-4xl font-bold sm:hidden mb-4">Users: </h1>
            {users.length > 0 ? (
              <TableDashboard />
            ) : (
              <div className="mt-14 grid place-items-center">
                <h1 className="text-muted-foreground text-lg">No users</h1>
              </div>
            )}
          </div>

          <div className={`flex flex-col $ flex-grow gap-2 h-[600px] col-span-2 overflow-y-auto no-scrollbar`}>
            {quizzes.map((quiz) => (
              <CardQuizHomePages
                key={quiz.id}
                {...quiz}
                description={quiz.description ?? "No description provided"}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

