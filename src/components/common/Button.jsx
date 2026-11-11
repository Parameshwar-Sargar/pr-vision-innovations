import React from "react";
import { cn } from "../../utils/cn";

/**
 * Reusable Button component for Minimal Three-Color Theme:
 * - Primary: Deep Burgundy #910029 with Light Ice #ECF4F7 text
 * - Secondary: Light Ice #ECF4F7 with Slate Charcoal #393F4B text and subtle Burgundy border
 */
export function Button({
  children,
  variant = "primary", // 'primary' | 'secondary' | 'outline' | 'ghost'
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
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none group";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#910029] hover:bg-[#7A0023] text-[#ECF4F7] shadow-sm shadow-[#910029]/25 hover:shadow-md hover:shadow-[#910029]/35 border border-transparent font-semibold",
    secondary:
      "bg-[#ECF4F7] hover:bg-white text-[#393F4B] hover:text-[#910029] border border-[#910029]/30 hover:border-[#910029] shadow-xs font-medium",
    outline:
      "bg-transparent text-[#910029] hover:bg-[#910029]/10 border border-[#910029]/40 hover:border-[#910029] font-medium",
    ghost:
      "bg-transparent text-[#393F4B] hover:text-[#910029] hover:bg-[#393F4B]/05",
    glow:
      "bg-[#910029] hover:bg-[#7A0023] text-[#ECF4F7] shadow-md shadow-[#910029]/30 font-semibold",
    darkRed:
      "bg-[#910029] hover:bg-[#7A0023] text-[#ECF4F7] font-semibold",
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
        <Icon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" strokeWidth={1.8} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.8} />
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
