import { Canvas, useFrame } from '@react-three/fiber';
import { Component, useMemo, useRef, type ReactNode } from 'react';
import * as THREE from 'three';

/** Deterministic PRNG so the cloud looks the same on every load. */
function mulberry32(a: number) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Building() {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const rnd = mulberry32(7);
    const floors = 9, per = 520;
    const pos: number[] = [], col: number[] = [];
    const gold = new THREE.Color('#D4AF37'), cyan = new THREE.Color('#00D4FF'), dim = new THREE.Color('#6b5a1f');
    for (let f = 0; f < floors; f++) {
      const y = f * 0.42 - 1.7;
      for (let i = 0; i < per; i++) {
        const side = Math.floor(rnd() * 4), t = rnd() * 2 - 1, j = (rnd() - 0.5) * 0.04;
        const w = 1.5, d = 1.1;
        let x = 0, z = 0;
        if (side === 0) { x = t * w; z = d; } else if (side === 1) { x = t * w; z = -d; }
        else if (side === 2) { x = w; z = t * d; } else { x = -w; z = t * d; }
        pos.push(x + j, y + rnd() * 0.36, z + j);
        const c = rnd() < 0.08 ? cyan : rnd() < 0.5 ? gold : dim;
        col.push(c.r, c.g, c.b);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    return g;
  }, []);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.18; });
  return (
    <points ref={ref} geometry={geo} rotation={[0.12, 0.5, 0]} position={[1.7, 0, 0]}>
      <pointsMaterial size={0.045} vertexColors sizeAttenuation transparent opacity={0.95} />
    </points>
  );
}

class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <div className="h-full w-full" aria-hidden /> : this.props.children; }
}

function hasWebGL(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch { return false; }
}

export function TwinCloud() {
  if (typeof document === 'undefined' || !hasWebGL()) return <div className="h-full w-full" aria-hidden />;
  return (
    <Boundary>
      <Canvas camera={{ position: [0, 0.3, 8], fov: 45 }} dpr={[1, 1.75]} aria-hidden>
        <Building />
      </Canvas>
    </Boundary>
  );
}
