import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col gap-3 items-center text-center">
        <h2 className="text-3xl font-medium  text-foreground">Not Found</h2>
        <p className="text-foreground text-lg">Could not find requested resource</p>
        <Link href="/" className="text-foreground underline">Return Home</Link>
      </div>
    </div>
  );
}
