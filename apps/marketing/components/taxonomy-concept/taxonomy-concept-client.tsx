'use client';

import { Button } from '@repo/ui/components/button';
import { Link } from '@repo/ui/components/link';
import { useCurrentLocale } from '#/locales/client';
import { getLocaleFromPath } from '#/locales/get-locale-from-path';

import type { TaxonomyConceptAddFieldsProps } from './taxonomy-concept';

export function TaxonomyConceptClient({ data }: { data: TaxonomyConceptAddFieldsProps }) {
  const locale = getLocaleFromPath(useCurrentLocale());
  const fallbackLocale = 'en-US';
  const label = data.prefLabel[locale] ?? data.prefLabel[fallbackLocale];
  return (
    <Button variant="outline" size="sm" asChild>
      <Link href="#">{label}</Link>
    </Button>
  );
}
