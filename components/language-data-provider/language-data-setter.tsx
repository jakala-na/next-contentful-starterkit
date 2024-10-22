'use client';

import { useEffect } from 'react';

import { useLanguageDataContext } from '#/ui/hooks';

export const LanguageDataSetter = ({ data }: { data?: Record<string, string> }) => {
  const [, setSlugs] = useLanguageDataContext()!.slugsState;
  useEffect(() => {
    if (data) {
      setSlugs(data);
    }
  }, [data]);
  return null;
};
