import  TableDashboard  from "@/components/component/table-dashboard"
import CardsScore from "@/components/component/CardScore";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export  default  async function DasboardPages() {
 const session = await getServerSession(authOptions);
 const name = session?.user?.name
  return (
    <div className="flex min-h-screen w-full flex-col bg-background rounded border">
      <main className="flex-1 px-4 py-8 sm:px-6">
        <div className="mb-7">
          <h1 className="text-xl md:text-4xl font-bold">Welcome to Dashboard {name}!</h1>
          <p className="text-muted-foreground text-sm md:text-base ml-2 mt-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum distinctio adipisci cupiditate rerum sequi.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 h-[700px]">
          <TableDashboard />
          <CardsScore />
        </div>
      </main>
    </div>
  );
}
