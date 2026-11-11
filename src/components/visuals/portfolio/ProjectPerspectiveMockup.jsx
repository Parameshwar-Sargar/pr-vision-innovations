import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Activity,
  Radio,
  Building2,
  CheckCircle2,
  ShoppingCart,
  ShieldCheck,
  Lock,
  Server
} from "lucide-react";

/**
 * Clean Flat 2D Browser & UI Mockup for Portfolio Projects
 * Strictly styled in Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029).
 * 100% Flat 2D layout with standardized Lucide React icons.
 */
export function ProjectPerspectiveMockup({ projectId }) {
  if (projectId === "nexus-analytics") {
    return (
      <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-[340px] h-44 sm:h-48 rounded-2xl bg-white border border-[#393F4B]/15 shadow-md p-3 flex flex-col justify-between"
        >
          {/* Browser Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-[#393F4B]/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#393F4B]/30" />
              <span className="w-2 h-2 rounded-full bg-[#910029]/50" />
              <span className="w-2 h-2 rounded-full bg-[#910029]" />
            </div>
            <span className="text-[9px] font-mono text-[#393F4B] bg-[#ECF4F7] px-2 py-0.5 rounded-full border border-[#393F4B]/10 flex items-center gap-1">
              <Lock className="w-2.5 h-2.5 text-[#910029]" strokeWidth={1.8} />
              app.nexus-intelligence.io
            </span>
            <Activity className="w-3 h-3 text-[#910029]" strokeWidth={1.8} />
          </div>

          {/* SaaS Dashboard Interface */}
          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] text-[#393F4B]/70 block">Total Processed Volume</span>
                <span className="text-sm font-extrabold text-[#393F4B]">$148,920.00</span>
              </div>
              <span className="text-[10px] font-bold text-[#910029] bg-[#910029]/10 px-1.5 py-0.5 rounded-md border border-[#910029]/25">
                +24.6%
              </span>
            </div>

            {/* Live Bar Chart in Deep Burgundy */}
            <div className="h-14 flex items-end gap-2 pt-1 border-b border-[#393F4B]/10 pb-1">
              {[40, 65, 45, 85, 60, 95, 75, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-[#ECF4F7] rounded-t-sm h-full flex items-end overflow-hidden">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.08 }}
                    className="w-full bg-[#910029] rounded-t-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center text-[8px] font-mono text-[#393F4B]/70">
            <span className="flex items-center gap-1">
              <Activity className="w-3 h-3 text-[#393F4B]/60" strokeWidth={1.8} />
              Latency: 8ms
            </span>
            <span className="text-[#910029] font-semibold flex items-center gap-1">
              <Radio className="w-3 h-3 text-[#910029]" strokeWidth={1.8} />
              Live Streaming Active
            </span>
          </div>
        </motion.div>
      </div>
    );
  }

  if (projectId === "horizon-spaces") {
    return (
      <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-[340px] h-44 sm:h-48 rounded-2xl bg-white border border-[#393F4B]/15 shadow-md p-3 flex flex-col justify-between text-[#393F4B]"
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-[#393F4B]/10 text-[9px] text-[#393F4B]/70">
            <span className="font-mono text-[#910029] font-semibold flex items-center gap-1">
              <Building2 className="w-3 h-3 text-[#910029]" strokeWidth={1.8} />
              Architectural Showcase
            </span>
            <span>Ultra HD Fluid UI</span>
          </div>

          <div className="relative h-20 rounded-xl overflow-hidden bg-[#ECF4F7] border border-[#393F4B]/10 p-2 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[8px] font-semibold text-[#393F4B]/80">
              <span>Apex Residence Pavilion</span>
              <span className="text-[#910029] bg-[#910029]/10 px-1 rounded">Editorial View</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-9 rounded-md bg-white border border-[#393F4B]/10 flex items-center justify-center text-[7px] text-[#393F4B] font-bold">
                West Wing
              </div>
              <div className="h-9 rounded-md bg-[#910029]/10 border border-[#910029]/30 flex items-center justify-center text-[7px] text-[#910029] font-bold">
                Atrium
              </div>
              <div className="h-9 rounded-md bg-white border border-[#393F4B]/10 flex items-center justify-center text-[7px] text-[#393F4B] font-bold">
                Gallery
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-[#393F4B]/70 font-mono">
            <span className="flex items-center gap-1">
              <Building2 className="w-3 h-3 text-[#393F4B]/60" strokeWidth={1.8} />
              Apex Spatial Architecture
            </span>
            <span className="text-[#910029] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" strokeWidth={1.8} />
              Responsive Gallery
            </span>
          </div>
        </motion.div>
      </div>
    );
  }

  if (projectId === "solis-commerce") {
    return (
      <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-[340px] h-44 sm:h-48 rounded-2xl bg-white border border-[#393F4B]/15 shadow-md p-3 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#393F4B]/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#393F4B]/30" />
              <span className="w-2 h-2 rounded-full bg-[#910029]/50" />
              <span className="w-2 h-2 rounded-full bg-[#910029]" />
            </div>
            <span className="text-[9px] font-mono text-[#393F4B] bg-[#ECF4F7] px-2 py-0.5 rounded-full border border-[#393F4B]/10 flex items-center gap-1">
              <Lock className="w-2.5 h-2.5 text-[#910029]" strokeWidth={1.8} />
              store.solis-direct.com
            </span>
            <span className="text-[9px] font-bold text-[#910029] flex items-center gap-1">
              <ShoppingCart className="w-3 h-3 text-[#910029]" strokeWidth={1.8} />
              Cart (2)
            </span>
          </div>

          <div className="flex items-center gap-3 my-auto">
            <div className="w-16 h-16 rounded-xl bg-[#ECF4F7] border border-[#393F4B]/15 flex items-center justify-center shadow-xs">
              <Zap className="w-7 h-7 text-[#910029]" strokeWidth={1.8} />
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-xs font-bold text-[#393F4B] block">Aura Wireless Pods</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-[#910029]">$279.00</span>
                <span className="text-[9px] line-through text-[#393F4B]/40">$349.00</span>
              </div>
              <div className="w-full bg-[#ECF4F7] text-[#910029] border border-[#910029]/25 text-[8px] font-bold px-1.5 py-0.5 rounded text-center">
                Instant Sub-second Checkout
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[8px] font-mono text-[#393F4B]/70">
            <span>Fast Static Hydration</span>
            <span className="text-[#910029] font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#910029]" strokeWidth={1.8} />
              100% Core Web Vitals
            </span>
          </div>
        </motion.div>
      </div>
    );
  }

  // veritas-cloud
  return (
    <div className="relative w-full h-full p-4 flex items-center justify-center overflow-hidden">
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-[340px] h-44 sm:h-48 rounded-2xl bg-white border border-[#393F4B]/15 shadow-md p-3 flex flex-col justify-between"
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#393F4B]/10">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#910029]" strokeWidth={1.8} />
            <span className="text-[9px] font-bold text-[#393F4B] font-mono">Veritas SOC 2</span>
          </div>
          <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-[#910029]/10 text-[#910029] border border-[#910029]/25 font-bold">
            Zero Incidents
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-auto">
          {["AP-South (Mumbai)", "EU-Central", "US-East"].map((region) => (
            <div key={region} className="p-1.5 rounded-lg bg-[#ECF4F7] border border-[#393F4B]/10 text-center space-y-1">
              <Server className="w-3.5 h-3.5 text-[#910029] mx-auto" strokeWidth={1.8} />
              <span className="text-[8px] font-bold text-[#393F4B] block truncate">{region}</span>
              <span className="text-[7px] text-[#393F4B]/70 font-mono">Status: 200</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center text-[8px] font-mono text-[#393F4B]/70">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#393F4B]/60" strokeWidth={1.8} />
            Encrypted Gateway (AES-256)
          </span>
          <span className="text-[#910029] font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-[#910029]" strokeWidth={1.8} />
            Audit Passed
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectPerspectiveMockup;
