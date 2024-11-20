"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RankingsTable } from "@/components/ui/rankings-table";
import { UserData, RankingData } from "./types";

// Mock data (in a real app, you'd fetch this from an API)
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
  score: Math.floor(Math.random() * 1000),
}));

export default function AllQuizzesPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 mb-4">
        <Card>
          <CardHeader>
            <CardTitle>Your Total Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{mockUserData.totalScore}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Overall Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{mockUserData.totalRank}</p>
          </CardContent>
        </Card>
      </div>
      <RankingsTable data={{ rankings: mockRankings }} />
    </>
  );
}
