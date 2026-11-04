import React from "react";
import { motion } from "framer-motion";

/**
 * 3D Perspective Browser & UI Mockup for Portfolio Projects
 * Renders tailored visual mockups with 3D tilt, realistic browser chrome, and project-specific interfaces
 */
export function ProjectPerspectiveMockup({ projectId }) {
  if (projectId === "nexus-analytics") {
    return (
      <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
        {/* Ambient Halo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#4285FF]/20 via-[#F04CBF]/15 to-transparent blur-2xl" />

        {/* 3D Perspective Browser Frame */}
        <motion.div
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.04, y: -6 }}
          style={{ transform: "perspective(900px) rotateX(8deg) rotateY(-6deg)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-[340px] h-44 sm:h-48 rounded-2xl bg-white/95 border border-white/90 shadow-xl p-3 flex flex-col justify-between"
        >
          {/* Browser Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
            </div>
            <span className="text-[9px] font-mono text-[#475569] bg-slate-100/90 px-2 py-0.5 rounded-full">
              app.nexus-intelligence.io
            </span>
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          </div>

          {/* Simulated SaaS Dashboard Interface */}
          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] text-[#475569] block">Total Processed Revenue</span>
                <span className="text-sm font-extrabold text-[#0F172A]">$148,920.00</span>
              </div>
              <span className="text-[10px] font-bold text-[#25D366] bg-[#25D366]/10 px-1.5 py-0.5 rounded-md">
                +24.6%
              </span>
            </div>

            {/* Simulated Live Bar Chart */}
            <div className="h-14 flex items-end gap-2 pt-1 border-b border-slate-100 pb-1">
              {[40, 65, 45, 85, 60, 95, 75, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-slate-100 rounded-t-sm h-full flex items-end overflow-hidden">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.08 }}
                    className="w-full bg-gradient-to-t from-[#4285FF] to-[#55DDE0] rounded-t-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center text-[8px] font-mono text-[#475569]">
            <span>Latency: 8ms</span>
            <span className="text-[#4285FF]">Live Streaming Active</span>
          </div>
        </motion.div>
      </div>
    );
  }

  if (projectId === "horizon-spaces") {
    return (
      <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
        {/* Ambient Halo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#8055D9]/20 via-[#F04CBF]/15 to-transparent blur-2xl" />

        <motion.div
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.04, y: -6 }}
          style={{ transform: "perspective(900px) rotateX(8deg) rotateY(6deg)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-[340px] h-44 sm:h-48 rounded-2xl bg-[#0F172A] border border-slate-700 shadow-xl p-3 flex flex-col justify-between text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[9px] text-slate-400">
            <span className="font-mono text-[#55DDE0]">3D Spatial Environment</span>
            <span>60 FPS WebGL</span>
          </div>

          {/* 3D Wireframe Room Grid */}
          <div className="relative h-20 rounded-xl overflow-hidden bg-gradient-to-b from-indigo-950/60 to-purple-950/60 border border-slate-800 flex items-center justify-center">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#55DDE0_1px,transparent_1px)] [background-size:12px_12px]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-xl border border-[#F04CBF] flex items-center justify-center shadow-[0_0_15px_rgba(240,76,191,0.4)]"
            >
              <div className="w-6 h-6 rounded-lg border border-[#55DDE0]" />
            </motion.div>
          </div>

          {/* Footer metrics */}
          <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
            <span>Apex Spatial Architecture</span>
            <span className="text-[#F04CBF]">Interactive Viewport</span>
          </div>
        </motion.div>
      </div>
    );
  }

  if (projectId === "solis-commerce") {
    return (
      <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
        {/* Ambient Halo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#55DDE0]/20 via-[#4285FF]/15 to-transparent blur-2xl" />

        <motion.div
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.04, y: -6 }}
          style={{ transform: "perspective(900px) rotateX(-6deg) rotateY(-6deg)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-[340px] h-44 sm:h-48 rounded-2xl bg-white/95 border border-white/90 shadow-xl p-3 flex flex-col justify-between"
        >
          {/* Browser Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
            </div>
            <span className="text-[9px] font-mono text-[#475569] bg-slate-100/90 px-2 py-0.5 rounded-full">
              store.solis-direct.com
            </span>
            <span className="text-[9px] font-bold text-[#4285FF]">Cart (2)</span>
          </div>

          {/* E-Commerce Product Spotlight */}
          <div className="flex items-center gap-3 my-auto">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#4285FF]/15 via-[#F04CBF]/15 to-[#FFD166]/20 border border-slate-100 flex items-center justify-center shadow-xs">
              <span className="text-xl">✨</span>
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-xs font-bold text-[#0F172A] block">Aura Wireless Pods</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-[#4285FF]">$279.00</span>
                <span className="text-[9px] line-through text-slate-400">$349.00</span>
              </div>
              <div className="w-full bg-[#25D366]/10 text-[#25D366] text-[8px] font-bold px-1.5 py-0.2 rounded text-center">
                Instant Sub-second Checkout
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[8px] font-mono text-[#475569]">
            <span>Fast Static Hydration</span>
            <span className="text-[#55DDE0] font-bold">100% Core Web Vitals</span>
          </div>
        </motion.div>
      </div>
    );
  }

  // veritas-cloud
  return (
    <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
      {/* Ambient Halo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4285FF]/20 via-[#8055D9]/20 to-transparent blur-2xl" />

      <motion.div
        whileHover={{ rotateX: 0, rotateY: 0, scale: 1.04, y: -6 }}
        style={{ transform: "perspective(900px) rotateX(-6deg) rotateY(6deg)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-[340px] h-44 sm:h-48 rounded-2xl bg-white/95 border border-white/90 shadow-xl p-3 flex flex-col justify-between"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[9px] font-bold text-[#0F172A] font-mono">Veritas SOC 2</span>
          </div>
          <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-[#4285FF]/10 text-[#4285FF] font-bold">
            Zero Incidents
          </span>
        </div>

        {/* Security Multi-node Mesh */}
        <div className="grid grid-cols-3 gap-2 my-auto">
          {["AP-South (Mumbai)", "EU-Central", "US-East"].map((region, idx) => (
            <div key={region} className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 text-center space-y-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mx-auto block" />
              <span className="text-[8px] font-bold text-[#0F172A] block truncate">{region}</span>
              <span className="text-[7px] text-[#475569] font-mono">Status: 200</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center text-[8px] font-mono text-[#475569]">
          <span>Encrypted Gateway (AES-256)</span>
          <span className="text-[#8055D9] font-bold">Audit Passed</span>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectPerspectiveMockup;
