import React from "react";
import { ArrowUp, MapPin, Mail, Sparkles, Share2, GitBranch, MessageSquare, Camera } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { servicesData } from "../../data/servicesData";
import { Container } from "../common/Container";

/**
 * Premium Modern Footer
 * Strictly styled in Light Ice (#ECF4F7), Slate Charcoal (#393F4B), and Deep Burgundy (#910029).
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const iconMap = {
    Share2: Share2,
    GitBranch: GitBranch,
    MessageSquare: MessageSquare,
    Camera: Camera,
    Linkedin: Share2,
    Github: GitBranch,
    Twitter: MessageSquare,
    Instagram: Camera,
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-[#ECF4F7] border-t border-[#393F4B]/10 pt-16 pb-12 overflow-hidden text-[#393F4B]">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#393F4B]/10">
          {/* Column 1: Brand Info & Location (Span 2 cols on LG) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center group focus:outline-none mb-5"
              aria-label="PR VISION INNOVATIONS Home"
            >
              <img
                src="/assets/pr-vision-logo.jpg"
                alt="PR VISION INNOVATIONS"
                className="h-14 sm:h-16 w-auto object-contain rounded-2xl shadow-xs transition-transform group-hover:scale-105"
              />
            </a>

            <p className="text-sm text-[#393F4B]/80 leading-relaxed mb-6 max-w-sm font-normal">
              {siteConfig.description}
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-[#393F4B]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#910029] shrink-0" strokeWidth={1.8} />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#910029] shrink-0" strokeWidth={1.8} />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-6">
              {siteConfig.socials.map((social) => {
                const IconComponent = iconMap[social.icon] || Sparkles;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white border border-[#393F4B]/15 flex items-center justify-center text-[#393F4B] hover:text-[#ECF4F7] hover:bg-[#910029] hover:border-[#910029] transition-all duration-200 shadow-xs"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" strokeWidth={1.8} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#393F4B] mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-[#393F4B]/75 hover:text-[#910029] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#393F4B] mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    className="text-sm text-[#393F4B]/75 hover:text-[#910029] transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Focus & Commitment */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#393F4B] mb-4">
              Our Vision
            </h3>
            <p className="text-xs text-[#393F4B]/75 leading-relaxed mb-4 font-normal">
              An independent studio dedicated to modern craftsmanship, transparent processes, and performance-first web architectures.
            </p>
            <div className="p-4 rounded-2xl bg-white border border-[#393F4B]/10 text-xs text-[#393F4B] relative overflow-hidden shadow-xs">
              <span className="text-[#910029] font-bold block mb-1">Empowering Businesses</span>
              Delivering high-standard digital presence from Sangola to the world.
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#393F4B]/70">
          <p>
            &copy; {currentYear} <span className="text-[#393F4B] font-semibold">PR VISION INNOVATIONS</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>Built with React &amp; Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#393F4B]/15 hover:border-[#910029]/40 text-[#393F4B] hover:text-[#910029] transition-colors cursor-pointer shadow-xs"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
