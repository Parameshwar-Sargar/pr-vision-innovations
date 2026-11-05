import React from "react";
import { motion } from "framer-motion";

/**
 * Service 4: Full Stack Development Visual
 * Pure Black architecture pipeline with Electric Blue and Crimson data streams.
 */
export function FullStackVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-[#0A0A0D] border border-white/10 p-3 shadow-sm overflow-hidden flex items-center justify-between group-hover:border-[#1677FF]/40 transition-all duration-300">
      {/* Ambient blue glow */}
      <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-[#1677FF]/12 blur-xl pointer-events-none" />

      {/* Architecture Pipeline Flow */}
      <div className="w-full flex items-center justify-between gap-2 px-1">
        {/* Frontend Client Node */}
        <div className="w-24 p-2 rounded-xl bg-black/70 border border-white/10 shadow-sm flex flex-col items-center text-center space-y-1">
          <div className="w-5 h-5 rounded-lg bg-[#1677FF]/15 text-[#287BFF] flex items-center justify-center text-[9px] font-bold">
            UI
          </div>
          <span className="text-[8px] font-bold text-white">React Client</span>
          <span className="text-[7px] text-[#A1A1AA] font-mono">Next / Vite</span>
        </div>

        {/* Connecting Data Pipeline with Pulsing Laser */}
        <div className="flex-1 relative flex flex-col items-center justify-center my-auto">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              className="w-8 h-full bg-gradient-to-r from-transparent via-[#1677FF] to-[#287BFF] rounded-full"
            />
          </div>
          <span className="mt-1 text-[7px] font-mono font-bold text-[#287BFF] px-1.5 py-0.2 rounded bg-[#1677FF]/15 border border-[#1677FF]/30">
            REST / GraphQL
          </span>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative mt-1">
            <motion.div
              animate={{ x: ["200%", "-100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              className="w-8 h-full bg-gradient-to-r from-[#B5122A] via-[#8B0000] to-transparent rounded-full"
            />
          </div>
        </div>

        {/* Backend & Database Node */}
        <div className="w-24 p-2 rounded-xl bg-black/70 border border-white/10 shadow-sm flex flex-col items-center text-center space-y-1">
          <div className="w-5 h-5 rounded-lg bg-[#B5122A]/15 text-[#FF4D4F] flex items-center justify-center text-[9px] font-bold">
            DB
          </div>
          <span className="text-[8px] font-bold text-white">PostgreSQL</span>
          <span className="text-[7px] text-[#A1A1AA] font-mono">Node / Cloud</span>
        </div>
      </div>
    </div>
  );
}

export default FullStackVisual;
