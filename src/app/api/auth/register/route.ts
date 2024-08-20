import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

import {
  createUserRegister,
  findUserEmail,
} from "@/repositories/user.repository";
export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};
export async function POST(req: NextRequest) {
  const { email, username, password, confirmPassword, role } = await req.json();
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
    const user = await createUserRegister({
      email,
      username,
      password: await hashPassword(password),
      role: role ?? "USER",
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
