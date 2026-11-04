import { useState, useEffect } from "react";

/**
 * Checks if WebGL is supported by the client's browser/hardware.
 * Returns boolean indicating availability.
 */
export function useWebGLAvailability() {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      setIsSupported(Boolean(gl));
    } catch {
      setIsSupported(false);
    }
  }, []);

  return isSupported;
}
