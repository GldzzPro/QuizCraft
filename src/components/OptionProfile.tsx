"use client"
import { signOut } from 'next-auth/react';
import React from 'react'
import { toast } from './ui/use-toast';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu';
import Link from 'next/link';

const OptionProfile = () => {
    const handleLogout = () => {
        signOut({
          redirect: true,
          callbackUrl: "/"
        }).then(() => {
          toast({
            title: "Logged out",
            description: "You have been logged out",
          });
        });
      };
  return (
    <DropdownMenuContent align="end">
    <DropdownMenuSeparator />
    <Link href={"/dashboard/profile"}>
      <DropdownMenuItem className="cursor-pointer">
        Settings
      </DropdownMenuItem>
    </Link>
    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer hidden sm:block">
      Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
  )
}

export default OptionProfile