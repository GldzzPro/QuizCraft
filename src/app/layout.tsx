import type { Metadata } from "next";
import "./globals.css";
import { NextauthProviders } from "../helpers/providers";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Quizium",
  description: "quizium",
  icons: {
    icon: "/favicon.ico",
  }
};
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextauthProviders>{children}</NextauthProviders>
        <Toaster  />
      </body>
    </html>
  );
}
