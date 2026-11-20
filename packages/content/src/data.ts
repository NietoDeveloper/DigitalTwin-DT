import type { Competitor, Example, Faq, Feature, Plan, Step, Tech } from './types.js';

export const SITE_URL = 'https://softwaredt.com';
export const REPO_URL = 'https://github.com/NietoDeveloper/Digital-Twin-DT';
export const AUTHOR = { name: 'Manuel Nieto', github: 'https://github.com/NietoDeveloper' };
export const PRICES_AS_OF = 'Nov 2026';

export const plans: Plan[] = [
  { id: 'free', name: 'Free', priceUsd: 0, spaces: 0, capture: null, blurb: 'Explore demo twins and the viewer. No processing included.' },
  { id: 'starter', name: 'Starter', priceUsd: 6, spaces: 3, capture: { photos: 50, videoMin: 1 }, blurb: 'Apartments, rooms and small objects.' },
