// Particle System Configuration
export const PARTICLE_CONFIG = {
  DPR_CAP: 1.5,
  CAMERA_Z: 18,
  SPREAD_X: 25,
  SPREAD_Y: 15,
  SPREAD_Z: 12,
  INTERACTION_RADIUS: 4.5,
  REPULSION_STRENGTH: 0.8,
  RETURN_DAMPING: 0.95,
  RETURN_SPRING: 0.05,
  IDLE_SPEED: 0.5,
  IDLE_AMPLITUDE: 0.6,
} as const;

// Aurora Teal, Cool Cyan, Premium Violet, Indigo, Soft Silver
export const PARTICLE_COLORS = [
  [0.176, 0.831, 0.749], // Aurora Teal (#2dd4bf)
  [0.404, 0.910, 0.976], // Aurora Cyan (#67e8f9)
  [0.655, 0.545, 0.980], // Aurora Violet (#a78bfa)
  [0.506, 0.549, 0.973], // Aurora Indigo (#818cf8)
  [0.859, 0.906, 0.949], // Soft Silver (#dbe7f2)
] as const;
