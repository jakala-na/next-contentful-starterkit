'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

type LanguageData = { slugsState: [Record<string, string>, Dispatch<SetStateAction<Record<string, string>>>] };
const LanguageDataContext = createContext<LanguageData | undefined>(undefined);

interface LanguageDataProviderProps {
  children: ReactNode;
}

export const LanguageDataProvider = ({ children }: LanguageDataProviderProps) => {
  const slugsState = useState<Record<string, string>>({});
  return <LanguageDataContext.Provider value={{ slugsState }}>{children}</LanguageDataContext.Provider>;
};

export const LanguageDataSetter = ({ data }: { data?: Record<string, string> }) => {
  const [, setSlugs] = useLanguageDataContext()!.slugsState;
  useEffect(() => {
    if (data) {
      setSlugs(data);
    }
  }, [data]);
  return null;
};

export function useLanguageDataContext() {
  const context = useContext(LanguageDataContext);
  return context ?? null;
}
