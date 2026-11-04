import React, { Suspense, Component } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { FullScreenGlassEnvironment } from "./FullScreenGlassEnvironment";
import { DigitalWorkspaceGroup } from "./InteractiveWorkspaceScene";
import { HeroVisualFallback } from "./HeroVisualFallback";
import { useWebGLAvailability } from "../../hooks/useWebGLAvailability";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Responsive Workspace Placer
 * Adapts position and scale based on viewport width:
 * - Desktop: Placed on the right (x: 2.7) alongside left typography.
 * - Mobile / Tablet: Centered below hero text.
 */
function ResponsiveWorkspace({ isReducedMotion }) {
  const { viewport } = useThree();
  const isMobile = viewport.width < 9.2;

  const position = isMobile ? [0, -1.9, 0.1] : [2.65, -0.15, 0.45];
  const scale = isMobile ? [0.62, 0.62, 0.62] : [0.86, 0.86, 0.86];

  return (
    <DigitalWorkspaceGroup
      isReducedMotion={isReducedMotion}
      position={position}
      scale={scale}
    />
  );
}

/**
 * Unified 3D Master Scene
 * Combines:
 * 1. Edge-to-edge Full-Screen 3D Glass Environment (Ruby Red #D7264D, Golden Yellow #FFC928, Royal Purple #7028C8)
 * 2. Floating Digital Workspace Ecosystem (Central laptop + 5 surrounding screens with UI textures)
 */
function MasterHero3DScene({ isReducedMotion }) {
  return (
    <>
      {/* 1. Edge-to-Edge 3D Glass Environment & Studio Lighting */}
      <FullScreenGlassEnvironment isReducedMotion={isReducedMotion} />

      {/* 2. Floating Digital Workspace on Right Side */}
      <ResponsiveWorkspace isReducedMotion={isReducedMotion} />
    </>
  );
}

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
 * Main Full-Screen Hero 3D Component
 * Spans edge-to-edge across the complete Hero background.
 */
export function Hero3DCanvas() {
  const isWebGLAvailable = useWebGLAvailability();
  const isReducedMotion = useReducedMotion();

  if (!isWebGLAvailable) {
    return <HeroVisualFallback isReducedMotion={isReducedMotion} />;
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
      <CanvasErrorBoundary fallback={<HeroVisualFallback isReducedMotion={isReducedMotion} />}>
        <Suspense fallback={<HeroVisualFallback isReducedMotion={isReducedMotion} />}>
          <Canvas
            camera={{ position: [0, 0, 7.8], fov: 46 }}
            dpr={[1, 1.5]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance"
            }}
            className="w-full h-full pointer-events-auto cursor-default !bg-transparent"
          >
            <MasterHero3DScene isReducedMotion={isReducedMotion} />
          </Canvas>
        </Suspense>
      </CanvasErrorBoundary>
    </div>
  );
}

export default Hero3DCanvas;
