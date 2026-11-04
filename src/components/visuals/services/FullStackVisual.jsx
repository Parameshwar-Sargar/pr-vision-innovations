import React from "react";
import { motion } from "framer-motion";

/**
 * Service 4: Full Stack Development Visual
 * Connected frontend interface, API pipeline with data pulses, and backend database stack
 */
export function FullStackVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-gradient-to-br from-white/95 to-white/70 border border-white/90 p-3 shadow-sm overflow-hidden flex items-center justify-between group-hover:border-[#4285FF]/40 transition-all duration-300">
      {/* Ambient electric blue / cyan glow */}
      <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-[#55DDE0]/15 blur-xl pointer-events-none" />

      {/* Architecture Pipeline Flow */}
      <div className="w-full flex items-center justify-between gap-2 px-1">
        {/* Frontend Client Node */}
        <div className="w-24 p-2 rounded-xl bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-1">
          <div className="w-5 h-5 rounded-lg bg-[#4285FF]/10 text-[#4285FF] flex items-center justify-center text-[9px] font-bold">
            UI
          </div>
          <span className="text-[8px] font-bold text-[#0F172A]">React Client</span>
          <span className="text-[7px] text-[#475569] font-mono">Next / Vite</span>
        </div>

        {/* Connecting Data Pipeline with Pulsing Laser */}
        <div className="flex-1 relative flex flex-col items-center justify-center my-auto">
          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              className="w-8 h-full bg-gradient-to-r from-transparent via-[#4285FF] to-[#55DDE0] rounded-full"
            />
          </div>
          <span className="mt-1 text-[7px] font-mono font-bold text-[#4285FF] px-1.5 py-0.2 rounded bg-[#4285FF]/10">
            REST / GraphQL
          </span>
          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative mt-1">
            <motion.div
              animate={{ x: ["200%", "-100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              className="w-8 h-full bg-gradient-to-r from-[#F04CBF] via-[#A34DE0] to-transparent rounded-full"
            />
          </div>
        </div>

        {/* Backend & Database Cylinders */}
        <div className="w-24 p-2 rounded-xl bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-1">
          <div className="w-5 h-5 rounded-lg bg-[#8055D9]/10 text-[#8055D9] flex items-center justify-center text-[9px] font-bold">
            DB
          </div>
          <span className="text-[8px] font-bold text-[#0F172A]">PostgreSQL</span>
          <span className="text-[7px] text-[#475569] font-mono">Node / Python</span>
        </div>
      </div>
    </div>
  );
}

export default FullStackVisual;
