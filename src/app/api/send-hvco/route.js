import { HvcoClientEmailTemplate } from "@/app/emails";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Ducehost <support@ducehost.com>",
      to: [email],
      subject: "Free E-book",
      react: HvcoClientEmailTemplate({
        name: name,
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
