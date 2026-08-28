'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, TranslationDictionary } from './types';
import { LANGUAGES, DEFAULT_LANGUAGE } from './languages';
import { getDictionary, getNestedTranslation } from './index';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: TranslationDictionary;
  t: (keyPath: string) => string;
  isNationalLanguage: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'mukanda_preferred_lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved && saved in LANGUAGES) {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // localStorage indisponível (SSR ou armazenamento bloqueado)
    }
  }, []);

  const setLanguage = (lang: Language) => {
    if (lang in LANGUAGES) {
      setLanguageState(lang);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang;
      } catch {
        // localStorage indisponível: a escolha vale apenas para esta sessão
      }
    }
  };

  const dict = getDictionary(language);

  const t = (keyPath: string): string => {
    return getNestedTranslation(dict, keyPath);
  };

  const isNationalLanguage = language !== 'pt';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict, t, isNationalLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if rendered outside provider
    const dict = getDictionary('pt');
    return {
      language: 'pt' as Language,
      setLanguage: () => {},
      dict,
      t: (keyPath: string) => getNestedTranslation(dict, keyPath),
      isNationalLanguage: false,
    };
  }
  return context;
}
