import React from "react";
import { motion } from "framer-motion";

/**
 * Service 3: UI/UX Design Visual
 * Layered design artboards in Pure Black with Electric Blue and Crimson accents.
 */
export function UiUxLayersVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-[#0A0A0D] border border-white/10 p-3 shadow-sm overflow-hidden flex items-center justify-between group-hover:border-[#1677FF]/40 transition-all duration-300">
      {/* Ambient blue glow */}
      <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-[#1677FF]/12 blur-xl pointer-events-none" />

      {/* Layered Floating Canvas Artboards */}
      <div className="relative w-36 h-28 flex items-center justify-center">
        {/* Bottom Layer */}
        <motion.div
          animate={{ rotate: [-3, -1, -3], y: [4, 2, 4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-28 h-20 rounded-xl bg-black/80 border border-white/10 p-1.5 shadow-xs"
        >
          <div className="w-full h-full border border-dashed border-white/20 rounded-lg flex items-center justify-center text-[7px] text-[#A1A1AA] font-mono">
            Grid 8pt
          </div>
        </motion.div>

        {/* Middle Layer */}
        <motion.div
          animate={{ rotate: [2, 4, 2], y: [-2, 0, -2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-30 h-22 rounded-xl bg-[#0A0A0D] border border-[#1677FF]/40 p-2 shadow-md flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold text-white">Design Tokens</span>
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
              <span className="w-2 h-2 rounded-full bg-[#287BFF]" />
              <span className="w-2 h-2 rounded-full bg-[#B5122A]" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[7px] text-[#A1A1AA]">
              <span>Typography</span>
              <span className="font-semibold text-[#287BFF]">Plus Jakarta</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-[#1677FF] to-[#B5122A]" />
            </div>
          </div>
        </motion.div>

        {/* Top Floating Cursor */}
        <motion.div
          animate={{ x: [10, 20, 10], y: [-15, -5, -15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-10 px-1.5 py-0.5 rounded-md bg-black border border-white/20 text-white text-[7px] font-mono shadow-md flex items-center gap-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF]" />
          <span>Figma</span>
        </motion.div>
      </div>

      {/* Right Column: Mini Metric Tokens */}
      <div className="space-y-1.5 text-right font-mono text-[8px] pr-1">
        <div className="px-2 py-1 rounded-md bg-black/60 border border-white/10 text-white font-semibold">
          WCAG AAA
        </div>
        <div className="px-2 py-1 rounded-md bg-[#1677FF]/15 border border-[#1677FF]/30 text-[#287BFF] font-semibold">
          Wireframe
        </div>
        <div className="px-2 py-1 rounded-md bg-[#B5122A]/15 border border-[#B5122A]/30 text-[#FF4D4F] font-semibold">
          Figma Ready
        </div>
      </div>
    </div>
  );
}

export default UiUxLayersVisual;
