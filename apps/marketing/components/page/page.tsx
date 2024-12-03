import { default as NextLink } from 'next/link';

import { type FragmentOf, graphql, readFragment } from 'gql.tada';
import { type ReactNode } from 'react';

export const PageLinkFieldsFragment = graphql(`
  fragment PageLinkFields on Page {
    __typename
    slug
    sys {
      id
    }
    pageName
    pageContent(locale: $locale, preview: $preview) {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
    }
  }
`);

export const getPageLinkProps = (fragmentData: FragmentOf<typeof PageLinkFieldsFragment>, children?: ReactNode) => {
  const data = readFragment(PageLinkFieldsFragment, fragmentData);

  const href = data.slug ? `/${data.slug}` : '';

  return {
    id: data.sys.id,
    href,
    as: href,
    children: children ?? data.pageName ?? '',
  };
};

export const getPageLinkChildProps = (
  fragmentData: FragmentOf<typeof PageLinkFieldsFragment>,
  children?: ReactNode
) => {
  const linkProps = getPageLinkProps(fragmentData, children);

  return {
    ...linkProps,
    children: <NextLink {...linkProps} />,
    asChild: true,
  };
};
