import { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import './app.css'
import Box from './components/Box';
import Text from './components/Text';


function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[1, -1, 1.4]} type="plus" />
        <Box position={[-1, 1.4, 1.2]} type="minus" />
        <Text position={[-20, -10, 9]} type="minus" text="3D text using three.js"/>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App
