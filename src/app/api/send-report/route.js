import { ReportEmailTemplate } from "@/app/emails";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { fullname, email, subject, message, ticket } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Client Report <info@ducehost.com>",
      to: ["ducehost@gmail.com"],
      subject: "Client Report",
      react: ReportEmailTemplate({
        fullname: fullname,
        email: email,
        subject: subject,
        message: message,
        ticket: ticket,
      }),
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
