
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Loader } from '@react-three/drei';
import Scene from './components/Scene';
import UIOverlay from './components/UIOverlay';

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-sky-400 to-sky-200">
      {!isStarted && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-700">
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-8 text-center px-4 tracking-widest drop-shadow-lg">
            美好意境 · 花开不期而遇
          </h1>
          <button
            onClick={() => setIsStarted(true)}
            className="px-8 py-3 bg-white text-sky-600 rounded-full font-bold hover:scale-105 transition-transform shadow-xl active:scale-95"
          >
            开启奇遇
          </button>
        </div>
      )}

      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 5, 20]} fov={50} />
        <Suspense fallback={null}>
          <Scene isStarted={isStarted} />
          <Environment preset="sunset" />
        </Suspense>
        {/* We keep OrbitControls restricted for an immersive look */}
        <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate={isStarted}
          autoRotateSpeed={0.5}
        />
      </Canvas>

      <UIOverlay />
      <Loader />
    </div>
  );
};

export default App;
