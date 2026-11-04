import React from "react";
import { motion } from "framer-motion";

/**
 * Service 3: UI/UX Design Visual
 * Layered design interface elements, floating artboards, color swatches, and bezier vectors
 */
export function UiUxLayersVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-gradient-to-br from-white/95 to-white/70 border border-white/90 p-3 shadow-sm overflow-hidden flex items-center justify-between group-hover:border-[#A34DE0]/40 transition-all duration-300">
      {/* Ambient violet glow */}
      <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-[#A34DE0]/15 blur-xl pointer-events-none" />

      {/* Layered Floating Canvas Artboards with 3D Depth */}
      <div className="relative w-36 h-28 flex items-center justify-center">
        {/* Bottom Layer: Grid Wireframe Artboard */}
        <motion.div
          animate={{ rotate: [-3, -1, -3], y: [4, 2, 4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-28 h-20 rounded-xl bg-slate-100/90 border border-slate-200/80 p-1.5 shadow-xs"
        >
          <div className="w-full h-full border border-dashed border-slate-300 rounded-lg flex items-center justify-center text-[7px] text-slate-400 font-mono">
            Grid 8pt
          </div>
        </motion.div>

        {/* Middle Layer: Components & Color Swatches */}
        <motion.div
          animate={{ rotate: [2, 4, 2], y: [-2, 0, -2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-30 h-22 rounded-xl bg-white/95 border border-[#A34DE0]/30 p-2 shadow-md flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold text-[#0F172A]">Design System</span>
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[#4285FF]" />
              <span className="w-2 h-2 rounded-full bg-[#F04CBF]" />
              <span className="w-2 h-2 rounded-full bg-[#55DDE0]" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[7px] text-[#475569]">
              <span>Typography</span>
              <span className="font-semibold text-[#A34DE0]">Plus Jakarta</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-[#4285FF] via-[#A34DE0] to-[#F04CBF]" />
            </div>
          </div>
        </motion.div>

        {/* Top Floating Vector Cursor & Anchor */}
        <motion.div
          animate={{ x: [10, 20, 10], y: [-15, -5, -15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-10 px-1.5 py-0.5 rounded-md bg-[#0F172A] text-white text-[7px] font-mono shadow-md flex items-center gap-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#55DDE0]" />
          <span>Vector Pen</span>
        </motion.div>
      </div>

      {/* Design Metrics Chips */}
      <div className="flex flex-col gap-1.5 text-[9px] font-mono text-[#475569] text-right">
        <span className="px-2 py-0.5 rounded-md bg-white border border-slate-100 shadow-xs">Figma Tokens</span>
        <span className="px-2 py-0.5 rounded-md bg-white border border-slate-100 shadow-xs">WCAG AAA</span>
        <span className="px-2 py-0.5 rounded-md bg-white border border-slate-100 shadow-xs text-[#A34DE0] font-semibold">Micro-Interactions</span>
      </div>
    </div>
  );
}

export default UiUxLayersVisual;
