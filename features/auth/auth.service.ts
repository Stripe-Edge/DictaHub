import { db } from "@/lib/db";
import { hashPassword, comparePassword } from "@/lib/auth";

export class AuthService {
  static async register(data: any) {
    const hashedPassword = await hashPassword(data.password);
    return await db.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  static async login(data: any) {
    const user = await db.user.findUnique({ where: { email: data.email } });
    if (!user) throw new Error("User not found");
    
    const isValid = await comparePassword(data.password, user.password);
    if (!isValid) throw new Error("Invalid password");
    
    return user;
  }
}
