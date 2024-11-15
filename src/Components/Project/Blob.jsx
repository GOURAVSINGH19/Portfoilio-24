import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0.0, 0.0, 9.0], fov: 25 }}
      resize={false}
      onScroll={() => {
        resize = false;
      }}
      gl={{ alpha: true }}
    >
      <Experience />
    </Canvas>
  );
};

export default Scene;
