"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/app/_landing-page/navbar";
import Footer from "@/app/_landing-page/footer";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
type ClientLayoutProps = {
  children: React.ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const hideNavigation =
    pathname.startsWith("/dashboard") ||
    ["/signin", "/signup"].includes(pathname);
    useEffect(() =>{
      AOS.init()
    },[])

  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          {!hideNavigation && <Navbar />}
          {children}
          {!hideNavigation && <Footer />}
        </main>
      </div>
    </>
  );
}
