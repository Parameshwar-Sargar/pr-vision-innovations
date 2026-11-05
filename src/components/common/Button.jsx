import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/**
 * Reusable Button component for Premium Dark Cinematic Theme
 * Strictly uses:
 * - Electric Blue: #1677FF / #287BFF
 * - Dark Red / Crimson: #8B0000 / #B5122A
 * - Pure Black: #050505 / #0A0A0D
 */
export function Button({
  children,
  variant = "primary", // 'primary' | 'secondary' | 'outline' | 'ghost' | 'darkRed'
  size = "md", // 'sm' | 'md' | 'lg'
  href,
  onClick,
  className = "",
  icon: Icon,
  iconPosition = "right",
  disabled = false,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none group";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#1677FF] hover:bg-[#287BFF] text-white shadow-[0_0_20px_rgba(22,119,255,0.4)] hover:shadow-[0_0_28px_rgba(40,123,255,0.6)] border border-transparent font-semibold",
    secondary:
      "bg-[#0A0A0D]/80 backdrop-blur-md text-white hover:bg-[#1677FF]/10 border border-white/12 hover:border-[#1677FF]/40 shadow-[0_2px_10px_rgba(0,0,0,0.5)] font-medium",
    outline:
      "bg-transparent text-[#287BFF] hover:bg-[#1677FF]/10 border border-[#1677FF]/40 hover:border-[#287BFF] font-medium",
    ghost:
      "bg-transparent text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]",
    darkRed:
      "bg-[#8B0000] hover:bg-[#B5122A] text-white border border-[#B5122A]/40 shadow-[0_0_18px_rgba(181,18,42,0.35)] font-semibold",
    glow:
      "bg-[#1677FF] hover:bg-[#287BFF] text-white shadow-[0_0_24px_rgba(22,119,255,0.5)] border border-[#287BFF]/40 font-semibold",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size] || sizeStyles.md,
    variantStyles[variant] || variantStyles.primary,
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" strokeWidth={1.8} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.8} />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
