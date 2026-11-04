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
 * connected stages, moving gradient laser lines, and progressive milestone cards.
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
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
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
                  className={`rounded-3xl p-6 sm:p-7 glass-panel transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 cursor-pointer group ${
                    isSelected ? "ring-2 ring-[#4285FF] shadow-lg" : ""
                  }`}
                >
                  <div>
                    {/* Header: Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-bold font-mono text-slate-400 group-hover:text-[#4285FF] transition-colors">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-white/90 border border-white/80 flex items-center justify-center text-[#4285FF] group-hover:text-[#F04CBF] shadow-sm transition-colors">
                        <Icon className="w-5 h-5" strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* Step Title & Tagline */}
                    <h3 className="text-lg font-bold text-[#0F172A] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#A34DE0] uppercase tracking-wider mt-0.5">
                      {step.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-col gap-1.5">
                    {step.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-[11px] text-[#475569]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F04CBF] shrink-0" strokeWidth={1.8} />
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
