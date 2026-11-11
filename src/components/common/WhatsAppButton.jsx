import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { cn } from "../../utils/cn";

/**
 * Dedicated WhatsApp Inquiry Button
 */
export function WhatsAppButton({
  customMessage,
  label = "Chat on WhatsApp",
  size = "md",
  className = "",
  variant = "burgundy", // 'burgundy' | 'brand' | 'green' | 'outline'
}) {
  const href = buildWhatsAppLink(customMessage);

  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const variantClasses = {
    burgundy:
      "bg-[#910029] text-[#ECF4F7] hover:bg-[#7A0023] shadow-md shadow-[#910029]/25 border border-transparent",
    brand:
      "bg-[#910029] text-[#ECF4F7] hover:bg-[#7A0023] shadow-md shadow-[#910029]/25 border border-transparent",
    green:
      "bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-sm",
    outline:
      "bg-transparent text-[#910029] hover:bg-[#910029]/10 border border-[#910029]/40",
  };

  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none group",
        sizeClasses[size] || sizeClasses.md,
        variantClasses[variant] || variantClasses.burgundy,
        className
      )}
      aria-label="Direct inquiry via WhatsApp"
    >
      <MessageCircle className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" strokeWidth={1.8} />
      <span>{label}</span>
    </motion.a>
  );
}

export default WhatsAppButton;
