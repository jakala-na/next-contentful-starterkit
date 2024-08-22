'use client';

import type { ReactNode } from 'react';

import { I18nProviderClient } from '#/locales/client';

type LocaleProviderProps = {
  locale: string;
  children: ReactNode;
};

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  return (
    <I18nProviderClient locale={locale} fallback={<p>Loading...</p>}>
      {children}
    </I18nProviderClient>
  );
}
