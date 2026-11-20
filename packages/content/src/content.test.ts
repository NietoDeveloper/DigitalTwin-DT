import { describe, expect, it } from 'vitest';
import { competitors, examples, plans } from './index';

describe('public content', () => {
  it('has unique plan ids and ascending paid prices', () => {
    expec