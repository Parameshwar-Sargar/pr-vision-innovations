import React from "react";
import { motion } from "framer-motion";
import { Monitor, Database, Workflow } from "lucide-react";

/**
 * Service 4: Full Stack Development Visual
 * Architecture pipeline in Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029).
 * Features standard Lucide React icons.
 */
export function FullStackVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-[#ECF4F7] border border-[#393F4B]/10 p-3 shadow-xs overflow-hidden flex items-center justify-between group-hover:border-[#910029]/30 transition-all duration-300">
      {/* Architecture Pipeline Flow */}
      <div className="w-full flex items-center justify-between gap-2 px-1">
        {/* Frontend Client Node */}
        <div className="w-24 p-2 rounded-xl bg-white border border-[#393F4B]/10 shadow-xs flex flex-col items-center text-center space-y-1">
          <div className="w-6 h-6 rounded-lg bg-[#910029]/10 text-[#910029] flex items-center justify-center border border-[#910029]/20 shadow-2xs">
            <Monitor className="w-3.5 h-3.5 text-[#910029]" strokeWidth={1.8} />
          </div>
          <span className="text-[8px] font-bold text-[#393F4B]">React Client</span>
          <span className="text-[7px] text-[#393F4B]/70 font-mono">Next / Vite</span>
        </div>

        {/* Connecting Data Pipeline */}
        <div className="flex-1 relative flex flex-col items-center justify-center my-auto">
          <div className="w-full h-1 bg-[#393F4B]/15 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-full bg-[#910029] rounded-full"
            />
          </div>
          <span className="mt-1 text-[7px] font-mono font-bold text-[#910029] px-1.5 py-0.2 rounded bg-white border border-[#910029]/25 flex items-center gap-1">
            <Workflow className="w-2.5 h-2.5 text-[#910029]" strokeWidth={1.8} />
            REST / GraphQL
          </span>
          <div className="w-full h-1 bg-[#393F4B]/15 rounded-full overflow-hidden relative mt-1">
            <motion.div
              animate={{ x: ["200%", "-100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-full bg-[#910029]/60 rounded-full"
            />
          </div>
        </div>

        {/* Backend & Database Node */}
        <div className="w-24 p-2 rounded-xl bg-white border border-[#393F4B]/10 shadow-xs flex flex-col items-center text-center space-y-1">
          <div className="w-6 h-6 rounded-lg bg-[#910029]/10 text-[#910029] flex items-center justify-center border border-[#910029]/20 shadow-2xs">
            <Database className="w-3.5 h-3.5 text-[#910029]" strokeWidth={1.8} />
          </div>
          <span className="text-[8px] font-bold text-[#393F4B]">PostgreSQL</span>
          <span className="text-[7px] text-[#393F4B]/70 font-mono">Node / Cloud</span>
        </div>
      </div>
    </div>
  );
}

export default FullStackVisual;
