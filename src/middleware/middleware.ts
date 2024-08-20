import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if(token.role === "USER") {
    return NextResponse.redirect(new URL("/quiz", req.url));
  }

  if(token.role === "ADMIN") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/app/:path*"],
  pages: {
    signIn: "/signin",
  },
};
