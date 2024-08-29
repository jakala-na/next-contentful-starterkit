import { draftMode } from 'next/headers';

import { graphqlClient } from '#/lib/graphqlClient';

import '../globals.css';

import { graphql } from 'gql.tada';

import '@contentful/live-preview/style.css';

import { LocaleProvider } from '#/app/[locale]/locale-provider';
import { ContentfulPreviewProvider } from '#/components/contentful-preview-provider';
import { LanguageDataProvider } from '#/components/language-data-provider';
import { NavigationFieldsFragment } from '#/components/navigation';
import { SiteHeader } from '#/components/site-header';
import { fontSans } from '#/lib/fonts';
import { cn } from '#/lib/utils';
import { getLocaleFromPath } from '#/locales/get-locale-from-path';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ContentfulPreviewProvider isDraftMode={isDraftMode}>
          <LocaleProvider locale={locale}>
            <LanguageDataProvider>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader navigationData={layoutData.data?.navigationMenuCollection} />
                <div className="flex-1">{children}</div>
              </div>
            </LanguageDataProvider>
          </LocaleProvider>
        </ContentfulPreviewProvider>
      </body>
    </html>
  );
}
