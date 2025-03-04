'use client';

import { Button } from '@repo/ui/components/button';
import { Link } from '@repo/ui/components/link';
import { useCurrentLocale } from '#/locales/client';
import { getLocaleFromPath } from '#/locales/get-locale-from-path';
import { fallbackLocale } from '#/locales/fallback-locale';

import type { TaxonomyConceptAddFieldsProps } from './taxonomy-concept';

export function TaxonomyConceptClient({ data }: { data: TaxonomyConceptAddFieldsProps }) {
  const currentLocalePath = useCurrentLocale();
  const locale = getLocaleFromPath(currentLocalePath);
  const label = data.prefLabel[locale] ?? data.prefLabel[fallbackLocale];
  const slug = data.slug[locale] ?? data.slug[fallbackLocale];
  return label && slug ? (
    <Button variant="outline" size="sm" asChild>
      <Link href={`/${currentLocalePath}/tag/${slug}`}>{label}</Link>
    </Button>
  ) : null;
}
