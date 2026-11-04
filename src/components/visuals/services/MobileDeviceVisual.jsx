import React from "react";
import { motion } from "framer-motion";

/**
 * Service 2: Mobile Development Visual
 * Elegant smartphone mockup with dynamic island, mobile app cards, and interactive ripples
 */
export function MobileDeviceVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-gradient-to-br from-white/95 to-white/70 border border-white/90 p-3 shadow-sm overflow-hidden flex items-center justify-center group-hover:border-[#F04CBF]/40 transition-all duration-300">
      {/* Ambient pink/purple glow */}
      <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#F04CBF]/15 blur-xl pointer-events-none" />

      {/* Floating 3D-styled Smartphone Frame */}
      <div className="relative w-36 h-[120px] rounded-[18px] bg-[#0F172A] p-1.5 shadow-lg border border-slate-300 flex flex-col justify-between">
        {/* Dynamic Island / Speaker Notch */}
        <div className="w-10 h-2 mx-auto rounded-full bg-black/90 flex items-center justify-center gap-1 z-10">
          <span className="w-1 h-1 rounded-full bg-[#55DDE0]" />
          <span className="w-1.5 h-0.5 rounded-full bg-slate-700" />
        </div>

        {/* Screen Content */}
        <div className="relative flex-1 my-1 rounded-[12px] bg-gradient-to-b from-[#F8FAFF] to-[#EEF3FF] p-1.5 flex flex-col justify-between overflow-hidden border border-white/60">
          {/* Header Card */}
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold text-[#0F172A]">React Native</span>
            <span className="text-[7px] px-1 py-0.2 rounded-full bg-[#F04CBF]/15 text-[#F04CBF] font-semibold">60 FPS</span>
          </div>

          {/* Mini Mobile App Card */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="p-1 rounded-md bg-white border border-slate-100 shadow-xs space-y-0.5"
          >
            <div className="flex justify-between items-center text-[7px]">
              <span className="text-[#475569]">Cross-Platform</span>
              <span className="font-bold text-[#4285FF]">iOS &amp; Android</span>
            </div>
            <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: ["20%", "90%", "20%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#4285FF] to-[#F04CBF]"
              />
            </div>
          </motion.div>

          {/* Navigation Bar Pills */}
          <div className="flex justify-around items-center pt-0.5">
            <span className="w-3 h-1 rounded-full bg-[#4285FF]" />
            <span className="w-3 h-1 rounded-full bg-slate-200" />
            <span className="w-3 h-1 rounded-full bg-slate-200" />
          </div>
        </div>

        {/* Home Indicator Bar */}
        <div className="w-10 h-0.5 mx-auto rounded-full bg-slate-400/80" />
      </div>

      {/* Floating App Badge Accents on the right */}
      <div className="ml-3 hidden sm:flex flex-col gap-1.5 text-[9px] font-mono text-[#475569]">
        <div className="px-2 py-0.5 rounded-md bg-white border border-slate-100 shadow-xs flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#55DDE0]" />
          <span>Flutter / RN</span>
        </div>
        <div className="px-2 py-0.5 rounded-md bg-white border border-slate-100 shadow-xs flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F04CBF]" />
          <span>Native Feel</span>
        </div>
      </div>
    </div>
  );
}

export default MobileDeviceVisual;
