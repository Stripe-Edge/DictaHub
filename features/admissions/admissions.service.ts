import { db } from "@/lib/db";

export class AdmissionService {
  static async apply(data: any) {
    return await db.admission.create({ data });
  }

  static async getAll() {
    return await db.admission.findMany();
  }
}
