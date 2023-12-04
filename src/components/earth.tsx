"use client";
// @ts-ignore 
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function EarthMesh() {
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/assets/color.jpg",
    "/assets/normal.png",
    "/assets/occlusion.jpg",
  ]);

  const mesh = useRef();

  useFrame(() => {
    // @ts-ignore
    mesh.current.rotation.y += 0.001;
  });

  return (
    <mesh scale={2.5} ref={mesh}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </mesh>
  );
}

export default function EarthModel() {

  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[2, 0, -0.25]} />
      <EarthMesh />
    </Canvas>
  );
}
