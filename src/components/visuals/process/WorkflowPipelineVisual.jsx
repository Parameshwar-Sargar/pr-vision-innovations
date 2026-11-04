import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, FileCode2, Palette, Code2, Rocket, CheckCircle2 } from "lucide-react";

/**
 * Animated Interactive Workflow Pipeline Visual for Process Section
 * Features a moving gradient laser line, progressive stage nodes, and live milestone metrics
 */
export function WorkflowPipelineVisual({ activeStep, onSelectStep }) {
  const steps = [
    { num: "01", name: "Discover", icon: Compass, color: "#4285FF", deliverable: "Requirements Brief & Tech Scope" },
    { num: "02", name: "Plan", icon: FileCode2, color: "#8055D9", deliverable: "Architecture Spec & Component Schema" },
    { num: "03", name: "Design", icon: Palette, color: "#F04CBF", deliverable: "Figma Tokens & Interactive UI Mockups" },
    { num: "04", name: "Develop", icon: Code2, color: "#55DDE0", deliverable: "React 19, Tailwind CSS & 3D Integration" },
    { num: "05", name: "Deliver", icon: Rocket, color: "#FFD166", deliverable: "Lighthouse 100, CI/CD & Production Launch" },
  ];

  const currentIdx = activeStep ? steps.findIndex((s) => s.num === activeStep) : 0;
  const activeData = steps[currentIdx >= 0 ? currentIdx : 0];
  const Icon = activeData.icon;

  return (
    <div className="w-full mb-12 p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden border border-white/80 shadow-lg">
      {/* Ambient background light */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4285FF]/08 via-[#F04CBF]/06 to-[#FFD166]/08 pointer-events-none" />

      {/* Top Workflow Status Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-slate-200/60 relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-mono">
            Interactive Engineering Pipeline
          </span>
        </div>
        <span className="text-xs text-[#475569] font-mono">
          Stage <strong className="text-[#4285FF]">{activeData.num} of 05</strong>: {activeData.name}
        </span>
      </div>

      {/* Connected Interactive Stage Nodes with Moving Gradient Pulse */}
      <div className="relative py-8 sm:py-10">
        {/* Continuous Pipeline Track */}
        <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-200/70 -translate-y-1/2 z-0 rounded-full overflow-hidden">
          {/* Moving Gradient Laser Beam */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#4285FF] to-[#F04CBF] rounded-full"
          />
        </div>

        {/* 5 Stage Nodes */}
        <div className="relative z-10 flex items-center justify-between">
          {steps.map((s, idx) => {
            const isSelected = s.num === activeData.num;
            const StepIcon = s.icon;

            return (
              <button
                key={s.num}
                onClick={() => onSelectStep && onSelectStep(s.num)}
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                {/* Node Orb */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                    isSelected
                      ? "bg-white border-2 border-[#4285FF] shadow-[0_0_20px_rgba(66,133,255,0.4)] text-[#4285FF]"
                      : "bg-white/90 border border-slate-200/80 text-slate-400 group-hover:text-[#0F172A] group-hover:border-slate-300"
                  }`}
                >
                  <StepIcon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />
                </motion.div>

                {/* Stage Title */}
                <span
                  className={`mt-2.5 text-[11px] sm:text-xs font-bold tracking-tight transition-colors ${
                    isSelected ? "text-[#4285FF]" : "text-[#475569] group-hover:text-[#0F172A]"
                  }`}
                >
                  {s.name}
                </span>
                <span className="text-[9px] font-mono text-slate-400">Step {s.num}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Live Milestone Callout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeData.num}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="pt-5 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569] relative z-10"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" strokeWidth={1.8} />
            <span>
              Primary Milestone Output: <strong className="text-[#0F172A]">{activeData.deliverable}</strong>
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#A34DE0] bg-[#A34DE0]/10 px-2.5 py-1 rounded-lg">
            Zero Guesswork • Verified Quality Gates
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default WorkflowPipelineVisual;
