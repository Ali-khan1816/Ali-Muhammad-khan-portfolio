import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Beam({ position, color, height }) {
  const mesh = useRef();

  // Make the beam glow or move slightly
  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh position={position} ref={mesh}>
      <cylinderGeometry args={[0.1, 0.1, height, 16]} />
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={2}
        color={color}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

export default function Beams({
  beamWidth = 2,
  beamHeight = 10,
  beamNumber = 8,
  lightColor = "#ffffff",
  speed = 2,
  noiseIntensity = 1.5,
  scale = 0.5,
  rotation = 0,
}) {
  const beams = Array.from({ length: beamNumber }, (_, i) => ({
    x: (Math.random() - 0.5) * beamWidth * 2,
    y: 0,
    z: (Math.random() - 0.5) * beamWidth * 2,
  }));

  return (
    <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 10, 10]} color={lightColor} intensity={2} />
      {beams.map((pos, i) => (
        <Beam
          key={i}
          position={[pos.x, pos.y, pos.z]}
          color={lightColor}
          height={beamHeight}
        />
      ))}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
