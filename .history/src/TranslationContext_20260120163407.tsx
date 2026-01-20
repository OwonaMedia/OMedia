import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from './translations';

type Language = 'de' | 'en' | 'fr' | 'sw';

interface TranslationContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem('lang') as Language;
    return stored || 'de';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);


  const setLang = (newLang: Language) => {
    if (['de', 'en', 'fr', 'sw'].includes(newLang)) {
      setLangState(newLang);
    } else {
      console.warn(`Unknown language: ${newLang}`);
    }
  } 

  const t = (key: string) => {
    const dict = translations[lang] || translations['de'];
    if (dict[key]) return dict[key];
    // Fallback auf Deutsch
    if (lang !== 'de' && translations['de'][key]) {
      console.warn(`Missing translation for '${key}' in '${lang}', using 'de'.`);
      return translations['de'][key];
    }
    // Logging für komplett fehlende Keys
    console.warn(`Missing translation key: '${key}' in '${lang}' and 'de'.`);
    return key;
  } 

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}