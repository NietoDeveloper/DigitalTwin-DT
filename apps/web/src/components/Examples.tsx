import type { Example } from '@dtdt/content';
import { useState } from 'react';
import { useSite } from '../lib/store';

const media = (f: string) => `/media/${f}`;

function Frame({ ex }: { ex: Example }) {
  const [photoOk, setPhotoOk] = useState(Boolean(ex.photo));
  const [videoOk, setVideoOk] = useState(Boolean(ex.video));
  const [mode, setMode] = useState<'photo' | 'video'>('photo');
  const showVideo = mode === 'video' && videoOk;
  const empty = (mode === 'photo' && !photoOk) || (mode === 'video' && !videoOk);
  return (
    <figure className="card !p-3">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-dashed border-bg-line bg-bg-base">
        {!empty && !showVideo && ex.photo && <img src={media(ex.photo)} alt={ex.title} className="h-full w-full object-cover" loading="lazy" onError={() => setPhotoOk(false)} />}
        {!empty && showVideo && ex.video && <video src={media(ex.video)} className="h-full w-full object-cover" controls preload="metadata" onError={() => setVideoOk(false)} />}
        {empty && (
          <div className="grid h-full place-items-center p-4 text-center font-mono text-xs text-gainsboro/40">
            {mode} coming soon<br />public/media/{(mode === 'photo' ? ex.photo : ex.video) ?? '—'}
          </div>
        )}
      </div>
      <div className="mt-3 flex gap-2" role="tablist" aria-label={`${ex.title} media`}>
        {(['photo', 'video'] as const).map((m) => (
          <button key={m} role="tab" aria-selected={mode === m} onClick={() => setMode(m)}
            className={`rounded-md px-3 py-1 text-xs font-semibold ${mode === m ? 'bg-gold text-black' : 'border border-bg-line text-gainsboro/70 hover:border-gold'}`}>{m}</button>
        ))}
      </div>
      <figcaption className="mt-3"><p className="font-bold text-white">{ex.title}</p><p className="text-sm text-gainsboro/65">{ex.caption}</p></figcaption>
    </figure>
  );
}

export function Examples() {
  const examples = useSite((s) => s.data.examples);
  return (
    <section id="examples" className="section">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow">Examples</p>
        <h2 className="h2">Real captures, real twins</h2>
        <p className="mt-3 text-gainsboro/70">Photos and videos from the product. Drop your files into <code className="font-mono text-gold">apps/web/public/media</code> and they appear here.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">{examples.map((e) => <Frame key={e.id} ex={e} />)}</div>
    </section>
  );
}
