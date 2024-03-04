import connectMongoDB from "@/app/libs/mongodb";
import ReportAbuse from "@/app/models/reportAbuse";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { fullname, email, subject, message, ticket } = await request.json();
  await connectMongoDB();
  await ReportAbuse.create({ fullname, email, subject, message, ticket });
  return NextResponse.json({ message: "Report Created" }, { status: 201 });
}
