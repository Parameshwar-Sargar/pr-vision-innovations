import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Shield, HeartHandshake, MapPin, CheckCircle2 } from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { siteConfig } from "../../data/siteConfig";
import { DigitalNetworkVisual } from "../visuals/about/DigitalNetworkVisual";

/**
 * About Preview Section
 * Strictly Black (#050505 / #0A0A0D) with Electric Blue (#1677FF) and Deep Crimson (#B5122A) accents.
 */
export function AboutPreviewSection() {
  const principles = [
    {
      icon: Zap,
      title: "Precision Engineering",
      desc: "Clean, modular React and web code designed for speed, scalability, and long-term maintainability.",
      color: "text-[#1677FF]",
      bg: "bg-[#1677FF]/10",
      border: "border-[#1677FF]/30",
    },
    {
      icon: Target,
      title: "Bespoke Design",
      desc: "Every digital touchpoint is uniquely tailored to reflect your brand's voice and commercial goals.",
      color: "text-[#B5122A]",
      bg: "bg-[#B5122A]/10",
      border: "border-[#B5122A]/30",
    },
    {
      icon: HeartHandshake,
      title: "Direct Collaboration",
      desc: "Work directly with the builders. No cumbersome layers, transparent communication, and rapid iterations.",
      color: "text-[#1677FF]",
      bg: "bg-[#1677FF]/10",
      border: "border-[#1677FF]/30",
    },
    {
      icon: Shield,
      title: "Performance & Reliability",
      desc: "Fast load times, responsive mobile layouts, and modern web standards built into every deliverable.",
      color: "text-[#287BFF]",
      bg: "bg-[#287BFF]/10",
      border: "border-[#287BFF]/30",
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-[#050505]">
      <Container className="relative z-10">
        <SectionHeader
          badge="About Our Studio"
          badgeVariant="blue"
          title="An Emerging Independent"
          titleAccent="Digital Solutions Studio"
          description="Crafting modern, reliable web solutions with a focused engineering mindset."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Narrative Box (Cols 1-6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="p-8 sm:p-10 rounded-3xl glass-panel relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1677FF]">
                  <MapPin className="w-3.5 h-3.5 text-[#1677FF]" strokeWidth={1.8} />
                  <span>Headquartered in {siteConfig.location}</span>
                </div>
                <div className="h-8 w-auto flex items-center shrink-0">
                  <img
                    src="/assets/pr-vision-logo.jpg"
                    alt="PR VISION INNOVATIONS"
                    className="h-full w-auto object-contain rounded-md shadow-xs"
                  />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Dedicated to helping businesses establish an authentic, high-impact digital presence.
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-normal">
                PR VISION INNOVATIONS was founded to bridge the gap between creative visual design and robust web architecture. As an emerging independent studio, we take pride in delivering focused, tailored web experiences without the bloated processes of legacy agencies.
              </p>

              <p className="mt-3.5 text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-normal">
                Whether you are a growing enterprise needing a modern React application or a business launching its first high-converting website, we provide dedicated craftsmanship from day one.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-white font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" strokeWidth={1.8} />
                  <span>Modern React &amp; Tailwind</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B5122A] shrink-0" strokeWidth={1.8} />
                  <span>Responsive on all viewports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" strokeWidth={1.8} />
                  <span>Zero Bloat, High Speed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287BFF] shrink-0" strokeWidth={1.8} />
                  <span>Direct Communication</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Core Pillars (Cols 7-12) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-6 sm:p-7 rounded-2xl glass-panel hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${p.bg} ${p.border} border flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shadow-sm`}
                  >
                    <Icon className={`w-5 h-5 ${p.color}`} strokeWidth={1.8} />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#1677FF] transition-colors">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Unique Animated Digital Network Visual */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 lg:mt-16"
        >
          <DigitalNetworkVisual />
        </motion.div>
      </Container>
    </section>
  );
}

export default AboutPreviewSection;
