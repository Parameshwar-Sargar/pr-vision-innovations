import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  createLaptopWebsiteTexture,
  createBrowserWebsiteTexture,
  createSmartphoneAppTexture,
  createDashboardAnalyticsTexture,
  createCodeEditorTexture,
  createDesignCanvasTexture,
} from "./workspaceTextures";

/**
 * 1. Central Realistic Floating Laptop
 * High-quality 3D geometry with metallic chassis, keyboard well,
 * trackpad, cylindrical hinge, and open angled lid with clearcoat glass reflection.
 */
function FloatingLaptop({ texture, isReducedMotion }) {
  const laptopRef = useRef();

  useFrame((state) => {
    if (isReducedMotion || !laptopRef.current) return;
    const t = state.clock.getElapsedTime();
    laptopRef.current.position.y = -0.3 + Math.sin(t * 1.1) * 0.06;
    laptopRef.current.rotation.x = 0.18 + Math.cos(t * 0.9) * 0.02;
    laptopRef.current.rotation.y = 0.05 + Math.sin(t * 0.7) * 0.03;
  });

  return (
    <group ref={laptopRef} position={[0, -0.3, 0.2]}>
      {/* LAPTOP BASE (Keyboard Chassis) */}
      <group position={[0, 0, 0]}>
        {/* Main Base Body */}
        <mesh position={[0, -0.04, 0]}>
          <boxGeometry args={[2.7, 0.08, 1.8]} />
          <meshStandardMaterial
            color="#2A103D"
            metalness={0.88}
            roughness={0.22}
            envMapIntensity={1.2}
          />
        </mesh>

        {/* Golden Yellow Chamfer Accent */}
        <mesh position={[0, -0.04, 0.902]}>
          <boxGeometry args={[2.68, 0.02, 0.01]} />
          <meshStandardMaterial color="#FFC928" emissive="#FFC928" emissiveIntensity={0.6} />
        </mesh>

        {/* Keyboard Well Recess */}
        <mesh position={[0, 0.002, -0.22]}>
          <planeGeometry args={[2.36, 1.05]} />
          <meshStandardMaterial color="#190626" roughness={0.7} />
        </mesh>

        {/* Simulated Key Rows (Dark Plum with subtle backlight) */}
        {[-0.55, -0.35, -0.15, 0.05, 0.25].map((zOffset, rowIdx) => (
          <mesh key={rowIdx} position={[0, 0.006, zOffset]}>
            <boxGeometry args={[2.3, 0.012, 0.14]} />
            <meshStandardMaterial
              color="#38104E"
              roughness={0.4}
              metalness={0.3}
              emissive="#7028C8"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}

        {/* Trackpad */}
        <mesh position={[0, 0.003, 0.52]}>
          <planeGeometry args={[0.92, 0.52]} />
          <meshStandardMaterial
            color="#3D1854"
            roughness={0.28}
            metalness={0.6}
          />
        </mesh>

        {/* Trackpad Border Accent */}
        <mesh position={[0, 0.004, 0.52]}>
          <ringGeometry args={[0.46, 0.465, 32]} />
          <meshBasicMaterial color="#FFC928" opacity={0.35} transparent />
        </mesh>

        {/* Front Opening Notch */}
        <mesh position={[0, -0.01, 0.9]}>
          <boxGeometry args={[0.35, 0.025, 0.02]} />
          <meshStandardMaterial color="#FFC928" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Hinge Cylinder */}
        <mesh position={[0, 0.02, -0.9]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.045, 0.045, 2.5, 24]} />
          <meshStandardMaterial color="#190626" metalness={0.95} roughness={0.15} />
        </mesh>
      </group>

      {/* LAPTOP SCREEN LID (Angled back at ~115 degrees) */}
      <group position={[0, 0.04, -0.9]} rotation={[-1.12, 0, 0]}>
        {/* Back Aluminum Casing */}
        <mesh position={[0, 0.9, -0.025]}>
          <boxGeometry args={[2.7, 1.8, 0.05]} />
          <meshStandardMaterial
            color="#240A36"
            metalness={0.9}
            roughness={0.2}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Bezel Frame */}
        <mesh position={[0, 0.9, 0.001]}>
          <planeGeometry args={[2.7, 1.8]} />
          <meshStandardMaterial color="#12041D" roughness={0.5} />
        </mesh>

        {/* Camera Dot & Green Status Indicator */}
        <mesh position={[0, 1.74, 0.003]}>
          <circleGeometry args={[0.014, 16]} />
          <meshBasicMaterial color="#111111" />
        </mesh>
        <mesh position={[0.04, 1.74, 0.003]}>
          <circleGeometry args={[0.007, 16]} />
          <meshBasicMaterial color="#25D366" />
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
            color="#FFFFFF"
            transparent
            opacity={0.16}
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
 * 2. Floating Browser Window (Upper side)
 */
function FloatingBrowser({ texture, isReducedMotion }) {
  const ref = useRef();

  useFrame((state) => {
    if (isReducedMotion || !ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = 1.65 + Math.sin(t * 1.3 + 1.2) * 0.07;
    ref.current.rotation.y = 0.12 + Math.cos(t * 0.8) * 0.03;
    ref.current.rotation.x = -0.08 + Math.sin(t * 0.6) * 0.02;
  });

  return (
    <group ref={ref} position={[-0.3, 1.65, -0.45]} rotation={[-0.08, 0.12, 0.02]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.42, 1.52, 0.04]} />
        <meshStandardMaterial
          color="#330E4A"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[0, 0, 0.022]}>
        <planeGeometry args={[2.36, 1.46]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      <mesh position={[0, 0, 0.023]}>
        <planeGeometry args={[2.36, 1.46]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transparent
          opacity={0.14}
          roughness={0.06}
          clearcoat={1.0}
        />
      </mesh>
    </group>
  );
}

/**
 * 3. Floating Smartphone (Right side)
 */
function FloatingSmartphone({ texture, isReducedMotion }) {
  const ref = useRef();

  useFrame((state) => {
    if (isReducedMotion || !ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = -0.2 + Math.sin(t * 1.4 + 2.5) * 0.08;
    ref.current.rotation.y = -0.42 + Math.sin(t * 0.9) * 0.04;
    ref.current.rotation.x = -0.16 + Math.cos(t * 0.7) * 0.03;
  });

  return (
    <group ref={ref} position={[2.28, -0.2, 0.75]} rotation={[-0.16, -0.42, 0.12]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.08, 2.08, 0.07]} />
        <meshStandardMaterial
          color="#3D0F4A"
          metalness={0.88}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.09, 2.09, 0.06]} />
        <meshStandardMaterial
          color="#FFC928"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      <mesh position={[0, 0, 0.036]}>
        <planeGeometry args={[1.02, 2.01]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      <mesh position={[0, 0, 0.037]}>
        <planeGeometry args={[1.02, 2.01]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transparent
          opacity={0.16}
          roughness={0.03}
          clearcoat={1.0}
        />
      </mesh>
    </group>
  );
}

/**
 * 4. Floating Analytics Dashboard (Left side)
 */
function FloatingDashboard({ texture, isReducedMotion }) {
  const ref = useRef();

  useFrame((state) => {
    if (isReducedMotion || !ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = 0.55 + Math.sin(t * 1.2 + 0.8) * 0.07;
    ref.current.rotation.y = 0.4 + Math.cos(t * 0.8) * 0.03;
    ref.current.rotation.x = 0.14 + Math.sin(t * 0.6) * 0.02;
  });

  return (
    <group ref={ref} position={[-2.35, 0.55, 0.45]} rotation={[0.14, 0.4, -0.06]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.14, 1.39, 0.04]} />
        <meshStandardMaterial
          color="#29083E"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[0, 0, 0.022]}>
        <planeGeometry args={[2.08, 1.33]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      <mesh position={[0, 0, 0.023]}>
        <planeGeometry args={[2.08, 1.33]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transparent
          opacity={0.14}
          roughness={0.05}
          clearcoat={1.0}
        />
      </mesh>
    </group>
  );
}

/**
 * 5. Floating Code Editor (Lower left side)
 */
function FloatingCodeEditor({ texture, isReducedMotion }) {
  const ref = useRef();

  useFrame((state) => {
    if (isReducedMotion || !ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = -1.25 + Math.sin(t * 1.15 + 3.2) * 0.06;
    ref.current.rotation.y = 0.34 + Math.sin(t * 0.75) * 0.03;
    ref.current.rotation.x = 0.25 + Math.cos(t * 0.65) * 0.02;
  });

  return (
    <group ref={ref} position={[-1.9, -1.25, 0.7]} rotation={[0.25, 0.34, -0.08]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.04, 1.28, 0.04]} />
        <meshStandardMaterial
          color="#1D062E"
          metalness={0.82}
          roughness={0.26}
        />
      </mesh>

      <mesh position={[0, 0, 0.022]}>
        <planeGeometry args={[1.98, 1.22]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      <mesh position={[0, 0, 0.023]}>
        <planeGeometry args={[1.98, 1.22]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transparent
          opacity={0.13}
          roughness={0.06}
          clearcoat={1.0}
        />
      </mesh>
    </group>
  );
}

/**
 * 6. Floating Design Interface Canvas (Upper right side)
 */
function FloatingDesignCanvas({ texture, isReducedMotion }) {
  const ref = useRef();

  useFrame((state) => {
    if (isReducedMotion || !ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = 1.4 + Math.sin(t * 1.25 + 1.8) * 0.07;
    ref.current.rotation.y = -0.34 + Math.cos(t * 0.85) * 0.03;
    ref.current.rotation.x = -0.1 + Math.sin(t * 0.6) * 0.02;
  });

  return (
    <group ref={ref} position={[2.18, 1.4, -0.2]} rotation={[-0.1, -0.34, 0.06]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.04, 1.34, 0.04]} />
        <meshStandardMaterial
          color="#350A4E"
          metalness={0.8}
          roughness={0.24}
        />
      </mesh>

      <mesh position={[0, 0, 0.022]}>
        <planeGeometry args={[1.98, 1.28]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      <mesh position={[0, 0, 0.023]}>
        <planeGeometry args={[1.98, 1.28]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transparent
          opacity={0.14}
          roughness={0.05}
          clearcoat={1.0}
        />
      </mesh>
    </group>
  );
}

/**
 * Connecting Glowing Strands in Royal Purple, Ruby Red, and Golden Yellow
 */
function ConnectionSplines({ isReducedMotion }) {
  const pulseGroupRef = useRef();

  const curves = useMemo(() => {
    return [
      new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, 0.5, 0.1),
        new THREE.Vector3(-0.1, 1.1, 0),
        new THREE.Vector3(-0.2, 1.4, -0.2),
        new THREE.Vector3(-0.3, 1.6, -0.4)
      ),
      new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.8, -0.2, 0.2),
        new THREE.Vector3(-1.4, 0.0, 0.3),
        new THREE.Vector3(-1.9, 0.3, 0.4),
        new THREE.Vector3(-2.2, 0.5, 0.4)
      ),
      new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.7, -0.4, 0.3),
        new THREE.Vector3(-1.2, -0.7, 0.4),
        new THREE.Vector3(-1.5, -1.0, 0.5),
        new THREE.Vector3(-1.8, -1.2, 0.6)
      ),
      new THREE.CubicBezierCurve3(
        new THREE.Vector3(0.9, -0.2, 0.2),
        new THREE.Vector3(1.4, -0.2, 0.4),
        new THREE.Vector3(1.8, -0.2, 0.6),
        new THREE.Vector3(2.1, -0.2, 0.7)
      ),
      new THREE.CubicBezierCurve3(
        new THREE.Vector3(0.6, 0.5, 0.1),
        new THREE.Vector3(1.1, 0.9, 0),
        new THREE.Vector3(1.6, 1.2, -0.1),
        new THREE.Vector3(2.0, 1.35, -0.2)
      ),
    ];
  }, []);

  const curveGeometries = useMemo(() => {
    return curves.map((curve) => new THREE.TubeGeometry(curve, 32, 0.008, 8, false));
  }, [curves]);

  useFrame((state) => {
    if (isReducedMotion || !pulseGroupRef.current) return;
    const t = state.clock.getElapsedTime();
    const children = pulseGroupRef.current.children;
    curves.forEach((curve, i) => {
      if (children[i]) {
        const progress = ((t * 0.45 + i * 0.2) % 1);
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
            color={idx % 2 === 0 ? "#7028C8" : "#D7264D"}
            transparent
            opacity={0.35}
          />
        </mesh>
      ))}

      <group ref={pulseGroupRef}>
        {curves.map((_, idx) => (
          <mesh key={idx}>
            <sphereGeometry args={[0.035, 16, 16]} />
            <meshBasicMaterial
              color={idx % 2 === 0 ? "#FFC928" : "#D7264D"}
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
 * Reusable Digital Workspace Group (Laptop + 5 Screens + Connection Splines)
 * Can be positioned and scaled inside any 3D environment.
 */
export function DigitalWorkspaceGroup({ isReducedMotion = false, position = [0, 0, 0], scale = [1, 1, 1] }) {
  const groupRef = useRef();

  const textures = useMemo(() => {
    return {
      laptop: createLaptopWebsiteTexture(),
      browser: createBrowserWebsiteTexture(),
      phone: createSmartphoneAppTexture(),
      dashboard: createDashboardAnalyticsTexture(),
      code: createCodeEditorTexture(),
      design: createDesignCanvasTexture(),
    };
  }, []);

  useFrame((state) => {
    if (isReducedMotion || !groupRef.current) return;
    const { pointer } = state;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.2,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -pointer.y * 0.12,
      0.05
    );
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <FloatingLaptop texture={textures.laptop} isReducedMotion={isReducedMotion} />
      <FloatingBrowser texture={textures.browser} isReducedMotion={isReducedMotion} />
      <FloatingSmartphone texture={textures.phone} isReducedMotion={isReducedMotion} />
      <FloatingDashboard texture={textures.dashboard} isReducedMotion={isReducedMotion} />
      <FloatingCodeEditor texture={textures.code} isReducedMotion={isReducedMotion} />
      <FloatingDesignCanvas texture={textures.design} isReducedMotion={isReducedMotion} />
      <ConnectionSplines isReducedMotion={isReducedMotion} />
    </group>
  );
}

/**
 * Standalone Scene version with its own lighting
 */
export function InteractiveWorkspaceScene({ isReducedMotion = false }) {
  return (
    <>
      <ambientLight color="#7028C8" intensity={1.8} />
      <directionalLight position={[3, 5, 4]} intensity={2.6} color="#FFFFFF" />
      <pointLight position={[-4.5, 3.5, 2.5]} color="#7028C8" intensity={3.8} distance={14} />
      <pointLight position={[4.5, -2.8, 3.2]} color="#D7264D" intensity={3.5} distance={14} />
      <pointLight position={[0, 4.2, -1.5]} color="#FFC928" intensity={2.8} distance={12} />
      <DigitalWorkspaceGroup isReducedMotion={isReducedMotion} position={[0, 0, 0]} scale={[1, 1, 1]} />
    </>
  );
}

export default InteractiveWorkspaceScene;
