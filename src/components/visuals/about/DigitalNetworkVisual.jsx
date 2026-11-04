import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { useWebGLAvailability } from "../../../hooks/useWebGLAvailability";

/**
 * 3D Network Graph Nodes and Connection Lines
 * Represents distributed digital engineering, client collaboration, and modern web connectivity.
 */
function NetworkMesh({ isReducedMotion = false }) {
  const groupRef = useRef();
  const linesRef = useRef();

  // Define 12 structured 3D network nodes with colors from PR Vision palette
  const nodes = useMemo(() => {
    return [
      { id: 1, pos: [0, 0, 0], color: "#4285FF", size: 0.22, label: "Core Hub" },
      { id: 2, pos: [-1.8, 0.9, 0.4], color: "#55DDE0", size: 0.16, label: "React Client" },
      { id: 3, pos: [1.9, 0.8, -0.3], color: "#F04CBF", size: 0.18, label: "API Gateway" },
      { id: 4, pos: [-1.4, -1.2, 0.6], color: "#8055D9", size: 0.15, label: "Database" },
      { id: 5, pos: [1.5, -1.1, 0.5], color: "#FFD166", size: 0.15, label: "Cloud Node" },
      { id: 6, pos: [0, 1.8, -0.5], color: "#4285FF", size: 0.14, label: "Edge Worker" },
      { id: 7, pos: [0, -1.9, -0.4], color: "#55DDE0", size: 0.14, label: "Microservice" },
      { id: 8, pos: [-2.6, -0.2, -0.6], color: "#F04CBF", size: 0.13, label: "Mobile" },
      { id: 9, pos: [2.5, -0.1, -0.7], color: "#8055D9", size: 0.13, label: "Auth" },
      { id: 10, pos: [-0.9, 1.4, 0.8], color: "#55DDE0", size: 0.12, label: "CDN" },
      { id: 11, pos: [1.1, 1.5, 0.7], color: "#FFD166", size: 0.12, label: "Analytics" },
      { id: 12, pos: [0.8, -0.4, 1.2], color: "#4285FF", size: 0.13, label: "Security" },
    ];
  }, []);

  // Compute connecting line segments between nodes
  const linePoints = useMemo(() => {
    const connections = [
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 11],
      [1, 7], [1, 9], [2, 8], [2, 10], [3, 6], [4, 6],
      [1, 3], [2, 4], [9, 10], [5, 9], [5, 10]
    ];
    const points = [];
    connections.forEach(([i, j]) => {
      points.push(new THREE.Vector3(...nodes[i].pos));
      points.push(new THREE.Vector3(...nodes[j].pos));
    });
    return points;
  }, [nodes]);

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(linePoints);
  }, [linePoints]);

  useFrame((state) => {
    if (isReducedMotion) return;
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.08;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Network Connection Lines with Soft Glowing Line Shader */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#4285FF"
          transparent
          opacity={0.35}
          linewidth={1}
        />
      </lineSegments>

      {/* 3D Network Nodes */}
      {nodes.map((node) => (
        <group key={node.id} position={node.pos}>
          {/* Outer glowing halo */}
          <mesh>
            <sphereGeometry args={[node.size * 1.5, 16, 16]} />
            <meshBasicMaterial
              color={node.color}
              transparent
              opacity={0.2}
            />
          </mesh>

          {/* Solid core node */}
          <mesh>
            <sphereGeometry args={[node.size, 24, 24]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={1.2}
              roughness={0.2}
              metalness={0.6}
            />
          </mesh>
        </group>
      ))}

      {/* Floating Network Data Packets (Pulsing particles) */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={40}
            array={
              new Float32Array(
                Array.from({ length: 120 }, () => (Math.random() - 0.5) * 6)
              )
            }
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#55DDE0"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

/**
 * 2D Fallback for Network Visual when WebGL is unavailable or reduced motion is enabled
 */
function Network2DFallback() {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-6 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4285FF]/10 via-[#F04CBF]/08 to-[#55DDE0]/10 rounded-3xl" />
      <svg className="w-full max-w-md h-auto" viewBox="0 0 400 300" fill="none">
        <circle cx="200" cy="150" r="16" fill="#4285FF" fillOpacity="0.8" />
        <circle cx="100" cy="80" r="12" fill="#55DDE0" fillOpacity="0.8" />
        <circle cx="300" cy="90" r="14" fill="#F04CBF" fillOpacity="0.8" />
        <circle cx="90" cy="220" r="12" fill="#8055D9" fillOpacity="0.8" />
        <circle cx="310" cy="210" r="13" fill="#FFD166" fillOpacity="0.8" />
        <line x1="200" y1="150" x2="100" y2="80" stroke="#4285FF" strokeOpacity="0.4" strokeWidth="2" />
        <line x1="200" y1="150" x2="300" y2="90" stroke="#F04CBF" strokeOpacity="0.4" strokeWidth="2" />
        <line x1="200" y1="150" x2="90" y2="220" stroke="#8055D9" strokeOpacity="0.4" strokeWidth="2" />
        <line x1="200" y1="150" x2="310" y2="210" stroke="#FFD166" strokeOpacity="0.4" strokeWidth="2" />
      </svg>
    </div>
  );
}

/**
 * Digital Network Visual Component for About Section
 * Gives the About section its own distinct, meaningful visual identity of interconnected digital nodes.
 */
export function DigitalNetworkVisual() {
  const isWebGLAvailable = useWebGLAvailability();
  const isReducedMotion = useReducedMotion();

  if (!isWebGLAvailable) {
    return <Network2DFallback />;
  }

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-3xl glass-panel overflow-hidden border border-white/80 shadow-lg flex items-center justify-center">
      {/* Ambient background light aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4285FF]/08 via-transparent to-[#F04CBF]/06 pointer-events-none" />
      
      {/* Decorative Network Tag */}
      <div className="absolute top-4 left-5 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[11px] font-semibold text-[#0F172A] shadow-xs select-none">
        <span className="w-2 h-2 rounded-full bg-[#55DDE0] animate-pulse" />
        <span>Connected Digital Infrastructure</span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full cursor-grab active:cursor-grabbing !bg-transparent"
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 5, 4]} intensity={2.0} color="#FFFFFF" />
        <pointLight position={[-3, -3, 2]} intensity={2.5} color="#F04CBF" />
        <pointLight position={[3, 3, 2]} intensity={2.5} color="#55DDE0" />

        <Float speed={isReducedMotion ? 0 : 1.2} rotationIntensity={0.3} floatIntensity={0.5}>
          <NetworkMesh isReducedMotion={isReducedMotion} />
        </Float>
      </Canvas>

      {/* Floating Micro Metrics Overlay */}
      <div className="absolute bottom-4 right-5 z-10 hidden sm:flex items-center gap-4 text-[10px] text-[#475569] bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/90 shadow-xs select-none">
        <span>Latency: <strong className="text-[#0F172A]">0.8ms</strong></span>
        <span>Active Links: <strong className="text-[#4285FF]">18 Nodes</strong></span>
        <span>Mesh: <strong className="text-[#F04CBF]">99.9%</strong></span>
      </div>
    </div>
  );
}

export default DigitalNetworkVisual;
