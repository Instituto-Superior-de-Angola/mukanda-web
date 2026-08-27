import { Language, LanguageMeta } from './types';

export const LANGUAGES: Record<Language, LanguageMeta> = {
  pt: {
    code: 'pt',
    name: 'Português',
    nativeName: 'Português',
    region: 'Nacional (Padrão)',
    flag: '🇦🇴',
    description: 'Língua oficial e padrão de comunicação do Projecto Mukanda'
  },
  umb: {
    code: 'umb',
    name: 'Umbundo',
    nativeName: 'Umbundu',
    region: 'Huíla, Huambo, Bié, Benguela',
    flag: '🌾',
    description: 'Língua nacional do planalto central e sul (Pólo Huíla)'
  },
  kmb: {
    code: 'kmb',
    name: 'Kimbundo',
    nativeName: 'Kimbundu',
    region: 'Luanda, Bengo, Malanje, Kwanza',
    flag: '🌊',
    description: 'Língua nacional do litoral norte e metrópole (Pólo Luanda)'
  },
  kkg: {
    code: 'kkg',
    name: 'Kikongo',
    nativeName: 'Kikongo',
    region: 'Uíge, Zaire, Cabinda',
    flag: '🌿',
    description: 'Língua nacional do norte e bacia do Congo (Pólo Uíge)'
  }
};

export const DEFAULT_LANGUAGE: Language = 'pt';
