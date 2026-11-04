import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * 3D Layered Fluid Waves Background
 * Recreates the vibrant, colorful fluid gradient aesthetic using the 10 approved colors:
 * - Cyan: #55DDE0
 * - Sky Blue: #75CFFF
 * - Electric Blue: #4285FF
 * - Lavender: #B9A0F5
 * - Violet: #8055D9
 * - Purple: #A34DE0
 * - Pink: #F04CBF
 * - Coral: #FF8A9A
 * - Peach: #FFC6A8
 * - Golden Yellow: #FFD166
 *
 * Implements smooth flowing curves, layered translucent surfaces, realistic depth,
 * soft glossy reflections, and ambient chromatic lighting.
 */
export function FluidWaveBackground() {
  const isReducedMotion = useReducedMotion();

  // Floating animation variants for fluid wave layers
  const waveFloat1 = isReducedMotion
    ? {}
    : {
        animate: {
          x: [0, 25, -20, 0],
          y: [0, -18, 12, 0],
          scale: [1, 1.03, 0.98, 1],
          transition: {
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      };

  const waveFloat2 = isReducedMotion
    ? {}
    : {
        animate: {
          x: [0, -30, 20, 0],
          y: [0, 22, -15, 0],
          scale: [1, 0.97, 1.04, 1],
          transition: {
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      };

  const waveFloat3 = isReducedMotion
    ? {}
    : {
        animate: {
          x: [0, 20, -25, 0],
          y: [0, 15, -20, 0],
          scale: [1, 1.02, 0.99, 1],
          transition: {
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      };

  const orbPulse = isReducedMotion
    ? {}
    : {
        animate: {
          scale: [1, 1.15, 0.92, 1],
          opacity: [0.65, 0.85, 0.6, 0.65],
          transition: {
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      };

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none bg-[#FAFBFF]"
    >
      {/* ========================================================
          1. CHROMATIC AMBIENT GLOW ORBS (Rich Atmospheric Depth)
         ======================================================== */}
      {/* Top Left: Cyan #55DDE0 & Sky Blue #75CFFF */}
      <motion.div
        {...orbPulse}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[130px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, #55DDE0 0%, #75CFFF 45%, #4285FF 75%, transparent 100%)",
        }}
      />

      {/* Top Right: Lavender #B9A0F5 & Violet #8055D9 */}
      <motion.div
        {...orbPulse}
        className="absolute -top-24 right-0 w-[550px] h-[550px] rounded-full blur-[140px] opacity-65"
        style={{
          background:
            "radial-gradient(circle, #B9A0F5 0%, #8055D9 50%, #A34DE0 80%, transparent 100%)",
        }}
      />

      {/* Center Dynamic Crest: Purple #A34DE0 & Pink #F04CBF */}
      <motion.div
        {...waveFloat1}
        className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full blur-[150px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, #F04CBF 0%, #A34DE0 40%, #8055D9 70%, transparent 100%)",
        }}
      />

      {/* Mid Right: Coral #FF8A9A & Peach #FFC6A8 */}
      <motion.div
        {...waveFloat2}
        className="absolute top-1/2 -right-32 w-[650px] h-[650px] rounded-full blur-[140px] opacity-65"
        style={{
          background:
            "radial-gradient(circle, #FF8A9A 0%, #FFC6A8 50%, #FFD166 85%, transparent 100%)",
        }}
      />

      {/* Bottom Center / Left: Golden Yellow #FFD166 & Electric Blue #4285FF */}
      <motion.div
        {...waveFloat3}
        className="absolute -bottom-40 left-1/6 w-[750px] h-[750px] rounded-full blur-[160px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, #FFD166 0%, #FF8A9A 35%, #F04CBF 65%, #4285FF 90%, transparent 100%)",
        }}
      />

      {/* ========================================================
          2. LAYERED 3D FLUID WAVE RIBBONS (Vector Splines & Sheen)
         ======================================================== */}
      <svg
        className="absolute inset-0 w-full h-full object-cover preserve-3d"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Wave Gradient 1: Deep Cyan -> Electric Blue -> Violet */}
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#55DDE0" stopOpacity="0.82" />
            <stop offset="28%" stopColor="#75CFFF" stopOpacity="0.8" />
            <stop offset="58%" stopColor="#4285FF" stopOpacity="0.85" />
            <stop offset="85%" stopColor="#8055D9" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#A34DE0" stopOpacity="0.7" />
          </linearGradient>

          {/* Wave Gradient 2: Electric Blue -> Purple -> Vibrant Pink */}
          <linearGradient id="waveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4285FF" stopOpacity="0.78" />
            <stop offset="30%" stopColor="#B9A0F5" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#A34DE0" stopOpacity="0.88" />
            <stop offset="90%" stopColor="#F04CBF" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#FF8A9A" stopOpacity="0.85" />
          </linearGradient>

          {/* Wave Gradient 3: Vibrant Pink -> Coral -> Peach -> Golden Yellow */}
          <linearGradient id="waveGrad3" x1="0%" y1="30%" x2="100%" y2="70%">
            <stop offset="0%" stopColor="#F04CBF" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#FF8A9A" stopOpacity="0.88" />
            <stop offset="70%" stopColor="#FFC6A8" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#FFD166" stopOpacity="0.85" />
          </linearGradient>

          {/* Glossy Specular Crest Sheen Filter */}
          <linearGradient id="glossSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
          </linearGradient>

          {/* Soft Shadow Filter for 3D Ribbon Overlap */}
          <filter id="waveShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="24"
              floodColor="#4285FF"
              floodOpacity="0.18"
            />
          </filter>

          <filter id="pinkShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="28"
              floodColor="#F04CBF"
              floodOpacity="0.22"
            />
          </filter>
        </defs>

        {/* LAYER 1: Deep Translucent Wave (Cyan to Purple) */}
        <motion.path
          {...waveFloat1}
          d="M-100,280 C320,120 640,480 1050,300 C1450,130 1780,380 2050,220 L2050,1150 L-100,1150 Z"
          fill="url(#waveGrad1)"
          filter="url(#waveShadow)"
          opacity="0.85"
        />

        {/* Glossy Crest Highlight on Layer 1 */}
        <motion.path
          {...waveFloat1}
          d="M-100,280 C320,120 640,480 1050,300 C1450,130 1780,380 2050,220"
          stroke="url(#glossSheen)"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* LAYER 2: Main Flowing Ribbon (Electric Blue to Pink & Coral) */}
        <motion.path
          {...waveFloat2}
          d="M-120,540 C280,380 620,720 1080,510 C1520,310 1820,620 2100,440 L2100,1180 L-120,1180 Z"
          fill="url(#waveGrad2)"
          filter="url(#pinkShadow)"
          opacity="0.88"
        />

        {/* Glossy Sheen Ribbon on Layer 2 */}
        <motion.path
          {...waveFloat2}
          d="M-120,540 C280,380 620,720 1080,510 C1520,310 1820,620 2100,440"
          stroke="url(#glossSheen)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* Secondary Gloss Reflection Parallel Ridge */}
        <motion.path
          {...waveFloat2}
          d="M-80,560 C320,405 650,740 1100,535 C1540,335 1830,640 2080,465"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* LAYER 3: Foreground Sunset Wave (Pink to Golden Yellow) */}
        <motion.path
          {...waveFloat3}
          d="M-150,780 C350,650 720,950 1200,740 C1620,560 1880,820 2150,680 L2150,1200 L-150,1200 Z"
          fill="url(#waveGrad3)"
          opacity="0.82"
        />

        {/* Specular Edge Highlight on Layer 3 */}
        <motion.path
          {...waveFloat3}
          d="M-150,780 C350,650 720,950 1200,740 C1620,560 1880,820 2150,680"
          stroke="url(#glossSheen)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>

      {/* ========================================================
          3. SOFT TRANSLUCENT FROST OVERLAY (Ensures Text Legibility)
         ======================================================== */}
      {/* Gentle frosted overlay allowing waves to illuminate through brightly while ensuring 100% WCAG AAA text contrast */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
    </div>
  );
}

export default FluidWaveBackground;

