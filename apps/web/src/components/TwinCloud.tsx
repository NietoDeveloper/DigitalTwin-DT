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
  const geo = 
    const rnd = mulberry32(7);
    const floors = 9, per = 520;
    const pos: number[] = [], col: numb[];
    const gold = new THREE.Color('#D4AF37'), cyan =REE.Color('#00D4FF'), dim = new THREE.Color('#6b5a1f');
    for (let f = 0; f < floors; f++) {
