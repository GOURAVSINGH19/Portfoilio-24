import { Canvas, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion } from "framer-motion-3d";
import { OrbitControls, Sparkles } from "@react-three/drei";

export default function Earth() {
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/img/earth-2.jpg",
    "/img/noise.png",
    // '/img/occlusion.jpg',
    // '/img/earth/earth-1.jpg',
    // '/img/earth/earth-2.jpg',
    "/img/earth-3.jpg",
  ]);

  return (
    <Canvas ref={scene}>
      <OrbitControls enableZoom={false} enableDamping={false} enableRotate={false} maxPolarAngle={1}/>
      <ambientLight intensity={4} />
      <directionalLight intensity={0.5} position={[0, 0, -2]} />
      <motion.mesh
        scale={2}
        rotation-y={scrollYProgress}
        rotation={[0, 0, 1.5]}
      >
        <sphereGeometry args={[1, 54, 54]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
        <Sparkles scale={200} size={30} speed={2} />
      </motion.mesh>
    </Canvas>
  );
}
