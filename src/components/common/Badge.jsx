import React from "react";
import { cn } from "../../utils/cn";

/**
 * Reusable pill badge with glowing indicator for Light Theme
 */
export function Badge({
  children,
  variant = "blue", // 'blue' | 'violet' | 'cyan' | 'neutral'
  showDot = true,
  className = "",
}) {
  const variantStyles = {
    blue: "bg-white/80 backdrop-blur-sm text-[#4285FF] border-[#4285FF]/30 shadow-sm",
    violet: "bg-white/80 backdrop-blur-sm text-[#A34DE0] border-[#A34DE0]/30 shadow-sm",
    pink: "bg-white/80 backdrop-blur-sm text-[#F04CBF] border-[#F04CBF]/30 shadow-sm",
    cyan: "bg-white/80 backdrop-blur-sm text-[#0284C7] border-[#55DDE0]/50 shadow-sm",
    neutral: "bg-white/80 backdrop-blur-sm text-[#475569] border-white/80 shadow-sm",
  };

  const dotColors = {
    blue: "bg-[#4285FF]",
    violet: "bg-[#A34DE0]",
    pink: "bg-[#F04CBF]",
    cyan: "bg-[#55DDE0]",
    neutral: "bg-slate-400",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border backdrop-blur-sm select-none",
        variantStyles[variant] || variantStyles.blue,
        className
      )}
    >
      {showDot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full animate-pulse",
            dotColors[variant] || dotColors.blue
          )}
        />
      )}
      <span>{children}</span>
    </div>
  );
}

export default Badge;
