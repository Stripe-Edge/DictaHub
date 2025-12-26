import { NextResponse } from "next/server";
import { AuthService } from "@/features/auth/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await AuthService.login(body);
    return NextResponse.json({ user, message: "Login successful" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
