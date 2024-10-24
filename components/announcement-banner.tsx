'use client';

import { useState } from 'react';
import Link from 'next/link';

import { X } from 'lucide-react';

export function AnnouncementBannerComponent() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-primary px-4 py-3 text-center text-primary-foreground">
      <p className="text-sm font-medium">
        This site is a demo of NextJS Contentful Starterkit. You can find it on{' '}
        <Link
          href="https://github.com/jakala-na/next-contentful-starterkit"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors hover:text-primary-foreground/90"
        >
          GitHub
        </Link>{' '}
        as a template
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors hover:bg-primary-foreground/10"
        aria-label="Close announcement"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
