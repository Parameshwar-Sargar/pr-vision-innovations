import React, { useState } from "react";
import { Mail, MapPin, Check, Sparkles } from "lucide-react";
import { Container } from "../common/Container";
import { WhatsAppButton } from "../common/WhatsAppButton";
import { siteConfig } from "../../data/siteConfig";
import { CommunicationVisual } from "../visuals/contact/CommunicationVisual";

/**
 * CTA Section
 * Headline: "Have an Idea? Let's Build It Together."
 * Dark Cinematic background (#050505) with Electric Blue highlights and Crimson accents.
 */
export function CtaSection() {
  const [selectedTopic, setSelectedTopic] = useState("New Project Discussion");
  const [customNotes, setCustomNotes] = useState("");

  const topics = [
    "Static Website Development",
    "React Web Application",
    "Website Redesign",
    "Full Stack Architecture",
    "Website Maintenance",
  ];

  const constructedMessage = `Hello PR VISION INNOVATIONS, I am reaching out regarding ${selectedTopic}.${
    customNotes ? ` Details: ${customNotes}` : ""
  }`;

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#0A0A0D]/90 border border-white/10 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/[0.04] backdrop-blur-md text-[#1677FF] border border-[#1677FF]/30 mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" strokeWidth={1.8} />
              <span>Direct Collaboration</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have an Idea?{" "}
              <span className="text-gradient-blue-red">
                Let&apos;s Build It Together.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-normal">
              Whether you need a high-converting website, an interactive React app, or a complete digital overhaul, PR VISION INNOVATIONS is ready to engineer your solution.
            </p>
          </div>

          {/* Unique Communication Visual */}
          <div className="mt-8">
            <CommunicationVisual />
          </div>

          {/* Clean Inquiry Customizer */}
          <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 shadow-xs">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-3.5">
              Select inquiry focus:
            </label>
            <div className="flex flex-wrap gap-2 mb-4">
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTopic(t)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                    selectedTopic === t
                      ? "bg-[#1677FF]/20 text-[#287BFF] border border-[#1677FF] shadow-[0_0_15px_rgba(22,119,255,0.3)] font-semibold"
                      : "bg-white/[0.03] text-[#A1A1AA] hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Optional brief notes or project description..."
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-sm text-white placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#1677FF] transition-colors"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton
                customMessage={constructedMessage}
                label="Launch WhatsApp Inquiry"
                size="lg"
                className="w-full sm:w-auto"
              >
                Launch WhatsApp Inquiry
              </WhatsAppButton>

              <a
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                  `Inquiry: ${selectedTopic}`
                )}&body=${encodeURIComponent(constructedMessage)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] text-white hover:text-[#1677FF] border border-white/10 hover:border-[#1677FF]/40 text-sm sm:text-base font-medium transition-colors w-full sm:w-auto cursor-pointer shadow-sm"
              >
                <Mail className="w-5 h-5 text-[#B5122A]" strokeWidth={1.8} />
                <span>Email Our Studio</span>
              </a>
            </div>

            <p className="mt-5 text-center text-xs text-[#A1A1AA]/70 font-normal">
              WhatsApp number configured via <code className="text-[#1677FF] font-mono">siteConfig.js</code> (Placeholder: {siteConfig.whatsapp.phoneNumber}).
            </p>
          </div>

          {/* Location & Response Details */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#A1A1AA]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#1677FF]" strokeWidth={1.8} />
              <span>Based in Sangola, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#B5122A]" strokeWidth={1.8} />
              <span>Prompt Response &amp; Direct Engineer Access</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CtaSection;
