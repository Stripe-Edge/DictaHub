import { NextResponse } from "next/server";
import { UserService } from "@/features/user/user.service";

export const dynamic = 'force-dynamic';

export async function GET() {
  const users = await UserService.getAll();
  return NextResponse.json(users);
}
