import { create } from 'zustand';

export type Language = 'en' | 'es';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'es',
  setLanguage: (lang) => {
    set({ language: lang });
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  },
}));