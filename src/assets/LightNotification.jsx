import { extend, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { easing, geometry } from "maath";
import { Popover } from "@mui/material";
import { Html, RoundedBox } from "@react-three/drei";

extend(geometry);

export default function LightNotification({ letThereBeLight, setVisible, ...props }) {
  // const [visible, setVisible] = useState(true);
  // const aw = useRef(null);
  const cube = useRef();
  const light = useRef();
  const stripe = useRef();
  const smallCube = useRef();

  useFrame((state, delta) => {
    const t = (0 + Math.sin(state.clock.elapsedTime * 3)) / 2;
    stripe.current.color.setRGB(1 + t * 10, 2, 20 + t * 50);

    // ide u krug oko masine
    // easing.dampE(
    //   cube.current.position,
    //   [2 * Math.cos(state.clock.elapsedTime), 1, 2 * Math.sin(state.clock.elapsedTime)],
    //   1,
    //   delta * 3
    // );

    // na pomjeranje misa
    easing.dampE(
      cube.current.position,
      [+1, state.pointer.y + 1, -state.pointer.x * 1.5],
      1,
      delta * 3
    );

    light.current.intensity = 0.5 + t;
    // smallCube.current.distance = 1 * 2;
  });

  return (
    <group
      // onClick={() => setVisible((prev) => !prev)}
      visible={letThereBeLight}
    >
      <mesh
        scale={0.03}
        position={[-0.3, 1.3, 1.3]}
      >
        <sphereGeometry />
        <meshBasicMaterial
          ref={stripe}
          color={"white"}
          visible={false}
        />

        {/* <Annotation position={[1.75, 3, 2.5]}>
          Alarm <span style={{ fontSize: "2.5em" }}>⚠️</span>
        </Annotation> */}
        <pointLight
          ref={light}
          intensity={1}
          color={[10, 2, 5]}
          distance={1}
        />
      </mesh>
      <mesh
        ref={cube}
        scale={0.07}
        position={[1, 0.7, 1]}
        visible={true}
      >
        <boxGeometry />
        <meshBasicMaterial
          color={[10, 2, 5]}
          visible={true}
        />
        <pointLight
          ref={smallCube}
          intensity={1}
          color={[4, 2, 1]}
          distance={2}
        />
      </mesh>
    </group>
  );
}

function Annotation({ children, ...props }) {
  return (
    <Html
      {...props}
      transform
      occlude="blending"
      // geometry={
      //   /** The geometry is optional, it allows you to use any shape.
      //    *  By default it would be a plane. We need round edges here ...
      //    */

      //   <roundedPlaneGeometry args={[1.66, 2.47, 0.24]} />
      // }
    >
      <div className="annotation">{children}</div>
    </Html>
  );
}

// <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
// drei
// <meshBasicMaterial toneMapped={false}>
//   <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
// </meshBasicMaterial>
// </Text>
