import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, Eye } from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { Badge } from "../common/Badge";
import { portfolioData } from "../../data/portfolioData";
import { buildWhatsAppLink } from "../../utils/whatsapp";

/**
 * Featured Portfolio Preview Section
 * Clean, modern presentation of concept showcases with softer navy tones,
 * open layouts, and elegant preview cards.
 */
export function PortfolioPreviewSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleInquireProject = (title) => {
    const text = `Hello PR VISION INNOVATIONS, I saw the "${title}" concept showcase on your website and would like to build a similar solution for my business.`;
    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 overflow-hidden">
      <Container className="relative z-10">
        <SectionHeader
          badge="Featured Work"
          badgeVariant="blue"
          title="Concept &amp; Prototype"
          titleAccent="Architecture Showcases"
          accentVariant="blue"
          description="Explore our interactive concept prototypes demonstrating our design standards, technology stack, and engineering capabilities."
        />

        {/* Clean Transparency Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl mx-auto px-5 py-3 rounded-2xl glass-panel text-center flex items-center justify-center gap-2.5 text-xs text-[#475569]"
        >
          <Sparkles className="w-4 h-4 text-[#4285FF] shrink-0" />
          <span>
            <strong className="text-[#0F172A]">Transparency Notice:</strong> Projects below are internal architectural concept demonstrations designed to showcase our technical craftsmanship.
          </span>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {portfolioData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl glass-panel overflow-hidden flex flex-col justify-between hover:-translate-y-2 transition-all duration-300"
            >
              {/* Card Header Visual Viewport */}
              <div className="relative h-56 sm:h-64 w-full bg-gradient-to-b from-white/40 to-white/10 border-b border-white/80 overflow-hidden flex flex-col">
                {/* Clean Top Bar */}
                <div className="px-5 py-3 bg-white/70 border-b border-white/80 flex items-center justify-between z-20 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                  </div>
                  <span className="text-[10px] text-[#475569] font-mono tracking-wider">
                    concept://prvision.{project.id}
                  </span>
                  <Badge variant="blue" showDot={false} className="py-0.5 px-2 text-[10px]">
                    {project.badge}
                  </Badge>
                </div>

                {/* Subtle Concept Graphic */}
                <div className="relative flex-1 p-6 flex flex-col justify-center items-center overflow-hidden">
                  {/* Subtle Background Radial Glow */}
                  <div
                    className="absolute inset-0 opacity-20 blur-2xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${project.accentColor}, transparent 70%)`,
                    }}
                  />

                  {/* Clean Visual Representation Box */}
                  <div className="w-full max-w-sm rounded-2xl p-4 bg-white/90 border border-white/80 shadow-md transform transition-transform duration-500 group-hover:scale-105 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-24 h-2.5 rounded bg-[#4285FF]/30" />
                      <div className="w-12 h-2 rounded bg-[#E2E8F0]" />
                    </div>
                    <div className="grid grid-cols-3 gap-2.5 mb-3">
                      <div className="h-12 rounded-xl bg-white/80 border border-slate-100 p-2 flex flex-col justify-between">
                        <div className="w-6 h-1.5 rounded bg-[#F04CBF]/50" />
                        <div className="w-10 h-2 rounded bg-[#CBD5E1]" />
                      </div>
                      <div className="h-12 rounded-xl bg-white/80 border border-slate-100 p-2 flex flex-col justify-between">
                        <div className="w-6 h-1.5 rounded bg-[#4285FF]/50" />
                        <div className="w-10 h-2 rounded bg-[#CBD5E1]" />
                      </div>
                      <div className="h-12 rounded-xl bg-white/80 border border-slate-100 p-2 flex flex-col justify-between">
                        <div className="w-6 h-1.5 rounded bg-[#55DDE0]/60" />
                        <div className="w-10 h-2 rounded bg-[#CBD5E1]" />
                      </div>
                    </div>
                    <div className="h-7 rounded-xl bg-white/80 border border-slate-100 flex items-center px-2.5 justify-between">
                      <span className="text-[10px] text-[#475569] font-mono">Status: Interactive Preview</span>
                      <div className="w-2 h-2 rounded-full bg-[#F04CBF] shadow-[0_0_8px_#F04CBF] animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-[#A34DE0] tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#475569] font-mono">
                      {project.metrics.focus}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#475569] leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/70 text-[#475569] border border-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-8 pt-5 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] hover:text-[#0F172A] transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-[#A34DE0]" />
                    <span>View Specifications</span>
                  </button>

                  <button
                    onClick={() => handleInquireProject(project.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4285FF] hover:text-[#F04CBF] transition-colors cursor-pointer"
                  >
                    <span>Build Similar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Specifications Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101828]/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <Badge variant="blue">{selectedProject.badge}</Badge>
                  <h4 className="text-xl font-bold text-[#0F172A] mt-1.5">
                    {selectedProject.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-xl hover:bg-slate-100 text-[#475569] hover:text-[#0F172A] cursor-pointer text-lg leading-none"
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>

              <div className="py-4 space-y-3.5 text-sm text-[#475569]">
                <p>{selectedProject.description}</p>
                <div className="p-4 rounded-2xl bg-white/80 border border-slate-100 space-y-2.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#475569]">Project Type:</span>
                    <span className="text-[#0F172A] font-medium">{selectedProject.category}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#475569]">Architectural Focus:</span>
                    <span className="text-[#4285FF] font-medium">{selectedProject.metrics.focus}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex gap-3">
                <button
                  onClick={() => {
                    handleInquireProject(selectedProject.title);
                    setSelectedProject(null);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#4285FF] via-[#A34DE0] to-[#F04CBF] hover:opacity-95 text-white font-medium text-xs sm:text-sm text-center shadow-md cursor-pointer transition-all"
                >
                  Discuss Custom Implementation
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-xl bg-white text-[#0F172A] hover:bg-slate-50 text-xs sm:text-sm border border-slate-200 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PortfolioPreviewSection;
