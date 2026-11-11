import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, FileCode2, Palette, Code2, Rocket, CheckCircle2, Activity } from "lucide-react";

/**
 * Animated Interactive Workflow Pipeline Visual for Process Section
 * Strictly styled in Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029).
 */
export function WorkflowPipelineVisual({ activeStep, onSelectStep }) {
  const steps = [
    { num: "01", name: "Discover", icon: Compass, deliverable: "Requirements Brief & Tech Scope" },
    { num: "02", name: "Plan", icon: FileCode2, deliverable: "Architecture Spec & Component Schema" },
    { num: "03", name: "Design", icon: Palette, deliverable: "Figma Tokens & Interactive UI Mockups" },
    { num: "04", name: "Develop", icon: Code2, deliverable: "React 19, Tailwind CSS & Modular Components" },
    { num: "05", name: "Deliver", icon: Rocket, deliverable: "Lighthouse 100, CI/CD & Production Launch" },
  ];

  const currentIdx = activeStep ? steps.findIndex((s) => s.num === activeStep) : 0;
  const activeData = steps[currentIdx >= 0 ? currentIdx : 0];

  return (
    <div className="w-full mb-12 p-6 sm:p-8 rounded-3xl bg-white relative overflow-hidden border border-[#393F4B]/10 shadow-sm">
      {/* Top Workflow Status Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-[#393F4B]/10 relative z-10">
        <div className="flex items-center gap-2.5">
          <Activity className="w-4 h-4 text-[#910029]" strokeWidth={1.8} />
          <span className="text-xs font-bold uppercase tracking-wider text-[#393F4B] font-mono">
            Interactive Engineering Pipeline
          </span>
        </div>
        <span className="text-xs text-[#393F4B]/70 font-mono">
          Stage <strong className="text-[#910029] font-bold">{activeData.num} of 05</strong>: {activeData.name}
        </span>
      </div>

      {/* Connected Interactive Stage Nodes */}
      <div className="relative py-8 sm:py-10">
        {/* Continuous Pipeline Track */}
        <div className="absolute top-1/2 left-8 right-8 h-1 bg-[#393F4B]/10 -translate-y-1/2 z-0 rounded-full overflow-hidden">
          {/* Moving Laser Beam in Deep Burgundy */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-[#910029] rounded-full"
          />
        </div>

        {/* 5 Stage Nodes */}
        <div className="relative z-10 flex items-center justify-between">
          {steps.map((s) => {
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs ${
                    isSelected
                      ? "bg-[#910029]/10 border-2 border-[#910029] text-[#910029]"
                      : "bg-[#ECF4F7] border border-[#393F4B]/15 text-[#393F4B]/60 group-hover:text-[#910029] group-hover:border-[#910029]/30"
                  }`}
                >
                  <StepIcon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />
                </motion.div>

                {/* Stage Title */}
                <span
                  className={`mt-2.5 text-[11px] sm:text-xs font-bold tracking-tight transition-colors ${
                    isSelected ? "text-[#910029]" : "text-[#393F4B]/80 group-hover:text-[#393F4B]"
                  }`}
                >
                  {s.name}
                </span>
                <span className="text-[9px] font-mono text-[#393F4B]/50">Step {s.num}</span>
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
          className="pt-5 border-t border-[#393F4B]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#393F4B]/80 relative z-10"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#910029] shrink-0" strokeWidth={1.8} />
            <span>
              Primary Milestone Output: <strong className="text-[#393F4B]">{activeData.deliverable}</strong>
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#910029] bg-[#910029]/10 border border-[#910029]/25 px-2.5 py-1 rounded-lg">
            Zero Guesswork • Verified Quality Gates
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default WorkflowPipelineVisual;
