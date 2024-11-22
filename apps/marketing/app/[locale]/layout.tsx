import { draftMode } from 'next/headers';

import { VercelToolbar } from '@vercel/toolbar/next';
import { graphql } from 'gql.tada';

import { AnalyticsComponent } from '#/components/analytics';
import { ContentfulPreviewProvider } from '#/components/contentful-preview-provider';

import { graphqlClient } from '../../lib/graphqlClient';

import '@repo/ui/styles/globals.css';

import { AnnouncementBannerComponent } from '#/components/announcement-banner';
import { LanguageDataProvider } from '#/components/language-data-provider/language-data-provider';
import { NavigationFieldsFragment } from '#/components/navigation';
import { SiteHeader } from '#/components/site-header';
import { isContentSourceMapsEnabled } from '#/lib/contentSourceMaps';
import { fontInter } from '#/lib/fonts';
import { cn } from '@repo/ui/lib/utils';
import { getLocaleFromPath } from '#/locales/get-locale-from-path';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const shouldInjectToolbar = process.env.NODE_ENV === 'development';
  const { locale } = params;
  const { isEnabled: isDraftMode } = draftMode();

  const layoutQuery = graphql(
    `
      query Layout($locale: String, $preview: Boolean) {
        navigationMenuCollection(locale: $locale, preview: $preview, limit: 1) {
          ...NavigationFields
        }
      }
    `,
    [NavigationFieldsFragment]
  );

  const layoutData = await graphqlClient(isDraftMode).query(
    layoutQuery,
    {
      locale: getLocaleFromPath(locale),
      preview: isDraftMode,
    },
    { fetchOptions: { next: { revalidate: 60, tags: ['menu'] } } }
  );

  return (
    <html lang={locale}>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontInter.variable)}>
        <AnalyticsComponent>
          <ContentfulPreviewProvider isDraftMode={isDraftMode} isContentSourceMapsEnabled={isContentSourceMapsEnabled}>
            <LanguageDataProvider>
              <div className="relative flex min-h-screen flex-col">
                <AnnouncementBannerComponent />
                <SiteHeader navigationData={layoutData.data?.navigationMenuCollection} />
                <div className="flex-1">{children}</div>
                {shouldInjectToolbar && <VercelToolbar />}
              </div>
            </LanguageDataProvider>
          </ContentfulPreviewProvider>
        </AnalyticsComponent>
      </body>
    </html>
  );
}
