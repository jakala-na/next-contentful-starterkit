import { fallbackLocale } from './fallback-locale';

export function getLocaleFromPath(locale: string) {
  const mapping: Record<string, string> = {
    en: 'en-US',
    de: 'de-DE',
  };
  return mapping[locale] ?? fallbackLocale;
}
