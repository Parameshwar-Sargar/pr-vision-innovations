import React, { Suspense, Component } from "react";
import { Canvas } from "@react-three/fiber";
import { SceneObjects } from "./SceneObjects";
import { HeroVisualFallback } from "./HeroVisualFallback";
import { useWebGLAvailability } from "../../hooks/useWebGLAvailability";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Robust Error Boundary to catch any 3D WebGL runtime exceptions
 */
class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Hero 3D Canvas error caught, falling back to clean 2D visual:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

/**
 * Main Hero 3D Component with open, unclipped presentation,
 * natural fluid scaling, and soft ambient light background integration
 */
export function Hero3DCanvas() {
  const isWebGLAvailable = useWebGLAvailability();
  const isReducedMotion = useReducedMotion();

  // If WebGL is not supported on user's device/browser, render clean 2D fallback
  if (!isWebGLAvailable) {
    return <HeroVisualFallback isReducedMotion={isReducedMotion} />;
  }

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[600px] xl:h-[660px] flex items-center justify-center overflow-visible">
      {/* Soft chromatic fluid gradient halo behind the 3D visual */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[300px] sm:w-[420px] lg:w-[500px] h-[300px] sm:h-[420px] lg:h-[500px] rounded-full bg-gradient-to-tr from-[#4285FF]/20 via-[#F04CBF]/18 to-[#FFD166]/15 blur-[110px]" />
      </div>

      <CanvasErrorBoundary fallback={<HeroVisualFallback isReducedMotion={isReducedMotion} />}>
        <Suspense fallback={<HeroVisualFallback isReducedMotion={isReducedMotion} />}>
          <Canvas
            camera={{ position: [0, 0, 8.2], fov: 42 }}
            dpr={[1, 1.5]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance"
            }}
            className="w-full h-full cursor-grab active:cursor-grabbing !bg-transparent"
          >
            <SceneObjects isReducedMotion={isReducedMotion} />
          </Canvas>
        </Suspense>
      </CanvasErrorBoundary>
    </div>
  );
}

export default Hero3DCanvas;
