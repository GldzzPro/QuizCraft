import { LoaderCircleIcon } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="flex gap-5 items-center">
        <LoaderCircleIcon className="h-10 w-10 animate-spin" />
        <p className="text-2xl">Loading...</p>
      </div>
    </div>
  );
}
