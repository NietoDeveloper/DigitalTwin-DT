import type { AddressInfo } from 'node:net';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createApp } from '../src/app.js';

let base = '';
let close: () => void = () => {};

beforeAll(async () => {
  await new Promise<void>((resolve) => {
    const s = createApp(['http://localhost:5173']).listen(0, () => {
      base = `http://127.0.0.1:${(s.address() as AddressInfo).port}`;
      close = () => s.close();
      resolve();
    });
  });
});
afterAll(() => close());

describe('api', () => {
  it('health', async () => {
    const r = await fetch(`${base}/api/health`);
    expect(r.status).toBe(200);
    expect((await r.json()).data.status).toBe('ok');
  });
  it('plans', async () => {
    const j = await (await fetch(`${base}/api/plans`)).json();
    expect(j.data.length).toBeGreaterThan(5);
    expect(j.meta.pricesAsOf).toBeTruthy();
  });
  it.each(['steps', 'features', 'tech', 'competitors', 'examples', 'faq'])('%s', async (n) => {
    const r = await fetch(`${base}/api/${n}`);
    expect(r.status).toBe(200);
    expect(Array.isArray((await r.json()).data)).toBe(true);
  });
  it('404 envelope', async () => {
    const r = await fetch(`${base}/api/nope`);
    expect(r.status).toBe(404);
    expect((await r.json()).error.code).toBe('not_found');
  });
});
