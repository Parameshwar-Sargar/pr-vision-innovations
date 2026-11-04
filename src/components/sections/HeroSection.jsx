import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles, MapPin, Code2 } from "lucide-react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { Hero3DCanvas } from "../3d/Hero3DCanvas";

/**
 * Main Hero Section
 * Full-Screen 3D Glass Environment spanning edge-to-edge.
 * Features:
 * - Fluid 3D glass waves and ribbons in Rich Ruby Red (#D7264D), Golden Yellow (#FFC928), and Royal Purple (#7028C8).
 * - Central interactive 3D digital workspace ecosystem seamlessly integrated on the right.
 * - Pristine typography, contrast, and interactive buttons on the left.
 * - Approved official PR VISION INNOVATIONS brand logo preserved without modifications.
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
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-28 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#270942] via-[#160426] to-[#3B0930]"
    >
      {/* ========================================================
          FULL-SCREEN 3D GLASS ENVIRONMENT (EDGE-TO-EDGE)
          Spans the complete Hero section with undulating 3D glass,
          liquid ribbons, floating glass lenses, and workspace on right.
         ======================================================== */}
      <Hero3DCanvas />

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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-sm select-none">
                <img
                  src="/assets/pr-vision-logo.jpg"
                  alt="PR VISION INNOVATIONS"
                  className="h-4.5 w-auto object-contain rounded-xs"
                />
                <span>PR VISION INNOVATIONS</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-amber-200 bg-white/10 backdrop-blur-md border border-white/20 shadow-sm select-none">
                <MapPin className="w-3.5 h-3.5 text-[#FFC928]" strokeWidth={1.8} />
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
              <span className="bg-gradient-to-r from-[#FFC928] via-[#FF8A00] to-[#D7264D] bg-clip-text text-transparent drop-shadow-sm">
                Move Businesses Forward.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl font-normal"
            >
              We design and develop modern websites and digital solutions that help
              businesses establish a powerful online presence.
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
                className="w-full sm:w-auto !bg-gradient-to-r !from-[#D7264D] !via-[#FB8500] !to-[#FFC928] !text-white !shadow-[0_4px_25px_rgba(215,38,77,0.45)] hover:!brightness-110 !border-transparent font-semibold"
              >
                Explore Our Work
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                icon={MessageSquare}
                className="w-full sm:w-auto !bg-white/10 !backdrop-blur-md !text-white hover:!bg-white/20 !border-white/25 hover:!border-white/40 shadow-sm font-medium"
              >
                Let&apos;s Talk
              </Button>
            </motion.div>

            {/* Clean Micro Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-10 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-lg"
            >
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#FFC928]" strokeWidth={1.8} />
                  <span>Modern UI/UX</span>
                </div>
                <div className="text-xs text-amber-100/75 mt-0.5">High visual fidelity</div>
              </div>

              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-[#D7264D]" strokeWidth={1.8} />
                  <span>React &amp; Web</span>
                </div>
                <div className="text-xs text-amber-100/75 mt-0.5">Modular architecture</div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FFC928] animate-pulse" />
                  <span>Independent</span>
                </div>
                <div className="text-xs text-amber-100/75 mt-0.5">Direct collaboration</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Stage (Cols 7-12)
              Leaves an open, unconstrained viewport through which the 3D floating workspace shines unobstructed */}
          <div className="lg:col-span-6 relative w-full min-h-[380px] sm:min-h-[460px] lg:min-h-[580px] flex items-center justify-center pointer-events-none select-none" />
        </div>
      </Container>

      {/* Smooth bottom transition into the light body canvas */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent via-[#FAFBFF]/50 to-[#FAFBFF] pointer-events-none z-10" />
    </section>
  );
}

export default HeroSection;
