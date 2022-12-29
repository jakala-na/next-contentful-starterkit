import { graphqlClient } from "../lib/graphqlClient";
import { previewData } from "next/headers";
import "./globals.css";
import { graphql } from "../gql";
import { Link } from "#/ui/link";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = previewData();
  const isPreviewMode = !!data && data.key === process.env.PREVIEW_SECRET;

  const layoutQuery = graphql(/* GraphQL */ `
    query MenuLinks {
      menuLinkCollection(limit: 100) {
        items {
          ...LinkFields
        }
      }
    }
  `);

  const layoutData = await graphqlClient.request(layoutQuery);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {isPreviewMode ? <h1>Preview Mode</h1> : <h1>Not in Preview Mode</h1>}
        <nav>
          <ul>
            {layoutData.menuLinkCollection?.items.map((item) => (
              <li key={item?.sys.id}>
                <Link link={item} />
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
