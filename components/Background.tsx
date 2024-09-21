import React from "react";
import { Canvas, Vector3 } from "@react-three/fiber";
import Blob from "./Blob";
import { color, useColorMode } from "@chakra-ui/react";
import { OrbitControls, PresentationControls } from "@react-three/drei";

interface blobType {
	pos: Vector3
	color: string;
}

export default function Background({ blobs }: { blobs: blobType[] }) {
	const { colorMode } = useColorMode();

	return (
		<div className={`canvas-${colorMode}`}>
			<Canvas camera={{ fov: 25, position: [0, 15, 20] }}>
				<OrbitControls enableZoom={false} autoRotate={true} />
				<ambientLight intensity={colorMode === "dark" ? 0.5 : 1} />
				<directionalLight position={[-2, 5, 2]} intensity={5} color="#FF4161" />

				{blobs.map(({ pos, color }, key) => (
					<Blob pos={pos} color={color} key={key} />
				))}
			</Canvas>
		</div>
	);
}
