import { TabsListLayout } from "../_rank-page/TabsList";

export default function QuizResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz Results Dashboard</h1>
      <TabsListLayout>{children}</TabsListLayout>
    </div>
  );
}
