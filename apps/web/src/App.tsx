import { AUTHOR, REPO_URL, SITE_URL } from '@dtdt/content';
import { useEffect } from 'react';
import { Examples } from './components/Examples';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Compare, Cta, Faq, Features, How, Pricing, Tech } from './components/Sections';
import { useSite } from './lib/store';

export function App() {
  const load = useSite((s) => s.load);
  useEffect(() => load(), [load]);
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <How />
        <Features 
        <Pricing />
        <Compare />
        <Tech />
        <Examples />
        <Faq />
        <Cta />
      </
      <footer className="border-t border-bg-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center text-sm text-gainsboro/60 sm:flex-row s sm:text-left">
          <p>Digital Twin DT, a product lassN="text-gold hover:underline" href={SITE_URL} target="_blank" rel="noreferrer">softwaredt.com</a> · Softwara></p>
      </footer>
    </>
  );
