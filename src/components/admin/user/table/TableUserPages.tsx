"use client";

import React from "react";
import { Badge } from "../../../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import DropdownTable from "../../core/DropdownTable";
import { percentageNumber, formatDate } from "@/helpers/formatData";
import useDeleteUser from "@/hooks/user/useDeleteUser";
import { EllipsisIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TableDashboardUser = ({ users }: { users: any[] }) => {
  const { handleDelete } = useDeleteUser();

  return users.length > 0 ? (
    <Table className="border rounded-lg">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Quiz Scores</TableHead>
          <TableHead className="hidden sm:table-cell">Created at</TableHead>
          <TableHead className="hidden sm:table-cell">Updated at</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.map(({ email, scores, username, id, createdAt, updatedAt }) => {
          const lastScore = scores[scores.length - 1]; // Get the last score in the array

          return (
            <TableRow key={id}>
              <TableCell className="font-medium">{username}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  {scores.length > 0 ? (
                    <>
                      {lastScore && (
                        <div className="flex items-center flex-col">
                          <Badge variant="outline">
                            {percentageNumber(lastScore.score)}
                          </Badge>
                          <p className="text-xs text-center text-muted-foreground lowercase">
                            {lastScore.quiz.title}
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-muted-foreground text-xs">
                      No Scores Available
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {formatDate(createdAt)}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {formatDate(updatedAt)}
              </TableCell>
              <TableCell>
                <DropdownTable path={id} onDelete={() => handleDelete(id)} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ) : (
    <div className="grid place-items-center mt-14">
      <h1 className="text-muted-foreground text-lg">No users</h1>
    </div>
  );
};


export default TableDashboardUser;
