import type { Plan } from '@dtdt/content';

export const usd = (n: number) => `$${n.toLocaleString('en-US')}`;

export function pricePerSpace(p: Plan): string | null {
