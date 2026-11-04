import React from "react";
import { ArrowUp, MapPin, Mail, Sparkles } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { servicesData } from "../../data/servicesData";
import { Container } from "../common/Container";
import { LinkedinIcon, GithubIcon, TwitterIcon, InstagramIcon } from "../common/SocialIcons";

/**
 * Premium Modern Footer with dynamic copyright year,
 * softer navy background, and clean typography.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const iconMap = {
    Linkedin: LinkedinIcon,
    Github: GithubIcon,
    Twitter: TwitterIcon,
    Instagram: InstagramIcon,
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
    <footer className="relative bg-white/75 backdrop-blur-2xl border-t border-white/80 pt-16 pb-12 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200/60">
          {/* Column 1: Brand Info & Location (Span 2 cols on LG) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-3.5 group focus:outline-none mb-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/90 border border-white/80 flex items-center justify-center p-1 shadow-sm group-hover:border-[#F04CBF]/50 transition-all overflow-hidden">
                <img
                  src="/assets/pr-vision-logo-mark.png"
                  alt="PR VISION INNOVATIONS"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-[#0F172A] leading-tight">
                  PR VISION
                </span>
                <span className="text-[10px] font-semibold tracking-[0.24em] text-[#A34DE0] uppercase">
                  INNOVATIONS
                </span>
              </div>
            </a>

            <p className="text-sm text-[#475569] leading-relaxed mb-6 max-w-sm font-normal">
              {siteConfig.description}
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-[#475569]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4285FF] shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F04CBF] shrink-0" />
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
                    className="w-9 h-9 rounded-xl bg-white/85 border border-white/90 flex items-center justify-center text-[#475569] hover:text-white hover:bg-gradient-to-tr hover:from-[#4285FF] hover:to-[#F04CBF] hover:border-transparent transition-all duration-300 shadow-xs"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-[#475569] hover:text-[#4285FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    className="text-sm text-[#475569] hover:text-[#F04CBF] transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Focus & Commitment */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-4">
              Our Vision
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed mb-4 font-normal">
              An independent studio dedicated to modern craftsmanship, transparent processes, and performance-first web architectures.
            </p>
            <div className="p-4 rounded-2xl bg-white/80 border border-white/80 text-xs text-[#475569] relative overflow-hidden shadow-xs">
              <span className="text-gradient-fluid font-bold block mb-1">Empowering Businesses</span>
              Delivering high-standard digital presence from Sangola to the world.
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#475569]">
          <p>
            &copy; {currentYear} <span className="text-[#0F172A] font-semibold">PR VISION INNOVATIONS</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>Built with React &amp; Three.js</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/85 border border-white/90 hover:border-[#4285FF]/40 text-[#475569] hover:text-[#0F172A] hover:bg-white transition-colors cursor-pointer shadow-xs"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
