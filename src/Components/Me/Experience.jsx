import { Environment, OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";
const Experience = () => {
  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />
      <Environment preset="sunset" />
      <group position-y={-0.9} scale={0.8}>
        <Avatar />
      </group>
    </>
  );
};

export default Experience;
