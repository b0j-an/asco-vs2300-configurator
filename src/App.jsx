import './App.css';
import { Suspense, useEffect, useRef, useState } from 'react';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Environment,
  Html,
  useProgress,
  OrbitControls,
  Grid,
  ContactShadows,
} from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Popover } from '@mui/material';

import { Model } from './assets/Model';
import LightNotification from './assets/LightNotification';
import { Sidebar } from './components/Sidebar';
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr';

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
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   const handle = (temp) => {
  //     console.log(temp);
  //     setletThereBeLight(+temp > 25.5 ? true : false);
  //   };
  //   socket?.on("TEMP_HUMID_UPDATE", (data) => handle(data.temp));
  //   return () => socket?.off("TEMP_HUMID_UPDATE", (data) => handle(data.temp));
  // }, []);

  const toggleMesh = () => {
    setMeshVisible(!meshVisible);
  };

  const handleTrichter = () => {
    setTrichterVisible(!meshTrichterVisible);
  };

  const upaliSvejtlo = () => {
    setletThereBeLight(!letThereBeLight);
  };
  const plej = () => {
    setNesto(!nesto);
  };
  const pause2 = () => {
    setPause(!pause);
  };

  return (
    <div className="App">
      <div className="Canvas">
        <ARButton />

        <Canvas shadows dpr={[1, 2]} camera={{ position: [3, 2, 3] }}>
          <fog attach="fog" args={['black', 15, 21.5]} />
          <Suspense fallback={<Loader />}>
            <Model
              position={[0, 0, 0]}
              meshVisible={meshVisible}
              meshTrichterVisible={meshTrichterVisible}
              shadows
              plej={nesto}
              pause={pause}
            />

            <LightNotification
              letThereBeLight={letThereBeLight}
              setVisible={setVisible}
            />
            <Grid
              renderOrder={-1}
              position={[0, -0.1, 0]}
              infiniteGrid
              cellSize={0.5}
              cellThickness={1}
              sectionSize={5}
              sectionThickness={1.5}
              sectionColor={[0.1, 0.5, 9]}
              fadeDistance={13}
              receiveShadow
            />
          </Suspense>
          <OrbitControls
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
            minDistance={3}
            maxDistance={8}
            target={[0, 1.5, 0]}
          />
          <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={1} mipmapBlur />
          </EffectComposer>
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
          <ContactShadows />
        </Canvas>
      </div>
      <Popover open={visible}>TEST</Popover>
      <div className="Sidebar">
        <Sidebar
          toggleMesh={toggleMesh}
          plej={plej}
          pause={pause2}
          letThereBeLight={upaliSvejtlo}
          handleTrichter={handleTrichter}
        />
      </div>
    </div>
  );
}
