import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "info",
  size = "md",
  fullWidth = false,
  ...props
}) => {
  const variants: Record<string, string> = {
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
  };

  const sizes: Record<string, string> = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-base",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full font-semibold",
        variants[variant],
        sizes[size],
        fullWidth ? "w-full justify-center" : "",
        className
      )}
      {...props}
    />
  );
};
