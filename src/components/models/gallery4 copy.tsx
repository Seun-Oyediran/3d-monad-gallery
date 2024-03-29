/* eslint-disable @typescript-eslint/no-explicit-any */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 gallery4.glb --transform -k -s -S 
Files: gallery4.glb [6.21MB] > /Users/stephen/Downloads/gallery4-transformed.glb [1.13MB] (82%)
Author: stoneysteiner (https://sketchfab.com/stoneysteiner)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/landscape-gallery-by-stoneysteiner-3702735762544e5796be4740cb6d5efc
Title: Landscape gallery by @stoneysteiner
*/

import { useGLTF, useTexture } from "@react-three/drei";

export default function Model(props: any) {
  const textures = [
    useTexture(
      "https://pbs.twimg.com/media/GGe5xWDWYAEACdT?format=jpg&name=large"
    ),
    useTexture(
      "https://pbs.twimg.com/media/GGe5xWKWQAEv4vw?format=jpg&name=large"
    ),
  ];

  const { nodes, materials } = useGLTF("/gallery4-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Cube_0"
        castShadow
        receiveShadow
        geometry={nodes.Cube_0.geometry}
        material={materials.Walls}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Cube003_0"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_0.geometry}
        material={materials.Frame}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="Cube003_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_1.geometry}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      >
        <meshBasicMaterial map={textures[0]} />
      </mesh>
      <mesh
        name="Cube003_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_2.geometry}
        material={materials.Picture02}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="Cube003_3"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_3.geometry}
        material={materials.Picture03}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="Cube003_4"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_4.geometry}
        material={materials.Picture07}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="Cube003_5"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_5.geometry}
        material={materials.Picture08}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="Cube003_6"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_6.geometry}
        material={materials.Picture09}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="Cube003_7"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_7.geometry}
        material={materials.Picture04}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="Cube003_8"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_8.geometry}
        material={materials.Picture05}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="Cube003_9"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_9.geometry}
        material={materials.Picture06}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="Cube003_10"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_10.geometry}
        material={materials.Picture10}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="Cube003_11"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_11.geometry}
        material={materials.Picture11}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        name="Cube003_12"
        castShadow
        receiveShadow
        geometry={nodes.Cube003_12.geometry}
        material={materials.Picture12}
        position={[0, 0.344, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("/gallery4-transformed.glb");
