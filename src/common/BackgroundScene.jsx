import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function MovingShape() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2, 0]} />
      <meshStandardMaterial color="green" wireframe />
    </mesh>
  );
}

function BackgroundScene() {
  return (
    <Canvas
      style={{
        position: 'absolute',  // Gör det till bakgrund
        top: 0,
        left: 0,
        zIndex: -1,  // Lägg den bakom allt innehåll
        width: '100%',
        height: '100%',
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />
      <MovingShape />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default BackgroundScene;
