export default function QuizViewPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <div>{slug}</div>;
}
