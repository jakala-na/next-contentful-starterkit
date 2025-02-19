import { createI18nServer } from 'next-international/server';

export const { getCurrentLocale, getI18n, getScopedI18n, getStaticParams } = createI18nServer(
  {
    en: () => import('./en'),
    de: () => import('./de'),
  },
  {
    // This is the segment name that will be used to determine the locale.
    // It matches the default name, but it's here for clarity.
    segmentName: 'locale',
  }
);
