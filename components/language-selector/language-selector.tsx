'use client';

import { useChangeLocale, useCurrentLocale } from '#/locales/client';

export const LanguageSelector = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true });

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLocale(e.target.value as 'en' | 'de');
  };

  return (
    <select value={locale} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="de">Deutsche</option>
    </select>
  );
};
