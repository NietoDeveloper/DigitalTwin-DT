import { describe, expect, it } from 'vitest';
import { plans } from '@dtdt/content';
import { captureLabel, pricePerSpace, usd } from './format';

describe('format', () => {
  const get = (id: string) => plans.find((p) => p.id === id)!;
