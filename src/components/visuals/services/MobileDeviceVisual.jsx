import React from "react";
import { motion } from "framer-motion";

/**
 * Service 2: Mobile Development Visual
 * Smartphone mockup in Pure Black with Electric Blue and Crimson accents.
 */
export function MobileDeviceVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-[#0A0A0D] border border-white/10 p-3 shadow-sm overflow-hidden flex items-center justify-center group-hover:border-[#1677FF]/40 transition-all duration-300">
      {/* Ambient blue glow */}
      <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#1677FF]/12 blur-xl pointer-events-none" />

      {/* Floating 3D-styled Smartphone Frame */}
      <div className="relative w-36 h-[120px] rounded-[18px] bg-[#050505] p-1.5 shadow-lg border border-white/15 flex flex-col justify-between">
        {/* Dynamic Island */}
        <div className="w-10 h-2 mx-auto rounded-full bg-black flex items-center justify-center gap-1 z-10 border border-white/05">
          <span className="w-1 h-1 rounded-full bg-[#1677FF]" />
          <span className="w-1.5 h-0.5 rounded-full bg-slate-700" />
        </div>

        {/* Screen Content */}
        <div className="relative flex-1 my-1 rounded-[12px] bg-[#0A0A0D] p-1.5 flex flex-col justify-between overflow-hidden border border-white/08">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold text-white">React Native</span>
            <span className="text-[7px] px-1 py-0.2 rounded-full bg-[#1677FF]/15 text-[#287BFF] font-semibold">60 FPS</span>
          </div>

          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="p-1 rounded-md bg-black/60 border border-white/10 shadow-xs space-y-0.5"
          >
            <div className="flex justify-between items-center text-[7px]">
              <span className="text-[#A1A1AA]">Cross-Platform</span>
              <span className="font-bold text-[#287BFF]">iOS &amp; Android</span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: ["20%", "90%", "20%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#1677FF] to-[#B5122A]"
              />
            </div>
          </motion.div>

          <div className="flex justify-around items-center pt-0.5">
            <span className="w-3 h-1 rounded-full bg-[#1677FF]" />
            <span className="w-3 h-1 rounded-full bg-white/20" />
            <span className="w-3 h-1 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Home Indicator Bar */}
        <div className="w-10 h-0.5 mx-auto rounded-full bg-slate-600" />
      </div>
    </div>
  );
}

export default MobileDeviceVisual;
