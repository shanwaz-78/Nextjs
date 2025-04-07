import { NextResponse } from "next/server";

export const userData = new Set();
let id = 0;

export async function POST(req) {
  const { name, email, password } = await req.json();

  const usersArray = Array.from(userData);

  const existingUser = usersArray.find((user) => user.email === email);
  if (existingUser) {
    return NextResponse.json(
      { message: `User Already Exists with email ${email}` },
      { status: 400 }
    );
  }
  id++;
  const payload = { id, name, email, password };
  userData.add(payload);

  return NextResponse.json(
    { message: "User Added Successfully." },
    { status: 201 }
  );
}
