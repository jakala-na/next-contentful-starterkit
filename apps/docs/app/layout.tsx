import './global.css';

import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: {
    template: '%s | Next.js Contentful Starter',
    default: 'Next.js Contentful Starter',
  },
  description: 'Jumpstart your Next.js Contentful project with Next.js App Router, TypeScript and GraphQL.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
