import { db } from "@/lib/db";

export class ProgrammeService {
  static async getAll() {
    return await db.programme.findMany({
      include: { courses: true },
    });
  }
}
