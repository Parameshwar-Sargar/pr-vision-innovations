import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, Eye, X, Check } from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { Badge } from "../common/Badge";
import { portfolioData } from "../../data/portfolioData";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { ProjectPerspectiveMockup } from "../visuals/portfolio/ProjectPerspectiveMockup";

/**
 * Featured Portfolio Preview Section
 * Premium Three-Color Theme:
 * - Alternating clean surface (#FFFFFF)
 * - Refined white cards with Slate Charcoal (#393F4B) text
 * - Deep Burgundy (#910029) highlights, links, and tags
 */
export function PortfolioPreviewSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleInquireProject = (title) => {
    const text = `Hello PR VISION INNOVATIONS, I saw the "${title}" concept showcase on your website and would like to build a similar solution for my business.`;
    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <Container className="relative z-10">
        <SectionHeader
          badge="Featured Work"
          badgeVariant="burgundy"
          title="Concept &amp; Prototype"
          titleAccent="Architecture Showcases"
          description="Explore our interactive concept prototypes demonstrating our design standards, technology stack, and engineering capabilities."
        />

        {/* Clean Transparency Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl mx-auto px-5 py-3 rounded-2xl bg-[#ECF4F7] border border-[#393F4B]/10 shadow-xs text-center flex items-center justify-center gap-2.5 text-xs text-[#393F4B]/80"
        >
          <Sparkles className="w-4 h-4 text-[#910029] shrink-0" strokeWidth={1.8} />
          <span>
            <strong className="text-[#393F4B]">Transparency Notice:</strong> Projects below are internal architectural concept demonstrations designed to showcase our technical craftsmanship.
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
              className="group relative rounded-3xl bg-white border border-[#393F4B]/10 shadow-sm hover:border-[#910029]/30 hover:shadow-md overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Header Visual Viewport */}
              <div className="relative h-56 sm:h-64 w-full bg-[#ECF4F7] border-b border-[#393F4B]/10 overflow-hidden flex flex-col">
                {/* Clean Top Bar */}
                <div className="px-5 py-2.5 bg-white border-b border-[#393F4B]/10 flex items-center justify-between z-20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#393F4B]/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#910029]/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#910029]" />
                  </div>
                  <span className="text-[10px] text-[#393F4B]/70 font-mono tracking-wider">
                    concept://prvision.{project.id}
                  </span>
                  <Badge variant="burgundy" showDot={false} className="py-0.5 px-2 text-[10px]">
                    {project.badge}
                  </Badge>
                </div>

                {/* Flat 2D Browser & UI Mockup */}
                <div className="relative flex-1 flex flex-col justify-center items-center overflow-hidden">
                  <ProjectPerspectiveMockup projectId={project.id} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-[#910029] tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#393F4B]/70 font-mono">
                      {project.metrics.focus}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#393F4B] group-hover:text-[#910029] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#393F4B]/80 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#ECF4F7] text-[#393F4B] border border-[#393F4B]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-8 pt-5 border-t border-[#393F4B]/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#393F4B]/80 hover:text-[#910029] transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-[#910029]" strokeWidth={1.8} />
                    <span>View Specifications</span>
                  </button>

                  <button
                    onClick={() => handleInquireProject(project.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#910029] hover:text-[#7A0023] transition-colors cursor-pointer"
                  >
                    <span>Build Similar</span>
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.8} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Specifications Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#393F4B]/40 backdrop-blur-xs"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white border border-[#393F4B]/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-[#393F4B]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#ECF4F7] text-[#393F4B] hover:text-[#910029] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-[#910029] uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-[#393F4B]/70 font-mono">• {selectedProject.badge}</span>
              </div>

              <h3 className="text-2xl font-bold text-[#393F4B] mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-[#393F4B]/80 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6 p-4 rounded-xl bg-[#ECF4F7] border border-[#393F4B]/15">
                <div className="text-xs font-semibold uppercase text-[#910029] mb-2">Architecture Highlights &amp; Stack</div>
                <ul className="space-y-1.5 text-xs text-[#393F4B]">
                  {(selectedProject.features || selectedProject.technologies || []).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#910029] shrink-0" strokeWidth={2} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#393F4B]/10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-[#393F4B]/80 hover:text-[#393F4B] transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleInquireProject(selectedProject.title);
                    setSelectedProject(null);
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#910029] hover:bg-[#7A0023] text-[#ECF4F7] shadow-sm shadow-[#910029]/30 transition-all"
                >
                  Inquire This Architecture
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PortfolioPreviewSection;
