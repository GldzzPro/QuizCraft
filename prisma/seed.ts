import { createUser } from "@/repositories/user.repository";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();
async function main() {
  const password = await hash("12345", 10);

  // Creating users with different emails and usernames
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      username: "User One",
      password,
      role: "USER",
      score: 80,
    },
  });

  const user2 = await prisma.user.upsert({
    where: {email: "hello@example.com"},
    update: {},
    create:{
      email: "hello@example.com",
      username: "John Doe",
      password,
      role: "ADMIN",
      score: 0,
    }
  })
  

  const user3 = await prisma.user.create({
    data: {
      email: "user3@example.com",
      username: "User Three",
      password,
      role: "USER",
      score: 70,
    },
  });


  const quiz2 = await prisma.quiz.create({
    data: {
      title: "Chemistry Quiz",
      description: "Explore your knowledge of chemistry",
      difficulty: "MEDIUM",
      duration: 45,
      user: {
        connect: { id: user1.id },
      },
      questions: {
        create: [
          {
            text: "What is the chemical symbol for gold?",
            answers: {
              create: [
                { text: "Au", isCorrect: true },
                { text: "Ag", isCorrect: false },
                { text: "Pb", isCorrect: false },
                { text: "Fe", isCorrect: false },
              ],
            },
          },
          {
            text: "Which gas is most abundant in the Earth's atmosphere?",
            answers: {
              create: [
                { text: "Nitrogen", isCorrect: true },
                { text: "Oxygen", isCorrect: false },
                { text: "Carbon Dioxide", isCorrect: false },
                { text: "Argon", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  const quiz3 = await prisma.quiz.create({
    data: {
      title: "Geography Quiz",
      description: "Test your knowledge of world geography",
      difficulty: "EASY",
      duration: 30,
      user: {
        connect: { id: user1.id },
      },
      questions: {
        create: [
          {
            text: "Which is the largest continent?",
            answers: {
              create: [
                { text: "Asia", isCorrect: true },
                { text: "Africa", isCorrect: false },
                { text: "Europe", isCorrect: false },
                { text: "North America", isCorrect: false },
              ],
            },
          },
          {
            text: "Which is the longest river in the world?",
            answers: {
              create: [
                { text: "Nile River", isCorrect: true },
                { text: "Amazon River", isCorrect: false },
                { text: "Yangtze River", isCorrect: false },
                { text: "Mississippi River", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  console.log({  quiz2, quiz3, user1, user2, user3 });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
  });
