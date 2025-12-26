import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string; // error message to show below input
  inputSize?: "sm" | "md" | "lg";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, inputSize = "md", ...props }, ref) => {
    const sizes: Record<string, string> = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-5 py-4 text-lg",
    };

    return (
      <div className="w-full flex flex-col">
        {label && (
          <label className="mb-1 text-gray-700 font-medium" htmlFor={props.id}>
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={cn(
            "rounded-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-mint focus:ring-1 focus:ring-mint outline-none transition-all disabled:bg-gray-100 disabled:text-gray-400",
            sizes[inputSize],
            className
          )}
          {...props}
        />

        {error && <span className="mt-1 text-red-600 text-sm">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
