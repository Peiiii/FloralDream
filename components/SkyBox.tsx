
import React from 'react';
import { BackSide } from 'three';

const SkyBox: React.FC = () => {
  return (
    <mesh scale={[100, 100, 100]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial 
        side={BackSide} 
        color="#87CEEB" 
      />
      {/* Decorative "sun" or glow */}
      <pointLight position={[0, 50, -50]} intensity={5} color="#fffadc" />
    </mesh>
  );
};

export default SkyBox;
