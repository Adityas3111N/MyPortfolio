import React from "react";
import { cn } from "@/lib/utils"; // optional: className merge utility

export const Button = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium focus:outline-none transition-all duration-200";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    default: "bg-indigo-500 hover:bg-indigo-600 text-white shadow",
    outline: "border border-indigo-500 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-neutral-800",
    ghost: "text-indigo-500 hover:underline underline-offset-4",
    subtle: "text-neutral-500 hover:text-indigo-500",
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
