import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles, MapPin, Code2 } from "lucide-react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { Hero3DCanvas } from "../3d/Hero3DCanvas";

/**
 * Main Hero Section
 * Premium Black, Blue & Dark Red Theme.
 * Features:
 * - Pure Black background (#050505).
 * - Full-screen 3D black glass environment with subtle particle network and lines.
 * - Central interactive 3D digital workspace ecosystem on the right.
 * - Bold white typography with refined Blue-to-Dark-Red gradient accent.
 * - Electric Blue primary CTA button and transparent black secondary button.
 * - Original PR VISION INNOVATIONS logo asset preserved without modifications.
 */
export function HeroSection() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] pt-32 pb-20 lg:pt-36 lg:pb-28 flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* ========================================================
          FULL-SCREEN 3D CINEMATIC BACKGROUND (EDGE-TO-EDGE)
          Black glass, subtle particle network, and digital workspace.
         ======================================================== */}
      <Hero3DCanvas />

      {/* Subtle Atmospheric Light Sheen */}
      <div className="absolute inset-0 pointer-events-none -z-5">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1677FF]/10 blur-[150px]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#B5122A]/08 blur-[160px]" />
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-[#1677FF]/08 blur-[150px]" />
      </div>

      {/* Foreground Content Layer */}
      <Container className="relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (Cols 1-6) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left pointer-events-auto">
            {/* Pill Badges with Official Brand Identity */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#0A0A0D]/90 backdrop-blur-xl text-white border border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.5)] select-none">
                <img
                  src="/assets/pr-vision-logo.jpg"
                  alt="PR VISION INNOVATIONS"
                  className="h-4.5 w-auto object-contain rounded-xs"
                />
                <span>PR VISION INNOVATIONS</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#A1A1AA] bg-[#0A0A0D]/90 backdrop-blur-xl border border-white/10 shadow-sm select-none">
                <MapPin className="w-3.5 h-3.5 text-[#1677FF]" strokeWidth={1.8} />
                <span>Sangola, Maharashtra</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.14]"
            >
              Building Digital Experiences That{" "}
              <span className="text-gradient-blue-red drop-shadow-[0_2px_18px_rgba(22,119,255,0.35)]">
                Move Businesses Forward.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl font-normal"
            >
              We design and develop modern websites and digital solutions that help
              businesses establish a powerful online presence with pure engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                href="#portfolio"
                onClick={(e) => handleScrollTo(e, "portfolio")}
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Explore Our Work
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                icon={MessageSquare}
                className="w-full sm:w-auto"
              >
                Let&apos;s Talk
              </Button>
            </motion.div>

            {/* Clean Micro Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-10 sm:mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-lg"
            >
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#1677FF]" strokeWidth={1.8} />
                  <span>Modern UI/UX</span>
                </div>
                <div className="text-xs text-[#A1A1AA] mt-0.5">High visual polish</div>
              </div>

              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-[#B5122A]" strokeWidth={1.8} />
                  <span>React &amp; Web</span>
                </div>
                <div className="text-xs text-[#A1A1AA] mt-0.5">Modular architecture</div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
                  <span>Independent</span>
                </div>
                <div className="text-xs text-[#A1A1AA] mt-0.5">Direct collaboration</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Stage (Cols 7-12) */}
          <div className="lg:col-span-6 relative w-full min-h-[380px] sm:min-h-[460px] lg:min-h-[580px] flex items-center justify-center pointer-events-none select-none" />
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
