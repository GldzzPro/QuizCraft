import { getServerSession } from "next-auth";

import { getAllQuizzes } from "@/repositories/quiz.repository";
import TableDashboard from "@/components/admin/user/table/TableHomePages";
import CardQuizHomePages from "@/components/admin/quizzes/card/CardQuiz";
import {
  getALlDetailUser,
  getParticularDetailUser,
} from "@/repositories/user.repository";
import Charts from "@/components/admin/fragments/charts";
import { authOptions } from "@/lib/authOptions";
export default async function DasboardPages() {
  const session = await getServerSession(authOptions);
  const name = session?.user?.name;
  const quizzes = await getAllQuizzes();
  const users = await getParticularDetailUser();
  const totalUsers = await getALlDetailUser();

  return (
    <div className="flex min-h-full w-full flex-col bg-background rounded border">
      <main className="flex-1 px-4 py-8 sm:px-6">
        <div className="mb-7">
          <h1 className="text-xl md:text-4xl font-bold">
            Welcome to Dashboard {name}!
          </h1>
          <p className="text-muted-foreground text-xs md:text-base ml-2 mt-1">
            let s see what new here !.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex-grow overflow-x-auto">
            <h1 className="text-xl md:text-4xl font-bold sm:hidden mb-4">
              Users:{" "}
            </h1>
            {users.length > 0 ? (
              <TableDashboard users={users} />
            ) : (
              <div className="mt-14 grid place-items-center">
                <h1 className="text-muted-foreground text-lg">No users</h1>
              </div>
            )}
          </div>

          <Charts totalUsers={totalUsers} />

          <div
            className={`flex flex-col  flex-grow gap-2 h-[600px] col-span-2 overflow-y-auto no-scrollbar`}
          >
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
