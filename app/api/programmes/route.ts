import { NextResponse } from "next/server";
import { ProgrammeService } from "@/features/programme/programme.service";

export const dynamic = 'force-dynamic';

export async function GET() {
  const programmes = await ProgrammeService.getAll();
  return NextResponse.json(programmes);
}
