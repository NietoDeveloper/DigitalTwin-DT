import { SITE_URL } from '@dtdt/content';
import { useSite } from '../lib/store';
import { lazy, Suspense } from 'react';

const TwinCloud = lazy(() => import('./TwinCloud').then((m) => ({ default: m.TwinCloud })));

export function Hero() {
  const source = useSite((s) => s.source);
  return (
    <section id="top" className="relative overflow-hidden border-b border-bg-line">
      <div className="absolute inset-0 opacity-100" aria-hidden><Suspense fallback={null}><TwinCloud /></Suspense></div>
      <div className="absolute inset-0 bg-gradient-to-r from-bg-base via-bg-base/60 to-transparent" aria-hidden />
      <div className="section relative !py-24 sm:!py-32">
        <p className="eyebrow">Video + photos → 3D digital twin</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
          Sharp digital twins from the camera you already own.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-gainsboro/80">
          Digital Twin DT reconstructs real spaces as navigable 3D Gaussian Splatting models. Engineering first, little AI, and a price you can read in one line: one space, one twin.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={SITE_URL} target="_blank" rel="noreferrer" className="btn btn-gold">Try the product</a>
          <a href="#pricing" className="btn btn-ghost">See pricing</a>
        </div>
        <p className="mt-8 font-mono text-xs text-gainsboro/50">
          <span className={`mr-2 inline-block h-2 w-2 rounded-full ${source === 'api' ? 'bg-status-ok' : source === 'loading' ? 'bg-status-warn' : 'bg-status-info'}`} />
          {source === 'api' ? 'content served by the local API' : source === 'loading' ? 'connecting to the local API…' : 'local API not running, showing bundled content'}
        </p>
      </div>
    </section>
  );
}
