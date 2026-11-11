import React from "react";
import { motion } from "framer-motion";
import { Layout, Atom, Layers, Sparkles, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { servicesData } from "../../data/servicesData";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { WebDevWindowVisual } from "../visuals/services/WebDevWindowVisual";
import { MobileDeviceVisual } from "../visuals/services/MobileDeviceVisual";
import { UiUxLayersVisual } from "../visuals/services/UiUxLayersVisual";
import { FullStackVisual } from "../visuals/services/FullStackVisual";
import { SystemMonitorVisual } from "../visuals/services/SystemMonitorVisual";

/**
 * Services Preview Section
 * Premium Three-Color Theme:
 * - Dominant background: Light Ice #ECF4F7
 * - Clean white cards with subtle borders
 * - Deep Burgundy (#910029) icons, tags, and action links
 */
export function ServicesPreviewSection() {
  const iconComponents = {
    Layout: Layout,
    Atom: Atom,
    Layers: Layers,
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck,
  };

  const serviceVisuals = {
    "static-website": WebDevWindowVisual,
    "react-development": MobileDeviceVisual,
    "full-stack-development": FullStackVisual,
    "website-redesign": UiUxLayersVisual,
    "website-maintenance": SystemMonitorVisual,
    "web-dev": WebDevWindowVisual,
    "mobile-dev": MobileDeviceVisual,
    "ui-ux": UiUxLayersVisual,
    "full-stack": FullStackVisual,
    "maintenance": SystemMonitorVisual,
  };

  const handleInquire = (serviceTitle) => {
    const text = `Hello PR VISION INNOVATIONS, I am interested in inquiring about your "${serviceTitle}" service.`;
    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden bg-[#ECF4F7]">
      <Container className="relative z-10">
        <SectionHeader
          badge="Specialized Services"
          badgeVariant="burgundy"
          title="Digital Capabilities Tailored for"
          titleAccent="Modern Growth"
          description="We deliver five core digital disciplines engineered to help businesses establish, enhance, and protect their web presence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const Icon = iconComponents[service.icon] || Layout;
            const VisualComponent = serviceVisuals[service.id];
            const isFullSpan = idx === 4;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative rounded-3xl p-6 sm:p-7 bg-white border border-[#393F4B]/10 shadow-sm hover:border-[#910029]/30 hover:shadow-md flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group ${
                  isFullSpan ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Visual Header */}
                  {VisualComponent && (
                    <div className="mb-5">
                      <VisualComponent />
                    </div>
                  )}

                  {/* Service Icon with Burgundy Accent & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#910029]/10 border border-[#910029]/20 flex items-center justify-center text-[#910029] group-hover:scale-105 transition-all duration-300 shadow-xs shrink-0">
                      <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold text-[#393F4B] group-hover:text-[#910029] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-[#393F4B]/80 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Feature Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#ECF4F7] text-[#393F4B] border border-[#393F4B]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="mt-8 pt-5 border-t border-[#393F4B]/10 flex items-center justify-between">
                  <button
                    onClick={() => handleInquire(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#910029] hover:text-[#7A0023] transition-colors cursor-pointer"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
                  </button>

                  <button
                    onClick={() => handleInquire(service.title)}
                    className="p-2 rounded-xl bg-[#ECF4F7] border border-[#393F4B]/15 text-[#393F4B] hover:bg-[#910029] hover:text-[#ECF4F7] hover:border-[#910029] transition-colors cursor-pointer shadow-xs"
                    title="Quick WhatsApp Inquiry"
                    aria-label={`WhatsApp inquiry for ${service.title}`}
                  >
                    <MessageSquare className="w-4 h-4" strokeWidth={1.8} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ServicesPreviewSection;
