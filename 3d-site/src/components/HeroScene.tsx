import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment, ContactShadows, Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

export function HeroScene() {
  return (
    <>
      {/* Scene background and lighting */}
      <color attach="background" args={["#0b1020"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 2]} intensity={1.2} castShadow />

      {/* Subtle star field */}
      <Stars radius={80} depth={50} count={1200} factor={2} fade speed={1} />

      {/* Floating hero object */}
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.4}>
        <TorusKnot />
      </Float>

      {/* Ground contact shadow for depth */}
      <ContactShadows position={[0, -1.25, 0]} opacity={0.5} scale={12} blur={2} far={2.5} />

      {/* Subtle environment reflections */}
      <Environment preset="city" />

      {/* Camera controls (no zoom to keep composition) */}
      <OrbitControls enableZoom={false} />
    </>
  )
}

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = elapsed * 0.3
      meshRef.current.rotation.y = elapsed * 0.5
    }
  })

  return (
    <mesh ref={meshRef} castShadow position={[0, 0, 0]}>
      <torusKnotGeometry args={[1, 0.35, 256, 32]} />
      <MeshDistortMaterial
        color="#6a5acd"
        distort={0.25}
        speed={1.5}
        roughness={0.1}
        metalness={0.7}
      />
    </mesh>
  )
}

export default HeroScene
