import React from "react";
import { cn } from "../../utils/cn";

/**
 * Reusable pill badge for Light Ice, Slate Charcoal & Deep Burgundy Theme
 */
export function Badge({
  children,
  variant = "burgundy", // 'burgundy' | 'charcoal' | 'neutral'
  showDot = true,
  icon: Icon,
  className = "",
}) {
  const variantStyles = {
    burgundy: "bg-[#910029]/10 text-[#910029] border-[#910029]/25 shadow-xs",
    pink: "bg-[#910029]/10 text-[#910029] border-[#910029]/25 shadow-xs",
    blue: "bg-[#910029]/10 text-[#910029] border-[#910029]/25 shadow-xs",
    red: "bg-[#910029]/10 text-[#910029] border-[#910029]/25 shadow-xs",
    charcoal: "bg-white text-[#393F4B] border-[#393F4B]/20 shadow-xs",
    neutral: "bg-white text-[#393F4B] border-[#393F4B]/15 shadow-xs",
  };

  const dotColors = {
    burgundy: "bg-[#910029]",
    pink: "bg-[#910029]",
    blue: "bg-[#910029]",
    red: "bg-[#910029]",
    charcoal: "bg-[#393F4B]",
    neutral: "bg-[#393F4B]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border select-none",
        variantStyles[variant] || variantStyles.burgundy,
        className
      )}
    >
      {Icon ? (
        <Icon className="w-3.5 h-3.5 shrink-0" strokeWidth={1.8} />
      ) : showDot ? (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full animate-pulse",
            dotColors[variant] || dotColors.burgundy
          )}
        />
      ) : null}
      <span>{children}</span>
    </div>
  );
}

export default Badge;
