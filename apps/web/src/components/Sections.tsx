import { PRICES_AS_OF, SITE_URL, type Plan } from '@dtdt/content';
import { useState } from 'react';
import { captureLabel, pricePerSpace, usd } from '../lib/format';
import { useSite } from '../lib/store';

function Head({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {sub && <p className="mt-3 text-gainsboro/70">{sub}</p>}
    </div>
  );
}

export function How() {
  const steps = useSite((s) => s.data.steps);
  return (
    <section id="how" className="section">
      <Head eyebrow="How it works" title="From a phone video to a navigable space" />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.id} className="card card-hover">
            <span className="font-mono text-sm text-gold">0{i + 1}</span>
            <h3 className="mt-2 font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-gainsboro/70">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const statusLabel = { available: 'Available', 'in-progress': 'In progress', roadmap: 'Roadmap' } as const;
const statusColor = { available: 'text-status-ok', 'in-progress': 'text-status-warn', roadmap: 'text-status-info' } as const;

export function Features() {
  const features = useSite((s) => s.data.features);
  return (
    <section id="features" className="section">
      <Head eyebrow="Features" title="What it does, and how far along each piece is" sub="We label what is shipping, what is being built and what is only planned." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <article key={f.id} className="card card-hover">
            <span className={`font-mono text-xs uppercase tracking-wider ${statusColor[f.status]}`}>{statusLabel[f.status]}</span>
            <h3 className="mt-2 font-bold text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-gainsboro/70">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlanCard({ p }: { p: Plan }) {
  const per = pricePerSpace(p);
  return (
    <article className={`card card-hover flex flex-col ${p.highlight ? '!border-gold' : ''}`}>
      {p.highlight && <span className="mb-2 self-start rounded bg-gold px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-black">Most popular</span>}
      <h3 className="font-bold text-white">{p.name}</h3>
      <p className="mt-2 text-3xl font-extrabold text-white">
        {p.priceUsd === null ? 'Custom' : usd(p.priceUsd)}
        {p.priceUsd !== null && p.priceUsd > 0 && <span className="text-sm font-medium text-gainsboro/60"> / mo</span>}
      </p>
      <p className="mt-1 text-sm text-gainsboro/70">{p.blurb}</p>
      <dl className="mt-4 space-y-1 border-t border-bg-line pt-4 text-sm">
        <div className="flex justify-between"><dt className="text-gainsboro/60">Spaces</dt><dd className="text-white">{p.spaces > 0 ? p.spaces : p.priceUsd === null ? 'Custom' : '—'}</dd></div>
        <div className="flex justify-between"><dt className="text-gainsboro/60">Per space</dt><dd className="text-white">{per ?? '—'}</dd></div>
        <div className="flex justify-between gap-2"><dt className="text-gainsboro/60">Per twin</dt><dd className="text-right text-white">{captureLabel(p)}</dd></div>
      </dl>
      <a href={SITE_URL} target="_blank" rel="noreferrer" className={`btn mt-5 ${p.highlight ? 'btn-gold' : 'btn-ghost'}`}>{p.priceUsd === null ? 'Contact us' : 'Choose plan'}</a>
    </article>
  );
}

export function Pricing() {
  const plans = useSite((s) => s.data.plans);
  return (
    <section id="pricing" className="section">
      <Head eyebrow="Pricing" title="One space, one twin" sub={`USD, billed monthly. Updating a twin uses another space. Prices as of ${PRICES_AS_OF}; the web app is always the source of truth.`} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{plans.map((p) => <PlanCard key={p.id} p={p} />)}</div>
      <p className="mt-6 text-sm text-gainsboro/60">Large buildings are one twin: the photo and video allowance is shared across floors or zones. Optional add-ons (BIM compare, advanced reports, exports) are priced separately.</p>
    </section>
  );
}

export function Compare() {
  const competitors = useSite((s) => s.data.competitors);
  return (
    <section id="compare" className="section">
      <Head eyebrow="Compare" title="Where the market is today" sub={`Public list prices as we found them in ${PRICES_AS_OF}. Plans differ in scope, so read them as orientation, not as a like-for-like benchmark.`} />
      <div className="overflow-x-auto rounded-xl border border-bg-line">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-bg-surface text-gainsboro/60">
            <tr><th className="p-3 font-medium">Product</th><th className="p-3 font-medium">Price</th><th className="p-3 font-medium">Note</th><th className="p-3 font-medium">Source</th></tr>
          </thead>
          <tbody>
            {competitors.map((c) => (
              <tr key={c.name + c.price} className="border-t border-bg-line">
                <td className="p-3 font-semibold text-white">{c.name}</td>
                <td className="p-3">{c.price}</td>
                <td className="p-3 text-gainsboro/70">{c.note}</td>
                <td className="p-3"><a className="text-gold hover:underline" href={c.source} target="_blank" rel="noreferrer">link</a></td>
              </tr>
            ))}
            <tr className="border-t border-gold/40 bg-bg-elevated">
              <td className="p-3 font-semibold text-gold">Digital Twin Video DT</td>
              <td className="p-3">$6 to $339 / month</td>
              <td className="p-3 text-gainsboro/70">Per-space pricing, any camera, no hardware to buy</td>
              <td className="p-3"><a className="text-gold hover:underline" href="#pricing">plans</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Tech() {
  const tech = useSite((s) => s.data.tech);
  return (
    <section id="tech" className="section">
      <Head eyebrow="Technology" title="Built with proven, serious tools" sub="A typed web stack, robust services, and a native reconstruction core. The product code is closed; this is what it is made of." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tech.map((g) => (
          <div key={g.group} className="card">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold">{g.group}</h3>
            <ul className="mt-3 space-y-3">
              {g.items.map((i) => (
                <li key={i.name}><p className="font-semibold text-white">{i.name}</p><p className="text-sm text-gainsboro/60">{i.note}</p></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  const faq = useSite((s) => s.data.faq);
  return (
    <section id="faq" className="section">
      <Head eyebrow="FAQ" title="Straight answers" />
      <div className="divide-y divide-bg-line rounded-xl border border-bg-line">
        {faq.map((f) => (
          <details key={f.q} className="group p-4">
            <summary className="cursor-pointer list-none font-semibold text-white marker:hidden">
              <span className="mr-2 text-gold group-open:hidden">+</span><span className="mr-2 hidden text-gold group-open:inline">−</span>{f.q}
            </summary>
            <p className="mt-3 pl-5 text-gainsboro/75">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Cta() {
  const [copied, setCopied] = useState(false);
  return (
    <section className="section !py-16">
      <div className="card text-center !p-10">
        <h2 className="h2 !mt-0">See your first twin</h2>
        <p className="mx-auto mt-3 max-w-lg text-gainsboro/70">Start with the Free plan to explore demo twins, then pick the plan that fits your captures.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a className="btn btn-gold" href={SITE_URL} target="_blank" rel="noreferrer">Open the web app</a>
          <button className="btn btn-ghost" onClick={() => { void navigator.clipboard?.writeText(SITE_URL).then(() => setCopied(true)); }}>{copied ? 'Link copied' : 'Copy link'}</button>
        </div>
      </div>
    </section>
  );
}
