import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import GoogleIcon from "@/icons/GoogleIcon";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const GoogleButton = () => {
  const router = useRouter();
  const { toast } = useToast();

  const handleGoogleSign = async () => {
    const result = await signIn("google", {
      callbackUrl: "/",
      redirect: false,
    });

    if (result?.error) {
      toast({
        variant: "destructive",
        title: "Sign in Error",
        description: result.error,
      });
    } else if (result?.ok) {
        router.replace("/");
    }
  };
  return (
    <Button
      className={`w-full flex items-center gap-3`}
      variant="outline"
      onClick={handleGoogleSign}
    >
      <span className="h-7 w-7">
        <GoogleIcon />
      </span>
      <p>Sign in with Google</p>
    </Button>
  );
};

export default GoogleButton;
