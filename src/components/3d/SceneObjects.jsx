import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

/**
 * 3D Scene Objects for PR Vision Innovations Hero (Light Theme)
 * Crystal pearlescent core with electric blue wireframe, radiant violet crystal,
 * vibrant orbital rings, and studio lighting optimized for light background.
 */
export function SceneObjects({ isReducedMotion = false }) {
  const coreGroupRef = useRef();
  const innerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const particlesRef = useRef();

  useFrame((state) => {
    if (isReducedMotion) return;

    const t = state.clock.getElapsedTime();

    if (coreGroupRef.current) {
      coreGroupRef.current.rotation.x = t * 0.12;
      coreGroupRef.current.rotation.y = t * 0.16;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.2;
      innerRef.current.rotation.z = t * 0.15;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.35) * 0.08;
      ring1Ref.current.rotation.y = t * 0.28;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -Math.PI / 3 + Math.cos(t * 0.3) * 0.08;
      ring2Ref.current.rotation.z = -t * 0.22;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.18;
      ring3Ref.current.rotation.z = Math.PI / 6 + Math.sin(t * 0.25) * 0.06;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.03;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* ========================================================
          STUDIO LIGHTING (Harmonized with Vibrant Fluid Palette)
         ======================================================== */}
      {/* Sky Blue ambient fill */}
      <ambientLight intensity={1.6} color="#75CFFF" />

      {/* Main Key Light */}
      <directionalLight position={[6, 9, 8]} intensity={3.2} color="#FFFFFF" />

      {/* Electric Blue Rim Light */}
      <pointLight position={[5, -4, 4]} intensity={3.8} color="#4285FF" distance={18} />

      {/* Vibrant Pink Fill Light */}
      <pointLight position={[-5, 4, 3]} intensity={3.6} color="#F04CBF" distance={18} />

      {/* Golden Yellow / Cyan Core Warmth */}
      <pointLight position={[0, 0, 0]} intensity={2.4} color="#FFD166" distance={7} />

      {/* ========================================================
          FLOATING GEOMETRIC CENTERPIECE (IRIDESCENT PEARL & NEON)
         ======================================================== */}
      <Float speed={isReducedMotion ? 0 : 1.6} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Central Geometric Core */}
        <group ref={coreGroupRef}>
          {/* Outer Pearlescent Crystal Polyhedron */}
          <mesh>
            <icosahedronGeometry args={[1.4, 0]} />
            <meshPhysicalMaterial
              color="#FFFFFF"
              emissive="#4285FF"
              emissiveIntensity={0.28}
              roughness={0.06}
              metalness={0.25}
              clearcoat={1}
              clearcoatRoughness={0.06}
              transparent
              opacity={0.9}
            />
          </mesh>

          {/* Purple / Electric Blue Wireframe Grid Overlay */}
          <mesh>
            <icosahedronGeometry args={[1.42, 0]} />
            <meshStandardMaterial
              color="#A34DE0"
              emissive="#A34DE0"
              emissiveIntensity={1.5}
              wireframe
            />
          </mesh>
        </group>

        {/* Inner Glowing Vibrant Pink Crystal */}
        <mesh ref={innerRef}>
          <octahedronGeometry args={[0.78, 0]} />
          <meshStandardMaterial
            color="#F04CBF"
            emissive="#F04CBF"
            emissiveIntensity={2.0}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>

        {/* ========================================================
            VIBRANT FLUID ORBITAL RINGS
           ======================================================== */}
        {/* Ring 1 - Electric Blue Orbit */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.05, 0.026, 16, 100]} />
          <meshStandardMaterial
            color="#4285FF"
            emissive="#4285FF"
            emissiveIntensity={1.6}
            roughness={0.15}
          />
        </mesh>

        {/* Ring 2 - Vibrant Pink Orbit */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.45, 0.022, 16, 100]} />
          <meshStandardMaterial
            color="#F04CBF"
            emissive="#F04CBF"
            emissiveIntensity={1.7}
            roughness={0.15}
          />
        </mesh>

        {/* Ring 3 - Golden Yellow Gyroscopic Orbit */}
        <mesh ref={ring3Ref}>
          <torusGeometry args={[2.85, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#FFD166"
            emissive="#FFD166"
            emissiveIntensity={1.6}
            roughness={0.15}
          />
        </mesh>

        {/* Floating Satellite Nodes */}
        <group position={[1.9, 1.1, 0.5]}>
          <mesh>
            <boxGeometry args={[0.18, 0.18, 0.18]} />
            <meshStandardMaterial color="#55DDE0" emissive="#55DDE0" emissiveIntensity={1.8} />
          </mesh>
        </group>

        <group position={[-2.0, -0.9, 0.7]}>
          <mesh>
            <octahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial color="#F04CBF" emissive="#F04CBF" emissiveIntensity={1.8} />
          </mesh>
        </group>

        <group position={[0.7, -2.0, -0.3]}>
          <mesh>
            <tetrahedronGeometry args={[0.18, 0]} />
            <meshStandardMaterial color="#FFD166" emissive="#FFD166" emissiveIntensity={1.8} />
          </mesh>
        </group>
      </Float>

      {/* Cybernetic Particle Field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={70}
            array={
              new Float32Array(
                Array.from({ length: 210 }, () => (Math.random() - 0.5) * 10)
              )
            }
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#2879FF"
          transparent
          opacity={0.55}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default SceneObjects;
