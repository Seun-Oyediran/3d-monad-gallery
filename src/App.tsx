import { Fragment } from "react/jsx-runtime";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import Experience from "./components/shared/experience";
import { Github, Twitter } from "./components/svgs";

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
      <div className="app__absolute__icons">
        <div>
          <a href="https://twitter.com/shawn_kel" target="_blank">
            <Twitter />
          </a>
        </div>

        <div>
          <a
            href="https://github.com/Seun-Oyediran/3d-monad-gallery"
            target="_blank"
          >
            <Github />
          </a>
        </div>
      </div>

      {/* <div className="app__absolute__name">
        <p>Who cooked? Oyediran Stephen</p>
      </div> */}
    </Fragment>
  );
}

export default App;
