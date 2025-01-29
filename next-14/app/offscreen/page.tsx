"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

const OffscreenCanvas = dynamic(
  () => import("../../components/offscreen-canvas/offscreen-canvas"),
  {
    ssr: false,
  }
);

export default function OffscreenPage() {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <p style={{ position: "absolute", top: "6px", left: "6px" }}>canvas on the left, offscreen canvas on the right next14</p>
      <div style={{ width: "50%", height: "100%" }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <OrbitControls />
          <ambientLight intensity={1} />
          <directionalLight intensity={2} position={[2, 2, 10]} />
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="red" />
          </mesh>
        </Canvas>
      </div>

      <div style={{ width: "50%", height: "100%" }}>
        <OffscreenCanvas />
      </div>
    </div>
  );
}
