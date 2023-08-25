import { graphqlClient } from "../lib/graphqlClient";
import { draftMode } from "next/headers";
import "./globals.css";
import { graphql } from "#/gql";
import "@contentful/live-preview/style.css";
import { ContentfulPreviewProvider } from "#/components/contentful-preview-provider";
import { cn } from "#/lib/utils";
import { fontSans } from "#/lib/fonts";
import { SiteHeader } from "#/components/site-header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = draftMode();

  const layoutQuery = graphql(/* GraphQL */ `
    query Layout($locale: String, $preview: Boolean) {
      navigationMenuCollection(locale: $locale, preview: $preview, limit: 1) {
        ...NavigationFields
      }
    }
  `);

  const layoutData = await graphqlClient(isDraftMode).request(layoutQuery, {
    locale: "en-US",
    preview: isDraftMode,
  });

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ContentfulPreviewProvider isDraftMode={isDraftMode}>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader navigationData={layoutData.navigationMenuCollection} />
            <div className="flex-1">{children}</div>
          </div>
        </ContentfulPreviewProvider>
      </body>
    </html>
  );
}
