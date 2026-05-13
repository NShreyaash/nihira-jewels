'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer, Center, ContactShadows, OrbitControls, Float } from '@react-three/drei'
import Diamond from './Diamond'
import { Suspense } from 'react'

export default function Scene() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0.5, 4.2], fov: 38 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          toneMappingExposure: 1.2
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />

        {/* Main dramatic lighting */}
        <spotLight position={[10, 10, 10]} intensity={3} angle={0.15} penumbra={1} color="#ffffff" castShadow />
        <spotLight position={[-10, 10, -5]} intensity={2} angle={0.15} penumbra={1} color="#fff5e0" />

        {/* Accent lights for gold and diamond sparkle */}
        <pointLight position={[0, 2, 2]} intensity={1.5} color="#c9a84c" />
        <pointLight position={[-2, -2, 2]} intensity={1} color="#ffffff" />

        <Suspense fallback={null}>
          <Float
            speed={1.2}
            rotationIntensity={0.2}
            floatIntensity={0.4}
          >
            <Center>
              <Diamond rotation={[0.2, 0, 0.3]} />
            </Center>
          </Float>

          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4}
            color="#000000"
          />

          {/* Custom environment built from Lightformers — no external HDR needed */}
          <Environment resolution={256}>
            {/* Warm key light (top-right) */}
            <Lightformer form="rect" intensity={3} position={[5, 5, -3]} scale={[10, 5, 1]} color="#fff5e0" />
            {/* Cool fill (left) */}
            <Lightformer form="rect" intensity={1.5} position={[-5, 2, 2]} scale={[8, 4, 1]} color="#e0e8ff" />
            {/* Overhead softbox */}
            <Lightformer form="rect" intensity={2} position={[0, 8, 0]} scale={[12, 12, 1]} rotation-x={Math.PI / 2} color="#ffffff" />
            {/* Ground bounce */}
            <Lightformer form="ring" intensity={1} position={[0, -3, 0]} scale={8} rotation-x={-Math.PI / 2} color="#d4af37" />
            {/* Rim light (back) */}
            <Lightformer form="rect" intensity={2} position={[0, 2, -8]} scale={[6, 3, 1]} color="#ffffff" />
          </Environment>

          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={0.6}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
