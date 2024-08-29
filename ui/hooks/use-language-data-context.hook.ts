import { useContext } from 'react';

import { LanguageDataContext } from '#/ui/context';

export function useLanguageDataContext() {
  const context = useContext(LanguageDataContext);
  return context ?? null;
}
