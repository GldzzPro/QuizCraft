export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background rounded border">
      <main className="flex-1 px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
