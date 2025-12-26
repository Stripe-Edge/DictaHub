import { db } from "@/lib/db";

export class CourseService {
  static async getAll() {
    return await db.course.findMany({
      include: { instructor: true, programme: true },
    });
  }

  static async getById(id: string) {
    return await db.course.findUnique({
      where: { id },
      include: { lessons: true, instructor: true },
    });
  }
}
