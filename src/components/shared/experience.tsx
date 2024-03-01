import { Fragment } from "react";
import { OrbitControls } from "@react-three/drei";
import { Gallery4 } from "../models";

const Experience = () => {
  return (
    <Fragment>
      <color args={[0xffffff]} attach="background" />

      <Gallery4 />
      <ambientLight intensity={1} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.3}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Fragment>
  );
};

export default Experience;
