import React from "react";
import { motion } from "framer-motion";

/**
 * Service 5: Maintenance & Cloud Operations Visual
 * Real-time system monitoring telemetry, heartbeat graph, radar sweep, and uptime gauge
 */
export function SystemMonitorVisual() {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-gradient-to-br from-white/95 to-white/70 border border-white/90 p-3 shadow-sm overflow-hidden flex flex-col justify-between group-hover:border-[#25D366]/40 transition-all duration-300">
      {/* Ambient green/cyan glow */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#25D366]/12 blur-xl pointer-events-none" />

      {/* Monitor Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[10px] font-bold text-[#0F172A] font-mono">System Health: Optimal</span>
        </div>
        <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#25D366]/10 text-[#25D366]">
          99.99% Uptime
        </span>
      </div>

      {/* Live Oscilloscope / Heartbeat Waveform */}
      <div className="relative h-12 my-auto flex items-center justify-center overflow-hidden">
        <svg className="w-full h-10" viewBox="0 0 300 40" fill="none">
          {/* Faint grid lines */}
          <line x1="0" y1="20" x2="300" y2="20" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
          {/* Animated Heartbeat ECG line */}
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
            <linearGradient id="heartbeat-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4285FF" />
              <stop offset="50%" stopColor="#25D366" />
              <stop offset="100%" stopColor="#55DDE0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Telemetry Stats Bar */}
      <div className="flex items-center justify-between text-[9px] text-[#475569] font-mono pt-1.5 border-t border-slate-100">
        <span>Latency: <strong className="text-[#0F172A]">14ms</strong></span>
        <span>SSL: <strong className="text-[#4285FF]">TLS 1.3 Active</strong></span>
        <span>Backup: <strong className="text-[#25D366]">Automated</strong></span>
      </div>
    </div>
  );
}

export default SystemMonitorVisual;
