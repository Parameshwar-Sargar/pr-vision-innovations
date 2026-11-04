import React from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutPreviewSection } from "../components/sections/AboutPreviewSection";
import { ServicesPreviewSection } from "../components/sections/ServicesPreviewSection";
import { PortfolioPreviewSection } from "../components/sections/PortfolioPreviewSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { CtaSection } from "../components/sections/CtaSection";

/**
 * Main Homepage for PR VISION INNOVATIONS
 * Coordinates the full single-page experience for Phase 1
 */
export function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Interactive 3D Canvas */}
      <HeroSection />

      {/* About Preview Section */}
      <AboutPreviewSection />

      {/* Services Preview Section (5 Core Services) */}
      <ServicesPreviewSection />

      {/* Featured Portfolio Preview (Clearly Labelled Concepts) */}
      <PortfolioPreviewSection />

      {/* Our Process (Discover, Plan, Design, Develop, Deliver) */}
      <ProcessSection />

      {/* Call To Action with WhatsApp Integration */}
      <CtaSection />
    </main>
  );
}

export default HomePage;
