import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useColorMode } from "@chakra-ui/react";

export default function Blob() {
  const { colorMode } = useColorMode();

  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      {/* <meshLambertMaterial attach="material" color="white" /> */}
      <MeshDistortMaterial color={"#02a8a3"} attach="material" distort={0.5} />
    </Sphere>
  );
}
