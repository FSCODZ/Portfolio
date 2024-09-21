import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function MovingShape() {
  const meshRef = useRef();

  // Rotate the shape over time
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2, 0]} /> {/* An interesting shape */}
      <meshStandardMaterial color="orange" wireframe /> {/* Wireframe material for cool effect */}
    </mesh>
  );
}

function BackgroundScene() {
  return (
    <Canvas
      style={{
        position: 'absolute',  // Make it the background
        top: 0,
        left: 0,
        zIndex: -1,  // Send it behind all content
        width: '100%',
        height: '100%',
      }}
    >
      {/* Light sources */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />

      {/* Stars for background effect */}
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />

      {/* Moving shape */}
      <MovingShape />

      <OrbitControls enableZoom={false} /> {/* Disable zoom for a more static scene */}
    </Canvas>
  );
}

export default BackgroundScene;