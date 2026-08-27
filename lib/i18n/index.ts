import { Language, TranslationDictionary } from './types';
import { pt } from './dictionaries/pt';
import { umb } from './dictionaries/umb';
import { kmb } from './dictionaries/kmb';
import { kkg } from './dictionaries/kkg';

export * from './types';
export * from './languages';

const dictionaries: Record<Language, TranslationDictionary> = {
  pt,
  umb,
  kmb,
  kkg,
};

export function getDictionary(lang: Language = 'pt'): TranslationDictionary {
  return dictionaries[lang] || dictionaries.pt;
}

export function getNestedTranslation(obj: any, path: string): string {
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return path;
    }
  }
  return typeof current === 'string' ? current : path;
}
