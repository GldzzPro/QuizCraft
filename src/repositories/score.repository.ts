"use server";
import prisma from "@/lib/prisma";
import { Difficulty } from "@prisma/client";
// Types for the return values and parameters of each function

import { Score, User, Quiz } from "@prisma/client";

/**
 * Type for the user object returned by ranking functions.
 * Includes totalScore and all properties from User model.
 */
export type RankedUser = User & {
    totalScore: number;
    scores: (Score & { quiz: Quiz })[];
};

/**
 * Type for the return value of `rankUsersByTotalScores` and `rankUsersByTotalScoresInDateRange`.
 * Returns an array of ranked users.
 */
export type RankUsersResult = RankedUser[];

/**
 * Type for the return value of `getScoresByUser`.
 * Returns a list of scores with associated quiz details.
 */
export type ScoresByUserResult = (Score & { quiz: Quiz })[];

/**
 * Type for the return value of `getScoresByQuiz`.
 * Returns a list of scores with associated user details.
 */
export type ScoresByQuizResult = (Score & { user: User })[];

// src/constants/difficultyCoefficients.ts
const DIFFICULTY_COEFFICIENTS: Record<Difficulty, number> = {
    EASY: 1,
    MEDIUM: 1.5,
    HARD: 2,
};

/**
 * Rank users by their total scores across all quizzes, factoring in difficulty coefficients.
 * @returns Ranked list of users based on weighted scores.
 */
export async function rankUsersByTotalScores(): Promise<RankUsersResult> {
    const users = await prisma.user.findMany({
        include: {
            scores: {
                include: {
                    quiz: true, // Include quiz details to access difficulty.
                },
            },
        },
    });
    return users
        .map(user => ({
            ...user,
            totalScore: user.scores.reduce((sum, score) => {
                const coefficient = DIFFICULTY_COEFFICIENTS[score.quiz.difficulty];
                return sum + score.score * coefficient;
            }, 0),
        }))
        .sort((a, b) => b.totalScore - a.totalScore);
}


/**
 * Rank users by their total scores in a given date range, factoring in difficulty coefficients.
 * @param startDate - The start of the date range.
 * @param endDate - The end of the date range.
 * @returns Ranked list of users based on weighted scores within the date range.
 */
export async function rankUsersByTotalScoresInDateRange(
    startDate: Date,
    endDate: Date
): Promise<RankUsersResult> {
    const users = await prisma.user.findMany({
        include: {
            scores: {
                where: {
                    createdAt: {
                        gte: startDate,
                        lte: endDate,
                    },
                },
                include: {
                    quiz: true, // Include quiz details to access difficulty.
                },
            },
        },
    });

    return users
        .map(user => ({
            ...user,
            totalScore: user.scores.reduce((sum, score) => {
                const coefficient = DIFFICULTY_COEFFICIENTS[score.quiz.difficulty];
                return sum + score.score * coefficient;
            }, 0),
        }))
        .sort((a, b) => b.totalScore - a.totalScore);
}



/**
 * Get scores by user ID.
 * @param userId - The ID of the user.
 * @returns List of scores for the specified user.
 */
export async function getScoresByUser(userId: string): Promise<ScoresByUserResult> {
    return prisma.score.findMany({
        where: { userId },
        include: { quiz: true },
    });
}

/**
 * Get scores by quiz ID.
 * @param quizId - The ID of the quiz.
 * @returns List of scores for the specified quiz.
 */
export async function getScoresByQuiz(quizId: string): Promise<ScoresByQuizResult> {
    return prisma.score.findMany({
        where: { quizId },
        include: { user: true },
    });
}





