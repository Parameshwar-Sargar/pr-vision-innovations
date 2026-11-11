import React from "react";
import { motion } from "framer-motion";

/**
 * Service 1: Web Development Visual
 * Clean browser window in Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029).
 */
export function WebDevWindowVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-[#ECF4F7] border border-[#393F4B]/10 p-3 shadow-xs overflow-hidden flex flex-col justify-between group-hover:border-[#910029]/30 transition-all duration-300">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#393F4B]/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#393F4B]/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#910029]/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#910029]" />
        </div>
        <div className="flex-1 max-w-[170px] mx-2 px-2 py-0.5 rounded-md bg-white text-[10px] text-[#393F4B] font-mono truncate text-center flex items-center justify-center gap-1 border border-[#393F4B]/10">
          <span className="text-[#910029] font-bold">https://</span>
          <span>prvision.in</span>
        </div>
        <div className="text-[10px] font-mono text-[#910029] font-semibold">&lt;/&gt;</div>
      </div>

      {/* Simulated Website Layout & Code Snippet */}
      <div className="grid grid-cols-12 gap-2 my-auto">
        {/* Sidebar mockup */}
        <div className="col-span-3 space-y-1.5 p-1.5 rounded-lg bg-white border border-[#393F4B]/08">
          <div className="w-full h-2 rounded bg-[#910029]/40" />
          <div className="w-3/4 h-1.5 rounded bg-[#393F4B]/15" />
          <div className="w-1/2 h-1.5 rounded bg-[#393F4B]/15" />
        </div>

        {/* Main Content Area */}
        <div className="col-span-9 space-y-2 p-2 rounded-lg bg-white border border-[#393F4B]/10 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#393F4B]">&lt;HeroSection /&gt;</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#910029]/10 text-[#910029] font-mono font-medium">React 19</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 pt-0.5">
            <motion.div
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-5 rounded bg-[#ECF4F7] border border-[#910029]/25 flex items-center justify-center text-[8px] font-mono text-[#910029] font-medium"
            >
              Vite
            </motion.div>
            <motion.div
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2.5, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
              className="h-5 rounded bg-[#ECF4F7] border border-[#393F4B]/15 flex items-center justify-center text-[8px] font-mono text-[#393F4B]"
            >
              Tailwind
            </motion.div>
            <motion.div
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2.5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-5 rounded bg-[#ECF4F7] border border-[#910029]/25 flex items-center justify-center text-[8px] font-mono text-[#910029] font-medium"
            >
              TypeScript
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Info Pill */}
      <div className="flex items-center justify-between text-[9px] text-[#393F4B]/75 font-mono pt-1.5 border-t border-[#393F4B]/10">
        <span className="text-[#910029] font-medium">● Fast Build</span>
        <span>SEO Optimized</span>
      </div>
    </div>
  );
}

export default WebDevWindowVisual;
