// app/users/page.tsx
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import TableDashboardUser from "@/components/fragments/TableDashboardUser";
import { getALlDetailUser } from "@/repositories/user.repository";
import CreateButton from "@/components/core/CreateButton";

export default async function UsersPage() {
  const users = await getALlDetailUser();

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Users</h2>
       <CreateButton path={"/users/create"} text={"Users"}/>
      </div>
      <div className="rounded overflow-hidden flex-grow">
        <TableDashboardUser users={users} />
      </div>
    </>
  );
}
