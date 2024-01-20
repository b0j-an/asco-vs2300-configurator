import { extend, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { easing, geometry } from 'maath';
import { Popover } from '@mui/material';
import {
  useGLTF,
  useAnimations,
  PresentationControls,
} from '@react-three/drei';
import { useDrag } from '@use-gesture/react';

extend(geometry);

export default function LightNotification({ letThereBeLight, ...props }) {
  const cubeLightRef = useRef();
  const light = useRef();
  const lightFront = useRef();
  const stripe = useRef();

  const bind = useDrag(({ offset: [x, y] = [0, 0.5] }) => {
    cubeLightRef.current.position.x = x / 150;
    cubeLightRef.current.position.y = -y / 300;
  });

  // useFrame((state, delta) => {
  //   const t = (1 + Math.sin(state.clock.elapsedTime * 3)) / 2;
  //   // stripe.current.color.setRGB(1 + t * 10, 2, 20 + t * 300);
  //   light.current.intensity = 5.5 + t;

  //   // ide u krug oko masine
  //   easing.dampE(
  //     stripe.current.position,
  //     [
  //       2 * Math.cos(state.clock.elapsedTime),
  //       1,
  //       2 * Math.sin(state.clock.elapsedTime),
  //     ],
  //     1,
  //     delta * 3
  //   );

  //   // na pomjeranje misa
  //   easing.dampE(
  //     cubeLightRef.current.position,
  //     [+1, state.pointer.y + 1.7, -state.pointer.x * 1.5],
  //     1,
  //     1
  //   );

  // });

  // useFrame((state, delta) => {
  //   easing.damp3(
  //     lightFront.current.position,
  //     [state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
  //     0.2,
  //     delta
  //   );
  // });

  return (
    <group
      // onClick={() => setVisible((prev) => !prev)}
      visible={!letThereBeLight}>
      <mesh ref={stripe} scale={0.03} position={[-0.5, 1.3, 1.3]}>
        <boxGeometry />

        <meshBasicMaterial color={[2, 2, 2]} visible={false} />

        {/* <Annotation position={[1.75, 3, 2.5]}>
          Alarm <span style={{ fontSize: "2.5em" }}>A</span>
        </Annotation> */}
        {/* <pointLight color={[2, 2, 1]} ref={light} intensity={5} distance={2} /> */}
      </mesh>

      <mesh
        onClick={props.dist}
        ref={cubeLightRef}
        scale={0.2}
        position={[0, 1, 1.8]}
        visible={true}
        {...bind()}>
        <sphereGeometry />
        <meshBasicMaterial color={[2, 2, 2]} visible={true} />
        <pointLight intensity={10} color={[2, 2, 1]} distance={3} />
      </mesh>

      {/* <spotLight
        angle={0.5}
        penumbra={0.5}
        ref={lightFront}
        castShadow
        intensity={1}
        shadow-mapSize={1024}
        shadow-bias={-0.001}></spotLight> */}

      {/* <mesh ref={cubeLightRef} scale={0.07} position={[1, 0.7, 1]} visible={true}>
        <boxGeometry />
        <meshBasicMaterial color={[2, 2, 2]} visible={false} />
        <pointLight
          ref={smallcubeLightRef}
          intensity={1}
          color={[2, 2, 1]}
          distance={2}
        />
      </mesh> */}
    </group>
  );
}

// <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
// drei
// <meshBasicMaterial toneMapped={false}>
//   <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
// </meshBasicMaterial>
// </Text>
