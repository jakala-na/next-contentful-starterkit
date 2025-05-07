'use client';

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface LanguageData {
  slugsState: [Record<string, string>, Dispatch<SetStateAction<Record<string, string>>>];
}
const LanguageDataContext = createContext<LanguageData | undefined>(undefined);

interface LanguageDataProviderProps {
  children: ReactNode;
}

export function LanguageDataProvider({ children }: LanguageDataProviderProps) {
  // eslint-disable-next-line react/hook-use-state -- refactor later.
  const slugsState = useState<Record<string, string>>({});
  return <LanguageDataContext.Provider value={{ slugsState }}>{children}</LanguageDataContext.Provider>;
}

export function LanguageDataSetter({ data }: { data?: Record<string, string> }) {
  const context = useLanguageDataContext();
  useEffect(() => {
    if (data && context?.slugsState) {
      const [, setSlugs] = context.slugsState;
      setSlugs(data);
    }
  }, [context?.slugsState, data]);
  return null;
}

export function useLanguageDataContext() {
  const context = useContext(LanguageDataContext);
  return context;
}
