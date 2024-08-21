'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useSession } from 'next-auth/react'

type UsersProps = {
  id: string; // Assuming id is a string; adjust if it's actually a number
  username: string;
  totalScore: number; // Ensure this matches the data you use
}[]


export default function RankPage({
  user
}: {
  user: UsersProps
}) {
  const [users, setUsers] = useState<UsersProps>([]);
  const {data:session} = useSession();
  const [currentUserId, setCurrentUserId] = useState(session?.user?.id) // Assuming the id is a string

  useEffect(() => {
    // Sort users by totalScore in descending order
    const sortedUsers = [...user].sort((a, b) => b.totalScore - a.totalScore)
    setUsers(sortedUsers)
  }, [user])

  const getCurrentUserRank = () => {
    return users.findIndex(u => u.id === currentUserId) + 1
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">User Rankings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Your Rank</h3>
            <p className="text-4xl font-bold">
              {currentUserId ? getCurrentUserRank() : 'N/A'}
              <span className="text-base font-normal text-muted-foreground"> out of {users.length}</span>
            </p>
          </div>
          <div className="bg-secondary/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Your Score</h3>
            <p className="text-4xl font-bold">
              {users.find(u => u.id === currentUserId)?.totalScore || 0}
            </p>
          </div>
        </div>
        <ScrollArea className="h-[400px] w-full">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2 font-semibold">Rank</th>
                <th className="pb-2 font-semibold">User</th>
                <th className="pb-2 font-semibold">Score</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`border-b last:border-b-0 ${
                    user.id === currentUserId ? 'bg-primary/10' : ''
                  }`}
                >
                  <td className="py-3 pr-4">
                    <span className="font-semibold">{index + 1}</span>
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={"https://github.com/shadcn.png"} alt={"Shadcn"} />
                        <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.username}</p>
                        {user.id === currentUserId && (
                          <Badge variant="secondary" className="mt-1">You</Badge>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="font-semibold">{user.totalScore}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
