import { draftMode } from 'next/headers';

import { VercelToolbar } from '@vercel/toolbar/next';
import { graphql } from 'gql.tada';

import { AnalyticsComponent } from '#/components/analytics';

import { client } from '#/lib/drupal/client';

import '@repo/ui/styles/globals.css';

import { AnnouncementBannerComponent } from '#/components/announcement-banner';
import { LanguageDataProvider } from '#/components/language-data-provider/language-data-provider';
import { SiteHeader } from '#/components/site-header';
import { fontInter } from '#/lib/fonts';
import { cn } from '@repo/ui/lib/utils';
import { MainNavigationFragment } from '#/components/navigation/navigation';

export default async function RootLayout(props: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  // Inject Vercel toolbar during local development.
  const shouldInjectToolbar = process.env.NODE_ENV === 'development';
  const params = await props.params;

  const { children } = props;

  const { locale } = params;
  const isDraftMode = (await draftMode()).isEnabled;

  const layoutQuery = graphql(
    `
      query Layout($locale: String) {
        menu(name: MAIN, langcode: $locale) {
          ...MainNav
        }
      }
    `,
    [MainNavigationFragment]
  );

  const layoutData = await (
    await client(isDraftMode)
  ).query(
    layoutQuery,
    {
      locale,
    },
    { fetchOptions: { next: { revalidate: 60, tags: ['menu'] } } }
  );

  return (
    <html lang={locale}>
      {shouldInjectToolbar && <VercelToolbar />}
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontInter.variable)}>
        <AnalyticsComponent>
          <LanguageDataProvider>
            <div className="relative flex min-h-screen flex-col">
              <AnnouncementBannerComponent />
              {layoutData.data?.menu && <SiteHeader navigationData={layoutData.data.menu} />}
              <div className="flex-1">{children}</div>
            </div>
          </LanguageDataProvider>
        </AnalyticsComponent>
      </body>
    </html>
  );
}
