export interface Plan {
  id: string;
  name: string;
  /** Monthly price in USD. null = custom quote. */
  priceUsd: number | null;
  /** Digital twins included per month (1 space = 1 twin). */
  spaces: number;
  /** Capture allowance per twin. */
  capture: { photos: number; videoMin: number } | null;
  highlight?: boolean;
  blurb: string;
}

export interface Feature {
  id: string;
  title: string;
  body: string;
  status: 'available' | 'in-progress' | 'roadmap';
}

export interface Step {
  id: string;
  title: string;
  body: string;
}

export interface Tech {
  group: string;
  items: { name: string; note: string }[];
}

export interface Competitor {
  name: string;
  price: string;
  note: string;
  source: string;
}

export interface Example {
  id: string;
  title: string;
  caption: string;
  /** Files placed in apps/web/public/media/. Missing files render a blank frame. */
  photo?: string;
  video?: string;
}

export interface Faq {
  q: string;
  a: string;
}
