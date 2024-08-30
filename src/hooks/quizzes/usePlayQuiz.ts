import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

type Answer = {
  id: string;
  text: string;
  isCorrect: boolean;
};

type Question = {
  id: string;
  text: string;
  answers: Answer[];
};

export default function usePlayQuiz() {
  const params = useParams();
  const { data: session } = useSession();
  const quizId = params.slug as string;
  const userId = session?.user?.id;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectAnswer, setSelectAnswer] = useState<Answer | null>(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [countDown, setCountDown] = useState(false);
  const [countDownTime, setCountDownTime] = useState(5);

  useEffect(() => {
    if (quizId) {
      (async () => {
        try {
          const res = await fetch(`/api/quiz/${quizId}`);
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          const storeData = await res.json();
          setQuestions(storeData.questions);
          setTime(storeData.duration);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [quizId]);

  useEffect(() => {
    if (countDownTime > 0) {
      const countdownTimer = setInterval(() => {
        setCountDownTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(countdownTimer);
    }
  }, [countDownTime]);

  const submitScore = useCallback(async () => {
    try {
      const res = await fetch(`/api/quiz/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          quizId,
          score,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to submit score");
      }
    } catch (error) {
      console.log(error);
    }
  }, [userId, quizId, score]);

  useEffect(() => {
    if (time > 0 && currentQuestion < questions.length) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (time === 0 || currentQuestion >= questions.length) {
      submitScore();
    }
  }, [time, currentQuestion, questions.length, submitScore]);

  const handleAnswerChange = (answer: Answer) => {
    setSelectAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectAnswer && selectAnswer.isCorrect) {
      setScore(score + 1); // Increment score by 1 for each correct answer
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectAnswer(null);
  };

  return {
    questions,
    selectAnswer,
    handleAnswerChange,
    handleSubmit,
    currentQuestion,
    setCurrentQuestion,
    setSelectAnswer,
    setScore,
    time,
    score,
    countDown,
    countDownTime
  };
}
