import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Premium Minimal Black Cinematic Background
 * Strictly uses:
 * - Pure Black: #050505
 * - Secondary Black: #0A0A0D
 * - Subtle Electric Blue Glow: #1677FF / #287BFF
 * - Controlled Dark Red Accent: #8B0000 / #B5122A
 *
 * Provides understated ambient lighting, thin digital network lines,
 * and zero pastel or rainbow visual clutter.
 */
export function FluidWaveBackground() {
  const isReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none bg-[#050505]"
    >
      {/* 1. Subtle Electric Blue Ambient Light Sheen (Top Left) */}
      <motion.div
        animate={isReducedMotion ? {} : { opacity: [0.08, 0.13, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #1677FF 0%, rgba(22, 119, 255, 0.2) 50%, transparent 80%)",
        }}
      />

      {/* 2. Controlled Dark Red Atmospheric Ambient Glow (Center Right) */}
      <motion.div
        animate={isReducedMotion ? {} : { opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full blur-[170px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8B0000 0%, rgba(181, 18, 42, 0.2) 50%, transparent 80%)",
        }}
      />

      {/* 3. Subtle Electric Blue Ambient Glow (Bottom Left) */}
      <motion.div
        animate={isReducedMotion ? {} : { opacity: [0.06, 0.11, 0.06] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #287BFF 0%, rgba(40, 123, 255, 0.15) 50%, transparent 80%)",
        }}
      />

      {/* 4. Fine Digital Grid Accent */}
      <div className="absolute inset-0 bg-grid-fluid opacity-40 pointer-events-none" />

      {/* 5. Minimal Thin Vignette Border */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-60 pointer-events-none" />
    </div>
  );
}

export default FluidWaveBackground;
