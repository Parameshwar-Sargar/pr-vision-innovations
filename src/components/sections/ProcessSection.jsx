import React, { useState } from "react";
import { motion } from "framer-motion";
import { Compass, FileCode2, Palette, Code2, Rocket, CheckCircle2 } from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { processData } from "../../data/processData";
import { WorkflowPipelineVisual } from "../visuals/process/WorkflowPipelineVisual";

/**
 * Our Process Section
 * Step-by-step engineering roadmap with an animated interactive pipeline
 * in Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029).
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
    <section id="process" className="relative py-24 lg:py-32 bg-[#ECF4F7] overflow-hidden">
      <Container className="relative z-10">
        <SectionHeader
          badge="How We Work"
          badgeVariant="burgundy"
          title="A Structured, Transparent"
          titleAccent="Engineering Process"
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
                  className={`rounded-3xl p-6 sm:p-7 bg-white border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer group shadow-xs ${
                    isSelected
                      ? "border-[#910029] ring-2 ring-[#910029] shadow-md shadow-[#910029]/10"
                      : "border-[#393F4B]/10 hover:border-[#910029]/30 hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Header: Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-bold font-mono text-[#393F4B]/30 group-hover:text-[#910029] transition-colors">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-[#910029]/10 border border-[#910029]/20 flex items-center justify-center text-[#910029] group-hover:scale-105 shadow-xs transition-all">
                        <Icon className="w-5 h-5" strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* Step Title & Tagline */}
                    <h3 className="text-lg font-bold text-[#393F4B] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#910029] uppercase tracking-wider mt-0.5">
                      {step.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-[#393F4B]/80 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-6 pt-4 border-t border-[#393F4B]/10 flex flex-col gap-1.5">
                    {step.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-[11px] text-[#393F4B]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#910029] shrink-0" strokeWidth={1.8} />
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
