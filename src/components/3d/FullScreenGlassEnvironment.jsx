import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * 1. Animated Particle Network with Interconnected Glowing Lines
 * Strictly uses Electric Blue (#1677FF) and Deep Crimson (#B5122A).
 */
function CinematicParticleNetwork({ isReducedMotion }) {
  const pointsRef = useRef();
  const linesRef = useRef();

  const nodeCount = 38;
  const maxDistance = 3.2;

  const { initialPositions, velocities, colors } = useMemo(() => {
    const pos = new Float32Array(nodeCount * 3);
    const vel = [];
    const col = new Float32Array(nodeCount * 3);

    const palette = [
      new THREE.Color("#1677FF"), // Electric Blue
      new THREE.Color("#B5122A"), // Deep Crimson
      new THREE.Color("#287BFF"), // Cyan-Blue highlight
    ];

    for (let i = 0; i < nodeCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 13;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3 - 1.2;

      vel.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.003
        )
      );

      const c = palette[i % palette.length];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return { initialPositions: pos, velocities: vel, colors: col };
  }, []);

  const maxLines = 100;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), []);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), []);

  useFrame(() => {
    if (isReducedMotion || !pointsRef.current || !linesRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const linePosAttr = linesRef.current.geometry.attributes.position;
    const lineColAttr = linesRef.current.geometry.attributes.color;

    for (let i = 0; i < nodeCount; i++) {
      let x = posAttr.getX(i) + velocities[i].x;
      let y = posAttr.getY(i) + velocities[i].y;
      let z = posAttr.getZ(i) + velocities[i].z;

      if (x > 11 || x < -11) velocities[i].x *= -1;
      if (y > 6.5 || y < -6.5) velocities[i].y *= -1;
      if (z > 0.5 || z < -2.8) velocities[i].z *= -1;

      posAttr.setXYZ(i, x, y, z);
    }
    posAttr.needsUpdate = true;

    let lineIdx = 0;
    for (let i = 0; i < nodeCount && lineIdx < maxLines; i++) {
      const x1 = posAttr.getX(i);
      const y1 = posAttr.getY(i);
      const z1 = posAttr.getZ(i);

      for (let j = i + 1; j < nodeCount && lineIdx < maxLines; j++) {
        const x2 = posAttr.getX(j);
        const y2 = posAttr.getY(j);
        const z2 = posAttr.getZ(j);

        const dx = x1 - x2;
        const dy = y1 - y2;
        const dz = z1 - z2;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          const base = lineIdx * 6;
          linePositions[base] = x1;
          linePositions[base + 1] = y1;
          linePositions[base + 2] = z1;
          linePositions[base + 3] = x2;
          linePositions[base + 4] = y2;
          linePositions[base + 5] = z2;

          lineColors[base] = colors[i * 3];
          lineColors[base + 1] = colors[i * 3 + 1];
          lineColors[base + 2] = colors[i * 3 + 2];
          lineColors[base + 3] = colors[j * 3];
          lineColors[base + 4] = colors[j * 3 + 1];
          lineColors[base + 5] = colors[j * 3 + 2];

          lineIdx++;
        }
      }
    }

    for (let i = lineIdx * 6; i < maxLines * 6; i++) {
      linePositions[i] = 0;
    }

    linePosAttr.needsUpdate = true;
    lineColAttr.needsUpdate = true;
    linesRef.current.geometry.setDrawRange(0, lineIdx * 2);
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodeCount}
            array={initialPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={nodeCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={maxLines * 2}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={maxLines * 2}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

/**
 * 2. Floating Atmospheric Stardust Particles (Blue & White)
 */
function AtmosphericDust({ isReducedMotion }) {
  const dustRef = useRef();
  const count = 120;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1.5;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (isReducedMotion || !dustRef.current) return;
    const t = state.clock.getElapsedTime();
    dustRef.current.rotation.y = t * 0.012;
    dustRef.current.position.y = Math.sin(t * 0.2) * 0.08;
  });

  return (
    <points ref={dustRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#287BFF"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/**
 * 3. Undulating 3D Black Glass Wave Surface
 */
function UndulatingGlassWave({ isReducedMotion }) {
  const geomRef = useRef();

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
      const z =
        Math.sin(u * 0.26 + t * 0.35) * 0.45 +
        Math.cos(v * 0.32 + t * 0.3) * 0.38 +
        Math.sin((u + v) * 0.16 + t * 0.22) * 0.22;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
    geomRef.current.computeVertexNormals();
  });

  return (
    <mesh position={[0, 0, -3.4]}>
      <primitive object={geometry} ref={geomRef} attach="geometry" />
      <meshPhysicalMaterial
        color="#08080C"
        emissive="#000000"
        transmission={0.88}
        roughness={0.16}
        metalness={0.2}
        clearcoat={1.0}
        clearcoatRoughness={0.06}
        ior={1.48}
        thickness={2.2}
        transparent
        opacity={0.7}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

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
 * 4. Curved Liquid-Glass Ribbon Component
 */
function LiquidGlassRibbon({ points, width, color, emissive, ior, speed, offset, isReducedMotion }) {
  const meshRef = useRef();

  const { geom } = useMemo(() => {
    return createRibbonGeometry(points, width, 72);
  }, [points, width]);

  useFrame((state) => {
    if (isReducedMotion || !meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t * speed + offset) * 0.1;
    meshRef.current.rotation.z = Math.cos(t * (speed * 0.7) + offset) * 0.025;
  });

  return (
    <mesh ref={meshRef} geometry={geom}>
      <meshPhysicalMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.2}
        transmission={0.88}
        roughness={0.12}
        metalness={0.1}
        clearcoat={1.0}
        clearcoatRoughness={0.06}
        ior={ior}
        thickness={1.6}
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/**
 * 5. Floating Black Glass Discs
 */
function FloatingGlassDisc({ position, scale, color, emissive, speed, delay, isReducedMotion }) {
  const ref = useRef();

  useFrame((state) => {
    if (isReducedMotion || !ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * speed + delay) * 0.14;
    ref.current.rotation.x = Math.sin(t * (speed * 0.8) + delay) * 0.2;
    ref.current.rotation.y = Math.cos(t * (speed * 0.6) + delay) * 0.25;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh>
        <cylinderGeometry args={[0.72, 0.72, 0.06, 32]} />
        <meshPhysicalMaterial
          color="#0A0A0D"
          emissive={emissive}
          emissiveIntensity={0.2}
          transmission={0.9}
          roughness={0.1}
          metalness={0.2}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          ior={1.5}
          thickness={1.6}
          transparent
          opacity={0.75}
        />
      </mesh>
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
 * - Pure Black: #050505
 * - Electric Blue: #1677FF
 * - Deep Crimson / Dark Red: #B5122A / #8B0000
 */
export function FullScreenGlassEnvironment({ isReducedMotion = false }) {
  const envGroupRef = useRef();

  const ribbonData = useMemo(() => {
    return [
      // 1. Arching Electric Blue Liquid-Glass Ribbon
      {
        points: [
          new THREE.Vector3(-12, -4.8, -1.8),
          new THREE.Vector3(-6, -1.2, -1.0),
          new THREE.Vector3(0, 1.8, -1.2),
          new THREE.Vector3(6, 1.2, -1.4),
          new THREE.Vector3(12, 3.2, -2.0),
        ],
        width: 1.05,
        color: "#1677FF",
        emissive: "#0A3D8A",
        ior: 1.5,
        speed: 0.55,
        offset: 0,
      },
      // 2. Flowing Deep Crimson Liquid-Glass Ribbon
      {
        points: [
          new THREE.Vector3(-10, 3.8, -2.2),
          new THREE.Vector3(-3, 1.2, -1.4),
          new THREE.Vector3(3, -1.8, -0.9),
          new THREE.Vector3(8, -1.0, -1.1),
          new THREE.Vector3(12, -3.8, -1.8),
        ],
        width: 0.9,
        color: "#B5122A",
        emissive: "#500812",
        ior: 1.48,
        speed: 0.48,
        offset: 1.8,
      },
      // 3. Subtle Dark Red Ribbon
      {
        points: [
          new THREE.Vector3(-11, 0.5, -2.0),
          new THREE.Vector3(-4, -2.5, -1.5),
          new THREE.Vector3(2, 0.2, -1.1),
          new THREE.Vector3(7, 2.8, -1.6),
          new THREE.Vector3(12, 0.8, -2.2),
        ],
        width: 1.15,
        color: "#8B0000",
        emissive: "#3B0000",
        ior: 1.48,
        speed: 0.42,
        offset: 3.2,
      },
    ];
  }, []);

  const discs = useMemo(() => {
    return [
      {
        position: [-5.6, 2.5, -0.8],
        scale: [1.1, 1.1, 1.1],
        color: "#1677FF",
        emissive: "#0A3D8A",
        speed: 0.7,
        delay: 0.2,
      },
      {
        position: [-6.4, -2.6, -1.2],
        scale: [1.2, 1.2, 1.2],
        color: "#B5122A",
        emissive: "#500812",
        speed: 0.6,
        delay: 1.4,
      },
      {
        position: [-1.8, -3.2, -1.0],
        scale: [0.9, 0.9, 0.9],
        color: "#1677FF",
        emissive: "#0A3D8A",
        speed: 0.75,
        delay: 2.1,
      },
      {
        position: [1.2, 3.4, -1.3],
        scale: [1.0, 1.0, 1.0],
        color: "#B5122A",
        emissive: "#500812",
        speed: 0.65,
        delay: 0.9,
      },
      {
        position: [6.8, -2.8, -0.4],
        scale: [1.1, 1.1, 1.1],
        color: "#1677FF",
        emissive: "#0A3D8A",
        speed: 0.75,
        delay: 2.7,
      },
    ];
  }, []);

  useFrame((state) => {
    if (isReducedMotion || !envGroupRef.current) return;
    const { pointer } = state;
    envGroupRef.current.position.x = THREE.MathUtils.lerp(
      envGroupRef.current.position.x,
      pointer.x * 0.28,
      0.04
    );
    envGroupRef.current.position.y = THREE.MathUtils.lerp(
      envGroupRef.current.position.y,
      pointer.y * 0.18,
      0.04
    );
  });

  return (
    <group ref={envGroupRef}>
      {/* 
        STUDIO LIGHTING STRICTLY IN:
        - Electric Blue: #1677FF
        - Deep Crimson / Dark Red: #B5122A / #8B0000
        - Pure Black: #050505
      */}
      <ambientLight color="#050505" intensity={1.5} />
      <directionalLight position={[4, 6, 5]} intensity={2.6} color="#FFFFFF" />

      {/* Electric Blue Lighting */}
      <pointLight position={[-7.0, 4.0, 3.0]} color="#1677FF" intensity={5.5} distance={20} />

      {/* Deep Crimson Accent Lighting */}
      <pointLight position={[6.5, 3.8, 3.2]} color="#B5122A" intensity={4.8} distance={20} />

      {/* Dark Red Rim Lighting */}
      <pointLight position={[0, -4.8, 3.8]} color="#8B0000" intensity={4.0} distance={18} />

      {/* Blue Subtle Accent Light */}
      <pointLight position={[-4.5, -3.2, 2.2]} color="#287BFF" intensity={3.0} distance={15} />

      {/* 1. Subtle Animated Particle Network with Fine Interconnected Glowing Lines */}
      <CinematicParticleNetwork isReducedMotion={isReducedMotion} />

      {/* 2. Floating Atmospheric Stardust */}
      <AtmosphericDust isReducedMotion={isReducedMotion} />

      {/* 3. Full-Viewport Undulating 3D Black Glass Wave */}
      <UndulatingGlassWave isReducedMotion={isReducedMotion} />

      {/* 4. Layered Liquid-Glass Ribbons */}
      {ribbonData.map((ribbon, idx) => (
        <LiquidGlassRibbon key={idx} {...ribbon} isReducedMotion={isReducedMotion} />
      ))}

      {/* 5. Floating Black Glass Discs */}
      {discs.map((disc, idx) => (
        <FloatingGlassDisc key={idx} {...disc} isReducedMotion={isReducedMotion} />
      ))}
    </group>
  );
}

export default FullScreenGlassEnvironment;
