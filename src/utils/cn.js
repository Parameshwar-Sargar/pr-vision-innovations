/**
 * Utility to conditionally combine CSS classes
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
