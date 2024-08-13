import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getParticularDetailUser } from "@/repositories/user.repository";
import { percentageNumber } from "@/helpers/formatData";
import Link from "next/link";

export default async function TableDashboard() {
  const users = await getParticularDetailUser();
  return (
    <div className="rounded overflow-hidden flex-grow">
      
      <Table className="border rounded-lg">
        
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Quiz Scores</TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(({ email, score, username, id }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{username}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{percentageNumber(score)}</Badge>
                  {/* <Badge variant="outline">85%</Badge>
                <Badge variant="outline">92%</Badge> */}
                </div>
              </TableCell>
              <TableCell>
                <Link href={"/dashboard/users"}>
                  <Badge variant="default">View Detail</Badge>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
