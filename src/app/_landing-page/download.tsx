import { AppleIcon, SmartphoneIcon } from "lucide-react";
import Link from "next/link";

export default function Download() {
  return (
    <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Download
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get the Quiz App Now
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Available on iOS and Android, our quiz app is the perfect tool to
              help you learn and grow.
            </p>
          </div>
        </div>
        <div className="mx-auto flex justify-center gap-4 py-12">
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <AppleIcon className="mr-2 h-6 w-6" />
            App Store
          </Link>
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <SmartphoneIcon className="mr-2 h-6 w-6" />
            Google Play
          </Link>
        </div>
      </div>
    </section>
  );
}
