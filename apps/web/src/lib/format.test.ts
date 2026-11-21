import { describe, expect, it } from 'vitest';
import { plans } from '@dtdt/content';
import { captureLabel, pricePerSpace, usd } from './format';

describe('format', () => {
  const get = (id: string) => plans.find((p) => p.id === id)!;
  it('price per space', () => {
    expect(pricePerSpace(get('pro'))).toBe('$5.50');
    expect(pricePerSpace(get('free'))).toBeNull();
    expect(pricePerSpace(get('enterprise'))).toBeNull();
  });
  it('capture label', () => {
    expect(captureLabel(get('business'))).toBe('850 photos + 10 min video');
    expect(captureLabel(get('free'))).toBe('—');
  });
  it('usd', () => expect(usd(1490)).toBe('$1,490'));
});
