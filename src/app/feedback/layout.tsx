import { BicepsFlexed } from "lucide-react";

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh  m-5">
      <div className="   mb-5">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl sm:text-4xl   font-bold">Your Feedback is our progress</h1>
          <BicepsFlexed />
        </div>
        <p className="sm:text-lg text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          culpa sunt labore, laborum assumenda rem maiores delectus
        </p>
      </div>
      {children}
    </div>
  );
}
