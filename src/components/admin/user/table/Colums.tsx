"use client";

import { Badge } from "@/components/ui/badge";
import { formatDate, percentageNumber } from "@/helpers/formatData";
import { Role } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import ActionCell from "./ActionsCell";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

type UserProps = {
  id: string;
  username: string;
  email: string;
  role: Role;
  scores: {
    quiz: {
      id: string;
      title: string;
    };
    score: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<UserProps>[] = [
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => {
      const username = row.getValue("username") as string;
      return <div className="capitalize">{username}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="space-x-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <p>Email</p>
        <ArrowUpDown className="w-4 h-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const email = row.getValue("email") as string;
      return <div className="lowercase">{email}</div>;
    },
  },
  {
    accessorKey: "scores",
    header: "Quiz Scores",
    cell: ({ row }) => {
      const scores = row.getValue("scores") as {
        quiz: { title: string };
        score: number;
      }[];
      const maxScores = scores.filter((s) => s.score > 0);

      return (
        <div className="flex flex-wrap text-center gap-2">
          {scores.length > 0 ? (
            <>
              {maxScores.slice(0, 2).map(({ score, quiz: { title } }) => (
                <Badge key={title} variant="outline">
                  {`${title}: ${percentageNumber(score)}`}
                </Badge>
              ))}
              {scores.length > 2 && (
                <Badge variant="secondary">+{maxScores.length - 2}</Badge>
              )}
            </>
          ) : (
            <Badge variant="outline">No Score Available</Badge>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt") as Date;
      return <span className="truncate">{formatDate(createdAt)}</span>
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => {
      const updatedAt = row.getValue("updatedAt") as Date;
      return <span className="truncate">{formatDate(updatedAt)}</span>
    },
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => {
      const id = row.getValue("id") as string;
      return <ActionCell userId={id} />;
    },
  },
];
