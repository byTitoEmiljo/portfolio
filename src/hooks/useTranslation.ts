import { useEffect, useState } from 'react';
import { useLanguageStore } from '@/storage/languageStore';
import type { Translations } from '@/types/translations';

const translations: Record<string, () => Promise<{ default: Translations }>> = {
  en: () => import('@public/locales/en.json'),
  es: () => import('@public/locales/es.json'),
};

export const useTranslation = () => {
  const { language, setLanguage } = useLanguageStore();
  const [t, setT] = useState<Translations | null>(null);

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'es' || storedLang === 'en') {
      setLanguage(storedLang);
    }
  }, [setLanguage]);

  useEffect(() => {
    const load = async () => {
      if (translations[language]) {
        const langData = await translations[language]();
        setT(langData.default);
      }
    };

    load();
  }, [language]);

  return { t, language, setLanguage };
};
