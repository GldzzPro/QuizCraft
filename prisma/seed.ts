import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("12345", 10);
  const user = await prisma.user.upsert({
    where: { email: "hello@example.com" },
    update: {},
    create: {
      email: "hello@example.com",
      username: "John Doe",
      password,
      role: "ADMIN",
    },
  });
  console.log({ user });


  const quizzes = await prisma.quiz.create({
    data: {
      title: "Physics",
      description: "Test your knowledge of physics",
      difficulty: "MEDIUM",
      duration: 60,
      user: {
        connect: { id: user.id },
      },
      questions: {
        create: [
          {
            text: "How much is the gravitational force on Earth?",
            answers: {
              create: [
                { text: "9.8 m/s^2", isCorrect: true },
                { text: "9 m/s^2", isCorrect: false },
                { text: "10 m/s^2", isCorrect: false },
                { text: "9,4 m/s^2", isCorrect: false },
              ],
            },
          },
          {
            text: "Who is the father of physics?",
            answers: {
              create: [
                { text: "Albert Einstein", isCorrect: false },
                { text: "Isaac Newton", isCorrect: true },
                { text: "Stephen Hawking", isCorrect: false },
                { text: "Marie Curie", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });


  const questions = await prisma.question.findMany({
    where: {
      quizId: quizzes.id,
    },
    include: {
      answers: true,
    },
  });

  console.log({ quizzes });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => console.log(err));
