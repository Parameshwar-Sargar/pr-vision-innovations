import React from "react";
import { motion } from "framer-motion";

/**
 * Service 1: Web Development Visual
 * Floating interactive browser window with URL bar, code tags, and dynamic layout columns
 */
export function WebDevWindowVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-gradient-to-br from-white/95 to-white/70 border border-white/90 p-3 shadow-sm overflow-hidden flex flex-col justify-between group-hover:border-[#4285FF]/40 transition-all duration-300">
      {/* Ambient background glow */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#4285FF]/15 blur-xl pointer-events-none" />

      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 max-w-[170px] mx-2 px-2 py-0.5 rounded-md bg-slate-100/80 text-[10px] text-[#475569] font-mono truncate text-center flex items-center justify-center gap-1">
          <span className="text-[#4285FF] font-bold">https://</span>
          <span>prvision.in</span>
        </div>
        <div className="text-[10px] font-mono text-[#4285FF] font-semibold">&lt;/&gt;</div>
      </div>

      {/* Simulated Website Layout & Interactive Code Snippet */}
      <div className="grid grid-cols-12 gap-2 my-auto">
        {/* Sidebar mockup */}
        <div className="col-span-3 space-y-1.5 p-1.5 rounded-lg bg-slate-50/80 border border-slate-100">
          <div className="w-full h-2 rounded bg-[#4285FF]/30" />
          <div className="w-3/4 h-1.5 rounded bg-slate-200" />
          <div className="w-1/2 h-1.5 rounded bg-slate-200" />
        </div>

        {/* Main Content Area */}
        <div className="col-span-9 space-y-2 p-2 rounded-lg bg-white border border-slate-100 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#0F172A]">&lt;HeroSection /&gt;</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#4285FF]/10 text-[#4285FF] font-mono">React 19</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 pt-0.5">
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-5 rounded bg-gradient-to-r from-[#4285FF]/20 to-[#55DDE0]/20 border border-[#4285FF]/20 flex items-center justify-center text-[8px] font-mono text-[#4285FF]"
            >
              Vite
            </motion.div>
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
              className="h-5 rounded bg-gradient-to-r from-[#A34DE0]/20 to-[#F04CBF]/20 border border-[#A34DE0]/20 flex items-center justify-center text-[8px] font-mono text-[#A34DE0]"
            >
              Tailwind
            </motion.div>
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-5 rounded bg-gradient-to-r from-[#F04CBF]/20 to-[#FFD166]/20 border border-[#F04CBF]/20 flex items-center justify-center text-[8px] font-mono text-[#F04CBF]"
            >
              Three.js
            </motion.div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between text-[9px] text-[#475569] font-mono pt-1 border-t border-slate-100">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
          <span>Production Build: Ready</span>
        </span>
        <span className="text-[#4285FF]">100/100 Lighthouse</span>
      </div>
    </div>
  );
}

export default WebDevWindowVisual;
