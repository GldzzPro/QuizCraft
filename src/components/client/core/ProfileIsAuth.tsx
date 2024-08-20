"use client";

import Profile from "@/components/Profile";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const ProfileIsAuth = () => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="w-5 h-5 border-2 border-primary rounded-full animate-spin border-t-transparent"></div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <Link href={"/signin"}>
        <Button variant="outline" size="sm" className="text-sm font-medium">
          Sign In
        </Button>
      </Link>
    );
  }

  if (status === "authenticated") {
    return (
      <div className="hidden sm:inline">
        <Profile />
      </div>
    );
  }

  return null;
};

export default ProfileIsAuth;
