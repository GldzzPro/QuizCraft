export default function QuizLayout({children}: {children :React.ReactNode}){
    return (
        <div className="min-h-dvh  m-5">
        <div className="  min-w- mb-5">
          <h1 className="text-4xl font-bold">Quiz</h1>
          <p className="text-lg text-muted-foreground">
            Explore our quizes
          </p>
        </div>
  {children}
      </div>
    )
}