"use client";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => (
  <button
    onClick={() => signIn()}
    className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg "
  >
    Login{" "}
  </button>
);
export const LogoutButton = () => (
  <button
    onClick={() => signOut()}
    className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg "
  >
    Logout
  </button>
);
