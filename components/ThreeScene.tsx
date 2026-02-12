
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial, Torus } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, type }: { position: [number, number, number], color: string, type: 'sphere' | 'torus' | 'blob' }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.005;
  });

  if (type === 'blob') {
    return (
      <Sphere ref={meshRef} args={[1, 100, 200]} position={position}>
        <MeshDistortMaterial color={color} speed={2} distort={0.5} radius={1} />
      </Sphere>
    );
  }

  if (type === 'torus') {
    return (
      <Torus ref={meshRef} args={[1, 0.4, 16, 100]} position={position}>
        <MeshWobbleMaterial color={color} factor={0.5} speed={2} />
      </Torus>
    );
  }

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
      <meshStandardMaterial color={color} roughness={0} metalness={0.8} />
    </Sphere>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <FloatingShape position={[1.5, 0.5, 0]} color="#3b82f6" type="blob" />
        </Float>
        
        <Float speed={3} rotationIntensity={0.5} floatIntensity={2}>
          <FloatingShape position={[-2, -1, -2]} color="#a855f7" type="torus" />
        </Float>

        <Float speed={1.5} rotationIntensity={2} floatIntensity={0.5}>
          <FloatingShape position={[0, -2, -1]} color="#6366f1" type="sphere" />
        </Float>
      </Canvas>
    </div>
  );
};

export const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        {[...Array(15)].map((_, i) => (
          <Float key={i} speed={Math.random() * 2} rotationIntensity={1} floatIntensity={1}>
            <Sphere
              args={[0.05, 16, 16]}
              position={[
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10
              ]}
            >
              <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
            </Sphere>
          </Float>
        ))}
      </Canvas>
    </div>
  );
};
