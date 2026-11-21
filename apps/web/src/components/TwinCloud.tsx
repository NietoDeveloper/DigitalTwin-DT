import { Canvas, useFrame } from '@react-three/fiber';
import { Component, useMemo, useRef, type ReactNode } from 'react';
import * as THREE from 'three';

/** Deterministic PRNG so the cloud looks the same on every load. */
function mulberry32(a: number) {
  return () => {
