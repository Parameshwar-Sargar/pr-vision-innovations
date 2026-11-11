import React, { useState } from "react";
import { Mail, MapPin, Check, Sparkles } from "lucide-react";
import { Container } from "../common/Container";
import { WhatsAppButton } from "../common/WhatsAppButton";
import { siteConfig } from "../../data/siteConfig";
import { CommunicationVisual } from "../visuals/contact/CommunicationVisual";

/**
 * CTA Section
 * Headline: "Have an Idea? Let's Build It Together."
 * Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029).
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
    <section id="contact" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#ECF4F7] border border-[#393F4B]/10 shadow-lg relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white text-[#910029] border border-[#910029]/25 mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#910029]" strokeWidth={1.8} />
              <span>Direct Collaboration</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#393F4B] tracking-tight leading-tight">
              Have an Idea?{" "}
              <span className="text-[#910029]">
                Let&apos;s Build It Together.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#393F4B]/80 leading-relaxed font-normal">
              Whether you need a high-converting website, an interactive React app, or a complete digital overhaul, PR VISION INNOVATIONS is ready to engineer your solution.
            </p>
          </div>

          {/* Clean Communication Visual */}
          <div className="mt-8">
            <CommunicationVisual />
          </div>

          {/* Clean Inquiry Customizer */}
          <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white border border-[#393F4B]/10 shadow-xs">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#393F4B] mb-3.5">
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
                      ? "bg-[#910029] text-[#ECF4F7] border border-[#910029] shadow-xs font-semibold"
                      : "bg-[#ECF4F7] text-[#393F4B] hover:text-[#910029] border border-[#393F4B]/10 hover:border-[#910029]/30"
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
                className="w-full px-4 py-3 rounded-xl bg-[#ECF4F7] border border-[#393F4B]/15 text-sm text-[#393F4B] placeholder-[#393F4B]/50 focus:outline-none focus:border-[#910029] transition-colors"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton
                customMessage={constructedMessage}
                label="Launch WhatsApp Inquiry"
                size="lg"
                className="w-full sm:w-auto"
              />

              <a
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                  `Inquiry: ${selectedTopic}`
                )}&body=${encodeURIComponent(constructedMessage)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#ECF4F7] text-[#393F4B] hover:text-[#910029] border border-[#393F4B]/15 hover:border-[#910029]/40 text-sm sm:text-base font-medium transition-colors w-full sm:w-auto cursor-pointer shadow-xs"
              >
                <Mail className="w-5 h-5 text-[#910029]" strokeWidth={1.8} />
                <span>Email Our Studio</span>
              </a>
            </div>

            <p className="mt-5 text-center text-xs text-[#393F4B]/60 font-normal">
              WhatsApp number configured via <code className="text-[#910029] font-mono">siteConfig.js</code> (Placeholder: {siteConfig.whatsapp.phoneNumber}).
            </p>
          </div>

          {/* Location & Response Details */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#393F4B]/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#910029]" strokeWidth={1.8} />
              <span>Based in Sangola, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#910029]" strokeWidth={1.8} />
              <span>Prompt Response &amp; Direct Engineer Access</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CtaSection;
