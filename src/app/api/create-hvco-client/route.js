import connectMongoDB from "@/app/libs/mongodb";
import HvcoClient from "@/app/models/hvcoClient";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, number } = await request.json();
  await connectMongoDB();
  await HvcoClient.create({ name, email, number });
  return NextResponse.json({ message: "HVCO Client Created" }, { status: 201 });
}
