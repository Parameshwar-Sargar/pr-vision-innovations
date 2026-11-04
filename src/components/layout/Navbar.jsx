import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { Button } from "../common/Button";

/**
 * Premium Translucent White Navigation Bar
 */
export function Navbar() {
  const { isScrolled } = useScrollPosition(25);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Track active section for indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "portfolio", "process", "contact"];
      const scrollY = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Official Approved Asset */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="PR VISION INNOVATIONS Home"
            >
              {/* Official 3D Emblem Mark */}
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 flex items-center justify-center p-1 shadow-sm group-hover:border-[#F04CBF]/50 transition-all duration-300 overflow-hidden">
                <img
                  src="/assets/pr-vision-logo-mark.png"
                  alt="PR VISION INNOVATIONS"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#0F172A] leading-tight">
                  PR VISION
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.24em] text-[#A34DE0] uppercase">
                  INNOVATIONS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/75 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/80 shadow-[0_2px_12px_rgba(66,133,255,0.06)]">
              {siteConfig.navLinks.map((link) => {
                const target = link.href.replace("#", "");
                const isActive = activeSection === target;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-[#4285FF] bg-white font-semibold shadow-xs"
                        : "text-[#475569] hover:text-[#0F172A] hover:bg-white/60"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicatorFluid"
                        className="absolute inset-0 rounded-full border border-[#4285FF]/25 -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                icon={ArrowRight}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/80 backdrop-blur-md border border-white/80 text-[#0F172A] hover:text-[#4285FF] hover:border-[#4285FF]/40 transition-colors shadow-sm"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white/95 backdrop-blur-2xl border-l border-white/80 p-6 pt-24 flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-3">
                {/* Mobile Drawer Brand Header */}
                <div className="flex items-center gap-3 pb-5 mb-2 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-white border border-white/80 p-1 flex items-center justify-center shadow-sm">
                    <img
                      src="/assets/pr-vision-logo-mark.png"
                      alt="PR VISION INNOVATIONS"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-extrabold text-[#0F172A]">PR VISION</span>
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-[#A34DE0] uppercase">
                      INNOVATIONS
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#475569] mb-2">
                  Navigation
                </div>
                {siteConfig.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-[#0F172A] hover:bg-white/80 border border-transparent hover:border-white font-medium transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#475569]" />
                  </a>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  className="w-full"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  icon={Sparkles}
                >
                  Get Started
                </Button>
                <p className="text-center text-xs text-[#475569] mt-2">
                  Sangola, Maharashtra, India
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
