import { RankingsTable } from "@/components/ui/rankings-table";
import { RankingData } from "./types";
import { rankUsersByTotalScores } from "@/repositories/score.repository";
import { UserRankCard } from "../_rank-page/user-rank-card";

export default async function AllQuizzesPage() {
  const scoresByUser = await rankUsersByTotalScores();
  const rankings: RankingData[] = scoresByUser.map(
    ({ id, username, totalScore }) => ({
      id,
      name: username,
      score: totalScore,
    })
  );

  return (
    <>
      <UserRankCard
        data={{
          rankLabel: "Your Overall Rank",
          scoreLabel: "Your Total Score",
          rankings,
        }}
      />
      <RankingsTable data={{ rankings }} />
    </>
  );
}
