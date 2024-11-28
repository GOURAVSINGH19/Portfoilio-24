import { Environment, OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";
import { useControls } from "leva";
const Experience = () => {
  const { animation } = useControls({
    animation: {
      options: ["Texting","Idle","HipHop"],
      default: "Idle",
    },
  });
  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={false}
      />
      <Environment preset="sunset" />
      <group position-y={-0.9} scale={0.8}>
        <Avatar animation={animation} />
      </group>
    </>
  );
};

export default Experience;
