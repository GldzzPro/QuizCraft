import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RankingsTable } from "@/components/ui/rankings-table";
import { RankingData, UserData } from "../../types";

// Mock data (in a real app, you'd fetch this based on the quizId)
const mockUserData: UserData = {
  id: 1,
  name: "John Doe",
  totalScore: 850,
  totalRank: 5,
  quizScore: 95,
  quizRank: 3,
  periodScore: 280,
  periodRank: 7,
};

const mockRankings: RankingData[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  score: Math.floor(Math.random() * 100),
}));

export default function QuizPage({ params }: { params: { quizId: string } }) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 mb-4">
        <Card>
          <CardHeader>
            <CardTitle>Your Quiz Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{mockUserData.quizScore}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Quiz Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{mockUserData.quizRank}</p>
          </CardContent>
        </Card>
      </div>
      <h2 className="text-xl font-semibold mb-4">
        Rankings for Quiz {params.quizId}
      </h2>
      <RankingsTable data={{ rankings: mockRankings }} />
    </>
  );
}
