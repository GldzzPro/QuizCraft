export const registerUser = async ({
  email,
  username,
  password,
  confirmPassword,
}: {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}) => {
  return await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      password,
      confirmPassword,
    }),
  });
};
