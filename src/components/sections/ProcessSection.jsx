import React, { useState } from "react";
import { motion } from "framer-motion";
import { Compass, FileCode2, Palette, Code2, Rocket, CheckCircle2 } from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { processData } from "../../data/processData";
import { WorkflowPipelineVisual } from "../visuals/process/WorkflowPipelineVisual";

/**
 * Our Process Section
 * Step-by-step engineering roadmap with an animated interactive pipeline,
 * connected stages, moving laser lines, and progressive milestone cards in Dark Cinematic styling.
 */
export function ProcessSection() {
  const [activeStep, setActiveStep] = useState("01");

  const iconComponents = {
    Compass: Compass,
    FileCode2: FileCode2,
    Palette: Palette,
    Code2: Code2,
    Rocket: Rocket,
  };

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      <Container className="relative z-10">
        <SectionHeader
          badge="How We Work"
          badgeVariant="blue"
          title="A Structured, Transparent"
          titleAccent="Engineering Process"
          accentVariant="blue"
          description="From initial concept to production rollout, we execute with clarity, discipline, and attention to detail."
        />

        {/* Unique Animated Workflow Pipeline Visual */}
        <WorkflowPipelineVisual activeStep={activeStep} onSelectStep={setActiveStep} />

        {/* Process Flow Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {processData.map((step, idx) => {
              const Icon = iconComponents[step.icon] || Compass;
              const isSelected = activeStep === step.step;

              return (
                <motion.div
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`rounded-3xl p-6 sm:p-7 bg-[#0A0A0D]/90 border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 cursor-pointer group ${
                    isSelected
                      ? "border-[#1677FF] ring-2 ring-[#1677FF] shadow-[0_0_25px_rgba(22,119,255,0.25)]"
                      : "border-white/10 hover:border-white/25"
                  }`}
                >
                  <div>
                    {/* Header: Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-bold font-mono text-[#A1A1AA]/60 group-hover:text-[#1677FF] transition-colors">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#1677FF] group-hover:text-[#287BFF] group-hover:border-[#1677FF]/40 shadow-sm transition-colors">
                        <Icon className="w-5 h-5" strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* Step Title & Tagline */}
                    <h3 className="text-lg font-bold text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#B5122A] uppercase tracking-wider mt-0.5">
                      {step.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-1.5">
                    {step.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-[11px] text-[#A1A1AA]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF] shrink-0" strokeWidth={1.8} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
