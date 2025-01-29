"use client";
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
      <div style={{ width: "100%", height: "100%" }}>
        <OffscreenCanvas />
      </div>
    </div>
  );
}
