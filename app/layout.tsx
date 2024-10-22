import { draftMode } from 'next/headers';

import { VercelToolbar } from '@vercel/toolbar/next';

import { graphqlClient } from '#/lib/graphqlClient';

import './globals.css';

import { graphql } from 'gql.tada';

import { ContentfulPreviewProvider } from '#/components/contentful-preview-provider';
import { NavigationFieldsFragment } from '#/components/navigation';
import { SiteHeader } from '#/components/site-header';
import { isContentSourceMapsEnabled } from '#/lib/contentSourceMaps';
import { fontSans } from '#/lib/fonts';
import { cn } from '#/lib/utils';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const shouldInjectToolbar = process.env.NODE_ENV === 'development';
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
      locale: 'en-US',
      preview: isDraftMode,
    },
    { fetchOptions: { next: { revalidate: 60, tags: ['menu'] } } }
  );

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ContentfulPreviewProvider isDraftMode={isDraftMode} isContentSourceMapsEnabled={isContentSourceMapsEnabled}>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader navigationData={layoutData.data?.navigationMenuCollection} />
            <div className="flex-1">{children}</div>
            {shouldInjectToolbar && <VercelToolbar />}
          </div>
        </ContentfulPreviewProvider>
      </body>
    </html>
  );
}
