import React, { useEffect, useRef, useState } from 'react';
import {
  useGLTF,
  useAnimations,
  PresentationControls,
  useTexture,
  useScroll,
} from '@react-three/drei';
import { useDrag } from '@use-gesture/react';
import { useFrame } from '@react-three/fiber';

export function Model({ meshVisible, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/model-transformed.glb');
  const { actions } = useAnimations(animations, group);
  // console.log(animations);
  // onClick={(e) => actions.switch.play()

  // console.log(meshVisible);

  useEffect(() => {
    if (props.plej === true) {
      actions.switch.reset();
      actions.switch.timeScale = 1;
      actions.switch.play();
    } else {
      actions.switch.stop();
    }
  }, [props.plej]);

  useEffect(() => {
    if (props.newColor === true) {
      materials.RAL7035.color.set('#005387');
      materials.RAL7016.color.set('#383e42');
    } else {
      materials.RAL7035.color.set('#85000f');
      materials.RAL7016.color.set('#383e42');
    }
  }, [props.newColor]);

  useEffect(() => {
    props.pause
      ? (actions.switch.timeScale = 0)
      : (actions.switch.timeScale = 1);
  }, [props.pause]);

  return (
    <group rotation-y={-Math.PI / 2} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Desna_noga" position={[0.005, 0.574, -1.2]}>
          <mesh
            receiveShadow
            castShadow
            name="Desna_noga001"
            geometry={nodes.Desna_noga001.geometry}
            material={materials.RAL7016}
          />
          <mesh
            receiveShadow
            castShadow
            name="Desna_noga001_1"
            geometry={nodes.Desna_noga001_1.geometry}
            material={materials.RAL6018}
          />
        </group>
        <group
          name="Duplo_sito"
          position={[-0.03, 1.551, -0.004]}
          scale={0.001}>
          <mesh
            receiveShadow
            castShadow
            name="Duplo_sito_osnova001"
            geometry={nodes.Duplo_sito_osnova001.geometry}
            material={materials.RAL7035}
          />
          <mesh
            receiveShadow
            castShadow
            name="Duplo_sito_osnova001_1"
            geometry={nodes.Duplo_sito_osnova001_1.geometry}
            material={nodes.Duplo_sito_osnova001_1.material}
          />
          <mesh
            receiveShadow
            castShadow
            name="Duplo_sito_osnova001_2"
            geometry={nodes.Duplo_sito_osnova001_2.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            receiveShadow
            castShadow
            name="Duplo_sito_osnova001_3"
            geometry={nodes.Duplo_sito_osnova001_3.geometry}
            material={materials.RAL7016}
          />
          <mesh
            receiveShadow
            castShadow
            name="Duplo_sito_osnova001_4"
            geometry={nodes.Duplo_sito_osnova001_4.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            receiveShadow
            castShadow
            name="Duplo_sito_osnova001_5"
            geometry={nodes.Duplo_sito_osnova001_5.geometry}
            material={materials.RAL6018}
          />
        </group>
        <group name="Greda" position={[-0.147, 1.154, 0]}>
          <mesh
            receiveShadow
            castShadow
            name="Greda001"
            geometry={nodes.Greda001.geometry}
            material={materials.RAL7016}
          />
          <mesh
            receiveShadow
            castShadow
            name="Greda001_1"
            geometry={nodes.Greda001_1.geometry}
            material={materials.PaletteMaterial001}
          />
        </group>
        <group name="Jedno_sito" position={[-0.01, 1.638, -0.003]}>
          <mesh
            receiveShadow
            castShadow
            name="Jedno_sit_podkonstrukcija001"
            geometry={nodes.Jedno_sit_podkonstrukcija001.geometry}
            material={materials.RAL7035}
          />
          <mesh
            receiveShadow
            castShadow
            name="Jedno_sit_podkonstrukcija001_1"
            geometry={nodes.Jedno_sit_podkonstrukcija001_1.geometry}
            material={nodes.Jedno_sit_podkonstrukcija001_1.material}
          />
          <mesh
            receiveShadow
            castShadow
            name="Jedno_sit_podkonstrukcija001_2"
            geometry={nodes.Jedno_sit_podkonstrukcija001_2.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            receiveshadow
            castshadow
            name="Jedno_sit_podkonstrukcija001_3"
            geometry={nodes.Jedno_sit_podkonstrukcija001_3.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            receiveshadow
            castshadow
            name="Jedno_sit_podkonstrukcija001_4"
            geometry={nodes.Jedno_sit_podkonstrukcija001_4.geometry}
            material={materials.RAL7016}
          />
          <mesh
            receiveshadow
            castshadow
            name="Jedno_sit_podkonstrukcija001_5"
            geometry={nodes.Jedno_sit_podkonstrukcija001_5.geometry}
            material={materials.RAL6018}
          />
        </group>
        <group name="Lijeva_noga" position={[0.013, 0.574, 1.2]}>
          <mesh
            receiveshadow
            castshadow
            name="Lijeva_noga001"
            geometry={nodes.Lijeva_noga001.geometry}
            material={materials.RAL7016}
          />
          <mesh
            receiveshadow
            castshadow
            name="Lijeva_noga001_1"
            geometry={nodes.Lijeva_noga001_1.geometry}
            material={materials.RAL6018}
          />
        </group>
        <group name="Mjenjanje_sita_desno" position={[0.01, 1.781, -1.24]}>
          <mesh
            receiveshadow
            castshadow
            name="Mjenjanje_sita_desno001"
            geometry={nodes.Mjenjanje_sita_desno001.geometry}
            material={materials.RAL7035}
          />
          <mesh
            receiveshadow
            castshadow
            name="Mjenjanje_sita_desno001_1"
            geometry={nodes.Mjenjanje_sita_desno001_1.geometry}
            material={materials.RAL7016}
          />
        </group>
        <mesh
          receiveshadow
          castshadow
          name="Mjenjanje_sita_lijevo"
          geometry={nodes.Mjenjanje_sita_lijevo.geometry}
          material={materials.RAL7035}
          position={[0.01, 1.783, 1.241]}
        />
        <group name="Osnova" position={[-0.376, 1.375, 0.752]}>
          <mesh
            receiveshadow
            castshadow
            name="Osnova001"
            geometry={nodes.Osnova001.geometry}
            material={materials.RAL7016}
          />
          <mesh
            receiveshadow
            castshadow
            name="Osnova001_1"
            geometry={nodes.Osnova001_1.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            receiveshadow
            castshadow
            name="Osnova001_2"
            geometry={nodes.Osnova001_2.geometry}
            material={materials.PaletteMaterial002}
          />
          <mesh
            receiveshadow
            castshadow
            name="Osnova001_3"
            geometry={nodes.Osnova001_3.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            receiveshadow
            castshadow
            name="Osnova001_4"
            geometry={nodes.Osnova001_4.geometry}
            material={materials['PW-MT11000.002']}
          />
          <mesh
            receiveshadow
            castshadow
            name="Osnova001_5"
            geometry={nodes.Osnova001_5.geometry}
            material={materials['shiny_galvanized.001']}
          />
          <mesh
            receiveshadow
            castshadow
            name="Osnova001_6"
            geometry={nodes.Osnova001_6.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            receiveshadow
            castshadow
            name="Osnova001_7"
            geometry={nodes.Osnova001_7.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            receiveshadow
            castshadow
            name="Osnova001_8"
            geometry={nodes.Osnova001_8.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            receiveshadow
            castshadow
            name="Osnova001_9"
            geometry={nodes.Osnova001_9.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            receiveshadow
            castshadow
            name="Osnova001_10"
            geometry={nodes.Osnova001_10.geometry}
            material={materials.PaletteMaterial003}
          />
        </group>
        <mesh
          receiveshadow
          castshadow
          name="Prednja_noga"
          geometry={nodes.Prednja_noga.geometry}
          material={materials.RAL7016}
          position={[0.69, 0.563, 0]}
        />
        <group name="x_spustanje" position={[0.014, 2.049, 0]}>
          <mesh
            receiveshadow
            castshadow
            name="spustanje001"
            geometry={nodes.spustanje001.geometry}
            material={materials.RAL7016}
          />
          <mesh
            receiveshadow
            castshadow
            name="spustanje001_1"
            geometry={nodes.spustanje001_1.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            receiveshadow
            castshadow
            name="spustanje001_2"
            geometry={nodes.spustanje001_2.geometry}
            material={materials.RAL7035}
          />
        </group>
        <group
          name="x_Usipni_kos"
          position={[-0.744, 2.031, 0]}
          visible={props.meshTrichterVisible}>
          <mesh
            receiveshadow
            castshadow
            name="Usipni_kos001"
            geometry={nodes.Usipni_kos001.geometry}
            material={materials.RAL7016}
          />
          <mesh
            receiveshadow
            castshadow
            name="Usipni_kos001_1"
            geometry={nodes.Usipni_kos001_1.geometry}
            material={materials.PaletteMaterial001}
          />
        </group>
        <group name="x_Usipni_kos" position={[-0.744, 2.731, 0]} scale={0.001}>
          <mesh
            receiveshadow
            castshadow
            name="Usipni_kos001"
            geometry={nodes.Usipni_kos001.geometry}
            material={materials.RAL7016}
          />
          <mesh
            receiveshadow
            castshadow
            name="Usipni_kos001_1"
            geometry={nodes.Usipni_kos001_1.geometry}
            material={materials.PaletteMaterial001}
          />
        </group>
        <mesh
          receiveshadow
          castshadow
          name="duplo_sito_VIBRATOR_DESNI"
          geometry={nodes.duplo_sito_VIBRATOR_DESNI.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.03, 1.551, -0.004]}
          scale={0.001}
        />
        <mesh
          receiveshadow
          castshadow
          name="duplo_sito_SEGMENT_donji"
          geometry={nodes.duplo_sito_SEGMENT_donji.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.03, 1.551, -0.004]}
          scale={0.001}
        />
        <mesh
          receiveshadow
          castshadow
          name="duplo_sito_VIBRATOR_LIJEVI"
          geometry={nodes.duplo_sito_VIBRATOR_LIJEVI.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.03, 1.551, -0.004]}
          scale={0.001}
        />
        <mesh
          receiveshadow
          castshadow
          name="duplo_sito_SEGMENT_gornji"
          geometry={nodes.duplo_sito_SEGMENT_gornji.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.03, 1.551, -0.004]}
          scale={0.001}
        />
        <mesh
          receiveshadow
          castshadow
          name="jedno_sito_SEGMENT_lijevi"
          geometry={nodes.jedno_sito_SEGMENT_lijevi.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.01, 1.638, -0.003]}
        />
        <mesh
          receiveshadow
          castshadow
          name="jedno_sito_SEGMENT_desni"
          geometry={nodes.jedno_sito_SEGMENT_desni.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.01, 1.638, -0.003]}
        />
        <mesh
          receiveshadow
          castshadow
          name="SEGMENT_granulacija_desni"
          geometry={nodes.SEGMENT_granulacija_desni.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.041, 2.387, -0.022]}
          scale={0.001}
        />
        <mesh
          receiveshadow
          castshadow
          name="SEGMENT_granulacija_lijevi"
          geometry={nodes.SEGMENT_granulacija_lijevi.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.041, 2.387, -0.022]}
          scale={0.001}
        />
        <mesh
          receiveshadow
          castshadow
          name="jedno_sito_VIBRATOR_DESNI_"
          geometry={nodes.jedno_sito_VIBRATOR_DESNI_.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.01, 1.638, -0.003]}
        />
        <mesh
          receiveshadow
          castshadow
          name="jedno_sito_VIBRATOR_LIJEVI_"
          geometry={nodes.jedno_sito_VIBRATOR_LIJEVI_.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.01, 1.638, -0.003]}
        />
        <mesh
          receiveshadow
          castshadow
          name="Cigle"
          geometry={nodes.Cigle.geometry}
          material={materials['Material.002']}
          position={[0.014, 0.637, 0]}
          scale={0.001}
        />
        <group
          visible={meshVisible}
          name="x_precka"
          position={[0.03, 2.033, 0]}>
          <mesh
            receiveshadow
            castshadow
            name="Pregrada002"
            geometry={nodes.Pregrada002.geometry}
            material={materials.RAL7016}
          />
          <mesh
            receiveshadow
            castshadow
            name="Pregrada002_1"
            geometry={nodes.Pregrada002_1.geometry}
            material={materials.PaletteMaterial001}
          />
        </group>
        <mesh
          receiveshadow
          castshadow
          name="x_guma"
          visible={meshVisible}
          // onClick={(e) => actions.switch.play()}
          geometry={nodes.x_guma.geometry}
          material={materials.PaletteMaterial001}
          position={[0.027, 2.311, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/model-transformed.glb');
