
import SigninForm from "@/components/admin/fragments/auth/SigninForm";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Signin() {
  const session = await getServerSession(authOptions);

  if (session?.user?.role === "ADMIN") {
    redirect("/dashboard");
  }

  if (session?.user?.role === "USER") {
    redirect("/");
  }

  return (
    <div className="w-full min-h-screen h-screen lg:grid lg:grid-cols-2 ">
      <div className="relative hidden lg:block">
        <Image
          src="/assets/images/signin.jpg"
          width={1920}
          height={1080}
          alt="Login Illustration"
          className=" w-full h-full object-cover aspect-[1920/1080]"
          priority
        />
      </div>

      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <Link href={"/"}>
            <Button variant={"link"}>{"<"}Back to page</Button>
          </Link>
        </div>
        <div className="flex items-center  justify-center h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Enter your email and password to sign in to your account.
              </p>
            </div>
            <SigninForm />
          </div>
        </div>
      </div>
    </div>
  );
}
// }
