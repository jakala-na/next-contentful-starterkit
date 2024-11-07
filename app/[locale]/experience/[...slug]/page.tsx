import { createClient } from 'contentful';
import { detachExperienceStyles, fetchBySlug } from '@contentful/experiences-sdk-react';
import Experience from '#/components/Experience';
import 'lib/studio-config';
import { getLocaleFromPath } from '#/locales/get-locale-from-path';

type PageProps = {
  params: { slug: string[]; locale: string };
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE!,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_DELIVERY_API!,
});

export default async function ExperiencePage({ params }: PageProps) {
  const { locale } = params;
  const localeCode = getLocaleFromPath(locale);
  const experience = await fetchBySlug({
    client,
    experienceTypeId: process.env.CONTENTFUL_EXPERIENCE_ID!,
    slug: params.slug[0],
    localeCode: localeCode,
  });

  const stylesheet = experience ? detachExperienceStyles(experience) : null;
  const experienceJSON = experience ? JSON.stringify(experience) : null;

  return (
    <div style={{ width: '100%' }}>
      {stylesheet && <style>{stylesheet}</style>}
      <Experience experienceJSON={experienceJSON} locale={localeCode} />
    </div>
  );
}
