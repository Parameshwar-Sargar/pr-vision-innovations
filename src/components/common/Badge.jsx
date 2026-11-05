import React from "react";
import { cn } from "../../utils/cn";

/**
 * Reusable pill badge with glowing indicator for Dark Cinematic Theme
 * Strictly uses Black, Electric Blue, and Dark Red.
 */
export function Badge({
  children,
  variant = "blue", // 'blue' | 'red' | 'neutral'
  showDot = true,
  className = "",
}) {
  const variantStyles = {
    blue: "bg-[#0A0A0D]/90 backdrop-blur-md text-[#287BFF] border-[#1677FF]/35 shadow-[0_0_12px_rgba(22,119,255,0.18)]",
    red: "bg-[#0A0A0D]/90 backdrop-blur-md text-[#FF4D4F] border-[#B5122A]/40 shadow-[0_0_12px_rgba(181,18,42,0.2)]",
    neutral: "bg-[#0A0A0D]/90 backdrop-blur-md text-[#A1A1AA] border-white/10 shadow-sm",
  };

  const dotColors = {
    blue: "bg-[#1677FF]",
    red: "bg-[#B5122A]",
    neutral: "bg-[#A1A1AA]",
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
