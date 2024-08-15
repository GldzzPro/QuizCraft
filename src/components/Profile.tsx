"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LoaderCircleIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { toast } from "./ui/use-toast";

const Profile: React.FC = () => {
  const { data: session, status } = useSession();
  const handleLogout = () => {
    signOut({
      redirect: true,
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
        <div className="flex gap-2 text-right items-center">
          <span>
            <h1 className="text-sm font-semibold">
              {status === "loading" ? (
                <LoaderCircleIcon className="animate-spin h-4 w-4" />
              ) : (
                session?.user?.name
              )}{" "}
            </h1>
            <p className="text-xs">{session?.user?.email}</p>
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
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
