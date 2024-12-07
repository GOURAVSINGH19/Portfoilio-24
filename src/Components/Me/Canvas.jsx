import { Canvas, useFrame } from "@react-three/fiber";
import Experience from "./Experience";
import { Suspense } from "react";

const Mycanvas = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 30 }}
        resize={false}
        onScroll={() => {
          resize = false;
        }}
        gl={{ alpha: true }}
      >
        <Suspense>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Mycanvas;


