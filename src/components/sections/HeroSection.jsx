import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles, MapPin, Code2 } from "lucide-react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { Hero3DCanvas } from "../3d/Hero3DCanvas";

/**
 * Main Hero Section
 * Premium light theme with spacious, visually balanced two-column layout,
 * clean typography, and an unconstrained, fully-visible 3D geometric centerpiece.
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
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-28 flex items-center justify-center overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (Cols 1-6) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Pill Badges with Official Brand Identity */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/85 backdrop-blur-md text-[#0F172A] border border-white/90 shadow-sm select-none">
                <img
                  src="/assets/pr-vision-logo-mark.png"
                  alt="PR Vision Mark"
                  className="w-4 h-4 object-contain"
                />
                <span>PR VISION INNOVATIONS</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#475569] bg-white/80 backdrop-blur-md border border-white/90 shadow-sm select-none">
                <MapPin className="w-3.5 h-3.5 text-[#4285FF]" />
                <span>Sangola, Maharashtra</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0F172A] leading-[1.14]"
            >
              Building Digital Experiences That{" "}
              <span className="text-gradient-fluid">
                Move Businesses Forward.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl font-normal"
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
              className="mt-10 sm:mt-12 pt-8 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-lg"
            >
              <div>
                <div className="text-sm font-bold text-[#0F172A] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#4285FF]" />
                  <span>Modern UI/UX</span>
                </div>
                <div className="text-xs text-[#475569] mt-0.5">High visual fidelity</div>
              </div>

              <div>
                <div className="text-sm font-bold text-[#0F172A] flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-[#A34DE0]" />
                  <span>React &amp; Web</span>
                </div>
                <div className="text-xs text-[#475569] mt-0.5">Modular architecture</div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-sm font-bold text-[#0F172A] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#55DDE0]" />
                  <span>Independent</span>
                </div>
                <div className="text-xs text-[#475569] mt-0.5">Direct collaboration</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Visual Experience (Cols 7-12) - Fully Open & Uncropped */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative w-full flex items-center justify-center overflow-visible"
          >
            <Hero3DCanvas />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
