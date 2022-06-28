import React from "react";
import { Canvas } from "@react-three/fiber";
import Blob from "./Blob";
import { useColorMode } from "@chakra-ui/react";
import { OrbitControls, PresentationControls } from "@react-three/drei";

export default function Background() {
  const { colorMode } = useColorMode();

  const styles = {
    canvas: `canvas-${colorMode}`,
  };

  interface blobType {
    pos: number[];
    color: string;
  }

  const blobs: blobType[] = [
    {pos: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5], color: "#02a8a3"},
    {pos: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5], color: "#ed685f"},
    {pos: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5], color: "#9f4bc9"}
  ]

  React.useEffect(() => {
    console.log(blobs)
  }, [colorMode]);

  return (
    <div className={styles.canvas}>
      <Canvas camera={{ fov: 25, position: [0, 15, 20]}}>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={colorMode === "dark" ? 0.5 : 1} />
        <directionalLight position={[-2, 5, 2]} intensity={10} color="#FF4161"/>

        {blobs.map(({pos, color}) => 
          <Blob pos={pos} color={color}/>
        )}
      </Canvas>
    </div>
  );
}
