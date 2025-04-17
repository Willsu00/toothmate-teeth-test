import { Text, View, StyleSheet } from "react-native";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

import MyModel from "../components/myModel";

export default function Index() {
  return (
    <Canvas>
      <ambientLight intensity={0.6} />
      <directionalLight position={[0,0,10]} intensity={4} />
      <directionalLight position={[0,10,0]} intensity={4} />
      <directionalLight position={[10,0,0]} intensity={4} />
      <Suspense fallback={null}>
        <MyModel />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}