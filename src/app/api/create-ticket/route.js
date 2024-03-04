import connectMongoDB from "@/app/libs/mongodb";
import SubmitTicket from "@/app/models/submitTicket";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { fullname, email, subject, message, ticket } = await request.json();
  await connectMongoDB();
  await SubmitTicket.create({ fullname, email, subject, message, ticket });
  return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
}
