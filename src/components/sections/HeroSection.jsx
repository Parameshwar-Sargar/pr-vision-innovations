import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles, MapPin, Code2 } from "lucide-react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { EditorialHeroShowcase } from "../visuals/hero/EditorialHeroShowcase";

/**
 * Main Hero Section
 * Premium Three-Color Theme:
 * - Dominant background: Light Ice #ECF4F7
 * - Bold typography: Slate Charcoal #393F4B
 * - Accents & Primary CTA: Deep Burgundy #910029
 * - Right column: Premium 2D Editorial Digital Design Showcase (Zero 3D)
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
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#ECF4F7]"
    >
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (Cols 1-6) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Pill Badges with Official Brand Identity */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white text-[#393F4B] border border-[#393F4B]/15 shadow-xs select-none">
                <img
                  src="/assets/pr-vision-logo.jpg"
                  alt="PR VISION INNOVATIONS"
                  className="h-4.5 w-auto object-contain rounded-xs"
                />
                <span>PR VISION INNOVATIONS</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#393F4B] bg-white border border-[#393F4B]/15 shadow-xs select-none">
                <MapPin className="w-3.5 h-3.5 text-[#910029]" strokeWidth={1.8} />
                <span>Sangola, Maharashtra</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#393F4B] leading-[1.14]"
            >
              Building Digital Experiences That{" "}
              <span className="text-[#910029]">
                Move Businesses Forward.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-[#393F4B]/80 leading-relaxed max-w-xl font-normal"
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
              className="mt-10 sm:mt-12 pt-8 border-t border-[#393F4B]/10 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-lg"
            >
              <div>
                <div className="text-sm font-bold text-[#393F4B] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#910029]" strokeWidth={1.8} />
                  <span>Modern UI/UX</span>
                </div>
                <div className="text-xs text-[#393F4B]/70 mt-0.5">High visual polish</div>
              </div>

              <div>
                <div className="text-sm font-bold text-[#393F4B] flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-[#910029]" strokeWidth={1.8} />
                  <span>React &amp; Web</span>
                </div>
                <div className="text-xs text-[#393F4B]/70 mt-0.5">Modular architecture</div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-sm font-bold text-[#393F4B] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#910029] animate-pulse" />
                  <span>Independent</span>
                </div>
                <div className="text-xs text-[#393F4B]/70 mt-0.5">Direct collaboration</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium 2D Editorial Digital Design Showcase */}
          <div className="lg:col-span-6 w-full flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <EditorialHeroShowcase />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
