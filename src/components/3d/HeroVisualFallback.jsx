import React from "react";
import { motion } from "framer-motion";

/**
 * 2D Responsive Full-Screen 3D Glass Fallback
 * Used when WebGL is unavailable or when prefers-reduced-motion is active.
 * Renders edge-to-edge flowing glass waves, curved ribbons, and the
 * digital workspace on the right in Rich Ruby Red (#D7264D),
 * Golden Yellow (#FFC928), and Royal Purple (#7028C8).
 */
export function HeroVisualFallback({ isReducedMotion = false }) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
      {/* 1. Deep Royal Purple / Ruby Base Glows */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#7028C8]/25 blur-[140px]" />
      <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] rounded-full bg-[#FFC928]/20 blur-[130px]" />
      <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] rounded-full bg-[#D7264D]/22 blur-[140px]" />

      {/* 2. Layered Translucent 3D Glass Waves (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fallbackGlassRuby" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D7264D" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#7028C8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFC928" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="fallbackGlassYellow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFC928" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#D7264D" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7028C8" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Liquid Glass Wave 1 */}
        <motion.path
          animate={isReducedMotion ? {} : { d: [
            "M0,320 C320,200 480,480 800,340 C1120,200 1280,420 1440,300 L1440,900 L0,900 Z",
            "M0,360 C280,450 520,240 840,380 C1160,520 1320,260 1440,340 L1440,900 L0,900 Z",
            "M0,320 C320,200 480,480 800,340 C1120,200 1280,420 1440,300 L1440,900 L0,900 Z",
          ] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          fill="url(#fallbackGlassRuby)"
        />

        {/* Liquid Glass Wave 2 */}
        <motion.path
          animate={isReducedMotion ? {} : { d: [
            "M0,520 C360,420 640,620 960,480 C1280,340 1360,580 1440,500 L1440,900 L0,900 Z",
            "M0,480 C320,580 680,380 1000,540 C1320,700 1380,420 1440,460 L1440,900 L0,900 Z",
            "M0,520 C360,420 640,620 960,480 C1280,340 1360,580 1440,500 L1440,900 L0,900 Z",
          ] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          fill="url(#fallbackGlassYellow)"
        />
      </svg>

      {/* 3. Floating 2D Workspace on the Right */}
      <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 w-full max-w-lg hidden md:flex items-center justify-center">
        <motion.div
          animate={isReducedMotion ? {} : { y: [0, -8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-80 sm:w-96 rounded-2xl bg-[#2A103D]/90 backdrop-blur-xl border border-[#FFC928]/40 shadow-2xl p-3 flex flex-col justify-between"
        >
          {/* Laptop Screen Preview */}
          <div className="rounded-xl bg-gradient-to-br from-[#2D0A4E] via-[#420F6B] to-[#1F0538] border border-white/10 p-3 text-left space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-gradient-to-r from-[#D7264D] to-[#FFC928] text-white">
                  PR VISION
                </span>
                <span className="text-[7px] text-amber-200/80 font-mono">Sangola Studio</span>
              </div>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              </div>
            </div>

            <div>
              <span className="text-[7px] font-bold text-[#FFC928] uppercase tracking-wider block">
                ★ 3D Glass Environment
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold text-white leading-tight block mt-0.5">
                Building Digital Experiences That Move Businesses
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className="p-1 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[6px] text-[#FFC928] font-mono block">Web Apps</span>
                <span className="text-[8px] font-bold text-white">100% Custom</span>
              </div>
              <div className="p-1 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[6px] text-[#FFC928] font-mono block">Mobile App</span>
                <span className="text-[8px] font-bold text-white">iOS & Android</span>
              </div>
              <div className="p-1 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[6px] text-[#D7264D] font-mono block">UI/UX</span>
                <span className="text-[8px] font-bold text-white">Figma Ready</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroVisualFallback;
