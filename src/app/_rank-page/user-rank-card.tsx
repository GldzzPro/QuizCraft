"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import React, { useMemo } from "react";
import { RankingData } from "../rank/types";

export type UserRankProps = {
  data: { scoreLabel: string; rankLabel: string; rankings: RankingData[] };
};
export const UserRankCard = ({ data }: UserRankProps) => {
  const { data: session } = useSession();

  const { rank, score } = useMemo(() => {
    const rank =
      data.rankings.findIndex(({ id }) => session?.user?.id == id) + 1;
    return rank < 1
      ? {
          rank: 0,
          score: 0,
        }
      : {
          rank,
          score: data.rankings[rank - 1].score,
        };
  }, [data.rankings, session?.user?.id]);

  return (
    <div className="grid gap-4 md:grid-cols-2 mb-4">
      <Card>
        <CardHeader>
          <CardTitle>{data.scoreLabel}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{score}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{data.rankLabel}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{rank}</p>
        </CardContent>
      </Card>
    </div>
  );
};
