import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import icon from '@/app/icon.png';

const logo = (
  <Image
    alt="Next.js Contentful Starter"
    src={icon}
    sizes="100px"
    className="size-5"
    aria-label="Next.js Contentful Starter"
  />
);

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        {logo}
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">Next.js Contentful Starter</span>
      </>
    ),
  },
  githubUrl: 'https://github.com/jakala-na/next-contentful-starterkit',
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
