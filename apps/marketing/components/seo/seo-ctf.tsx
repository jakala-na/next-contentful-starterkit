import { type FragmentOf, graphql, readFragment } from 'gql.tada';

import { AssetFieldsFragment } from '../asset-ctf';
import { getImageProps } from '../image-ctf/image-ctf';
import { type Metadata } from 'next';

export const ComponentSEOFieldsFragment = graphql(
  `
    fragment SEOFields on Seo {
      __typename
      sys {
        id
      }
      title
      description
      noIndex
      noFollow
      image {
        ...AssetFields
      }
    }
  `,
  [AssetFieldsFragment]
);

export const getSeoMetadata = (data: FragmentOf<typeof ComponentSEOFieldsFragment> | null | undefined): Metadata => {
  const seoFields = readFragment(ComponentSEOFieldsFragment, data);
  return {
    ...(seoFields?.title && { title: seoFields.title }),
    ...(seoFields?.description && { description: seoFields.description }),
    ...(seoFields?.image && {
      openGraph: {
        images: getImageProps({ data: seoFields.image })?.src,
      },
    }),
    ...((Boolean(seoFields?.noFollow) || Boolean(seoFields?.noIndex)) && {
      robots: {
        ...(seoFields?.noFollow && { follow: !seoFields.noFollow }),
        ...(seoFields?.noIndex && { index: !seoFields.noIndex }),
      },
    }),
    twitter: {
      card: 'summary_large_image',
    },
  };
};
