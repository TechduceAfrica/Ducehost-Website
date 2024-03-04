import { EmailTemplate } from "@/app/emails";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { fullname, email, subject, message, ticket } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Ducehost <support@ducehost.com>",
      to: "ducehost@gmail.com",
      subject: "Customer Message Ticket",
      react: EmailTemplate({
        firstName: fullname,
        email: email,
        ticket: ticket,
        subject: subject,
        message: message,
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
