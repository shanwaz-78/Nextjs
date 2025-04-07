import { NextResponse } from "next/server";
import { userData } from "../../addUser/route"; 

export async function PUT(req, { params }) {
  const { id } = params;

  const usersArray = Array.from(userData);
  const userIndex = usersArray.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json(
      { message: `User with ID: ${id} not found.` },
      { status: 404 }
    );
  }

  const { name, email, password } = await req.json();

  usersArray[userIndex] = { id, name, email, password };

  userData.clear();
  usersArray.forEach((user) => userData.add(user));

  return NextResponse.json(
    { message: `User with ID ${id} updated successfully.`, data : usersArray },
    { status: 200 }
  );
}
