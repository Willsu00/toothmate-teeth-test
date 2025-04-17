import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/native'
import { GLTF } from 'three-stdlib'
import { Asset } from 'expo-asset'

type GLTFResult = GLTF & {
  nodes: {
    upper_jaw: THREE.Mesh
    lower_jaw: THREE.Mesh
    tongue: THREE.Mesh
    lower_right_central_incisor: THREE.Mesh
    lower_right_first_molar: THREE.Mesh
    lower_right_wisdom: THREE.Mesh
    lower_right_second_molar: THREE.Mesh
    lower_right_first_premolar: THREE.Mesh
    lower_right_second_premolar: THREE.Mesh
    lower_right_canine: THREE.Mesh
    lower_right_lateral_incisor: THREE.Mesh
    lower_left_central_incisor: THREE.Mesh
    lower_left_first_molar: THREE.Mesh
    lower_left_wisdom: THREE.Mesh
    lower_left_second_molar: THREE.Mesh
    lower_left_first_premolar: THREE.Mesh
    lower_left_second_premolar: THREE.Mesh
    lower_left_canine: THREE.Mesh
    lower_left_lateral_incisor: THREE.Mesh
    upper_right_first_premolar: THREE.Mesh
    upper_right_wisdom: THREE.Mesh
    upper_right_second_premolar: THREE.Mesh
    upper_right_lateral_incisor: THREE.Mesh
    upper_right_first_molar: THREE.Mesh
    upper_right_second_molar: THREE.Mesh
    upper_right_canine: THREE.Mesh
    upper_right_central_incisor: THREE.Mesh
    upper_left_central_incisor: THREE.Mesh
    upper_left_first_premolar: THREE.Mesh
    upper_left_wisdom: THREE.Mesh
    upper_left_second_premolar: THREE.Mesh
    upper_left_lateral_incisor: THREE.Mesh
    upper_left_first_molar: THREE.Mesh
    upper_left_second_molar: THREE.Mesh
    upper_left_canine: THREE.Mesh
  }
  materials: {
    Gum: THREE.MeshStandardMaterial
    tongue: THREE.MeshStandardMaterial
    Teeths: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
    // const modelAsset = Asset.fromModule(require('../assets/models/adult_whole_mouth.glb')).uri;
  const { nodes, materials } = useGLTF('https://dl.dropboxusercontent.com/scl/fi/hdyfg5q63xyyegb18vaom/adult_whole_mouth.glb?rlkey=zyni7qfw5uztz5bq665d2luac&st=82dl5v7h') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.upper_jaw.geometry}
        material={materials.Gum}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_jaw.geometry}
        material={materials.Gum}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.tongue.geometry}
        material={materials.tongue}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_right_central_incisor.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_right_first_molar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_right_wisdom.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_right_second_molar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_right_first_premolar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_right_second_premolar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_right_canine.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_right_lateral_incisor.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_left_central_incisor.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_left_first_molar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_left_wisdom.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_left_second_molar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_left_first_premolar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_left_second_premolar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_left_canine.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.lower_left_lateral_incisor.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_right_first_premolar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_right_wisdom.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_right_second_premolar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_right_lateral_incisor.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_right_first_molar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_right_second_molar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_right_canine.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_right_central_incisor.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_left_central_incisor.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_left_first_premolar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_left_wisdom.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_left_second_premolar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_left_lateral_incisor.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_left_first_molar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_left_second_molar.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
      <mesh
        geometry={nodes.upper_left_canine.geometry}
        material={materials.Teeths}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
      />
    </group>
  )
}

// useGLTF.preload(Asset.fromModule(require('../assets/models/adult_whole_mouth.glb')).uri);

