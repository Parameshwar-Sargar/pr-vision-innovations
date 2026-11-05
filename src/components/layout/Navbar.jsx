import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { Button } from "../common/Button";

/**
 * Premium Dark Cinematic Navigation Bar
 * Strictly uses Pure Black (#050505), Electric Blue (#1677FF), and White (#FFFFFF).
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
            ? "bg-[#050505]/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.8)] py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Official Original Asset */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center group focus:outline-none py-1"
              aria-label="PR VISION INNOVATIONS Home"
            >
              <img
                src="/assets/pr-vision-logo.jpg"
                alt="PR VISION INNOVATIONS"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 rounded-xl shadow-xs"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#0A0A0D]/90 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
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
                        ? "text-white bg-[#1677FF]/20 font-semibold shadow-xs"
                        : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicatorFluid"
                        className="absolute inset-0 rounded-full border border-[#1677FF]/50 -z-10"
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
                className="p-2.5 rounded-xl bg-[#0A0A0D]/90 backdrop-blur-md border border-white/10 text-white hover:text-[#1677FF] hover:border-[#1677FF]/40 transition-colors shadow-sm cursor-pointer"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.8} /> : <Menu className="w-5 h-5" strokeWidth={1.8} />}
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
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-[#050505]/95 backdrop-blur-2xl border-l border-white/10 p-6 pt-24 flex flex-col justify-between shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center pb-5 mb-2 border-b border-white/10">
                  <img
                    src="/assets/pr-vision-logo.jpg"
                    alt="PR VISION INNOVATIONS"
                    className="h-12 w-auto object-contain rounded-xl shadow-xs"
                  />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Navigation
                </div>
                {siteConfig.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.08] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#1677FF]" />
                  </a>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  icon={ArrowRight}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
