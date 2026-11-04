import { siteConfig } from "../data/siteConfig";

/**
 * Builds a direct WhatsApp click-to-chat URL.
 * Accepts optional message topic or custom text.
 */
export function buildWhatsAppLink(customMessage) {
  const number = siteConfig.whatsapp.phoneNumber || "910000000000";
  const text = customMessage || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${number.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
}

/**
 * Formatted display number or status text for WhatsApp button
 */
export function getWhatsAppDisplayStatus() {
  return "Direct Inquiry via WhatsApp";
}
