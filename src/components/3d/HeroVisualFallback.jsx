import React from "react";
import { motion } from "framer-motion";

/**
 * Clean Light SVG / CSS Fallback for 3D Hero
 * Open, unboxed presentation with smooth continuous orbital rotation
 */
export function HeroVisualFallback({ isReducedMotion = false }) {
  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[580px] flex items-center justify-center p-6 select-none overflow-visible">
      {/* Soft chromatic fluid radial glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#4285FF]/18 via-[#F04CBF]/15 to-[#FFD166]/12 blur-3xl pointer-events-none" />

      {/* Concentric vector geometry */}
      <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 flex items-center justify-center">
        {/* Outer Ring - Electric Blue */}
        <motion.div
          animate={isReducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-[#4285FF]/30 border-dashed"
        />

        {/* Middle Ring - Vibrant Pink */}
        <motion.div
          animate={isReducedMotion ? {} : { rotate: -360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-[#F04CBF]/35"
        >
          <div className="absolute -top-1.5 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-[#F04CBF] shadow-[0_0_10px_#F04CBF]" />
          <div className="absolute -bottom-1.5 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-[#4285FF] shadow-[0_0_10px_#4285FF]" />
        </motion.div>

        {/* Inner Ring - Cyan / Golden Yellow */}
        <motion.div
          animate={isReducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-16 rounded-full border border-[#55DDE0]/35"
        >
          <div className="absolute top-1/2 -right-1.5 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-[#FFD166] shadow-[0_0_8px_#FFD166]" />
        </motion.div>

        {/* Central Geometric Core */}
        <motion.div
          animate={
            isReducedMotion
              ? {}
              : { scale: [1, 1.04, 1], rotate: [0, 8, -8, 0] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 flex items-center justify-center shadow-[0_10px_35px_rgba(240,76,191,0.2)]"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#4285FF] via-[#A34DE0] to-[#F04CBF] flex items-center justify-center rotate-45 shadow-[0_6px_20px_rgba(66,133,255,0.35)]">
            <div className="w-8 h-8 rounded-lg bg-white -rotate-45 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#F04CBF] animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroVisualFallback;
