import { Fragment } from "react/jsx-runtime";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import Experience from "./components/shared/experience";

function App() {
  return (
    <Fragment>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [1.03, 0.607, 2.847],
        }}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Loader />
    </Fragment>
  );
}

export default App;
