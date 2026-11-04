import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/**
 * Reusable Button component for Premium Light Agency Theme
 */
export function Button({
  children,
  variant = "primary", // 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow'
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
      "bg-gradient-to-r from-[#4285FF] via-[#A34DE0] to-[#F04CBF] text-white hover:from-[#55DDE0] hover:via-[#4285FF] hover:to-[#FF8A9A] shadow-[0_4px_20px_rgba(240,76,191,0.35)] hover:shadow-[0_6px_28px_rgba(66,133,255,0.45)] border border-transparent font-semibold",
    secondary:
      "bg-white/85 backdrop-blur-md text-[#0F172A] hover:bg-white border border-white/90 hover:border-[#4285FF]/40 shadow-[0_2px_10px_rgba(0,0,0,0.04)] font-medium",
    outline:
      "bg-transparent text-[#4285FF] hover:bg-[#4285FF]/08 border border-[#4285FF]/40 hover:border-[#4285FF] font-medium",
    ghost:
      "bg-transparent text-[#475569] hover:text-[#0F172A] hover:bg-white/50",
    glow:
      "bg-gradient-to-r from-[#4285FF] via-[#F04CBF] to-[#FFD166] text-white shadow-[0_4px_25px_rgba(240,76,191,0.4)] hover:shadow-[0_6px_30px_rgba(66,133,255,0.5)] border border-transparent font-semibold",
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
    const isExternal = href.startsWith("http") || href.startsWith("https") || href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={combinedClasses}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
}

export default Button;
