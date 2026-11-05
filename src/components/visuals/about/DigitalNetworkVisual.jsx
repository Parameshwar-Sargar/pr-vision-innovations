import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { useWebGLAvailability } from "../../../hooks/useWebGLAvailability";

/**
 * 3D Network Graph Nodes and Connection Lines
 * Strictly Black, Electric Blue (#1677FF), and Deep Crimson (#B5122A).
 */
function NetworkMesh({ isReducedMotion = false }) {
  const groupRef = useRef();

  // Define 12 structured 3D network nodes strictly in Electric Blue and Crimson
  const nodes = useMemo(() => {
    return [
      { id: 1, pos: [0, 0, 0], color: "#1677FF", size: 0.22, label: "Core Hub" },
      { id: 2, pos: [-1.8, 0.9, 0.4], color: "#287BFF", size: 0.16, label: "React Client" },
      { id: 3, pos: [1.9, 0.8, -0.3], color: "#B5122A", size: 0.18, label: "API Gateway" },
      { id: 4, pos: [-1.4, -1.2, 0.6], color: "#8B0000", size: 0.15, label: "Database" },
      { id: 5, pos: [1.5, -1.1, 0.5], color: "#1677FF", size: 0.15, label: "Cloud Node" },
      { id: 6, pos: [0, 1.8, -0.5], color: "#287BFF", size: 0.14, label: "Edge Worker" },
      { id: 7, pos: [0, -1.9, -0.4], color: "#B5122A", size: 0.14, label: "Microservice" },
      { id: 8, pos: [-2.6, -0.2, -0.6], color: "#1677FF", size: 0.13, label: "Mobile" },
      { id: 9, pos: [2.5, -0.1, -0.7], color: "#8B0000", size: 0.13, label: "Auth" },
      { id: 10, pos: [-0.9, 1.4, 0.8], color: "#287BFF", size: 0.12, label: "CDN" },
      { id: 11, pos: [1.1, 1.5, 0.7], color: "#B5122A", size: 0.12, label: "Analytics" },
      { id: 12, pos: [0.8, -0.4, 1.2], color: "#1677FF", size: 0.13, label: "Security" },
    ];
  }, []);

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
      {/* Connection Lines */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#1677FF" transparent opacity={0.3} />
      </lineSegments>

      {/* Nodes */}
      {nodes.map((node) => (
        <mesh key={node.id} position={node.pos}>
          <sphereGeometry args={[node.size, 16, 16]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.6}
            metalness={0.6}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

export function DigitalNetworkVisual() {
  const isWebGLAvailable = useWebGLAvailability();
  const isReducedMotion = useReducedMotion();

  if (!isWebGLAvailable) {
    return (
      <div className="w-full h-44 rounded-2xl bg-[#0A0A0D] border border-white/10 flex items-center justify-center p-4">
        <span className="text-xs text-[#A1A1AA] font-mono">
          &lt;PR-VISION-NETWORK-ENGINEERING /&gt;
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-48 sm:h-56 rounded-2xl bg-[#0A0A0D]/90 border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        dpr={[1, 1.5]}
        className="!bg-transparent"
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[5, 5, 5]} color="#1677FF" intensity={3} />
        <pointLight position={[-5, -5, -5]} color="#B5122A" intensity={2} />
        <NetworkMesh isReducedMotion={isReducedMotion} />
      </Canvas>

      <div className="absolute bottom-3 left-4 text-[10px] text-[#A1A1AA] font-mono select-none">
        Distributed Engineering Mesh // Sangola Core Hub
      </div>
    </div>
  );
}

export default DigitalNetworkVisual;
