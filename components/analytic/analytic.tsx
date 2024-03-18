'use client';
import { PropsWithChildren, useEffect } from 'react';
import Analytics from 'analytics';
import { AnalyticsProvider } from 'use-analytics';
import { usePathname, useSearchParams } from 'next/navigation';

const analyticsInstance = Analytics({
  app: 'starterkit',
  debug: true,
});

export function AnalyticsComponent({ children }: PropsWithChildren) {
  const pathname = usePathname();

  useEffect(() => {
    analyticsInstance.page();
  }, [pathname]);

  return (
    <AnalyticsProvider instance={analyticsInstance}>
      {children}
    </AnalyticsProvider>
  );
}
