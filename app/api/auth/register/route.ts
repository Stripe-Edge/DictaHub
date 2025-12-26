import { NextResponse } from "next/server";
import { AuthService } from "@/features/auth/auth.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await AuthService.register(body);
    return NextResponse.json({ user, message: "Registration successful" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
