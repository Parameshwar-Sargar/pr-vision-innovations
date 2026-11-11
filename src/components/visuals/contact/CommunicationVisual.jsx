import React from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles, Send, MessageSquare } from "lucide-react";

/**
 * Communication Visual for Contact / CTA Section
 * Strictly styled in Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029).
 */
export function CommunicationVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto mb-10 h-64 sm:h-72 flex items-center justify-center overflow-visible select-none">
      {/* Floating Central Letter / Envelope */}
      <motion.div
        animate={{ y: [0, -8, 0], rotateZ: [0, 1.2, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 w-48 sm:w-56 h-32 sm:h-36 rounded-3xl bg-white border border-[#393F4B]/15 shadow-xl p-4 flex flex-col justify-between"
      >
        {/* Envelope Top Flap Details */}
        <div className="flex items-center justify-between pb-2 border-b border-[#393F4B]/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#910029] flex items-center justify-center text-[#ECF4F7] shadow-xs">
              <Mail className="w-3.5 h-3.5" strokeWidth={1.8} />
            </div>
            <span className="text-[10px] font-bold text-[#393F4B] font-mono">Inquiry Dispatch</span>
          </div>
          <span className="w-2 h-2 rounded-full bg-[#910029] animate-pulse" />
        </div>

        {/* Envelope Center Graphic: Wax Seal / Stamp in Deep Burgundy */}
        <div className="my-auto flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-[#910029] p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#910029] flex items-center justify-center text-[10px] font-extrabold text-[#ECF4F7] font-mono border border-white/20">
              PR
            </div>
          </div>
        </div>

        {/* Envelope Address Footer */}
        <div className="flex justify-between items-center text-[8px] font-mono text-[#393F4B]/70 pt-1.5 border-t border-[#393F4B]/10">
          <span>To: studio@prvision.in</span>
          <span className="text-[#910029] font-bold flex items-center gap-1">
            <span>Direct</span>
            <Send className="w-2.5 h-2.5" strokeWidth={1.8} />
          </span>
        </div>
      </motion.div>

      {/* Floating Message Bubble 1 (Incoming from User - Left) */}
      <motion.div
        animate={{ y: [-4, 4, -4], x: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 sm:left-4 top-4 z-30 max-w-[190px] sm:max-w-[210px] p-3 rounded-2xl bg-white border border-[#393F4B]/12 shadow-md text-left"
      >
        <div className="flex items-center gap-1.5 mb-1 text-[9px] text-[#393F4B]/70">
          <MessageSquare className="w-3 h-3 text-[#910029]" strokeWidth={1.8} />
          <span className="font-semibold text-[#393F4B]">Client Inquiry</span>
        </div>
        <p className="text-[10px] text-[#393F4B]/80 leading-tight">
          &quot;We have an ambitious digital web project ready to build.&quot;
        </p>
      </motion.div>

      {/* Floating Message Bubble 2 (Studio Response - Right) */}
      <motion.div
        animate={{ y: [4, -4, 4], x: [2, -2, 2] }}
        transition={{ duration: 4.2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 sm:right-4 bottom-4 z-30 max-w-[200px] sm:max-w-[220px] p-3 rounded-2xl bg-white border border-[#910029]/30 shadow-md text-left"
      >
        <div className="flex items-center gap-1.5 mb-1 text-[9px] text-[#910029]">
          <Sparkles className="w-3 h-3 text-[#910029]" strokeWidth={1.8} />
          <span className="font-semibold text-[#393F4B]">PR VISION Studio</span>
        </div>
        <p className="text-[10px] text-[#393F4B] font-medium leading-tight">
          &quot;Let&apos;s engineer it with modern React, performance &amp; polish.&quot;
        </p>
      </motion.div>
    </div>
  );
}

export default CommunicationVisual;
