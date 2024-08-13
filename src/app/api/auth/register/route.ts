import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createUserRegister, findUserEmail } from "@/repositories/user.repository";
export async function POST(req: NextRequest) {
  const { email, username, password, confirmPassword } = await req.json();
  const passwordMatch = password === confirmPassword;
  if (!passwordMatch) {
    return NextResponse.json(
      {
        message: "Password does not match!",
      },
      { status: 400 }
    );
  }
  const existUser = await findUserEmail({ email });
  if (existUser) {
    return NextResponse.json(
      {
        message: "User already exists",
      },
      {
        status: 400,
      }
    );
  }
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await createUserRegister({
      email,
      username,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "Success",
        data: user,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  }
}
