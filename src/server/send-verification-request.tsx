import type { SendVerificationRequestParams } from "next-auth/providers/email";
import nodemailer from "nodemailer";
import MagicLinkEmail from "~/emails/magic-link";
import { render } from "@react-email/render";
import { env } from "~/env.mjs";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: env.EMAIL_SERVER_HOST,
  port: 465,
  secure: false,
  auth: {
    user: env.EMAIL_FROM_USER,
    pass: env.EMAIL_PASSWORD,
  },
});

export async function sendVerificationRequest(
  params: SendVerificationRequestParams,
) {
  const { identifier, url } = params;

  try {
    const emailHtml = render(<MagicLinkEmail email={identifier} url={url} />);

    const options = {
      from: `Front ,${process.env.EMAIL_FROM_USER}>`,
      to: identifier,
      subject: "Please use this magic link to login!",
      html: emailHtml,
    };

    console.log("here =---->");
    await transporter.sendMail(options);
  } catch {
    throw new Error(`Email could not be sent`);
  }
}
