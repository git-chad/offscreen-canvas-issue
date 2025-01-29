import { Canvas } from "@react-three/offscreen";
import { lazy } from "react";

const Fallback = lazy(() => import("./fallback"));

const worker = new Worker(
  new URL("./15-worker.tsx", import.meta.url),
  {
    type: "module",
  }
);

const OffscreenCanvas = () => {
  return (
    <Canvas
      worker={worker}
      fallback={<Fallback />}
      shadows
      camera={{ position: [0, 0, 5], fov: 60 }}
    />
  );
};

export default OffscreenCanvas;
