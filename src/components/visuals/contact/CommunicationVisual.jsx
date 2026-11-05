import React from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles, Send, MessageSquare } from "lucide-react";

/**
 * Unique Communication Visual for Contact / CTA Section
 * Dark Cinematic identity with Electric Blue glow, Deep Crimson accents,
 * and high-contrast glass message bubbles.
 */
export function CommunicationVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto mb-10 h-64 sm:h-72 flex items-center justify-center overflow-visible select-none">
      {/* Radiant Background Halo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 sm:w-64 h-56 sm:h-64 rounded-full bg-gradient-to-tr from-[#1677FF]/20 via-[#B5122A]/15 to-transparent blur-3xl animate-pulse" />
      </div>

      {/* Floating 3D-Styled Central Letter / Envelope */}
      <motion.div
        animate={{ y: [0, -8, 0], rotateZ: [0, 1.5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 w-48 sm:w-56 h-32 sm:h-36 rounded-3xl bg-[#0A0A0D]/95 border border-white/10 shadow-2xl p-4 flex flex-col justify-between backdrop-blur-2xl"
      >
        {/* Envelope Top Flap Details */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#1677FF] to-[#287BFF] flex items-center justify-center text-white shadow-xs">
              <Mail className="w-3.5 h-3.5" strokeWidth={1.8} />
            </div>
            <span className="text-[10px] font-bold text-white font-mono">Inquiry Dispatch</span>
          </div>
          <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse shadow-[0_0_6px_#1677FF]" />
        </div>

        {/* Envelope Center Graphic: Wax Seal / Stamp */}
        <div className="my-auto flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1677FF] to-[#B5122A] p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center text-[10px] font-extrabold text-[#1677FF]">
              PR
            </div>
          </div>
        </div>

        {/* Envelope Address Footer */}
        <div className="flex justify-between items-center text-[8px] font-mono text-[#A1A1AA] pt-1.5 border-t border-white/10">
          <span>To: studio@prvision.in</span>
          <span className="text-[#1677FF] font-bold flex items-center gap-1">
            <span>Direct</span>
            <Send className="w-2.5 h-2.5" strokeWidth={1.8} />
          </span>
        </div>
      </motion.div>

      {/* Floating Message Bubble 1 (Incoming from User - Left) */}
      <motion.div
        animate={{ y: [-4, 4, -4], x: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 sm:left-4 top-4 z-30 max-w-[190px] sm:max-w-[210px] p-3 rounded-2xl bg-[#0A0A0D]/90 border border-white/10 shadow-lg backdrop-blur-xl text-left"
      >
        <div className="flex items-center gap-1.5 mb-1 text-[9px] text-[#A1A1AA]">
          <MessageSquare className="w-3 h-3 text-[#1677FF]" strokeWidth={1.8} />
          <span className="font-semibold text-white">Client Inquiry</span>
        </div>
        <p className="text-[10px] text-[#A1A1AA] leading-tight">
          &quot;We have an ambitious digital web project ready to build.&quot;
        </p>
      </motion.div>

      {/* Floating Message Bubble 2 (Studio Response - Right) */}
      <motion.div
        animate={{ y: [4, -4, 4], x: [2, -2, 2] }}
        transition={{ duration: 4.2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 sm:right-4 bottom-4 z-30 max-w-[200px] sm:max-w-[220px] p-3 rounded-2xl bg-[#0A0A0D]/90 border border-[#B5122A]/40 shadow-xl backdrop-blur-xl text-left"
      >
        <div className="flex items-center gap-1.5 mb-1 text-[9px] text-[#B5122A]">
          <Sparkles className="w-3 h-3 text-[#B5122A]" strokeWidth={1.8} />
          <span className="font-semibold text-white">PR VISION Studio</span>
        </div>
        <p className="text-[10px] text-white font-medium leading-tight">
          &quot;Let&apos;s engineer it with modern React, performance &amp; polish.&quot;
        </p>
      </motion.div>

      {/* Subtle Radiating Connection Waves */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-72 h-44 rounded-full border border-[#1677FF]/20 animate-ping opacity-25" />
      </div>
    </div>
  );
}

export default CommunicationVisual;
