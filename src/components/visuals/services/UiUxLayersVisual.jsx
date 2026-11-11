import React from "react";
import { motion } from "framer-motion";
import { MousePointer2, Palette, CheckCircle2 } from "lucide-react";

/**
 * Service 3: UI/UX Design Visual
 * Layered design artboards in Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029).
 * Features standard Lucide React icons.
 */
export function UiUxLayersVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-[#ECF4F7] border border-[#393F4B]/10 p-3 shadow-xs overflow-hidden flex items-center justify-between group-hover:border-[#910029]/30 transition-all duration-300">
      {/* Layered Floating Canvas Artboards */}
      <div className="relative w-36 h-28 flex items-center justify-center">
        {/* Bottom Layer */}
        <motion.div
          animate={{ rotate: [-3, -1, -3], y: [4, 2, 4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-28 h-20 rounded-xl bg-white border border-[#393F4B]/15 p-1.5 shadow-xs"
        >
          <div className="w-full h-full border border-dashed border-[#393F4B]/20 rounded-lg flex items-center justify-center text-[7px] text-[#393F4B]/70 font-mono">
            Grid 8pt
          </div>
        </motion.div>

        {/* Middle Layer */}
        <motion.div
          animate={{ rotate: [2, 4, 2], y: [-2, 0, -2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-30 h-22 rounded-xl bg-white border border-[#910029]/40 p-2 shadow-sm flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold text-[#393F4B] flex items-center gap-1">
              <Palette className="w-2.5 h-2.5 text-[#910029]" strokeWidth={1.8} />
              Tokens
            </span>
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[#910029]" />
              <span className="w-2 h-2 rounded-full bg-[#393F4B]" />
              <span className="w-2 h-2 rounded-full bg-[#ECF4F7] border border-[#393F4B]/20" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[7px] text-[#393F4B]/70">
              <span>Typography</span>
              <span className="font-semibold text-[#910029]">Space Grotesk</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[#ECF4F7] overflow-hidden">
              <div className="w-3/4 h-full bg-[#910029]" />
            </div>
          </div>
        </motion.div>

        {/* Top Floating Cursor */}
        <motion.div
          animate={{ x: [10, 20, 10], y: [-15, -5, -15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-10 px-1.5 py-0.5 rounded-md bg-[#393F4B] text-[#ECF4F7] text-[7px] font-mono shadow-sm flex items-center gap-1"
        >
          <MousePointer2 className="w-2.5 h-2.5 text-[#910029]" strokeWidth={1.8} />
          <span>Figma</span>
        </motion.div>
      </div>

      {/* Right Column: Mini Metric Tokens */}
      <div className="space-y-1.5 text-right font-mono text-[8px] pr-1">
        <div className="px-2 py-1 rounded-md bg-white border border-[#393F4B]/15 text-[#393F4B] font-semibold flex items-center justify-end gap-1">
          <CheckCircle2 className="w-2.5 h-2.5 text-[#910029]" strokeWidth={1.8} />
          <span>WCAG AAA</span>
        </div>
        <div className="px-2 py-1 rounded-md bg-[#910029]/10 border border-[#910029]/25 text-[#910029] font-semibold flex items-center justify-end gap-1">
          <Palette className="w-2.5 h-2.5 text-[#910029]" strokeWidth={1.8} />
          <span>Wireframe</span>
        </div>
        <div className="px-2 py-1 rounded-md bg-white border border-[#393F4B]/15 text-[#393F4B] font-semibold flex items-center justify-end gap-1">
          <CheckCircle2 className="w-2.5 h-2.5 text-[#393F4B]" strokeWidth={1.8} />
          <span>Figma Ready</span>
        </div>
      </div>
    </div>
  );
}

export default UiUxLayersVisual;
