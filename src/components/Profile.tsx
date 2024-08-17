"use client"
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,

} from "@/components/ui/dropdown-menu";
import { LoaderCircleIcon } from "lucide-react";
import {  useSession } from "next-auth/react";

import OptionProfile from "./OptionProfile";

const Profile: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-2 text-right items-center">
          <span>
            <h1 className="text-sm font-semibold">
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
      <OptionProfile />
    </DropdownMenu>
  );
};

export default Profile;
