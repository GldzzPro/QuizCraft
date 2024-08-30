"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoaderCircleIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";

const ProfileAdmin: React.FC = () => {
  const { data: session, status } = useSession();
  const handleLogout = () => {
    signOut({
      redirect: true,
      callbackUrl: "/",
    }).then(() => {
      toast({
        title: "Logged out",
        description: "You have been logged out",
      });
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-row gap-3 items-center text-right">
          <span className="">
            <h1 className="text-sm font-semibold text-black">
              {status === "loading" ? (
                <LoaderCircleIcon className="animate-spin h-4 w-4" />
              ) : (
                session?.user?.name
              )}{" "}
            </h1>
            <p className="text-xs truncate">
              {session?.user?.email?.slice(0, 14).concat("...")}
            </p>
          </span>

          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />

            <AvatarFallback className="animate-spin">
              <LoaderCircleIcon />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuSeparator />
        <Link href={"/dashboard/profile"}>
          <DropdownMenuItem className="cursor-pointer">
            Settings
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer hidden"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAdmin;
