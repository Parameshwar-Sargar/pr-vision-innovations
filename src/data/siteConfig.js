/**
 * Site configuration for PR VISION INNOVATIONS
 * Keep configurable settings, social links, and contact parameters here.
 */
export const siteConfig = {
  brandName: "PR VISION INNOVATIONS",
  brandShort: "PR VISION",
  tagline: "Building Digital Experiences. Empowering Businesses.",
  description: "We design and develop modern websites and digital solutions that help businesses establish a powerful online presence.",
  location: "Sangola, Maharashtra, India",
  
  // WhatsApp Configuration (Configurable without inventing phone numbers)
  // Replace placeholder number with client's active WhatsApp business number when ready.
  whatsapp: {
    phoneNumber: "910000000000", // Placeholder: e.g. CountryCode + Number (e.g. 91XXXXXXXXXX)
    defaultMessage: "Hello PR VISION INNOVATIONS, I am interested in building a digital solution for my business.",
    getWhatsAppUrl: function (customMsg) {
      const msg = encodeURIComponent(customMsg || this.defaultMessage);
      return `https://wa.me/${this.phoneNumber}?text=${msg}`;
    }
  },

  // Contact Info Placeholders
  contact: {
    email: "contact@prvisioninnovations.com",
    address: "Sangola, Maharashtra 413307, India",
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],

  // Social Media Placeholders
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { name: "GitHub", href: "https://github.com", icon: "Github" },
    { name: "Twitter", href: "https://x.com", icon: "Twitter" },
    { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
  ],
};
