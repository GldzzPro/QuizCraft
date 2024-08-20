export const fetchQuiz = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/quiz");
  const data = await res.json();
  return data;
};
