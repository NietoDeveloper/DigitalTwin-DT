import { describe, expect, it } from 'vitest';
import { competitors, examples, features, plans, steps, tech } from './index.js';

describe('content integrity', () => {
  it('has unique plan ids and sorted prices', () => {
    const ids = plans.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    const priced = plans.filter((p) => p.priceUsd !== null).map((p) => p.priceUsd as number);
    expect([...priced].sort((a, b) => a - b)).toEqual(priced);
  });
  it('exactly one highlighted plan', () => {
    expect(plans.filter((p) => p.highlight)).toHaveLength(1);
  });
  it('all competitor sources are https links', () => {
    for (const c of competitors) expect(c.source.startsWith('https://')).toBe(true);
  });
  it('has non-empty sections', () => {
    for (const list of [steps, features, tech, examples]) expect(list.length).toBeGreaterThan(0);
  });
  it('never leaks internal architecture words', () => {
    const blob = JSON.stringify({ plans, steps, features, tech, competitors, examples }).toLowerCase();
    for (const w of ['repositor', 'cluster', 'railway', 'ecs', 'fargate', 'secret']) {
      expect(blob.includes(w), w).toBe(false);
    }
  });
});
