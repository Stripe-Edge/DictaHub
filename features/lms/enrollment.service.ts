import { db } from "@/lib/db";

export class EnrollmentService {
  static async enroll(userId: string, courseId: string) {
    return await db.enrollment.create({
      data: { userId, courseId },
    });
  }

  static async getStudentCourses(userId: string) {
    return await db.enrollment.findMany({
      where: { userId },
      include: { course: true },
    });
  }
}
