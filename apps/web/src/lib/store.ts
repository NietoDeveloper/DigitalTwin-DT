import { create } from 'zustand';
import { bundled, loadFromApi, type SiteData } from './api';

type Source = 'loading' | 'api' | 'bundled';

interface State {
  data: SiteData;
  source: Source;
  load: () => () => void;
}

export const useSite = create<State>((set) => ({
  data: bundled,
  source: 'loading',
  load: () => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    loadFromApi(ctrl.signal)
      .then((data) => set({ data, source: 'api' }))
      .catch(() => set({ source: 'bundled' }))
      .finally(() => clearTimeout(timer));
    return () => { clearTimeout(timer); ctrl.abort(); };
  },
}));
