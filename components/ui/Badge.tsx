import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "dark" | "outline" | "status";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "dark",
  size = "md",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-mono font-medium rounded-full border transition-colors";

  const variants = {
    gold: "bg-gold-primary/10 text-gold-accent border-gold-primary/30",
    dark: "bg-dark-800 text-gray-300 border-white/10 hover:border-gold-primary/30",
    outline: "bg-transparent text-gray-400 border-white/10",
    status: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  );
};
