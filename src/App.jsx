import './App.css';
import { Suspense, useEffect, useRef, useState } from 'react';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Environment,
  Html,
  useProgress,
  CameraControls,
  Grid,
  ContactShadows,
  PresentationControls,
  PerspectiveCamera,
  Bounds,
  MeshReflectorMaterial,
} from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

import { Model } from './assets/Model';
import LightNotification from './assets/LightNotification';
import { Sidebar } from './components/Sidebar';

import io from 'socket.io-client'; //stefan dependency

// const socket = io("http://stefan.pikado.net");
// const URL = process.env.NODE_ENV === "production" ? undefined : "http://stefan.pikado.net";
// const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

// const socket = io("http://stefan.pikado.net");

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="loader-container">
        {progress.toFixed(0)} % loaded
        <div className="loader-progress">
          <div className="loader-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </Html>
  );
}

export default function App() {
  const [meshVisible, setMeshVisible] = useState(false);
  const [meshTrichterVisible, setTrichterVisible] = useState(false);
  const [nesto, setNesto] = useState(false);
  const [pause, setPause] = useState(false);
  const [letThereBeLight, setletThereBeLight] = useState(false);
  const [newColor, setNewColor] = useState(false);
  const [enableControl, setEnableControl] = useState(true);

  // useEffect(() => {
  //   const handle = (temp) => {
  //     console.log(temp);
  //     setletThereBeLight(+temp > 25.5 ? true : false);
  //   };
  //   socket?.on("TEMP_HUMID_UPDATE", (data) => handle(data.temp));
  //   return () => socket?.off("TEMP_HUMID_UPDATE", (data) => handle(data.temp));
  // }, []);

  const upaliSvejtlo = () => {
    setletThereBeLight(!letThereBeLight);
  };
  const plej = () => {
    setNesto(!nesto);
  };

  return (
    <div className="App">
      <div className="Canvas">
        <Canvas
          camera={{
            fov: 30,

            position: [0, 3, 6],
          }}
          shadows
          dpr={[1, 2]}>
          <fog attach="fog" args={['black', 10, 20]} />
          <Suspense fallback={<Loader />}>
            {/* <CameraControls lerpLookAt-y={2} /> */}
            <PresentationControls enabled={enableControl} polar={[0, 0]}>
              <Bounds fit margin={2}>
                <Model
                  meshVisible={meshVisible}
                  meshTrichterVisible={meshTrichterVisible}
                  shadows
                  plej={nesto}
                  pause={pause}
                  newColor={newColor}
                />
              </Bounds>
            </PresentationControls>

            <LightNotification
              dist={() => setEnableControl(!enableControl)}
              letThereBeLight={letThereBeLight}
            />
            {/* <Grid
              renderOrder={-1}
              position={[0, -0.1, 0]}
              infiniteGrid
              cellSize={0.1}
              cellThickness={0.3}
              cellColor={'gray'}
              sectionSize={1}
              sectionColor={[4, 2, 1]}
              fadeDistance={13}
              receiveShadow
            /> */}
            <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[10, 10, 10]} />
              <MeshReflectorMaterial mirror={1} color={'#2C2626'} />
            </mesh>
          </Suspense>
          {/* <OrbitControls
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
            minDistance={3}
            maxDistance={8}
            target={[0, 1.5, 0]}
          /> */}
          {/* <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={1} mipmapBlur />
          </EffectComposer> */}

          {letThereBeLight ? (
            <>
              <Environment
                background
                files="img/venice_sunset_1k.hdr"
                blur={0.8}
                // ground={{
                //   height: 10,
                //   radius: 120,
                //   scale: 22,
                // }}
              />
            </>
          ) : (
            <color attach="background" args={['black']} />
          )}
          <ContactShadows />
        </Canvas>
      </div>
      <div className="Sidebar">
        <Sidebar
          toggleMesh={() => setMeshVisible(!meshVisible)}
          handleTrichter={() => setTrichterVisible(!meshTrichterVisible)}
          plej={plej}
          pause={() => setPause(!pause)}
          letThereBeLight={upaliSvejtlo}
          changeColor={() => setNewColor(!newColor)}
        />
      </div>
    </div>
  );
}
