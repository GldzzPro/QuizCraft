import "./globals.css";
import { NextauthProviders } from "../lib/AuthProviders";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import ClientLayout from "@/components/client/ClientLayout";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Quizium",
  description: "quizium",
  icons: {
    icon: "/favicon.ico",
  },
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
        <NextauthProviders>
          <ClientLayout>{children}</ClientLayout>
        </NextauthProviders>
        <Toaster />
      </body>
    </html>
  );
}
