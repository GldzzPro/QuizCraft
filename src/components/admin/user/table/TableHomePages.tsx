import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getParticularDetailUser } from "@/repositories/user.repository";
import { percentageNumber } from "@/helpers/formatData";


type UsersProps = {
  id: string;
  username: string;
  email: string;
  totalScore: number;
}[]
export default async function TableDashboard({
  users}: { users: UsersProps }) {

  return (
    <div className="flex-grow">
      <Table className="border">
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
          {users.map(({ email, totalScore, username, id }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{username}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2 truncate">
                  {!totalScore ? (
                    <Badge variant="outline">No Score Available</Badge>
                  ) : (
                    <Badge variant={"outline"}>
                      {percentageNumber(totalScore)}
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <Link href={`/dashboard/users/${id}`}>
                  <Badge variant="secondary">View Detail</Badge>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
