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
    console.log(`t() aufgerufen mit Key: '${key}', Sprache: '${lang}'`);
    const dict = translations[lang] || {};
    console.log('Verfügbare Keys für aktuelle Sprache:', Object.keys(dict));
    if (dict[key]) return dict[key];
    // Kein Fallback, sondern Key anzeigen
    console.warn(`Key '${key}' nicht gefunden in Sprache '${lang}'.`);
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