// app/users/[id]/page.tsx

import { notFound } from "next/navigation"; 
import prisma from "@/helpers/prisma";
import UserDetailForm from "@/components/fragments/UpdateForm";
async function fetchUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    notFound(); // Redirect to 404 if user is not found
  }

  return user;
}

export default async function UserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await fetchUserById(params.id);

 
  return (
    <UserDetailForm user={user} />
)
}

