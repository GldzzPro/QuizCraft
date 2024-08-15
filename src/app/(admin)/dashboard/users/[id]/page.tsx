import prisma from "@/lib/prisma";
import UserUpdateForm from "@/components/admin/user/create-update-form/UpdateForm";
import { getUserById } from "@/repositories/user.repository";

export default async function UserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await getUserById(params.id);

  return <UserUpdateForm user={user} />;
}
