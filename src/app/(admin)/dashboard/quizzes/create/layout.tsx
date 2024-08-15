export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full justify-center bg-background rounded border">
      <main className="px-4 py-8 sm:px-6 flex-grow">{children}</main>
    </div>
  );
}
