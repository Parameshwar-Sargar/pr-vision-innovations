import React from "react";

/**
 * Clean, Minimal Light Ice Background (#ECF4F7)
 * Strictly eliminates all colorful waves, diagonal lines, particles, network connections,
 * and distracting background decorations.
 */
export function FluidWaveBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none bg-[#ECF4F7]"
    />
  );
}

export default FluidWaveBackground;
