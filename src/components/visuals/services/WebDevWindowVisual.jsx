import React from "react";
import { motion } from "framer-motion";

/**
 * Service 1: Web Development Visual
 * Dark black glass browser window with Electric Blue and Crimson accents.
 */
export function WebDevWindowVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-[#0A0A0D] border border-white/10 p-3 shadow-sm overflow-hidden flex flex-col justify-between group-hover:border-[#1677FF]/40 transition-all duration-300">
      {/* Ambient background glow */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#1677FF]/15 blur-xl pointer-events-none" />

      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B5122A]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#1677FF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#287BFF]" />
        </div>
        <div className="flex-1 max-w-[170px] mx-2 px-2 py-0.5 rounded-md bg-white/[0.05] text-[10px] text-[#A1A1AA] font-mono truncate text-center flex items-center justify-center gap-1">
          <span className="text-[#1677FF] font-bold">https://</span>
          <span>prvision.in</span>
        </div>
        <div className="text-[10px] font-mono text-[#287BFF] font-semibold">&lt;/&gt;</div>
      </div>

      {/* Simulated Website Layout & Interactive Code Snippet */}
      <div className="grid grid-cols-12 gap-2 my-auto">
        {/* Sidebar mockup */}
        <div className="col-span-3 space-y-1.5 p-1.5 rounded-lg bg-white/[0.04] border border-white/05">
          <div className="w-full h-2 rounded bg-[#1677FF]/40" />
          <div className="w-3/4 h-1.5 rounded bg-white/20" />
          <div className="w-1/2 h-1.5 rounded bg-white/20" />
        </div>

        {/* Main Content Area */}
        <div className="col-span-9 space-y-2 p-2 rounded-lg bg-black/60 border border-white/10 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-white">&lt;HeroSection /&gt;</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#1677FF]/15 text-[#287BFF] font-mono">React 19</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 pt-0.5">
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-5 rounded bg-[#1677FF]/15 border border-[#1677FF]/30 flex items-center justify-center text-[8px] font-mono text-[#287BFF]"
            >
              Vite
            </motion.div>
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
              className="h-5 rounded bg-[#B5122A]/15 border border-[#B5122A]/30 flex items-center justify-center text-[8px] font-mono text-[#FF4D4F]"
            >
              Tailwind
            </motion.div>
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-5 rounded bg-white/[0.05] border border-white/10 flex items-center justify-center text-[8px] font-mono text-[#A1A1AA]"
            >
              Three.js
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Info Pill */}
      <div className="flex items-center justify-between text-[9px] text-[#A1A1AA] font-mono pt-1.5 border-t border-white/05">
        <span className="text-[#287BFF]">● Fast Build</span>
        <span>SEO Optimized</span>
      </div>
    </div>
  );
}

export default WebDevWindowVisual;
