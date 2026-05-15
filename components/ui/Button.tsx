"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-[#4a6ae8] active:translate-y-0.5",
  secondary:
    "bg-brand-pink text-[#1a1a1a] border-2 border-brand-pink shadow-[3px_3px_0px_rgba(255,133,179,0.5)] hover:shadow-[1px_1px_0px_rgba(255,133,179,0.5)] active:translate-y-1 active:shadow-none",
  ghost:
    "bg-white/10 text-brand-white border-none hover:bg-white/20 active:bg-white/30 transition-colors",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs font-bold",
  md: "px-5 py-2.5 text-sm font-bold",
  lg: "px-7 py-3.5 text-sm font-bold",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          "tracking-wide uppercase outline-none",
          "transition-all duration-75 cursor-pointer select-none",
          variantStyles[variant],
          sizeStyles[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
