import { SITE_URL } from '@dtdt/content';

const links = [['How it works', '#how'], ['Features', '#features'], ['Pricing', '#pricing'], ['Compare', '#compare'], ['Technology', '#tech'], ['Examples', '#examples'], ['FAQ', '#faq']] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-bg-line bg-bg-base/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-bold text-white" aria-label="Digital Twin Video DT, back to top">
          <img src="/logo-mark.png" alt="" className="h-7 w-7" />
          <span className="hidden sm:inline">Digital Twin <span className="text-gold">DT</span></span>
        </a>
        <nav className="hidden gap-5 text-sm text-gainsboro/80 lg:flex" aria-label="Sections">
          {links.map(([l, h]) => <a key={h} href={h} className="hover:text-gold">{l}</a>)}
        </nav>
        <a href={SITE_URL} target="_blank" rel="noreferrer" className="btn btn-gold !px-4 !py-2">Open the web app</a>
      </div>
    </header>
  );
}
