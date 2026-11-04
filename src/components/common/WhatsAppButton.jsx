import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { cn } from "../../utils/cn";

/**
 * Dedicated WhatsApp Inquiry Button with official green/cyan glow and configurable message
 */
export function WhatsAppButton({
  customMessage,
  label = "Chat on WhatsApp",
  size = "md",
  className = "",
  variant = "brand", // 'brand' | 'green' | 'outline'
}) {
  const href = buildWhatsAppLink(customMessage);

  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const variantClasses = {
    brand:
      "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:from-[#2fe571] hover:to-[#17a091] shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] border border-[#25D366]/40",
    green:
      "bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-[0_4px_20px_rgba(37,211,102,0.3)]",
    outline:
      "bg-transparent text-[#25D366] hover:bg-[#25D366]/10 border border-[#25D366]/50",
  };

  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 cursor-pointer select-none group",
        sizeClasses[size] || sizeClasses.md,
        variantClasses[variant] || variantClasses.brand,
        className
      )}
      aria-label="Direct inquiry via WhatsApp"
    >
      <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
      <span>{label}</span>
    </motion.a>
  );
}

export default WhatsAppButton;
