import { graphqlClient } from "../lib/graphqlClient";
import { draftMode } from "next/headers";
import "./globals.css";
import { graphql } from "#/gql";
import { Navigation } from "#/components/navigation";
import "@contentful/live-preview/style.css";
import { ContentfulPreviewProvider } from "#/components/contentful-preview-provider";

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
      <body>
        <ContentfulPreviewProvider isDraftMode={isDraftMode}>
          {isDraftMode ? <h1>Draft Mode</h1> : <h1>Not in Draft Mode</h1>}
          {layoutData.navigationMenuCollection && (
            <Navigation data={layoutData.navigationMenuCollection} />
          )}
          {children}
        </ContentfulPreviewProvider>
      </body>
    </html>
  );
}
