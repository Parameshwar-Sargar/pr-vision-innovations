import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { cn } from "../../utils/cn";

/**
 * Standardized Section Header
 * Charcoal (#393F4B) headings, Deep Burgundy (#910029) accents, and muted charcoal descriptions.
 */
export function SectionHeader({
  badge,
  badgeVariant = "burgundy",
  title,
  titleAccent,
  description,
  align = "center", // 'left' | 'center'
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col mb-12 sm:mb-16",
        isCenter ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Badge variant={badgeVariant}>{badge}</Badge>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#393F4B] leading-[1.2]"
        >
          {title}{" "}
          {titleAccent && (
            <span className="text-[#910029]">
              {titleAccent}
            </span>
          )}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-[#393F4B]/80 leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

export default SectionHeader;
