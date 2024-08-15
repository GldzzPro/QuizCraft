import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Breadcrumbs from "@/components/admin/core/Breadcrumbs";
import Profile from "@/components/Profile";
import NavbarMobile from "@/components/admin/fragments/navigations/NavbarMobile";
import Sidebar from "@/components/admin/fragments/navigations/Sidebar";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  if (session.user?.role !== "ADMIN") {
    redirect("/");
  }
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <Sidebar />
      </aside>
      <div className="flex flex-col w-full sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky w-full top-0 z-30 flex h-14  items-center gap-4 border-b  bg-background px-4 sm:static sm:h-auto sm:pb-3   sm:bg-transparent sm:px-6">
          <NavbarMobile />
          <Breadcrumbs />
          <div className="relative ml-auto flex-1 md:grow-0">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <Profile />
        </header>
        <main className=" p-4 sm:px-6 sm:py-0 ">{children}</main>
      </div>
    </div>
  );
}
