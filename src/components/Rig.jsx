import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { easing } from "maath";

export default function Rig({ ...props }) {
  const { camera } = useThree();

  // console.log("camera possition" + camera.position);

  // useFrame(
  //   (state, delta) => {
  //     const t = 0 + Math.sin(state.clock.elapsedTime * 3);
  //     easing.dampE(camera.position, cam1, 2, delta);
  //   },
  //   [camera.position]
  // );
  // setTimeout(console.log(cam1), 3000);
}

//[3.4, 3.4, 0.12];
//3.4 , 3.4 , z 0.12
