export interface UserData {
    id: number;
    name: string;
    totalScore: number;
    totalRank: number;
    quizScore: number;
    quizRank: number;
    periodScore: number;
    periodRank: number;
}

export interface RankingData {
    id: number;
    name: string;
    score: number;
}   