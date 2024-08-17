import { Separator } from "@/components/ui/separator";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-36 bg-primary text-secondary px-4 md:px-6 flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">
        <p className="text-xs sm:text-xs">&copy; 2024 | Quizium. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-xs sm:text-xs hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link href="#" className="text-xs sm:text-xs hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter" prefetch={false}>
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="#" aria-label="Facebook" prefetch={false}>
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="#" aria-label="Instagram" prefetch={false}>
              <InstagramIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
