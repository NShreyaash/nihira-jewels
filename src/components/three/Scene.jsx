'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, Center, ContactShadows, OrbitControls, Float } from '@react-three/drei'
import Diamond from './Diamond'
import { Suspense } from 'react'

export default function Scene() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0.5, 4.5], fov: 40 }}
        dpr={[1, 2]}
        gl={{ alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#fff5e0" />
        <directionalLight position={[-3, 3, -3]} intensity={0.6} color="#c9a84c" />
        <spotLight position={[0, 8, 0]} intensity={2} angle={0.3} penumbra={1} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Float
            speed={1.5}
            rotationIntensity={0.3}
            floatIntensity={0.5}
          >
            <Center>
              <Diamond rotation={[0.2, 0, 0.5]} />
            </Center>
          </Float>
          
          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.3}
            scale={8}
            blur={3}
            far={4}
            color="#c9a84c"
          />
          
          <Environment preset="studio" environmentIntensity={1.5} />
          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={0.8}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
