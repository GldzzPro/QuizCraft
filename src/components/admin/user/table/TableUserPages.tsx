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
          <TableHead>Created at</TableHead>
          <TableHead>Updated at</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.map(({ email, scores, username, id, createdAt, updatedAt }) => (
          <TableRow key={id}>
            <TableCell className="font-medium">{username}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>
              <div className="flex items-center gap-4">
                {scores.length > 0 ? (
                  <>
                    {scores.slice(0, 2).map(
                      (
                        s: { score: number; quiz: { title: string } }, // Correct typing for each score item
                        index: number
                      ) => (
                        <div key={index} className="flex items-center flex-col">
                          <Badge variant="outline">
                            {percentageNumber(s.score)}.%
                          </Badge>
                          <p className="text-xs text-muted-foreground lowercase">
                            {s.quiz.title}
                          </p>
                        </div>
                      )
                    )}
                    {scores.length > 3 && (
                      <Link href={`/dashboard/users/${id}`}>
                        <Button variant={"link"}>
                          <EllipsisIcon />
                        </Button>
                      </Link>
                    )}
                  </>
                ) : (
                  <span className="text-muted-foreground text-xs">
                    No Scores Available
                  </span>
                )}
              </div>
            </TableCell>
            <TableCell>{formatDate(createdAt)}</TableCell>
            <TableCell>{formatDate(updatedAt)}</TableCell>
            <TableCell>
              <DropdownTable path={id} onDelete={() => handleDelete(id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <div className="grid place-items-center mt-14">
      <h1 className="text-muted-foreground text-lg">No users</h1>
    </div>
  );
};

export default TableDashboardUser;
