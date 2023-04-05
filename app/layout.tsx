import { graphqlClient } from '../lib/graphqlClient';
import { previewData } from 'next/headers';
import './globals.css';
import styles from './page.module.css';
import { graphql } from '../gql';
import { Link } from '#/ui/link';
import { LinkItemFragment } from '#/gql/graphql';
import Image from 'next/image';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const data = previewData();
  const isPreviewMode = !!data && data.key === process.env.PREVIEW_SECRET;

  const layoutQuery = graphql(/* GraphQL */ `
    query MenuLinks {
      menuLinkCollection(limit: 100) {
        items {
          ...LinkItem
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
            {layoutData.menuLinkCollection?.items.map(
              (item) =>
                item && (
                  <li key={(item as LinkItemFragment)?.sys.id}>
                    <Link link={item} />
                  </li>
                )
            )}
          </ul>
        </nav>
        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
        </div>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </body>
    </html>
  );
}
