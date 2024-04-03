import { ClientEmailTemplate } from "@/app/emails";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { fullname, email, subject, message, ticket, type } =
      await request.json();
    const { data, error } = await resend.emails.send({
      from: "Client Support <support@ducehost.com>",
      to: [email],
      subject: "Client Support",
      react: ClientEmailTemplate({
        fullname: fullname,
        email: email,
        subject: subject,
        message: message,
        ticket: ticket,
        type: type,
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
