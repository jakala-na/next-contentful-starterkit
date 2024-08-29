'use client';

import { ReactNode, useState } from 'react';

import { LanguageDataContext } from 'ui/context';

interface LanguageDataProviderProps {
  children: ReactNode;
}

export const LanguageDataProvider = ({ children }: LanguageDataProviderProps) => {
  const slugsState = useState<Record<string, string>>({});
  return <LanguageDataContext.Provider value={{ slugsState }}>{children}</LanguageDataContext.Provider>;
};
