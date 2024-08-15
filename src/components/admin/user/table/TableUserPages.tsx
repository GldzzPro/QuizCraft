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

const TableDashboardUser = ({ users }: { users: any[] }) => {
  const { handleDelete } = useDeleteUser();

  return users.length > 0 ? (
    <Table className="border rounded-lg">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Quiz Scores</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Updated At</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.map(({ email, score, username, id, createdAt, updatedAt }) => (
          <TableRow key={id}>
            <TableCell className="font-medium">{username}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{percentageNumber(score)}</Badge>
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
