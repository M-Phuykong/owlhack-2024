
import ScrolllDownIndicator from "../components/ScrollDownIndicator";

import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useEffect, useRef, Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei"


function Model() {
  const gltf = useLoader(
    GLTFLoader,
    "/cap/scene.gltf");

  return <primitive object={gltf.scene}
  position={[0, -1, 0]}
  rotation={[5, 7.5, 1.7]}
  scale={22} />

  }

useGLTF.preload('/cap/scene.gltf')

function LandingPage() {

    return (
      <div className="h-[85vh]">
        <div className="h-full ">
          <div className="absolute top-[-10] left-40 tracking-wide italic text-4xl font-bold font-italic">
            <p> EAGLES! </p>
            <p> EAGLES! </p>
            <p> EAGLES! </p>
          </div>

          <div className="h-4/6 flex items-center justify-center ">
            <div className="w-1/3 h-2/3">
              <Canvas>
                <Suspense fallback={null}>
                  <Model />
                  <Environment preset="city" />
                  <OrbitControls />
                </Suspense>
              </Canvas>
            </div>
          </div>

          <div className="h-1/6 w-full text-center text-5xl font-aramisi">
            Welcome to Philadelphia, the city of brotherly love!
          </div>

          <div className="h-1/6 flex w-full justify-center pt-7 text-center ">
            <ScrolllDownIndicator />
          </div>
        </div>
      </div>
    );
}

export default LandingPage;