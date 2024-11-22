'use client';

import { ChangeEvent, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { useLanguageDataContext } from '#/components/language-data-provider/language-data-provider';
import { useCurrentLocale } from '#/locales/client';

export const LanguageSelector = () => {
  const locale = useCurrentLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const languageData = useLanguageDataContext();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    startTransition(() => {
      const selectedLocale = e.target.value;
      const [slugs] = languageData?.slugsState ?? [];
      if (slugs?.[selectedLocale]) {
        router.push(`/${selectedLocale}/${slugs[selectedLocale]}`);
      } else {
        router.push(`/${selectedLocale}`);
      }
    });
  };

  return (
    <>
      <select value={locale} onChange={handleLanguageChange} disabled={isPending}>
        <option value="en">English</option>
        <option value="de">Deutsche</option>
      </select>
    </>
  );
};
