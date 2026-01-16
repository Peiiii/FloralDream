
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import FlowerField from './FlowerField';
import Petals from './Petals';
import SkyBox from './SkyBox';

interface SceneProps {
  isStarted: boolean;
}

const Scene: React.FC<SceneProps> = ({ isStarted }) => {
  const sceneGroup = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!isStarted || !sceneGroup.current) return;
    const time = state.clock.getElapsedTime();
    
    // Gentle floating motion for the whole scene
    sceneGroup.current.position.y = Math.sin(time * 0.5) * 0.2;
    sceneGroup.current.rotation.y = Math.sin(time * 0.2) * 0.05;
  });

  return (
    <group ref={sceneGroup}>
      <ambientLight intensity={0.8} />
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={2} 
        color="#fff4e0" 
        castShadow 
      />
      <pointLight position={[-10, 5, -5]} intensity={1} color="#ffcc99" />
      
      <SkyBox />
      
      <FlowerField />
      
      <Petals count={150} />

      {/* Ground plane for slight shadow catching */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#2d5a27" roughness={1} transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

export default Scene;
