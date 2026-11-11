import React from "react";
import { motion } from "framer-motion";

/**
 * Service 2: Mobile Development Visual
 * Smartphone mockup in Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029).
 */
export function MobileDeviceVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-[#ECF4F7] border border-[#393F4B]/10 p-3 shadow-xs overflow-hidden flex items-center justify-center group-hover:border-[#910029]/30 transition-all duration-300">
      {/* Floating Modern Smartphone Frame */}
      <div className="relative w-36 h-[120px] rounded-[18px] bg-white p-1.5 shadow-md border border-[#393F4B]/15 flex flex-col justify-between">
        {/* Dynamic Island */}
        <div className="w-10 h-2 mx-auto rounded-full bg-[#393F4B] flex items-center justify-center gap-1 z-10">
          <span className="w-1 h-1 rounded-full bg-[#910029]" />
        </div>

        {/* Screen Content */}
        <div className="relative flex-1 my-1 rounded-[12px] bg-[#ECF4F7] p-1.5 flex flex-col justify-between overflow-hidden border border-[#393F4B]/10">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold text-[#393F4B]">React Native</span>
            <span className="text-[7px] px-1 py-0.2 rounded-full bg-white text-[#910029] font-semibold border border-[#910029]/20">60 FPS</span>
          </div>

          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="p-1.5 rounded-md bg-white border border-[#393F4B]/10 shadow-xs space-y-1"
          >
            <div className="flex justify-between items-center text-[7px]">
              <span className="text-[#393F4B]/70">Cross-Platform</span>
              <span className="font-bold text-[#910029]">iOS &amp; Android</span>
            </div>
            <div className="w-full bg-[#ECF4F7] h-1 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: ["20%", "90%", "20%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="h-full bg-[#910029]"
              />
            </div>
          </motion.div>

          <div className="flex justify-around items-center pt-0.5">
            <span className="w-3 h-1 rounded-full bg-[#910029]" />
            <span className="w-3 h-1 rounded-full bg-[#393F4B]/20" />
            <span className="w-3 h-1 rounded-full bg-[#393F4B]/20" />
          </div>
        </div>

        {/* Home Indicator Bar */}
        <div className="w-10 h-0.5 mx-auto rounded-full bg-[#393F4B]/30" />
      </div>
    </div>
  );
}

export default MobileDeviceVisual;
