'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for demonstration
const mockUserData = {
  id: 1,
  name: "John Doe",
  totalScore: 850,
  totalRank: 5,
  quizScore: 95,
  quizRank: 3,
  periodScore: 280,
  periodRank: 7
}

const mockRankings = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  score: Math.floor(Math.random() * 1000)
}))

export function QuizResultsDashboardComponent() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedQuiz, setSelectedQuiz] = useState("quiz1")
  const [selectedPeriod, setSelectedPeriod] = useState("week")

  const itemsPerPage = 10
  const totalPages = Math.ceil(mockRankings.length / itemsPerPage)

  const paginatedRankings = mockRankings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const renderPagination = () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
        </PaginationItem>
        {[...Array(totalPages)].map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink href="#" onClick={() => setCurrentPage(i + 1)} isActive={currentPage === i + 1}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )).slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2))}
        {currentPage + 2 < totalPages && <PaginationEllipsis />}
        <PaginationItem>
          <PaginationNext href="#" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )

  const renderRankingsTable = (rankings) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Rank</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rankings.map((user, index) => (
          <TableRow key={user.id}>
            <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz Results Dashboard</h1>
      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All Quizzes</TabsTrigger>
          <TabsTrigger value="quiz">By Quiz</TabsTrigger>
          <TabsTrigger value="period">By Period</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Total Score</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{mockUserData.totalScore}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Your Overall Rank</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{mockUserData.totalRank}</p>
              </CardContent>
            </Card>
          </div>
          {renderRankingsTable(paginatedRankings)}
          {renderPagination()}
        </TabsContent>
        <TabsContent value="quiz">
          <div className="mb-4">
            <Select value={selectedQuiz} onValueChange={setSelectedQuiz}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Quiz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="quiz1">Quiz 1</SelectItem>
                <SelectItem value="quiz2">Quiz 2</SelectItem>
                <SelectItem value="quiz3">Quiz 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Quiz Score</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{mockUserData.quizScore}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Your Quiz Rank</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{mockUserData.quizRank}</p>
              </CardContent>
            </Card>
          </div>
          {renderRankingsTable(paginatedRankings)}
          {renderPagination()}
        </TabsContent>
        <TabsContent value="period">
          <div className="mb-4">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Period Score</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{mockUserData.periodScore}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Your Period Rank</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{mockUserData.periodRank}</p>
              </CardContent>
            </Card>
          </div>
          {renderRankingsTable(paginatedRankings)}
          {renderPagination()}
        </TabsContent>
      </Tabs>
    </div>
  )
}