import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * 1. Undulating Full-Width 3D Glass Wave Surface
 * Spans the entire viewport background edge-to-edge.
 * Dynamically computes wave harmonics in useFrame with recomputed normals
 * for realistic rolling reflections and optical refraction.
 */
function UndulatingGlassWave({ isReducedMotion }) {
  const geomRef = useRef();

  // Create plane geometry: 28 units wide by 18 units high
  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(28, 18, 40, 26);
  }, []);

  useFrame((state) => {
    if (isReducedMotion || !geomRef.current) return;
    const pos = geomRef.current.attributes.position;
    const t = state.clock.getElapsedTime();

    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      // Harmonic wave formula creating smooth, organic liquid-glass motion
      const z =
        Math.sin(u * 0.3 + t * 0.45) * 0.5 +
        Math.cos(v * 0.38 + t * 0.4) * 0.45 +
        Math.sin((u + v) * 0.2 + t * 0.3) * 0.3;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
    geomRef.current.computeVertexNormals();
  });

  return (
    <mesh position={[0, 0, -3.2]}>
      <primitive object={geometry} ref={geomRef} attach="geometry" />
      <meshPhysicalMaterial
        color="#7028C8" // Royal Purple
        emissive="#4A0E4E"
        emissiveIntensity={0.15}
        transmission={0.82}
        roughness={0.16}
        metalness={0.08}
        clearcoat={1.0}
        clearcoatRoughness={0.08}
        ior={1.48}
        thickness={1.8}
        transparent
        opacity={0.82}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/**
 * Helper to build smooth curved 3D ribbon strips from bezier/spline curves
 */
function createRibbonGeometry(points, width = 0.85, segments = 64) {
  const curve = new THREE.CatmullRomCurve3(points);
  const frames = curve.computeFrenetFrames(segments, false);
  const geom = new THREE.BufferGeometry();
  const vertices = [];
  const uvs = [];
  const indices = [];

  for (let i = 0; i <= segments; i++) {
    const u = i / segments;
    const p = curve.getPointAt(u);
    const binormal = frames.binormals[i];

    // Left and right edge vertices
    const p1 = p.clone().addScaledVector(binormal, width * 0.5);
    const p2 = p.clone().addScaledVector(binormal, -width * 0.5);

    vertices.push(p1.x, p1.y, p1.z);
    vertices.push(p2.x, p2.y, p2.z);

    uvs.push(0, u);
    uvs.push(1, u);

    if (i < segments) {
      const idx = i * 2;
      indices.push(idx, idx + 1, idx + 2);
      indices.push(idx + 1, idx + 3, idx + 2);
    }
  }

  geom.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geom.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geom.setIndex(indices);
  geom.computeVertexNormals();
  return { geom, curve };
}

/**
 * 2. Curved Liquid-Glass Ribbon Component
 * Flowing, translucent ribbon curving across the full 3D viewport.
 */
function LiquidGlassRibbon({ points, width, color, emissive, ior, speed, offset, isReducedMotion }) {
  const meshRef = useRef();

  const { geom } = useMemo(() => {
    return createRibbonGeometry(points, width, 72);
  }, [points, width]);

  useFrame((state) => {
    if (isReducedMotion || !meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t * speed + offset) * 0.12;
    meshRef.current.rotation.z = Math.cos(t * (speed * 0.7) + offset) * 0.03;
  });

  return (
    <mesh ref={meshRef} geometry={geom}>
      <meshPhysicalMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.2}
        transmission={0.88}
        roughness={0.12}
        metalness={0.05}
        clearcoat={1.0}
        clearcoatRoughness={0.06}
        ior={ior}
        thickness={1.5}
        transparent
        opacity={0.85}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/**
 * 3. Floating Organic Frosted-Glass Discs / Lenses
 * Transparent circular glass shields drifting in 3D space, catching rim lights.
 */
function FloatingGlassDisc({ position, scale, color, emissive, speed, delay, isReducedMotion }) {
  const ref = useRef();

  useFrame((state) => {
    if (isReducedMotion || !ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * speed + delay) * 0.18;
    ref.current.rotation.x = Math.sin(t * (speed * 0.8) + delay) * 0.25;
    ref.current.rotation.y = Math.cos(t * (speed * 0.6) + delay) * 0.35;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Frosted Glass Body */}
      <mesh>
        <cylinderGeometry args={[0.72, 0.72, 0.06, 32]} />
        <meshPhysicalMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.25}
          transmission={0.9}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          ior={1.5}
          thickness={1.6}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Luminous Chamfer Ring Edge */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.71, 0.73, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.65} />
      </mesh>
    </group>
  );
}

/**
 * Main Full-Screen 3D Glass Environment
 * Strictly uses:
 * - Rich Ruby Red: #D7264D
 * - Golden Yellow: #FFC928
 * - Royal Purple: #7028C8
 */
export function FullScreenGlassEnvironment({ isReducedMotion = false }) {
  const envGroupRef = useRef();

  // Define 3D points for flowing glass ribbons
  const ribbonData = useMemo(() => {
    return [
      // 1. Arching Ruby Red Liquid-Glass Ribbon (sweeps from lower left to upper right)
      {
        points: [
          new THREE.Vector3(-12, -4.8, -1.8),
          new THREE.Vector3(-6, -1.2, -1.0),
          new THREE.Vector3(0, 1.8, -1.2),
          new THREE.Vector3(6, 1.2, -1.4),
          new THREE.Vector3(12, 3.2, -2.0),
        ],
        width: 1.1,
        color: "#D7264D", // Rich Ruby Red
        emissive: "#8A0B28",
        ior: 1.52,
        speed: 0.65,
        offset: 0,
      },
      // 2. Flowing Golden Yellow Liquid-Glass Ribbon (sweeps across bottom and center)
      {
        points: [
          new THREE.Vector3(-10, 3.8, -2.2),
          new THREE.Vector3(-3, 1.2, -1.4),
          new THREE.Vector3(3, -1.8, -0.9),
          new THREE.Vector3(8, -1.0, -1.1),
          new THREE.Vector3(12, -3.8, -1.8),
        ],
        width: 0.95,
        color: "#FFC928", // Golden Yellow
        emissive: "#B37B00",
        ior: 1.5,
        speed: 0.55,
        offset: 1.8,
      },
      // 3. Dynamic Royal Purple Ribbon (undulating through mid-ground)
      {
        points: [
          new THREE.Vector3(-11, 0.5, -2.0),
          new THREE.Vector3(-4, -2.5, -1.5),
          new THREE.Vector3(2, 0.2, -1.1),
          new THREE.Vector3(7, 2.8, -1.6),
          new THREE.Vector3(12, 0.8, -2.2),
        ],
        width: 1.25,
        color: "#7028C8", // Royal Purple
        emissive: "#3B0A6B",
        ior: 1.48,
        speed: 0.48,
        offset: 3.2,
      },
    ];
  }, []);

  // Define floating organic glass discs positions across the scene
  const discs = useMemo(() => {
    return [
      {
        position: [-5.6, 2.5, -0.8],
        scale: [1.1, 1.1, 1.1],
        color: "#D7264D", // Ruby Red
        emissive: "#8A0B28",
        speed: 0.8,
        delay: 0.2,
      },
      {
        position: [-6.4, -2.6, -1.2],
        scale: [1.25, 1.25, 1.25],
        color: "#FFC928", // Golden Yellow
        emissive: "#B37B00",
        speed: 0.7,
        delay: 1.4,
      },
      {
        position: [-1.8, -3.2, -1.0],
        scale: [0.9, 0.9, 0.9],
        color: "#7028C8", // Royal Purple
        emissive: "#3B0A6B",
        speed: 0.9,
        delay: 2.1,
      },
      {
        position: [1.2, 3.4, -1.3],
        scale: [1.0, 1.0, 1.0],
        color: "#FFC928", // Golden Yellow
        emissive: "#B37B00",
        speed: 0.75,
        delay: 0.9,
      },
      {
        position: [6.8, -2.8, -0.4],
        scale: [1.15, 1.15, 1.15],
        color: "#D7264D", // Ruby Red
        emissive: "#8A0B28",
        speed: 0.85,
        delay: 2.7,
      },
      {
        position: [6.2, 2.8, -0.9],
        scale: [1.05, 1.05, 1.05],
        color: "#7028C8", // Royal Purple
        emissive: "#3B0A6B",
        speed: 0.65,
        delay: 1.8,
      },
    ];
  }, []);

  // Parallax subtle camera / group drift
  useFrame((state) => {
    if (isReducedMotion || !envGroupRef.current) return;
    const { pointer } = state;
    envGroupRef.current.position.x = THREE.MathUtils.lerp(
      envGroupRef.current.position.x,
      pointer.x * 0.35,
      0.04
    );
    envGroupRef.current.position.y = THREE.MathUtils.lerp(
      envGroupRef.current.position.y,
      pointer.y * 0.25,
      0.04
    );
  });

  return (
    <group ref={envGroupRef}>
      {/* 
        STUDIO LIGHTING STRICTLY IN:
        - Rich Ruby Red: #D7264D
        - Golden Yellow: #FFC928
        - Royal Purple: #7028C8
      */}
      {/* Deep Royal Purple Ambient Light */}
      <ambientLight color="#7028C8" intensity={1.8} />

      {/* Main Specular Key Light for Crisp Glass Caustics */}
      <directionalLight position={[3, 6, 5]} intensity={2.6} color="#FFFFFF" />

      {/* Rich Ruby Red Point Light (Left Upper) */}
      <pointLight position={[-6.5, 4.0, 3.0]} color="#D7264D" intensity={4.8} distance={18} />

      {/* Golden Yellow Point Light (Right Upper) */}
      <pointLight position={[6.0, 3.8, 3.2]} color="#FFC928" intensity={5.2} distance={18} />

      {/* Royal Purple Point Light (Bottom Center) */}
      <pointLight position={[0, -4.5, 4.0]} color="#7028C8" intensity={4.2} distance={16} />

      {/* Golden Yellow Warm Rim Light (Bottom Left) */}
      <pointLight position={[-4.0, -3.5, 2.2]} color="#FFC928" intensity={3.5} distance={14} />

      {/* 1. Full-Viewport Undulating 3D Glass Wave Plane */}
      <UndulatingGlassWave isReducedMotion={isReducedMotion} />

      {/* 2. Layered Curved Liquid-Glass Ribbons */}
      {ribbonData.map((ribbon, idx) => (
        <LiquidGlassRibbon key={idx} {...ribbon} isReducedMotion={isReducedMotion} />
      ))}

      {/* 3. Floating Organic Frosted-Glass Discs */}
      {discs.map((disc, idx) => (
        <FloatingGlassDisc key={idx} {...disc} isReducedMotion={isReducedMotion} />
      ))}
    </group>
  );
}

export default FullScreenGlassEnvironment;

