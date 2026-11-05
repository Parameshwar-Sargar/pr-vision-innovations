import React from "react";
import { motion } from "framer-motion";

/**
 * 2D Responsive Full-Screen 3D Glass Fallback
 * Strictly uses Pure Black (#050505), Electric Blue (#1677FF), and Deep Crimson (#B5122A).
 */
export function HeroVisualFallback({ isReducedMotion = false }) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden bg-[#050505]">
      {/* 1. Subtle Blue & Crimson Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#1677FF]/12 blur-[160px]" />
      <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] rounded-full bg-[#B5122A]/10 blur-[150px]" />
      <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] rounded-full bg-[#1677FF]/10 blur-[160px]" />

      {/* 2. Layered Translucent Glass Waves */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fallbackGlassBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1677FF" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#287BFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#B5122A" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="fallbackGlassRed" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B5122A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1677FF" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <motion.path
          animate={isReducedMotion ? {} : { d: [
            "M0,320 C320,200 480,480 800,340 C1120,200 1280,420 1440,300 L1440,900 L0,900 Z",
            "M0,360 C280,450 520,240 840,380 C1160,520 1320,260 1440,340 L1440,900 L0,900 Z",
            "M0,320 C320,200 480,480 800,340 C1120,200 1280,420 1440,300 L1440,900 L0,900 Z",
          ] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          fill="url(#fallbackGlassBlue)"
        />

        <motion.path
          animate={isReducedMotion ? {} : { d: [
            "M0,520 C360,420 640,620 960,480 C1280,340 1360,580 1440,500 L1440,900 L0,900 Z",
            "M0,480 C320,580 680,380 1000,540 C1320,700 1380,420 1440,460 L1440,900 L0,900 Z",
            "M0,520 C360,420 640,620 960,480 C1280,340 1360,580 1440,500 L1440,900 L0,900 Z",
          ] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          fill="url(#fallbackGlassRed)"
        />
      </svg>

      {/* 3. Floating 2D Workspace on the Right */}
      <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 w-full max-w-lg hidden md:flex items-center justify-center">
        <motion.div
          animate={isReducedMotion ? {} : { y: [0, -8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-80 sm:w-96 rounded-2xl bg-[#0A0A0D]/95 backdrop-blur-xl border border-white/10 shadow-2xl p-3 flex flex-col justify-between"
        >
          {/* Laptop Screen Preview */}
          <div className="rounded-xl bg-[#050505] border border-white/10 p-3 text-left space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-[#1677FF] text-white">
                  PR VISION
                </span>
                <span className="text-[7px] text-[#A1A1AA] font-mono">Sangola Studio</span>
              </div>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              </div>
            </div>

            <div>
              <span className="text-[7px] font-bold text-[#1677FF] uppercase tracking-wider block">
                ★ 3D Digital Workspace
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold text-white leading-tight block mt-0.5">
                Building Digital Experiences That Move Businesses
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className="p-1 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[6px] text-[#287BFF] font-mono block">Web Apps</span>
                <span className="text-[8px] font-bold text-white">100% Custom</span>
              </div>
              <div className="p-1 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[6px] text-[#1677FF] font-mono block">Mobile Suite</span>
                <span className="text-[8px] font-bold text-white">iOS & Android</span>
              </div>
              <div className="p-1 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[6px] text-[#B5122A] font-mono block">UI/UX</span>
                <span className="text-[8px] font-bold text-white">Production</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroVisualFallback;
