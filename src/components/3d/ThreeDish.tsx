import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  TorusKnot,
  MeshDistortMaterial,
} from "@react-three/drei";

const RotatingDish: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <TorusKnot args={[1.2, 0.4, 128, 16]} />
        <MeshDistortMaterial
          color="#E8642B"
          metalness={0.3}
          roughness={0.4}
          distort={0.2}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
};

const ThreeDish: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-surface-container to-primary/10">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[0, 5, 5]} intensity={0.5} />
        <RotatingDish />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDish;
