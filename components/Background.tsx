import React from "react";
import { Canvas } from "@react-three/fiber";
import Blob from "./Blob";
import { useColorMode } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";

export default function Background() {
  const { colorMode } = useColorMode();

  const styles = {
    canvas: colorMode === "dark" ? "canvas-dark" : "canvas-light",
  };

  return (
		<div className = {styles.canvas}>
			<Canvas>
				<OrbitControls/>
				<ambientLight intensity={0.5} />
				<directionalLight position={[-2, 5, 2]} intensity={1} />
				<Blob />
			</Canvas>
		</div>
  );
}
