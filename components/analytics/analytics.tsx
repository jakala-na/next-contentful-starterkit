'use client';

import { PropsWithChildren, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Analytics from 'analytics';
import { AnalyticsProvider } from 'use-analytics';

const analyticsInstance = Analytics({
  app: 'starterkit',
  debug: true,
});

export function AnalyticsComponent({ children }: PropsWithChildren) {
  const pathname = usePathname();

  useEffect(() => {
    analyticsInstance.page();
  }, [pathname]);

  return <AnalyticsProvider instance={analyticsInstance}>{children}</AnalyticsProvider>;
}
