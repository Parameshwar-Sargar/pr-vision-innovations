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
 * Displays the 5 core services with bespoke animated visual identities for each discipline:
 * Web Development, Mobile Development, UI/UX Design, Full Stack, and Maintenance.
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
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <Container className="relative z-10">
        <SectionHeader
          badge="Specialized Services"
          badgeVariant="blue"
          title="Digital Capabilities Tailored for"
          titleAccent="Modern Growth"
          accentVariant="blue"
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
                className={`relative rounded-3xl p-6 sm:p-7 glass-panel flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 group ${
                  isFullSpan ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Bespoke Visual Header for each service */}
                  {VisualComponent && (
                    <div className="mb-5">
                      <VisualComponent />
                    </div>
                  )}

                  {/* Service Icon with Clean Fluid Accent & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/90 border border-white/80 flex items-center justify-center text-[#4285FF] group-hover:text-[#F04CBF] group-hover:scale-105 transition-all duration-300 shadow-sm shrink-0">
                      <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#4285FF] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-[#475569] leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Feature Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/70 text-[#475569] border border-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="mt-8 pt-5 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={() => handleInquire(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4285FF] hover:text-[#A34DE0] transition-colors cursor-pointer"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
                  </button>

                  <button
                    onClick={() => handleInquire(service.title)}
                    className="p-2 rounded-xl bg-white/85 border border-white/90 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/40 transition-colors cursor-pointer shadow-xs"
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
