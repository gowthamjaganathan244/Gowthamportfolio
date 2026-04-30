"use client"

import { useEffect, useMemo, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { PARTICLE_CONFIG, PARTICLE_COLORS } from "@/lib/constants"

type ShardGeometryData = {
  basePositions: Float32Array
  displacements: Float32Array
  phases: Float32Array
  rotations: Float32Array
  rotationSpeeds: Float32Array
  scales: Float32Array
  colors: Float32Array
}

export function ParticleField() {
  const { size, camera } = useThree()

  const meshRef = useRef<THREE.InstancedMesh | null>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const targetMouse = useRef({ x: 0, y: 0 })

  const dummy = useMemo(() => new THREE.Object3D(), [])
  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  const pointer = useMemo(() => new THREE.Vector2(), [])
  const hitPoint = useMemo(() => new THREE.Vector3(), [])
  const interactionPlane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
    []
  )

  const count = useMemo(() => {
    if (size.width < 640) return 32
    if (size.width < 1024) return 46
    return 64
  }, [size.width])

  const instancedMeshArgs = useMemo<
    ConstructorParameters<typeof THREE.InstancedMesh>
  >(() => [undefined, undefined, count], [count])

  const data = useMemo<ShardGeometryData>(() => {
    const basePositions = new Float32Array(count * 3)
    const displacements = new Float32Array(count * 3)
    const phases = new Float32Array(count * 3)
    const rotations = new Float32Array(count * 3)
    const rotationSpeeds = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    const colors = new Float32Array(count * 3)

    const { SPREAD_X, SPREAD_Y, SPREAD_Z } = PARTICLE_CONFIG
    const palette = PARTICLE_COLORS

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      let x = 0
      let y = 0
      let z = 0
      let attempts = 0

      do {
        x = (Math.random() * 2 - 1) * SPREAD_X * 0.92
        y = (Math.random() * 2 - 1) * SPREAD_Y * 0.7
        z = (Math.random() * 2 - 1) * SPREAD_Z * 0.65
        attempts++
      } while (
        (x * x) / (SPREAD_X * SPREAD_X) +
        (y * y) / (SPREAD_Y * SPREAD_Y) >
        1.12 &&
        attempts < 20
      )

      basePositions[i3] = x
      basePositions[i3 + 1] = y
      basePositions[i3 + 2] = z

      phases[i3] = Math.random() * Math.PI * 2
      phases[i3 + 1] = Math.random() * Math.PI * 2
      phases[i3 + 2] = Math.random() * Math.PI * 2

      rotations[i3] = Math.random() * Math.PI
      rotations[i3 + 1] = Math.random() * Math.PI
      rotations[i3 + 2] = Math.random() * Math.PI

      rotationSpeeds[i3] =
        (Math.random() * 0.45 + 0.15) * (Math.random() > 0.5 ? 1 : -1)
      rotationSpeeds[i3 + 1] =
        (Math.random() * 0.65 + 0.2) * (Math.random() > 0.5 ? 1 : -1)
      rotationSpeeds[i3 + 2] =
        (Math.random() * 0.35 + 0.12) * (Math.random() > 0.5 ? 1 : -1)

      // Increased from 0.08-0.24 to 0.16-0.38 so shards are clearly visible.
      scales[i] = Math.random() * 0.22 + 0.16

      const ci = Math.floor(Math.random() * palette.length)
      const c = palette[ci]
      const brightness = 0.9 + Math.random() * 0.35

      colors[i3] = c[0] * brightness
      colors[i3 + 1] = c[1] * brightness
      colors[i3 + 2] = c[2] * brightness
    }

    return {
      basePositions,
      displacements,
      phases,
      rotations,
      rotationSpeeds,
      scales,
      colors,
    }
  }, [count])

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1

      raycaster.setFromCamera(pointer, camera)
      raycaster.ray.intersectPlane(interactionPlane, hitPoint)

      targetMouse.current.x = hitPoint.x
      targetMouse.current.y = hitPoint.y
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [camera, interactionPlane, hitPoint, pointer, raycaster])

  useEffect(() => {
    const mesh = meshRef.current
    if (!mesh) return

    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    mesh.frustumCulled = false

    const color = new THREE.Color()

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      color.setRGB(
        data.colors[i3],
        data.colors[i3 + 1],
        data.colors[i3 + 2]
      )

      mesh.setColorAt(i, color)
    }

    if (mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true
    }
  }, [count, data])

  useFrame(({ clock }) => {
    const mesh = meshRef.current
    if (!mesh) return

    const t = clock.getElapsedTime()

    mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.06
    mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.06

    const mx = mouse.current.x
    const my = mouse.current.y

    const radius = PARTICLE_CONFIG.INTERACTION_RADIUS * 1.08
    const strength = PARTICLE_CONFIG.REPULSION_STRENGTH * 0.72
    const damping = PARTICLE_CONFIG.RETURN_DAMPING
    const spring = PARTICLE_CONFIG.RETURN_SPRING
    const idleSpd = PARTICLE_CONFIG.IDLE_SPEED * 0.72
    const idleAmp = PARTICLE_CONFIG.IDLE_AMPLITUDE * 0.85

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      const bx = data.basePositions[i3]
      const by = data.basePositions[i3 + 1]
      const bz = data.basePositions[i3 + 2]

      const idleX = Math.sin(t * idleSpd + data.phases[i3]) * idleAmp
      const idleY =
        Math.cos(t * idleSpd * 0.7 + data.phases[i3 + 1]) * idleAmp * 0.58
      const idleZ =
        Math.sin(t * idleSpd * 0.48 + data.phases[i3 + 2]) * idleAmp * 0.38

      const dx = bx - mx
      const dy = by - my
      const dist2 = dx * dx + dy * dy

      if (dist2 < radius * radius && dist2 > 0.0001) {
        const dist = Math.sqrt(dist2)
        const falloff = (1 - dist / radius) * (1 - dist / radius)

        data.displacements[i3] += (dx / dist) * falloff * strength * 20
        data.displacements[i3 + 1] +=
          (dy / dist) * falloff * strength * 20
        data.displacements[i3 + 2] += falloff * strength * 4
      }

      data.displacements[i3] += -data.displacements[i3] * spring
      data.displacements[i3 + 1] += -data.displacements[i3 + 1] * spring
      data.displacements[i3 + 2] += -data.displacements[i3 + 2] * spring

      data.displacements[i3] *= damping
      data.displacements[i3 + 1] *= damping
      data.displacements[i3 + 2] *= damping

      const px = bx + idleX + data.displacements[i3]
      const py = by + idleY + data.displacements[i3 + 1]
      const pz = bz + idleZ + data.displacements[i3 + 2]

      dummy.position.set(px, py, pz)

      dummy.rotation.set(
        data.rotations[i3] + t * data.rotationSpeeds[i3],
        data.rotations[i3 + 1] + t * data.rotationSpeeds[i3 + 1],
        data.rotations[i3 + 2] + t * data.rotationSpeeds[i3 + 2]
      )

      const pulse = 1 + Math.sin(t * 1.15 + data.phases[i3]) * 0.08
      const s = data.scales[i] * pulse

      // Thicker and taller than the old version, but still elegant and glass-like.
      dummy.scale.set(s * 0.85, s * 2.65, s * 0.95)
      dummy.updateMatrix()

      mesh.setMatrixAt(i, dummy.matrix)
    }

    mesh.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <ambientLight intensity={0.42} />

      <pointLight position={[-4, 2, 4]} intensity={13} color="#67e8f9" />
      <pointLight position={[4, -2, 3]} intensity={11} color="#a78bfa" />
      <pointLight position={[0, 0, 5]} intensity={5.5} color="#cfe5ef" />

      <instancedMesh
        ref={meshRef}
        args={instancedMeshArgs}
        frustumCulled={false}
      >
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          roughness={0.22}
          metalness={0.62}
          transparent
          opacity={0.96}
          depthWrite={false}
        />
      </instancedMesh>
    </>
  )
}
