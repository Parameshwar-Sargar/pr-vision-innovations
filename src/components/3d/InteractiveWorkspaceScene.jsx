import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  createLaptopWebsiteTexture,
  createSmartphoneAppTexture,
  createDashboardAnalyticsTexture,
  createDesignCanvasTexture,
} from "./workspaceTextures";

/**
 * 1. Central Floating Laptop (Main Visual Focus)
 * Premium black metallic chassis, keyboard well, trackpad, hinge,
 * and open angled lid with subtle blue glass reflections and dark red rim highlights.
 */
function FloatingLaptop({ texture, isReducedMotion }) {
  const laptopRef = useRef();

  useFrame((state) => {
    if (isReducedMotion || !laptopRef.current) return;
    const t = state.clock.getElapsedTime();
    laptopRef.current.position.y = -0.28 + Math.sin(t * 1.1) * 0.05;
    laptopRef.current.rotation.x = 0.16 + Math.cos(t * 0.85) * 0.02;
    laptopRef.current.rotation.y = 0.04 + Math.sin(t * 0.7) * 0.025;
  });

  return (
    <group ref={laptopRef} position={[0, -0.28, 0.2]}>
      {/* LAPTOP BASE (Keyboard Chassis) */}
      <group position={[0, 0, 0]}>
        {/* Main Base Body - Pure Black Metallic Aluminum */}
        <mesh position={[0, -0.04, 0]}>
          <boxGeometry args={[2.7, 0.08, 1.8]} />
          <meshStandardMaterial
            color="#08080A"
            metalness={0.95}
            roughness={0.16}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Electric Blue Chamfer Edge Line */}
        <mesh position={[0, -0.04, 0.902]}>
          <boxGeometry args={[2.68, 0.02, 0.01]} />
          <meshStandardMaterial color="#1677FF" emissive="#1677FF" emissiveIntensity={0.8} />
        </mesh>

        {/* Keyboard Well Recess */}
        <mesh position={[0, 0.002, -0.22]}>
          <planeGeometry args={[2.36, 1.05]} />
          <meshStandardMaterial color="#050505" roughness={0.8} />
        </mesh>

        {/* Simulated Key Rows with Subtle Electric Blue Backlight */}
        {[-0.55, -0.35, -0.15, 0.05, 0.25].map((zOffset, rowIdx) => (
          <mesh key={rowIdx} position={[0, 0.006, zOffset]}>
            <boxGeometry args={[2.3, 0.012, 0.14]} />
            <meshStandardMaterial
              color="#0F1015"
              roughness={0.35}
              metalness={0.5}
              emissive="#1677FF"
              emissiveIntensity={0.12}
            />
          </mesh>
        ))}

        {/* Trackpad */}
        <mesh position={[0, 0.003, 0.52]}>
          <planeGeometry args={[0.92, 0.52]} />
          <meshStandardMaterial
            color="#14141A"
            roughness={0.25}
            metalness={0.7}
          />
        </mesh>

        {/* Trackpad Border Accent - Thin Blue */}
        <mesh position={[0, 0.004, 0.52]}>
          <ringGeometry args={[0.46, 0.465, 32]} />
          <meshBasicMaterial color="#1677FF" opacity={0.35} transparent />
        </mesh>

        {/* Front Opening Notch */}
        <mesh position={[0, -0.01, 0.9]}>
          <boxGeometry args={[0.35, 0.025, 0.02]} />
          <meshStandardMaterial color="#1677FF" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Hinge Cylinder */}
        <mesh position={[0, 0.02, -0.9]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.045, 0.045, 2.5, 24]} />
          <meshStandardMaterial color="#0A0A0D" metalness={0.95} roughness={0.15} />
        </mesh>
      </group>

      {/* LAPTOP SCREEN LID (Angled back at ~115 degrees) */}
      <group position={[0, 0.04, -0.9]} rotation={[-1.12, 0, 0]}>
        {/* Back Aluminum Casing */}
        <mesh position={[0, 0.9, -0.025]}>
          <boxGeometry args={[2.7, 1.8, 0.05]} />
          <meshStandardMaterial
            color="#08080A"
            metalness={0.95}
            roughness={0.16}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Bezel Frame */}
        <mesh position={[0, 0.9, 0.001]}>
          <planeGeometry args={[2.7, 1.8]} />
          <meshStandardMaterial color="#050505" roughness={0.5} />
        </mesh>

        {/* Camera Dot & Blue Status Indicator */}
        <mesh position={[0, 1.74, 0.003]}>
          <circleGeometry args={[0.014, 16]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        <mesh position={[0.04, 1.74, 0.003]}>
          <circleGeometry args={[0.007, 16]} />
          <meshBasicMaterial color="#1677FF" />
        </mesh>

        {/* Active Display Surface (PR VISION Website Texture) */}
        <mesh position={[0, 0.88, 0.005]}>
          <planeGeometry args={[2.58, 1.66]} />
          <meshBasicMaterial map={texture} />
        </mesh>

        {/* Clearcoat Glass Reflection Layer */}
        <mesh position={[0, 0.88, 0.007]}>
          <planeGeometry args={[2.58, 1.66]} />
          <meshPhysicalMaterial
            color="#1677FF"
            transparent
            opacity={0.12}
            roughness={0.04}
            metalness={0.1}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
          />
        </mesh>
      </group>
    </group>
  );
}

/**
 * 2. Floating Mobile Interface (Right side)
 * Sleek smartphone with black glass and electric blue rim highlights.
 */
function FloatingSmartphone({ texture, isReducedMotion }) {
  const ref = useRef();

  useFrame((state) => {
    if (isReducedMotion || !ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = -0.18 + Math.sin(t * 1.35 + 2.4) * 0.07;
    ref.current.rotation.y = -0.42 + Math.sin(t * 0.9) * 0.035;
    ref.current.rotation.x = -0.15 + Math.cos(t * 0.7) * 0.025;
  });

  return (
    <group ref={ref} position={[2.28, -0.18, 0.75]} rotation={[-0.15, -0.42, 0.12]}>
      {/* Phone Chassis - Pure Black */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.08, 2.08, 0.07]} />
        <meshStandardMaterial
          color="#0A0A0D"
          metalness={0.92}
          roughness={0.18}
        />
      </mesh>

      {/* Electric Blue Edge Highlight */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.09, 2.09, 0.06]} />
        <meshStandardMaterial
          color="#1677FF"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Screen Display */}
      <mesh position={[0, 0, 0.036]}>
        <planeGeometry args={[1.02, 2.01]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      {/* Blue Glass Clearcoat */}
      <mesh position={[0, 0, 0.037]}>
        <planeGeometry args={[1.02, 2.01]} />
        <meshPhysicalMaterial
          color="#1677FF"
          transparent
          opacity={0.12}
          roughness={0.03}
          clearcoat={1.0}
        />
      </mesh>
    </group>
  );
}

/**
 * 3. Translucent Analytics Dashboard (Left side)
 * Black translucent glass panel with thin dark-red edge highlights.
 */
function FloatingDashboard({ texture, isReducedMotion }) {
  const ref = useRef();

  useFrame((state) => {
    if (isReducedMotion || !ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = 0.52 + Math.sin(t * 1.2 + 0.8) * 0.06;
    ref.current.rotation.y = 0.38 + Math.cos(t * 0.8) * 0.025;
    ref.current.rotation.x = 0.13 + Math.sin(t * 0.6) * 0.02;
  });

  return (
    <group ref={ref} position={[-2.32, 0.52, 0.45]} rotation={[0.13, 0.38, -0.06]}>
      {/* Black Glass Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.14, 1.39, 0.04]} />
        <meshStandardMaterial
          color="#0A0A0D"
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>

      {/* Dark Red / Crimson Luminous Edge */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.16, 1.41, 0.03]} />
        <meshStandardMaterial
          color="#B5122A"
          emissive="#8B0000"
          emissiveIntensity={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Screen Face */}
      <mesh position={[0, 0, 0.022]}>
        <planeGeometry args={[2.08, 1.33]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      {/* Glass Reflection */}
      <mesh position={[0, 0, 0.023]}>
        <planeGeometry args={[2.08, 1.33]} />
        <meshPhysicalMaterial
          color="#287BFF"
          transparent
          opacity={0.12}
          roughness={0.05}
          clearcoat={1.0}
        />
      </mesh>
    </group>
  );
}

/**
 * 4. Subtle Glass UI Design Panel (Upper right side)
 * Black glass canvas with thin blue border.
 */
function FloatingDesignPanel({ texture, isReducedMotion }) {
  const ref = useRef();

  useFrame((state) => {
    if (isReducedMotion || !ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = 1.42 + Math.sin(t * 1.25 + 1.8) * 0.06;
    ref.current.rotation.y = -0.32 + Math.cos(t * 0.85) * 0.025;
    ref.current.rotation.x = -0.1 + Math.sin(t * 0.6) * 0.02;
  });

  return (
    <group ref={ref} position={[2.1, 1.42, -0.2]} rotation={[-0.1, -0.32, 0.06]}>
      {/* Black Glass Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.04, 1.34, 0.04]} />
        <meshStandardMaterial
          color="#0A0A0D"
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>

      {/* Electric Blue Border */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.06, 1.36, 0.03]} />
        <meshStandardMaterial
          color="#1677FF"
          emissive="#1677FF"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Screen Face */}
      <mesh position={[0, 0, 0.022]}>
        <planeGeometry args={[1.98, 1.28]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      {/* Glass Reflection */}
      <mesh position={[0, 0, 0.023]}>
        <planeGeometry args={[1.98, 1.28]} />
        <meshPhysicalMaterial
          color="#1677FF"
          transparent
          opacity={0.12}
          roughness={0.05}
          clearcoat={1.0}
        />
      </mesh>
    </group>
  );
}

/**
 * 5. Small Connected Digital Elements & Glowing Fiber Strands
 * Connects laptop to dashboard (left), phone (right), and design panel (upper right)
 * strictly in Electric Blue (#1677FF) and Deep Crimson (#B5122A).
 */
function ConnectionSplines({ isReducedMotion }) {
  const pulseGroupRef = useRef();

  const curves = useMemo(() => {
    return [
      // Laptop to Dashboard (left)
      new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.8, -0.2, 0.2),
        new THREE.Vector3(-1.4, 0.0, 0.3),
        new THREE.Vector3(-1.9, 0.3, 0.4),
        new THREE.Vector3(-2.2, 0.5, 0.4)
      ),
      // Laptop to Smartphone (right)
      new THREE.CubicBezierCurve3(
        new THREE.Vector3(0.9, -0.2, 0.2),
        new THREE.Vector3(1.4, -0.2, 0.4),
        new THREE.Vector3(1.8, -0.2, 0.6),
        new THREE.Vector3(2.1, -0.2, 0.7)
      ),
      // Laptop to Design Panel (upper right)
      new THREE.CubicBezierCurve3(
        new THREE.Vector3(0.6, 0.4, 0.1),
        new THREE.Vector3(1.1, 0.8, 0),
        new THREE.Vector3(1.5, 1.2, -0.1),
        new THREE.Vector3(1.9, 1.35, -0.2)
      ),
    ];
  }, []);

  const curveGeometries = useMemo(() => {
    return curves.map((curve) => new THREE.TubeGeometry(curve, 32, 0.007, 8, false));
  }, [curves]);

  useFrame((state) => {
    if (isReducedMotion || !pulseGroupRef.current) return;
    const t = state.clock.getElapsedTime();
    const children = pulseGroupRef.current.children;
    curves.forEach((curve, i) => {
      if (children[i]) {
        const progress = (t * 0.4 + i * 0.33) % 1;
        const pt = curve.getPoint(progress);
        children[i].position.copy(pt);
      }
    });
  });

  return (
    <group>
      {curveGeometries.map((geom, idx) => (
        <mesh key={idx} geometry={geom}>
          <meshBasicMaterial
            color={idx === 0 ? "#B5122A" : "#1677FF"}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}

      <group ref={pulseGroupRef}>
        {curves.map((_, idx) => (
          <mesh key={idx}>
            <sphereGeometry args={[0.035, 16, 16]} />
            <meshBasicMaterial
              color={idx === 0 ? "#B5122A" : "#287BFF"}
              transparent
              opacity={0.9}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/**
 * Reusable Digital Workspace Group
 */
export function DigitalWorkspaceGroup({ isReducedMotion = false, position = [0, 0, 0], scale = [1, 1, 1] }) {
  const groupRef = useRef();

  const textures = useMemo(() => {
    return {
      laptop: createLaptopWebsiteTexture(),
      phone: createSmartphoneAppTexture(),
      dashboard: createDashboardAnalyticsTexture(),
      design: createDesignCanvasTexture(),
    };
  }, []);

  useFrame((state) => {
    if (isReducedMotion || !groupRef.current) return;
    const { pointer } = state;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.16,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -pointer.y * 0.09,
      0.05
    );
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <FloatingLaptop texture={textures.laptop} isReducedMotion={isReducedMotion} />
      <FloatingSmartphone texture={textures.phone} isReducedMotion={isReducedMotion} />
      <FloatingDashboard texture={textures.dashboard} isReducedMotion={isReducedMotion} />
      <FloatingDesignPanel texture={textures.design} isReducedMotion={isReducedMotion} />
      <ConnectionSplines isReducedMotion={isReducedMotion} />
    </group>
  );
}

/**
 * Standalone Scene version with its own studio lighting
 */
export function InteractiveWorkspaceScene({ isReducedMotion = false }) {
  return (
    <>
      <ambientLight color="#050505" intensity={1.5} />
      <directionalLight position={[4, 6, 5]} intensity={2.6} color="#FFFFFF" />
      <pointLight position={[-4.5, 3.5, 2.5]} color="#1677FF" intensity={4.5} distance={14} />
      <pointLight position={[4.5, -2.8, 3.2]} color="#B5122A" intensity={3.5} distance={14} />
      <pointLight position={[0, 4.2, -1.5]} color="#287BFF" intensity={2.5} distance={12} />
      <DigitalWorkspaceGroup isReducedMotion={isReducedMotion} position={[0, 0, 0]} scale={[1, 1, 1]} />
    </>
  );
}

export default InteractiveWorkspaceScene;
