// import * as THREE from 'three'
// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei/native'
// import { GLTF } from 'three-stdlib'
// import { Asset } from 'expo-asset'

// type GLTFResult = GLTF & {
//   nodes: {
//     upper_jaw: THREE.Mesh
//     lower_jaw: THREE.Mesh
//     tongue: THREE.Mesh
//     lower_right_central_incisor: THREE.Mesh
//     lower_right_first_molar: THREE.Mesh
//     lower_right_wisdom: THREE.Mesh
//     lower_right_second_molar: THREE.Mesh
//     lower_right_first_premolar: THREE.Mesh
//     lower_right_second_premolar: THREE.Mesh
//     lower_right_canine: THREE.Mesh
//     lower_right_lateral_incisor: THREE.Mesh
//     lower_left_central_incisor: THREE.Mesh
//     lower_left_first_molar: THREE.Mesh
//     lower_left_wisdom: THREE.Mesh
//     lower_left_second_molar: THREE.Mesh
//     lower_left_first_premolar: THREE.Mesh
//     lower_left_second_premolar: THREE.Mesh
//     lower_left_canine: THREE.Mesh
//     lower_left_lateral_incisor: THREE.Mesh
//     upper_right_first_premolar: THREE.Mesh
//     upper_right_wisdom: THREE.Mesh
//     upper_right_second_premolar: THREE.Mesh
//     upper_right_lateral_incisor: THREE.Mesh
//     upper_right_first_molar: THREE.Mesh
//     upper_right_second_molar: THREE.Mesh
//     upper_right_canine: THREE.Mesh
//     upper_right_central_incisor: THREE.Mesh
//     upper_left_central_incisor: THREE.Mesh
//     upper_left_first_premolar: THREE.Mesh
//     upper_left_wisdom: THREE.Mesh
//     upper_left_second_premolar: THREE.Mesh
//     upper_left_lateral_incisor: THREE.Mesh
//     upper_left_first_molar: THREE.Mesh
//     upper_left_second_molar: THREE.Mesh
//     upper_left_canine: THREE.Mesh
//   }
//   materials: {
//     Gum: THREE.MeshStandardMaterial
//     tongue: THREE.MeshStandardMaterial
//     Teeths: THREE.MeshStandardMaterial
//   }
// }

// export default function Model(props: JSX.IntrinsicElements['group']) {
//     // const modelAsset = Asset.fromModule(require('../assets/models/adult_whole_mouth.glb')).uri;
//   const { nodes, materials } = useGLTF('https://dl.dropboxusercontent.com/scl/fi/hdyfg5q63xyyegb18vaom/adult_whole_mouth.glb?rlkey=zyni7qfw5uztz5bq665d2luac&st=82dl5v7h') as GLTFResult
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         geometry={nodes.upper_jaw.geometry}
//         material={materials.Gum}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_jaw.geometry}
//         material={materials.Gum}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.tongue.geometry}
//         material={materials.tongue}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_right_central_incisor.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_right_first_molar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_right_wisdom.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_right_second_molar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_right_first_premolar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_right_second_premolar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_right_canine.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_right_lateral_incisor.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_left_central_incisor.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_left_first_molar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_left_wisdom.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_left_second_molar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_left_first_premolar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_left_second_premolar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_left_canine.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.lower_left_lateral_incisor.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.069]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_right_first_premolar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_right_wisdom.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_right_second_premolar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_right_lateral_incisor.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_right_first_molar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_right_second_molar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_right_canine.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_right_central_incisor.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_left_central_incisor.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_left_first_premolar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_left_wisdom.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_left_second_premolar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_left_lateral_incisor.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_left_first_molar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_left_second_molar.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//       <mesh
//         geometry={nodes.upper_left_canine.geometry}
//         material={materials.Teeths}
//         position={[0, 0.36, -0.286]}
//         rotation={[1.109, 0, 0]}
//         scale={39.993}
//       />
//     </group>
//   )
// }

// // useGLTF.preload(Asset.fromModule(require('../assets/models/adult_whole_mouth.glb')).uri);

import * as THREE from 'three'
import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei/native'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>
  materials: {
    Gum: THREE.MeshStandardMaterial
    tongue: THREE.MeshStandardMaterial
    Teeths: THREE.MeshStandardMaterial
  }
}

const TOOTH_KEYS = [
  'lower_right_central_incisor',
  'lower_right_first_molar',
  'lower_right_wisdom',
  'lower_right_second_molar',
  'lower_right_first_premolar',
  'lower_right_second_premolar',
  'lower_right_canine',
  'lower_right_lateral_incisor',
  'lower_left_central_incisor',
  'lower_left_first_molar',
  'lower_left_wisdom',
  'lower_left_second_molar',
  'lower_left_first_premolar',
  'lower_left_second_premolar',
  'lower_left_canine',
  'lower_left_lateral_incisor',
  'upper_right_first_premolar',
  'upper_right_wisdom',
  'upper_right_second_premolar',
  'upper_right_lateral_incisor',
  'upper_right_first_molar',
  'upper_right_second_molar',
  'upper_right_canine',
  'upper_right_central_incisor',
  'upper_left_central_incisor',
  'upper_left_first_premolar',
  'upper_left_wisdom',
  'upper_left_second_premolar',
  'upper_left_lateral_incisor',
  'upper_left_first_molar',
  'upper_left_second_molar',
  'upper_left_canine',
]

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    'https://dl.dropboxusercontent.com/scl/fi/hdyfg5q63xyyegb18vaom/adult_whole_mouth.glb?rlkey=zyni7qfw5uztz5bq665d2luac&st=82dl5v7h'
  ) as GLTFResult;

  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setSelectedPart((prev) => (prev === name ? null : name)); // Toggle selection
  };

  const renderTooth = (name: string) => {
    const isSelected = selectedPart === name;
    const isAnySelected = selectedPart !== null;

    return (
      <mesh
        key={name}
        geometry={nodes[name].geometry}
        material={materials.Teeths.clone()}
        position={[0, name.includes('upper') ? 0.36 : 0.36, name.includes('upper') ? -0.286 : -0.069]}
        rotation={[name.includes('upper') ? 1.109 : Math.PI / 2, 0, 0]}
        scale={39.993}
        material-transparent={isAnySelected} // Make transparent if any part is selected
        material-opacity={isSelected ? 1 : isAnySelected ? 0.2 : 1} // Fully opaque if selected, otherwise semi-transparent
        material-depthWrite={!isSelected} // Prevent writing to depth buffer for selected part
        material-depthTest={!isSelected} // Prevent depth testing for selected part
        renderOrder={isSelected ? 999 : 1} // Ensure selected part is rendered last
        onClick={(e) => {
          e.stopPropagation();
          handleClick(name);
        }}
      />
    );
  };

  return (
    <group {...props} dispose={null}>
      {/* Gums */}
      <mesh
        geometry={nodes.upper_jaw.geometry}
        material={materials.Gum.clone()}
        position={[0, 0.36, -0.286]}
        rotation={[1.109, 0, 0]}
        scale={39.993}
        material-transparent={selectedPart !== null} // Make transparent if any part is selected
        material-opacity={selectedPart === 'upper_jaw' ? 1 : selectedPart ? 0.2 : 1} // Fully opaque if selected, otherwise semi-transparent
        material-depthWrite={selectedPart !== 'upper_jaw'} // Prevent depth writing for selected part
        material-depthTest={selectedPart !== 'upper_jaw'} // Prevent depth testing for selected part
        renderOrder={selectedPart === 'upper_jaw' ? 999 : 1} // Bring to top if selected
        onClick={(e) => {
          e.stopPropagation();
          handleClick('upper_jaw');
        }}
      />
      <mesh
        geometry={nodes.lower_jaw.geometry}
        material={materials.Gum.clone()}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
        material-transparent={selectedPart !== null} // Make transparent if any part is selected
        material-opacity={selectedPart === 'lower_jaw' ? 1 : selectedPart ? 0.2 : 1} // Fully opaque if selected, otherwise semi-transparent
        material-depthWrite={selectedPart !== 'lower_jaw'} // Prevent depth writing for selected part
        material-depthTest={selectedPart !== 'lower_jaw'} // Prevent depth testing for selected part
        renderOrder={selectedPart === 'lower_jaw' ? 999 : 1} // Bring to top if selected
        onClick={(e) => {
          e.stopPropagation();
          handleClick('lower_jaw');
        }}
      />

      {/* Tongue */}
      <mesh
        geometry={nodes.tongue.geometry}
        material={materials.tongue.clone()}
        position={[0, 0.36, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={39.993}
        material-transparent={selectedPart !== null} // Make transparent if any part is selected
        material-opacity={selectedPart === 'tongue' ? 1 : selectedPart ? 0.2 : 1} // Fully opaque if selected, otherwise semi-transparent
        material-depthWrite={selectedPart !== 'tongue'} // Prevent depth writing for selected part
        material-depthTest={selectedPart !== 'tongue'} // Prevent depth testing for selected part
        renderOrder={selectedPart === 'tongue' ? 999 : 1} // Bring to top if selected
        onClick={(e) => {
          e.stopPropagation();
          handleClick('tongue');
        }}
      />

      {/* Teeth */}
      {TOOTH_KEYS.map(renderTooth)}
    </group>
  );
}
