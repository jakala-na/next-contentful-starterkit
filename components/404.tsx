'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Button } from '#/components/ui/button';
import { I18nProviderClient, useScopedI18n } from '#/locales/client';

// THis is purely a demonstration of the pattern, how a client component can use the provider to get translated strings.
// In real-world application we will probably have a helper like `withi18n` and pass any client component to it.
export function PageNotFound() {
  const params = useParams();
  return (
    <I18nProviderClient locale={(params?.locale as string | undefined) || 'en'}>
      <PageNotFoundInternal />
    </I18nProviderClient>
  );
}

export function PageNotFoundInternal() {
  const t = useScopedI18n('notFound');
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      {/* Background blur effect */}
      <div
        className="absolute inset-0 bg-[url(/404.webp)]
        bg-cover bg-center"
        style={{ filter: 'blur(8px)', transform: 'scale(1.1)' }}
      />

      {/* Content overlay */}
      <div className="relative w-full max-w-2xl space-y-8 text-center">
        {/* Text overlay with gradient background */}
        <div className="space-y-4 rounded-lg bg-black/70 p-8 backdrop-blur-sm">
          <h1 className="font-serif text-7xl font-bold text-white">404</h1>
          <h2 className="font-serif text-3xl font-bold text-white">{t('heading')}</h2>
          <p className="text-xl text-white">{t('text')}</p>
          <Button asChild>
            <Link href="/">{t('button')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
