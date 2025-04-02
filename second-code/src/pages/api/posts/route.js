import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "success" }, { status: 200 });
}

export async function POST(req) {
  const data = await req.json();
  console.log(data);
  return NextResponse.json({ message: `Post working.` }, { status: 200 });
}

export async function PUT(req) {
  const { id } = await req.json();
  console.log(id);
  return NextResponse.json(
    { message: `Changed Successfully.` },
    { status: 200 }
  );
}
