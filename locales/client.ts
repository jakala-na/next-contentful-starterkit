'use client';

import { createI18nClient } from 'next-international/client';

export const { useCurrentLocale, useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
  en: () => import('./en'),
  de: () => import('./de'),
});
