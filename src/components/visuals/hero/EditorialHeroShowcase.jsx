import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Sparkles,
  ArrowUpRight,
  Lock,
  Layers,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Monitor,
  Palette,
  Wifi
} from "lucide-react";

/**
 * EditorialHeroShowcase
 * 
 * Premium 2D Editorial Digital Design Showcase for PR VISION INNOVATIONS Hero Section.
 * Strictly 2D HTML/CSS and SVG composition — ZERO 3D transforms, perspective, or simulated 3D.
 * 
 * Color Palette:
 * - Light Ice: #ECF4F7 (Dominant background & surface tint)
 * - Slate Charcoal: #393F4B (Primary typography & structural elements)
 * - Deep Burgundy: #910029 (Accent color, badges, button highlights)
 */
export function EditorialHeroShowcase() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:max-w-none py-6 sm:py-8 select-none">
      {/* 1. Subtle Burgundy Abstract Curved Graphic Behind Panels */}
      <div className="absolute inset-0 -top-6 -bottom-6 -left-6 -right-6 pointer-events-none overflow-hidden flex items-center justify-center">
        <svg
          viewBox="0 0 600 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-w-[620px] max-h-[540px] opacity-90 transition-transform duration-700"
        >
          {/* Soft Flat Burgundy Organic Backdrop Curve */}
          <path
            d="M80 180C140 70 280 40 420 80C520 110 570 210 540 310C510 410 380 470 260 460C140 450 40 340 50 250C54 225 64 201 80 180Z"
            fill="#910029"
            fillOpacity="0.04"
          />

          {/* Primary Crisp Burgundy Geometric Arc Guide */}
          <path
            d="M60 220C110 90 260 50 410 95C530 130 570 260 515 370C470 460 340 490 220 465C130 445 55 350 60 250"
            stroke="#910029"
            strokeWidth="1.5"
            strokeOpacity="0.25"
            strokeDasharray="6 6"
          />

          {/* Secondary Concentric Reference Circle */}
          <circle
            cx="320"
            cy="270"
            r="190"
            stroke="#393F4B"
            strokeWidth="1"
            strokeOpacity="0.08"
          />

          <circle
            cx="320"
            cy="270"
            r="120"
            stroke="#910029"
            strokeWidth="1"
            strokeOpacity="0.12"
          />

          {/* Editorial Technical Grid Crosshairs */}
          <line
            x1="320"
            y1="50"
            x2="320"
            y2="490"
            stroke="#393F4B"
            strokeWidth="1"
            strokeOpacity="0.06"
            strokeDasharray="4 4"
          />
          <line
            x1="90"
            y1="270"
            x2="550"
            y2="270"
            stroke="#393F4B"
            strokeWidth="1"
            strokeOpacity="0.06"
            strokeDasharray="4 4"
          />

          {/* Delicate Accent Cross Markers */}
          <g stroke="#910029" strokeWidth="1.5" strokeOpacity="0.4">
            <path d="M505 100V112M499 106H511" />
            <path d="M115 410V422M109 416H121" />
          </g>
        </svg>
      </div>

      {/* Main Composition Container */}
      <div className="relative z-10 w-full px-2 sm:px-4">
        {/* ============================================================ */}
        {/* PANEL 1: Large Elegant Website Preview Panel (Main Showcase) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[490px] mx-auto lg:mx-0 bg-white rounded-2xl border border-[#393F4B]/12 shadow-[0_18px_40px_-12px_rgba(57,63,75,0.12)] overflow-hidden"
        >
          {/* Realistic Browser Window Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#ECF4F7]/60 border-b border-[#393F4B]/10">
            {/* Window Controls */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#910029]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#393F4B]/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#393F4B]/20" />
            </div>

            {/* URL Search Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#393F4B]/10 text-[10px] font-mono text-[#393F4B]/70 shadow-2xs max-w-[210px] sm:max-w-[260px] truncate">
              <Lock className="w-2.5 h-2.5 text-[#910029] shrink-0" />
              <span className="truncate">prvision.studio/enterprise-systems</span>
            </div>

            {/* Window Icon Actions */}
            <div className="flex items-center gap-1 text-[#393F4B]/50">
              <Monitor className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Realistic Business Website Layout */}
          <div className="p-4 sm:p-5 bg-white space-y-4">
            {/* Micro Website Navbar */}
            <div className="flex items-center justify-between pb-3 border-b border-[#393F4B]/8">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-[#393F4B] flex items-center justify-center text-[10px] font-extrabold text-[#ECF4F7]">
                  PR
                </div>
                <span className="text-xs font-bold tracking-tight text-[#393F4B]">
                  VISION <span className="font-light text-[#910029]">STUDIO</span>
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[11px] font-medium text-[#393F4B]/70">
                <span className="text-[#910029] font-semibold">Capabilities</span>
                <span>Work</span>
                <span>Framework</span>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-[#910029] text-[#ECF4F7] text-[10px] font-semibold">
                Inquire
              </div>
            </div>

            {/* Website Hero Block */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#910029]/8 border border-[#910029]/20 text-[9px] font-bold text-[#910029] uppercase tracking-wider">
                <Sparkles className="w-2.5 h-2.5 text-[#910029]" strokeWidth={1.8} />
                Next-Gen Enterprise Platform
              </div>

              <h4 className="text-base sm:text-lg font-bold text-[#393F4B] leading-snug">
                Engineering High-Performance <br className="hidden sm:block" />
                <span className="text-[#910029]">Digital Architectures.</span>
              </h4>

              <p className="text-xs text-[#393F4B]/70 leading-relaxed max-w-sm">
                Combining architectural clarity, seamless interaction design, and resilient web infrastructure.
              </p>
            </div>

            {/* Interactive Grid: Metrics & Architectural Module */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {/* Metric Card */}
              <div className="p-3 rounded-xl bg-[#ECF4F7]/70 border border-[#393F4B]/8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#393F4B]/70 uppercase tracking-wider">
                    Reliability
                  </span>
                  <TrendingUp className="w-3.5 h-3.5 text-[#910029]" />
                </div>
                <div className="mt-2">
                  <div className="text-xl sm:text-2xl font-black text-[#910029] tracking-tight">
                    99.9%
                  </div>
                  <div className="text-[10px] font-medium text-[#393F4B]/70 mt-0.5">
                    Uptime SLA verified
                  </div>
                </div>
              </div>

              {/* Architectural Module Card */}
              <div className="p-3 rounded-xl bg-white border border-[#393F4B]/10 flex flex-col justify-between shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#393F4B]/70 uppercase tracking-wider">
                    Core Vitals
                  </span>
                  <Cpu className="w-3.5 h-3.5 text-[#393F4B]/60" />
                </div>
                <div className="mt-2 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-[#393F4B]">
                    <span>Speed Score</span>
                    <span className="font-bold text-[#910029]">100/100</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#ECF4F7] rounded-full overflow-hidden">
                    <div className="h-full bg-[#910029] rounded-full w-[98%]" />
                  </div>
                  <div className="text-[9px] text-[#393F4B]/60 truncate">
                    0.4s First Contentful Paint
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Proof Strip */}
            <div className="pt-2 border-t border-[#393F4B]/8 flex items-center justify-between text-[10px] text-[#393F4B]/70">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#910029]" />
                Full-Stack Architecture Ready
              </span>
              <span className="font-mono text-[9px] text-[#393F4B]/50">
                v2.4 Production
              </span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* PANEL 2: Clean Typography Specimen Panel (Top-Right / Offset) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-3.5 right-0 sm:-top-6 sm:-right-4 w-[145px] sm:w-[195px] bg-white rounded-xl border border-[#393F4B]/14 shadow-[0_12px_30px_-8px_rgba(57,63,75,0.14)] p-2.5 sm:p-3.5 z-20"
        >
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <span className="text-[8.5px] sm:text-[9px] font-mono font-bold tracking-widest text-[#910029] uppercase">
              TYPE SPECIMEN
            </span>
            <Sparkles className="w-2.5 h-2.5 text-[#910029]" strokeWidth={1.8} />
          </div>

          <div className="flex items-baseline justify-between py-0.5 sm:py-1 border-b border-[#393F4B]/10">
            <span className="text-xl sm:text-3xl font-black text-[#393F4B] tracking-tight font-serif">
              Aa
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#910029]">
              DISPLAY
            </span>
          </div>

          <div className="mt-1.5 sm:mt-2 space-y-0.5 sm:space-y-1">
            <div className="text-[9px] sm:text-[10px] font-bold text-[#393F4B]">
              Editorial &amp; Sans
            </div>
            <div className="text-[8px] sm:text-[9px] font-mono text-[#393F4B]/60 tracking-wider">
              400 • 600 • 800
            </div>
            <div className="w-full h-[2px] bg-[#910029] rounded-full my-1 sm:my-1.5" />
            <p className="text-[8px] sm:text-[8.5px] text-[#393F4B]/70 leading-tight">
              Spatial hierarchy &amp; scale.
            </p>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* PANEL 3: Smaller Overlapping Mobile Website Preview (Bottom-Right) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-5 right-0 sm:-bottom-7 sm:right-2 w-[165px] sm:w-[215px] bg-white rounded-2xl border-2 border-white shadow-[0_22px_45px_-10px_rgba(57,63,75,0.18)] ring-1 ring-[#393F4B]/12 overflow-hidden z-30"
        >
          {/* Mobile Status Bar */}
          <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#ECF4F7]/80 flex items-center justify-between text-[7.5px] sm:text-[8px] font-semibold text-[#393F4B]/70 border-b border-[#393F4B]/8">
            <span>09:41</span>
            <div className="w-6 sm:w-8 h-1.5 sm:h-2 rounded-full bg-[#393F4B]/20 mx-auto" />
            <div className="flex items-center gap-1">
              <Wifi className="w-2.5 h-2.5 text-[#910029]" strokeWidth={1.8} />
              <span>5G</span>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="p-2.5 sm:p-3 bg-white space-y-1.5 sm:space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Smartphone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#910029]" />
                <span className="text-[9px] sm:text-[10px] font-bold text-[#393F4B]">
                  PR VISION
                </span>
              </div>
              <span className="text-[7.5px] sm:text-[8px] font-bold text-[#910029] bg-[#910029]/10 px-1.5 py-0.5 rounded-xs">
                MOBILE UI
              </span>
            </div>

            <div className="bg-[#ECF4F7] p-1.5 sm:p-2 rounded-lg border border-[#393F4B]/8 space-y-0.5 sm:space-y-1">
              <div className="text-[9px] sm:text-[10px] font-bold text-[#393F4B] leading-tight">
                Seamless Touch UI
              </div>
              <div className="text-[7.5px] sm:text-[8px] text-[#393F4B]/70 leading-normal line-clamp-2">
                Responsive layouts engineered for modern devices.
              </div>
            </div>

            <div className="flex items-center justify-between pt-0.5">
              <div className="text-[8px] sm:text-[9px] font-bold text-[#393F4B]">
                Native Feel
              </div>
              <div className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-md bg-[#910029] text-[#ECF4F7] text-[8px] sm:text-[8.5px] font-bold">
                <span>View</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* REFINED EDITORIAL LABELS (Asymmetric Placement) */}
        {/* ============================================================ */}
        {/* Label 1: Web Design (Bottom-Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="absolute -bottom-3 left-0 sm:-bottom-5 sm:left-2 inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white text-[#393F4B] border border-[#393F4B]/15 shadow-sm text-[10px] sm:text-[11px] font-semibold z-20"
        >
          <Palette className="w-3 h-3 text-[#910029]" strokeWidth={1.8} />
          <span>Web Design</span>
        </motion.div>

        {/* Label 2: Digital Experience (Top-Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute -top-3 left-1 sm:-top-4 sm:left-4 inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white text-[#393F4B] border border-[#393F4B]/15 shadow-sm text-[10px] sm:text-[11px] font-semibold z-20"
        >
          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#910029]" />
          <span>Digital Experience</span>
        </motion.div>

        {/* Label 3: Creative Studio (Mid-Left Floating) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="hidden sm:inline-flex absolute top-1/2 -left-6 -translate-y-1/2 items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#393F4B] border border-[#393F4B]/15 shadow-sm text-[11px] font-semibold z-20"
        >
          <Layers className="w-3 h-3 text-[#910029]" />
          <span>Creative Studio</span>
        </motion.div>
      </div>
    </div>
  );
}

export default EditorialHeroShowcase;
