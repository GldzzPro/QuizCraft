"use server";

import nodemailer from "nodemailer";

export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: process.env.NEXT_NODEMAILER_EMAIL,
      pass: process.env.NEXT_NODEMAILER_PASS,
    },
  });

  try {
    await transporter.verify();
  } catch (error) {
    console.error("Failed to verify transporter:", error);
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.NEXT_NODEMAILER_EMAIL,
      to,
      subject,
      text,
      html: text,
    });
    return info;
  } catch (error) {
    console.error("Failed to send email:", error);
    return;
  }
}
