import { describe, expect, it } from 'vitest';
import { competitors, examples, plans } from './index';

describe('public content', () => {
  it('has unique plan ids and ascending paid prices', () => {
    expect(new Set(plans.map((p) => p.id)).size).toBe(plans.length);
    const paid = plans.filter((p) => p.priceUsd).map((p) => p.priceUsd!);
    expect(paid).toEqual([...paid].sort((a, b) => a - b));
  });

  it('keeps apartment-size capture at 50 photos + 1 min', () => {
    expect(plans.find((p) => p.id === 'starter')!.capture).toEqual({ photos: 50, videoMin: 1 });
  });

  it('cites competitors over https', () => {
    for (const c of competitors) expect(c.source.startsWith('https://')).toBe(true);
  });

  it('references example files by bare name (kept in apps/web/public/media)', () => {
    for (const e of examples) for (const f of [e.photo, e.video]) if (f) expect(f).toMatch(/^[\w.-]+\.(jpg|png|webp|mp4|webm)$/);
  });
});
