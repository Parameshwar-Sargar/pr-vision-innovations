import React from "react";
import { motion } from "framer-motion";

/**
 * 3D Perspective Browser & UI Mockup for Portfolio Projects
 * Strictly Pure Black (#050505 / #0A0A0D) with Electric Blue (#1677FF) and Crimson (#B5122A).
 */
export function ProjectPerspectiveMockup({ projectId }) {
  if (projectId === "nexus-analytics") {
    return (
      <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[#1677FF]/15 to-transparent blur-2xl" />

        <motion.div
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.04, y: -6 }}
          style={{ transform: "perspective(900px) rotateX(8deg) rotateY(-6deg)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-[340px] h-44 sm:h-48 rounded-2xl bg-[#0A0A0D] border border-white/10 shadow-xl p-3 flex flex-col justify-between"
        >
          {/* Browser Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#B5122A]" />
              <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
              <span className="w-2 h-2 rounded-full bg-[#287BFF]" />
            </div>
            <span className="text-[9px] font-mono text-[#A1A1AA] bg-black/60 px-2 py-0.5 rounded-full border border-white/05">
              app.nexus-intelligence.io
            </span>
            <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
          </div>

          {/* Simulated SaaS Dashboard Interface */}
          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] text-[#A1A1AA] block">Total Processed Revenue</span>
                <span className="text-sm font-extrabold text-white">$148,920.00</span>
              </div>
              <span className="text-[10px] font-bold text-[#287BFF] bg-[#1677FF]/15 px-1.5 py-0.5 rounded-md border border-[#1677FF]/30">
                +24.6%
              </span>
            </div>

            {/* Simulated Live Bar Chart */}
            <div className="h-14 flex items-end gap-2 pt-1 border-b border-white/10 pb-1">
              {[40, 65, 45, 85, 60, 95, 75, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-white/[0.05] rounded-t-sm h-full flex items-end overflow-hidden">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.08 }}
                    className="w-full bg-gradient-to-t from-[#1677FF] to-[#287BFF] rounded-t-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center text-[8px] font-mono text-[#A1A1AA]">
            <span>Latency: 8ms</span>
            <span className="text-[#287BFF]">Live Streaming Active</span>
          </div>
        </motion.div>
      </div>
    );
  }

  if (projectId === "horizon-spaces") {
    return (
      <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[#B5122A]/15 to-transparent blur-2xl" />

        <motion.div
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.04, y: -6 }}
          style={{ transform: "perspective(900px) rotateX(8deg) rotateY(6deg)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-[340px] h-44 sm:h-48 rounded-2xl bg-[#0A0A0D] border border-white/10 shadow-xl p-3 flex flex-col justify-between text-white"
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px] text-[#A1A1AA]">
            <span className="font-mono text-[#287BFF]">3D Spatial Environment</span>
            <span>60 FPS WebGL</span>
          </div>

          <div className="relative h-20 rounded-xl overflow-hidden bg-black/80 border border-white/10 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-xl border border-[#1677FF] flex items-center justify-center shadow-[0_0_15px_rgba(22,119,255,0.4)]"
            >
              <div className="w-6 h-6 rounded-lg border border-[#B5122A]" />
            </motion.div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-[#A1A1AA] font-mono">
            <span>Apex Spatial Architecture</span>
            <span className="text-[#287BFF]">Interactive Viewport</span>
          </div>
        </motion.div>
      </div>
    );
  }

  if (projectId === "solis-commerce") {
    return (
      <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[#1677FF]/15 to-transparent blur-2xl" />

        <motion.div
          whileHover={{ rotateX: 0, rotateY: 0, scale: 1.04, y: -6 }}
          style={{ transform: "perspective(900px) rotateX(-6deg) rotateY(-6deg)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-[340px] h-44 sm:h-48 rounded-2xl bg-[#0A0A0D] border border-white/10 shadow-xl p-3 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#B5122A]" />
              <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
              <span className="w-2 h-2 rounded-full bg-[#287BFF]" />
            </div>
            <span className="text-[9px] font-mono text-[#A1A1AA] bg-black/60 px-2 py-0.5 rounded-full border border-white/05">
              store.solis-direct.com
            </span>
            <span className="text-[9px] font-bold text-[#287BFF]">Cart (2)</span>
          </div>

          <div className="flex items-center gap-3 my-auto">
            <div className="w-16 h-16 rounded-xl bg-black/80 border border-white/10 flex items-center justify-center text-[#1677FF] text-xl">
              ⚡
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-xs font-bold text-white block">Aura Wireless Pods</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-[#287BFF]">$279.00</span>
                <span className="text-[9px] line-through text-[#A1A1AA]">$349.00</span>
              </div>
              <div className="w-full bg-[#1677FF]/15 text-[#287BFF] border border-[#1677FF]/30 text-[8px] font-bold px-1.5 py-0.2 rounded text-center">
                Instant Sub-second Checkout
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[8px] font-mono text-[#A1A1AA]">
            <span>Fast Static Hydration</span>
            <span className="text-[#287BFF] font-bold">100% Core Web Vitals</span>
          </div>
        </motion.div>
      </div>
    );
  }

  // veritas-cloud
  return (
    <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-radial from-[#B5122A]/15 to-transparent blur-2xl" />

      <motion.div
        whileHover={{ rotateX: 0, rotateY: 0, scale: 1.04, y: -6 }}
        style={{ transform: "perspective(900px) rotateX(-6deg) rotateY(6deg)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-[340px] h-44 sm:h-48 rounded-2xl bg-[#0A0A0D] border border-white/10 shadow-xl p-3 flex flex-col justify-between"
      >
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
            <span className="text-[9px] font-bold text-white font-mono">Veritas SOC 2</span>
          </div>
          <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-[#B5122A]/15 text-[#FF4D4F] border border-[#B5122A]/30 font-bold">
            Zero Incidents
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-auto">
          {["AP-South (Mumbai)", "EU-Central", "US-East"].map((region) => (
            <div key={region} className="p-1.5 rounded-lg bg-black/60 border border-white/10 text-center space-y-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] mx-auto block" />
              <span className="text-[8px] font-bold text-white block truncate">{region}</span>
              <span className="text-[7px] text-[#A1A1AA] font-mono">Status: 200</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center text-[8px] font-mono text-[#A1A1AA]">
          <span>Encrypted Gateway (AES-256)</span>
          <span className="text-[#287BFF] font-bold">Audit Passed</span>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectPerspectiveMockup;
