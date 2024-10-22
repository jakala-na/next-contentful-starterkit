/* eslint-disable */
/* prettier-ignore */
import type { TadaDocumentNode, $tada } from 'gql.tada';

declare module 'gql.tada' {
  interface setupCache {
    '\n      query Layout($locale: String, $preview: Boolean) {\n        navigationMenuCollection(locale: $locale, preview: $preview, limit: 1) {\n          ...NavigationFields\n        }\n      }\n    ': TadaDocumentNode<
      { navigationMenuCollection: { [$tada.fragmentRefs]: { NavigationFields: 'NavigationMenuCollection' } } | null },
      { preview?: boolean | null | undefined; locale?: string | null | undefined },
      void
    >;
    '\n    query PageSlugQuery($slug: String, $locale: String, $preview: Boolean) {\n      pageCollection(locale: $locale, preview: $preview, limit: 1, where: { slug: $slug }) {\n        items {\n          slug\n        }\n      }\n    }\n  ': TadaDocumentNode<
      { pageCollection: { items: ({ slug: string | null } | null)[] } | null },
      { preview?: boolean | null | undefined; locale?: string | null | undefined; slug?: string | null | undefined },
      void
    >;
    '\n      query PageQuery($slug: String, $locale: String, $preview: Boolean) @contentSourceMaps {\n        pageCollection(locale: $locale, preview: $preview, limit: 1, where: { slug: $slug }) {\n          items {\n            topSectionCollection(limit: 10) {\n              items {\n                ...ComponentHeroBannerFields\n                ...ComponentDuplexFields\n              }\n            }\n            pageContent {\n              ...ComponentTopicBusinessInfo\n            }\n          }\n        }\n      }\n    ': TadaDocumentNode<
      {
        pageCollection: {
          items: ({
            pageContent:
              | { __typename?: 'ComponentDuplex' | undefined }
              | { __typename?: 'ComponentProductTable' | undefined }
              | {
                  [$tada.fragmentRefs]: { ComponentTopicBusinessInfo: 'TopicBusinessInfo' };
                  __typename?: 'TopicBusinessInfo' | undefined;
                }
              | { __typename?: 'TopicProduct' | undefined }
              | null;
            topSectionCollection: {
              items: (
                | { __typename?: 'Accordion' | undefined }
                | { __typename?: 'ComponentCta' | undefined }
                | {
                    [$tada.fragmentRefs]: { ComponentDuplexFields: 'ComponentDuplex' };
                    __typename?: 'ComponentDuplex' | undefined;
                  }
                | { __typename?: 'ComponentForm' | undefined }
                | {
                    [$tada.fragmentRefs]: { ComponentHeroBannerFields: 'ComponentHeroBanner' };
                    __typename?: 'ComponentHeroBanner' | undefined;
                  }
                | { __typename?: 'ComponentInfoBlock' | undefined }
                | { __typename?: 'ComponentQuote' | undefined }
                | { __typename?: 'ComponentTextBlock' | undefined }
                | null
              )[];
            } | null;
          } | null)[];
        } | null;
      },
      { preview?: boolean | null | undefined; locale?: string | null | undefined; slug?: string | null | undefined },
      void
    >;
    "\n    query PageSlugs($locale: String) {\n      # Fetch 50 pages. Ideally we would fetch a good sample of most popular pages for pre-rendering,\n      # but for the sake of this example we'll just fetch the first 50.\n      pageCollection(locale: $locale, limit: 50) {\n        items {\n          slug\n        }\n      }\n    }\n  ": TadaDocumentNode<
      { pageCollection: { items: ({ slug: string | null } | null)[] } | null },
      { locale?: string | null | undefined },
      void
    >;
    '\n  fragment AssetFields on Asset {\n    __typename\n    sys {\n      id\n    }\n    contentType\n    title\n    url\n    width\n    height\n    description\n  }\n': TadaDocumentNode<
      {
        description: string | null;
        height: number | null;
        width: number | null;
        url: string | null;
        title: string | null;
        contentType: string | null;
        sys: { id: string };
        __typename: 'Asset';
      },
      {},
      { fragment: 'AssetFields'; on: 'Asset'; masked: true }
    >;
    '\n    fragment ComponentDuplexFields on ComponentDuplex {\n      __typename\n      sys {\n        id\n      }\n      headline\n      bodyText {\n        json\n      }\n      ctaText\n      targetPage {\n        ...PageLinkFields\n      }\n      image {\n        ...AssetFields\n      }\n      imageStyle\n      colorPalette\n      containerLayout\n    }\n  ': TadaDocumentNode<
      {
        containerLayout: boolean | null;
        colorPalette: string | null;
        imageStyle: boolean | null;
        image: { [$tada.fragmentRefs]: { AssetFields: 'Asset' } } | null;
        targetPage: { [$tada.fragmentRefs]: { PageLinkFields: 'Page' }; __typename?: 'Page' | undefined } | null;
        ctaText: string | null;
        bodyText: { json: unknown } | null;
        headline: string | null;
        sys: { id: string };
        __typename: 'ComponentDuplex';
      },
      {},
      { fragment: 'ComponentDuplexFields'; on: 'ComponentDuplex'; masked: true }
    >;
    '\n    fragment ComponentHeroBannerFields on ComponentHeroBanner {\n      __typename\n      sys {\n        id\n      }\n      headline\n      bodyText {\n        json\n        links {\n          assets {\n            block {\n              ...AssetFields\n            }\n          }\n        }\n      }\n      ctaText\n      targetPage {\n        ...PageLinkFields\n      }\n      image {\n        ...AssetFields\n      }\n      imageStyle\n      heroSize\n      colorPalette\n    }\n  ': TadaDocumentNode<
      {
        colorPalette: string | null;
        heroSize: boolean | null;
        imageStyle: boolean | null;
        image: { [$tada.fragmentRefs]: { AssetFields: 'Asset' } } | null;
        targetPage: { [$tada.fragmentRefs]: { PageLinkFields: 'Page' }; __typename?: 'Page' | undefined } | null;
        ctaText: string | null;
        bodyText: {
          links: { assets: { block: ({ [$tada.fragmentRefs]: { AssetFields: 'Asset' } } | null)[] } };
          json: unknown;
        } | null;
        headline: string | null;
        sys: { id: string };
        __typename: 'ComponentHeroBanner';
      },
      {},
      { fragment: 'ComponentHeroBannerFields'; on: 'ComponentHeroBanner'; masked: true }
    >;
    '\n    fragment MenuGroupFields on MenuGroupFeaturedPagesCollection {\n      items {\n        ...PageLinkFields\n      }\n    }\n  ': TadaDocumentNode<
      { items: ({ [$tada.fragmentRefs]: { PageLinkFields: 'Page' }; __typename?: 'Page' | undefined } | null)[] },
      {},
      { fragment: 'MenuGroupFields'; on: 'MenuGroupFeaturedPagesCollection'; masked: true }
    >;
    '\n    fragment NavigationFields on NavigationMenuCollection {\n      items {\n        menuItemsCollection {\n          items {\n            __typename\n            sys {\n              id\n            }\n            groupName\n            link: groupLink {\n              ...PageLinkFields\n            }\n            children: featuredPagesCollection {\n              ...MenuGroupFields\n            }\n          }\n        }\n      }\n    }\n  ': TadaDocumentNode<
      {
        items: ({
          menuItemsCollection: {
            items: ({
              children: { [$tada.fragmentRefs]: { MenuGroupFields: 'MenuGroupFeaturedPagesCollection' } } | null;
              link: { [$tada.fragmentRefs]: { PageLinkFields: 'Page' }; __typename?: 'Page' | undefined } | null;
              groupName: string | null;
              sys: { id: string };
              __typename: 'MenuGroup';
            } | null)[];
          } | null;
        } | null)[];
      },
      {},
      { fragment: 'NavigationFields'; on: 'NavigationMenuCollection'; masked: true }
    >;
    '\n  fragment PageLinkFields on Page {\n    __typename\n    slug\n    sys {\n      id\n    }\n    pageName\n    pageContent(locale: $locale, preview: $preview) {\n      ... on Entry {\n        __typename\n        sys {\n          id\n        }\n      }\n    }\n  }\n': TadaDocumentNode<
      {
        pageContent:
          | { sys: { id: string }; __typename: 'ComponentDuplex' }
          | { sys: { id: string }; __typename: 'ComponentProductTable' }
          | { sys: { id: string }; __typename: 'TopicBusinessInfo' }
          | { sys: { id: string }; __typename: 'TopicProduct' }
          | null;
        pageName: string | null;
        sys: { id: string };
        slug: string | null;
        __typename: 'Page';
      },
      {},
      { fragment: 'PageLinkFields'; on: 'Page'; masked: true }
    >;
    '\n    fragment ComponentTopicBusinessInfo on TopicBusinessInfo {\n      __typename\n      sys {\n        id\n      }\n      name\n      shortDescription\n      body {\n        json\n        links {\n          entries {\n            block {\n              ...ComponentTopicPerson\n            }\n          }\n        }\n      }\n      featuredImage {\n        ...AssetFields\n      }\n    }\n  ': TadaDocumentNode<
      {
        featuredImage: { [$tada.fragmentRefs]: { AssetFields: 'Asset' } } | null;
        body: {
          links: {
            entries: {
              block: (
                | { __typename?: 'ComponentDuplex' | undefined }
                | { __typename?: 'ComponentProductTable' | undefined }
                | { __typename?: 'TopicProduct' | undefined }
                | { __typename?: 'Accordion' | undefined }
                | { __typename?: 'ComponentCta' | undefined }
                | { __typename?: 'ComponentForm' | undefined }
                | { __typename?: 'ComponentInfoBlock' | undefined }
                | { __typename?: 'ComponentQuote' | undefined }
                | { __typename?: 'ComponentTextBlock' | undefined }
                | { __typename?: 'Page' | undefined }
                | { __typename?: 'MenuGroup' | undefined }
                | { __typename?: 'NavigationMenu' | undefined }
                | { __typename?: 'AccordionItem' | undefined }
                | { __typename?: 'ComponentHeroBanner' | undefined }
                | { __typename?: 'EditorTest' | undefined }
                | { __typename?: 'FooterMenu' | undefined }
                | { __typename?: 'NtAudience' | undefined }
                | { __typename?: 'NtExperience' | undefined }
                | { __typename?: 'Seo' | undefined }
                | { __typename?: 'TopicBusinessInfo' | undefined }
                | {
                    [$tada.fragmentRefs]: { ComponentTopicPerson: 'TopicPerson' };
                    __typename?: 'TopicPerson' | undefined;
                  }
                | { __typename?: 'TopicProductFeature' | undefined }
                | null
              )[];
            };
          };
          json: unknown;
        } | null;
        shortDescription: string | null;
        name: string | null;
        sys: { id: string };
        __typename: 'TopicBusinessInfo';
      },
      {},
      { fragment: 'ComponentTopicBusinessInfo'; on: 'TopicBusinessInfo'; masked: true }
    >;
    '\n    fragment ComponentTopicPerson on TopicPerson {\n      __typename\n      sys {\n        id\n      }\n      name\n      website\n      location\n      cardStyle\n      bio {\n        json\n      }\n      avatar {\n        ...AssetFields\n      }\n    }\n  ': TadaDocumentNode<
      {
        avatar: { [$tada.fragmentRefs]: { AssetFields: 'Asset' } } | null;
        bio: { json: unknown } | null;
        cardStyle: boolean | null;
        location: string | null;
        website: string | null;
        name: string | null;
        sys: { id: string };
        __typename: 'TopicPerson';
      },
      {},
      { fragment: 'ComponentTopicPerson'; on: 'TopicPerson'; masked: true }
    >;
  }
}
