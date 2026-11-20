import { describe, expect, it } from 'vitest';
import { competitors, examples, plans } from './index';

describe('public content', () => {
  it('has unique plan ids and ascending paid prices', () => {
    expect(new Set(plans.map((p) => p.id)).size).toBe(plans.length);
    const paid = plans.filter((p) => p.priceUsd).map((p) => p.priceUsd!);
    expect(paid).toEqual([...paid].sort((a, b) => a - b));