import React from "react";
import { motion } from "framer-motion";

/**
 * Service 5: Maintenance & Cloud Operations Visual
 * Pure Black telemetry monitor with Electric Blue and Crimson heartbeat.
 */
export function SystemMonitorVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-[#0A0A0D] border border-white/10 p-3 shadow-sm overflow-hidden flex flex-col justify-between group-hover:border-[#1677FF]/40 transition-all duration-300">
      {/* Ambient blue glow */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#1677FF]/12 blur-xl pointer-events-none" />

      {/* Monitor Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
          <span className="text-[10px] font-bold text-white font-mono">System Health: Optimal</span>
        </div>
        <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#1677FF]/15 text-[#287BFF] border border-[#1677FF]/30">
          99.99% Uptime
        </span>
      </div>

      {/* Live Oscilloscope / Heartbeat Waveform */}
      <div className="relative h-12 my-auto flex items-center justify-center overflow-hidden">
        <svg className="w-full h-10" viewBox="0 0 300 40" fill="none">
          <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <motion.path
            d="M0,20 L40,20 L50,10 L60,30 L70,5 L80,35 L90,20 L150,20 L160,12 L170,28 L180,6 L190,34 L200,20 L300,20"
            stroke="url(#heartbeat-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathOffset: 0 }}
            animate={{ pathOffset: [0, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="heartbeat-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1677FF" />
              <stop offset="60%" stopColor="#287BFF" />
              <stop offset="100%" stopColor="#B5122A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Telemetry Stats Bar */}
      <div className="flex items-center justify-between text-[9px] text-[#A1A1AA] font-mono pt-1.5 border-t border-white/05">
        <span>Latency: <strong className="text-white">14ms</strong></span>
        <span>SSL: <strong className="text-[#287BFF]">TLS 1.3 Active</strong></span>
        <span>Backup: <strong className="text-[#B5122A]">Daily Encrypted</strong></span>
      </div>
    </div>
  );
}

export default SystemMonitorVisual;
