import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "black";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean; // i made this optional full width button
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth = false, ...props }, ref) => {
    const variants: Record<string, string> = {
      primary: "bg-mint text-black hover:opacity-90 shadow-sm",
      secondary: "bg-gray-100 text-black hover:bg-gray-200",
      black: "bg-black text-white hover:bg-gray-800 shadow-lg shadow-black/10",
      outline: "border-2 border-black text-black hover:bg-gray-50",
      ghost: "text-gray-600 hover:bg-gray-100",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes: Record<string, string> = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-150 ease-in-out disabled:opacity-50 disabled:pointer-events-none active:scale-95",
          variants[variant],
          sizes[size],
          fullWidth ? "w-full" : "",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
