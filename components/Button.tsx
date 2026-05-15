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
    "bg-brand-blue text-white border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[1px_1px_0px_#1a1a1a] active:translate-y-1 active:shadow-none",
  secondary:
    "bg-brand-pink text-[#1a1a1a] border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[1px_1px_0px_#1a1a1a] active:translate-y-1 active:shadow-none",
  ghost:
    "bg-transparent text-[#1a1a1a] border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] hover:bg-brand-grey hover:shadow-[1px_1px_0px_#1a1a1a] active:translate-y-1 active:shadow-none",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-[8px]",
  md: "px-5 py-2.5 text-[9px]",
  lg: "px-7 py-3.5 text-[10px]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          "font-[family-name:var(--font-pixel)] tracking-wide uppercase",
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
