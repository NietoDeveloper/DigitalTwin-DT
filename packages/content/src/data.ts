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
  { id: 'max', name: 'Max', priceUsd: 339, spaces: 30, capture: { photos: 850, videoMin: 10 }, blurb: 'High volume, one predictable bill.' },
  { id: 'enterprise', name: 'Enterprise', priceUsd: null, spaces: 0, capture: { photos: 3000, videoMin: 40 }, blurb: 'Custom volume, limits and support. Contact us.' },
];

export const steps: Step[] = [
  { id: 'capture', title: 'Capture', body: 'A few sharp photos for detail plus a short video for coverage. Any camera works.' },
  { id: 'upload', title: 'Upload', body: 'Resumable direct-to-storage upload, so large captures survive a bad connection.' },
  { id: 'reconstruct', title: 'Reconstruct', body: 'A native C++ / Python pipeline estimates camera poses and builds a 3D Gaussian Splatting model.' },
  { id: 'verify', title: 'Verify', body: 'A quality gate checks the result against a fidelity threshold before it reaches you.' },
  { id: 'explore', title: 'Explore & share', body: 'Walk the twin in the browser, measure, annotate and share a link.' },
];

export const features: Feature[] = [
  { id: 'splat', title: 'Sharp 3D Gaussian Splatting', body: 'Photoreal, navigable twins from ordinary video and photos. No special camera.', status: 'available' },
  { id: 'little-ai', title: 'Little AI, mostly engineering', body: 'Geometry comes from classic computer vision. Generative inpainting is capped at 4% of a scene.', status: 'available' },
  { id: 'spaces', title: 'Simple per-space pricing', body: 'One space = one twin. No credits maths, no per-minute surprises.', status: 'available' },
  { id: 'share', title: 'Share by link', body: 'Send a read-only twin to a client or inspector. No install required.', status: 'available' },
  { id: 'measure', title: 'Measurements & annotations', body: 'Measure distances and pin notes directly on the twin.', status: 'in-progress' },
  { id: 'bim', title: 'Plan / BIM comparison', body: 'Compare what was built against the plan. Starting simple, growing from there.', status: 'in-progress' },
  { id: 'track', title: 'Structural element tracking', body: 'Follow beams and other elements between captures of the same site.', status: 'roadmap' },
  { id: 'live', title: 'Live option', body: 'Near-live updates on top of the offline-first pipeline.', status: 'roadmap' },
];

export const tech: Tech[] = [
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

export const competitors: Competitor[] = [
  { name: 'KIRI Engine Pro', price: '$79.99 / year (~$6.66 / mo)', note: '300–500 photos per scan', source: 'https://www.kiriengine.app/pricing' },
  { name: 'Polycam Business', price: '$34 / month ($400 / year)', note: 'Self-reported on competitor pricing pages', source: 'https://poly.cam/blog/best-matterport-alternatives-for-small-teams-creators-in-2026' },
  { name: 'Matterport Professional', price: '$58 / month (annual)', note: 'Figure reported by a competitor (Polycam). Verify on matterport.com', source: 'https://poly.cam/blog/best-matterport-alternatives-for-small-teams-creators-in-2026' },
  { name: 'Matterport Business', price: '$296 / month (annual)', note: 'Figure reported by a competitor (Polycam). Verify on matterport.com', source: 'https://poly.cam/blog/best-matterport-alternatives-for-small-teams-creators-in-2026' },
  { name: 'DroneDeploy Flight & Analysis', price: '$4,188 / year (~$349 / mo)', note: 'Drone-first workflow', source: 'https://dronedeploy.com/pricing' },
  { name: 'SkyeBrowse', price: '$24.99 / $49.99 / $199 per model', note: 'Per-model pricing', source: 'https://www.skyebrowse.com/news/posts/best-digital-twin-software.md' },
];

export const examples: Example[] = [
  { id: 'apartment', title: 'Apartment', caption: 'About 50 photos + 1 minute of video.', photo: 'apartment.jpg', video: 'apartment.mp4' },
  { id: 'warehouse', title: 'Warehouse fit-out', caption: 'About 400 photos + 5 minutes of video.', photo: 'warehouse.jpg', video: 'warehouse.mp4' },
  { id: 'building', title: 'Whole building', caption: 'Captured floor by floor, one twin.', photo: 'building.jpg', video: 'building.mp4' },
  { id: 'object', title: 'Small object', caption: 'A 1 × 1 m object, studio sharp.', photo: 'object.jpg', video: 'object.mp4' },
];

export const faq: Faq[] = [
  { q: 'Do I need a special camera?', a: 'No. Video and photos from any camera work. The best result comes from combining both: video for coverage, photos for sharpness.' },
  { q: 'How long does a twin take?', a: 'The target is 2 to 3 hours at most, ideally under 2. It is a target, not a guarantee, and it depends on the size of the capture.' },
  { q: 'What does "1 space" mean?', a: 'One space is one digital twin. Updating an existing twin with a new capture uses another space.' },
  { q: 'How accurate is it?', a: 'We aim for about 97% fidelity on the fidelity profile. That is an engineering target that we are still validating with real captures, not a published benchmark.' },
  { q: 'Is the product source code here?', a: 'No. This repository is a commercial and technical showcase only. The product is closed source.' },
  { q: 'Which countries are supported?', a: 'We start in Colombia and Latin America, with worldwide availability planned. Prices are in USD.' },
];
