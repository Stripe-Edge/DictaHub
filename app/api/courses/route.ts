import { NextResponse } from "next/server";
import { CourseService } from "@/features/course/course.service";

export const dynamic = 'force-dynamic';

export async function GET() {
  const courses = await CourseService.getAll();
  return NextResponse.json(courses);
}
