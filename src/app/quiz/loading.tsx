
import { LoaderCircleIcon } from "lucide-react";

export default function Loading() {
  return (
    <div className=" w-full grid place-items-center">
      <div className="flex gap-5 items-center text-3xl text-primary font-bold">
        <LoaderCircleIcon className="h-10 w-10 animate-spin" />
        <p className="">Loading...</p>
      </div>
    </div>
  );
}