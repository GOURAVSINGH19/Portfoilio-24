import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { MathUtils } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

import { Vertex } from "./Shaders/Vertex.js";
import { Fragment } from "./Shaders/Fragment.js";

const Blob = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.65 : 0.15,
      0.02
    );
  });

  return (
    <>
      <mesh
        ref={mesh}
        position={[0, 0, 0]}
        scale={0.4}
        onPointerOver={() => (hover.current = true)}
        onPointerOut={() => (hover.current = false)}
      >
        <icosahedronGeometry args={[2, 20]} />
        <shaderMaterial
          fragmentShader={Fragment}
          vertexShader={Vertex}
          uniforms={uniforms}
          wireframe={false}
        />
      </mesh>
    </>
  );
};

const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <Blob />
    </>
  );
};

export default Experience;
