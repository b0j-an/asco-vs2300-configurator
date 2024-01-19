import { extend, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { easing, geometry } from 'maath';
import { Popover } from '@mui/material';
import { Html, RoundedBox } from '@react-three/drei';

extend(geometry);

export default function LightNotification({ letThereBeLight, ...props }) {
  const cube = useRef();
  const light = useRef();
  const stripe = useRef();
  const smallCube = useRef();

  useFrame((state, delta) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 3)) / 2;
    // stripe.current.color.setRGB(1 + t * 10, 2, 20 + t * 300);
    light.current.intensity = 5.5 + t;

    // ide u krug oko masine
    easing.dampE(
      stripe.current.position,
      [
        2 * Math.cos(state.clock.elapsedTime),
        1,
        2 * Math.sin(state.clock.elapsedTime),
      ],
      1,
      delta * 3
    );

    // na pomjeranje misa
    easing.dampE(
      cube.current.position,
      [+1, state.pointer.y + 1.7, -state.pointer.x * 1.5],
      1,
      1
    );

    // smallCube.current.distance = 1 * 2;
  });

  return (
    <group
      // onClick={() => setVisible((prev) => !prev)}
      visible={!letThereBeLight}>
      <mesh ref={stripe} scale={0.03} position={[-0.5, 1.3, 1.3]}>
        <boxGeometry />

        <meshBasicMaterial color={[2, 2, 2]} visible={false} />

        {/* <Annotation position={[1.75, 3, 2.5]}>
          Alarm <span style={{ fontSize: "2.5em" }}>⚠️</span>
        </Annotation> */}
        <pointLight color={[2, 2, 1]} ref={light} intensity={5} distance={2} />
      </mesh>
      <mesh ref={cube} scale={0.07} position={[1, 0.7, 1]} visible={true}>
        <boxGeometry />
        <meshBasicMaterial color={[2, 2, 2]} visible={false} />
        <pointLight
          ref={smallCube}
          intensity={1}
          color={[2, 2, 1]}
          distance={2}
        />
      </mesh>
    </group>
  );
}

// <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
// drei
// <meshBasicMaterial toneMapped={false}>
//   <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
// </meshBasicMaterial>
// </Text>
