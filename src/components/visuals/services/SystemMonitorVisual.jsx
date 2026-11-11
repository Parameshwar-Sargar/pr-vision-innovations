import React from "react";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

/**
 * Service 5: Maintenance & Cloud Operations Visual
 * Telemetry monitor in Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029).
 * Features standard Lucide React icons.
 */
export function SystemMonitorVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-[#ECF4F7] border border-[#393F4B]/10 p-3 shadow-xs overflow-hidden flex flex-col justify-between group-hover:border-[#910029]/30 transition-all duration-300">
      {/* Monitor Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-[#393F4B]/10">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-[#910029]" strokeWidth={1.8} />
          <span className="text-[10px] font-bold text-[#393F4B] font-mono">System Health: Optimal</span>
        </div>
        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white text-[#910029] border border-[#910029]/25 flex items-center gap-1">
          <ShieldCheck className="w-2.5 h-2.5 text-[#910029]" strokeWidth={1.8} />
          99.99% Uptime
        </span>
      </div>

      {/* Live Oscilloscope Waveform in Deep Burgundy */}
      <div className="relative h-12 my-auto flex items-center justify-center overflow-hidden">
        <svg className="w-full h-10" viewBox="0 0 300 40" fill="none">
          <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(57, 63, 75, 0.12)" strokeWidth="1" strokeDasharray="4 4" />
          <motion.path
            d="M0,20 L40,20 L50,10 L60,30 L70,5 L80,35 L90,20 L150,20 L160,12 L170,28 L180,6 L190,34 L200,20 L300,20"
            stroke="#910029"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathOffset: 0 }}
            animate={{ pathOffset: [0, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Telemetry Stats Bar */}
      <div className="flex items-center justify-between text-[9px] text-[#393F4B]/70 font-mono pt-1.5 border-t border-[#393F4B]/10">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-[#393F4B]/60" strokeWidth={1.8} />
          <span>14ms</span>
        </span>
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-[#910029]" strokeWidth={1.8} />
          <span className="text-[#910029]">TLS 1.3</span>
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-[#393F4B]/60" strokeWidth={1.8} />
          <span>Daily Backup</span>
        </span>
      </div>
    </div>
  );
}

export default SystemMonitorVisual;
