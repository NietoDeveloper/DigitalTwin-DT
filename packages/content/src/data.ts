import type { Competitor, Example, Faq, Feature, Plan, Step, Tech } from './types.js';

export const SITE_URL = 'https://softwaredt.com';
export const REPO_URL = 'https://github.com/NietoDeveloper/Digital-Twin-DT';
export const AUTHOR = { name: 'Manuel Nieto', github: 'https://github.com/NietoDeveloper' };
export const PRICES_AS_OF = 'Nov 2026';

export const plans: Plan[] = [
  { id: 'free', name: 'Free', priceUsd: 0, spaces: 0, capture: null, blurb: 'Explore demo twins and the viewer. No processing included.' },
  { id: 'starter', name: 'Starter', priceUsd: 6, spaces: 3, capture: { photos: 50, videoMin: 1 }, blurb: 'Apartments, rooms and small objects.' },
  { id: 'plus', name: 'Plus', priceUsd: 24, spaces: 10, capture: { photos: 50, videoMin: 1 }, blurb: 'Independent pros who scan every week.' },
  { id: 'pro', name: 'Pro', priceUsd: 55, spaces: 10, capture: { photos: 400, videoMin: 5 }, highlight: true, blurb: 'Warehouses, shops and work sites, with higher fidelity profile.' },
  { id: 'business', name: 'Business', priceUsd: 149, spaces: 8, capture: { photos: 850, videoMin: 10 }, blurb: 'Whole buildings, split by floor or zone.' },
  { id: 'scale', name: 'Scale', priceUsd: 249, spaces: 20, capture: { photos: 850, videoMin: 10 }, blurb: 'Teams and portfolios of buildings.' },
  { id: 'max', name: 'Max', price 339, spaces: 30, capture: { photos: 850, videoMin: 10 }, blurb: 'High volume, one predictable bill.' },
  { id: 'enterprise', name: 'Enterprise', priceUsd: null, spaces: 0, capture: { photos: 3000, videoMin: 40 }, blurb: 'Custom volume, limits and support. Contact us.' },
];

export const steps: Step[] = [
export const features: Feature[] = [
  { id: 'splat', title: 'Sharp 3D Gaussian Splatting', body: 'Photoreal, navigable twins from ordinary video and photos. No special camera.', status: 'available' },
  { id: 'little-ai', title: 'Little AI, mostly engineering', body: 'Geometry comes from classic computer vision. Generative inpainting is capped at 4% of a scene.', status: 'available' },
  { id: 'spaces', title: 'Simple per-space pricing', body: 'One space = one twin. No credits maths, no per-minute surprises.', status: 'available' },
  { id: 'share', title: 'Share by link', body: 'Send a read-only twin to a client or inspector. No install required.', status: 'available' },
  { id: 'measure', title: 'Measurements & annotations',
  { group: 'Interface', items: [
    { name: 'React + TypeScript', note: 'Typed UI end to end' },
    { name: 'Three.js / R3F', note: 'In-browser 3D viewer' },
    { name: 'Tailwind CSS', note: 'Design tokens, responsive 310 px to 2100 px' },
    { name: 'Zustand', note: 'Small, predictable state' },
  ] },
  { group: 'Services', items: [
    { name: 'Node.js + TypeScript', note: 'Strict, validated APIs' },
    { name: 'MongoDB', note: 'Product and operational data' },
    { name: 'Redis', note: 'Queues and caching' },
    { name: 'Wompi', note: 'Payments for Colombia / LatAm' },
  ] },
  { group: 'Reconstruction', items: [
    { name: 'C++17', note: 'Performance-critical vision kernels' },
    { name: 'Python', note: 'Orchestration and workers' },
    { name: '3D Gaussian Splatting', note: 'Compact .splat output' },
    { name: 'GPU acceleration', note: 'For the fidelity profile' },
  ] },
  { group: 'Cloud & delivery', items: [
    { name: 'AWS', note: 'Compute and object storage' },
    { name: 'Docker', note: 'Reproducible environments' },
    { name: 'CI/CD', note: 'Automated checks on every change' },
    { name: 'Vercel', note: 'Static front-end hosting' },
  ] },
];

