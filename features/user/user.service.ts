import { db } from "@/lib/db";

export class UserService {
  static async getAll() {
    return await db.user.findMany({
      include: { profile: true },
    });
  }

  static async getById(id: string) {
    return await db.user.findUnique({
      where: { id },
      include: { profile: true },
    });
  }
}
