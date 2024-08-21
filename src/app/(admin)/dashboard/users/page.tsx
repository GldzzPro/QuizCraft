import { getALlDetailUser } from "@/repositories/user.repository";
import CreateButton from "@/components/admin/core/CreateButton";
import TableDashboardUser from "@/components/admin/user/table/TableUserPages";
import { columns } from "@/components/admin/user/table/Colums";

export default async function UsersPage() {
  const users = await getALlDetailUser();

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Users</h2>
       <CreateButton path={"/users/create"} text={"Users"}/>
      </div>
      <div className="rounded overflow-hidden flex-grow">
        <TableDashboardUser columns={columns} data={users} />
      </div>
    </>
  );
}
