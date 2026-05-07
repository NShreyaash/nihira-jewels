'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'

export default function Diamond(props) {
  const ref = useRef()
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005
      ref.current.rotation.z += 0.002
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08
    }
  })

  return (
    <group {...props}>
      <mesh ref={ref} castShadow>
        <octahedronGeometry args={[1.2, 2]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.3}
          samples={8}
          resolution={256}
          transmission={1}
          roughness={0.0}
          thickness={0.3}
          ior={2.42}
          chromaticAberration={0.15}
          anisotropy={0.2}
          distortion={0.0}
          distortionScale={0.2}
          temporalDistortion={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
          attenuationDistance={0.6}
          attenuationColor="#f0e6c8"
          color="#f8f4ec"
          envMapIntensity={3}
          metalness={0.1}
        />
      </mesh>
    </group>
  )
}
