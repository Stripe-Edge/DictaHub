import { Role } from "@prisma/client";

export const hasRole = (userRole: Role, requiredRole: Role | Role[]) => {
  if (Array.isArray(requiredRole)) {
    return requiredRole.includes(userRole);
  }
  return userRole === requiredRole;
};
