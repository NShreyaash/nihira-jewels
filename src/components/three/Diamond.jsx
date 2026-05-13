'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Diamond(props) {
  const groupRef = useRef()
  const diamondRef = useRef()

  // Custom materials for premium look
  const goldMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#D4AF37",
    metalness: 1,
    roughness: 0.08,
    clearcoat: 1,
    clearcoatRoughness: 0.02,
    reflectivity: 1,
    envMapIntensity: 2.5
  }), [])

  const diamondMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#ffffff",
    metalness: 0,
    roughness: 0,
    transmission: 1,
    thickness: 2,
    ior: 2.417,
    clearcoat: 1,
    clearcoatRoughness: 0,
    reflectivity: 1,
    envMapIntensity: 8,
    dispersion: 7,
    transparent: true,
    opacity: 1
  }), [])

  const smallStoneMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#ffffff",
    metalness: 0,
    roughness: 0,
    transmission: 1,
    ior: 2.4,
    envMapIntensity: 5,
    dispersion: 3
  }), [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.007
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.05
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.1
    }

    if (diamondRef.current) {
      diamondRef.current.rotation.y -= 0.01
    }
  })

  return (
    <group {...props} ref={groupRef}>
      {/* The Main Band */}
      <mesh castShadow receiveShadow material={goldMaterial}>
        <torusGeometry args={[0.8, 0.06, 48, 128]} />
      </mesh>

      {/* The Setting Base (Elevated) */}
      <mesh position={[0, 0.82, 0]} castShadow material={goldMaterial}>
        <cylinderGeometry args={[0.25, 0.15, 0.2, 8]} />
      </mesh>

      {/* The Halo (Circle of small diamonds) */}
      <group position={[0, 0.95, 0]}>
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const x = Math.cos(angle) * 0.28
          const z = Math.sin(angle) * 0.28
          return (
            <mesh key={i} position={[x, 0, z]} material={smallStoneMaterial}>
              <icosahedronGeometry args={[0.06, 0]} />
            </mesh>
          )
        })}
      </group>

      {/* Prongs (Holding the main stone) */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * Math.PI) / 2 + Math.PI / 4
        const x = Math.cos(angle) * 0.22
        const z = Math.sin(angle) * 0.22
        return (
          <mesh key={i} position={[x, 1, z]} rotation={[0.3, -angle, 0]} material={goldMaterial} castShadow>
            <cylinderGeometry args={[0.015, 0.015, 0.4, 8]} />
          </mesh>
        )
      })}

      {/* Side Stones on the band */}
      {[...Array(10)].map((_, i) => {
        const angle = (i / 10) * 0.8 - 0.4 // Focused on the top part of the band
        const x = Math.cos(angle + Math.PI / 2) * 0.8
        const y = Math.sin(angle + Math.PI / 2) * 0.8
        return (
          <mesh key={i} position={[x, y, 0]} rotation={[0, 0, angle + Math.PI / 2]} material={smallStoneMaterial}>
            <icosahedronGeometry args={[0.04, 0]} />
          </mesh>
        )
      })}

      {/* Main Large Diamond */}
      <mesh ref={diamondRef} position={[0, 1.05, 0]} castShadow material={diamondMaterial}>
        <icosahedronGeometry args={[0.35, 0]} />
      </mesh>
    </group>
  )
}

