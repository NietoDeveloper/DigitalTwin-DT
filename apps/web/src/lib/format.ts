import type { Plan } from '@dtdt/content';

export const usd = (n: number) => `$${n.toLocaleString('en-US')}`;

export function pricePerSpace(p: Plan): string | null {
  if (p.priceUsd === null || p.spaces === 0 || p.priceUsd === 0) return null;
  return `$${(p.priceUsd / p.spaces).toFixed(2)}`;
}

export function captureLabel(p: Plan): string {
  return p.capture ? `${p.capture.photos.toLocaleString('en-US')} photos + ${p.capture.videoMin} min video` : '—';
}
