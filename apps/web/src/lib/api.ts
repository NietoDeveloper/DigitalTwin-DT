import * as content from '@dtdt/content';

const BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? '';

export interface SiteData {
  plans: content.Plan[];
  features: content.Feature[];
  steps: content.Step[];
  tech: content.Tech[];
  competitors: content.Competitor[];
  examples: content.Example[];
  faq: content.Faq[];
}

export const bundled: SiteData = {
  plans: content.plans,
  features: content.features,
  steps: content.steps,
  tech: content.tech,
  competitors: content.competitors,
  examples: content.examples,
  faq: content.faq,
};

async function get<T>(name: string, signal: AbortSignal): Promise<T> {
  const res = await fetch(`${BASE}/api/${name}`, { signal });
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  const json = (await res.json()) as { data: T };
  return json.data;
}

/** Loads everything from the local API. Throws if any request fails. */
export async function loadFromApi(signal: AbortSignal): Promise<SiteData> {
  const [plans, features, steps, tech, competitors, examples, faq] = await Promise.all([
    get<SiteData['plans']>('plans', signal),
    get<SiteData['features']>('features', signal),
    get<SiteData['steps']>('steps', signal),
    get<SiteData['tech']>('tech', signal),
    get<SiteData['competitors']>('competitors', signal),
    get<SiteData['examples']>('examples', signal),
    get<SiteData['faq']>('faq', signal),
  ]);
  return { plans, features, steps, tech, competitors, examples, faq };
}
