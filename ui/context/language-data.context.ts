import { createContext, Dispatch, SetStateAction } from 'react';

type LanguageData = { slugsState: [Record<string, string>, Dispatch<SetStateAction<Record<string, string>>>] };
export const LanguageDataContext = createContext<LanguageData | undefined>(undefined);
