import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Suspense } from "react";

const Mycanvas = () => {
  return (
    <>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 28 }}
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
