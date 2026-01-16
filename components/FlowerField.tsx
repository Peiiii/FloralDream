
import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

const FLOWER_COLORS = ['#FF4500', '#FF8C00', '#FFD700', '#FFFFFF', '#FF69B4', '#87CEEB'];

const FlowerField: React.FC = () => {
  const count = 400;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Pre-calculate positions and scales to mimic the screenshot's density
  const flowerData = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 35;
      const z = (Math.random() - 0.5) * 20 - 5;
      const y = (Math.random() * 2) - 3;
      const scale = 0.5 + Math.random() * 1.5;
      const color = new THREE.Color(FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)]);
      data.push({ x, y, z, scale, color });
    }
    return data;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    flowerData.forEach((data, i) => {
      const { x, y, z, scale } = data;
      // Swaying animation
      const swayX = Math.sin(time * 1.2 + x) * 0.1;
      const swayZ = Math.cos(time * 0.8 + z) * 0.1;
      
      dummy.position.set(x + swayX, y, z + swayZ);
      dummy.rotation.set(0, Math.sin(time * 0.5 + i) * 0.2, 0);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
      meshRef.current!.setColorAt(i, data.color);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <group>
      {/* Tall stalks and roses */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow>
        <sphereGeometry args={[0.5, 12, 12]} />
        <meshStandardMaterial roughness={0.6} metalness={0.1} />
      </instancedMesh>
      
      {/* Decorative tall blue "delphiniums" */}
      <FlowerSpikes />
    </group>
  );
};

const FlowerSpikes: React.FC = () => {
  const spikeCount = 40;
  const spikes = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const spikeData = useMemo(() => {
    return Array.from({ length: spikeCount }).map(() => ({
      pos: [(Math.random() - 0.5) * 40, -4, (Math.random() - 0.5) * 15 - 8],
      scale: [0.3, 3 + Math.random() * 4, 0.3]
    }));
  }, []);

  useFrame((state) => {
    if (!spikes.current) return;
    const time = state.clock.getElapsedTime();
    spikeData.forEach((data, i) => {
      const [x, y, z] = data.pos;
      const sway = Math.sin(time + x) * 0.05;
      dummy.position.set(x, y, z);
      dummy.rotation.z = sway;
      dummy.scale.set(data.scale[0], data.scale[1], data.scale[2]);
      dummy.updateMatrix();
      spikes.current!.setMatrixAt(i, dummy.matrix);
    });
    spikes.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={spikes} args={[undefined, undefined, spikeCount]}>
      <cylinderGeometry args={[0.5, 1, 1]} />
      <meshStandardMaterial color="#4169E1" />
    </instancedMesh>
  );
};

export default FlowerField;
