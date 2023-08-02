/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query PageQuery($slug: String, $locale: String, $preview: Boolean) {\n      pageCollection(\n        locale: $locale\n        preview: $preview\n        limit: 1\n        where: { slug: $slug }\n      ) {\n        items {\n          topSectionCollection(limit: 10) {\n            items {\n              ...ComponentHeroBannerFields\n              ...ComponentDuplexFields\n            }\n          }\n        }\n      }\n    }\n  ": types.PageQueryDocument,
    "\n    query Layout($locale: String, $preview: Boolean) {\n      navigationMenuCollection(locale: $locale, preview: $preview, limit: 1) {\n        ...NavigationFields\n      }\n    }\n  ": types.LayoutDocument,
    "\n  fragment ComponentDuplexFields on ComponentDuplex {\n    __typename\n    sys {\n      id\n    }\n    headline\n    bodyText {\n      json\n    }\n    ctaText\n    targetPage {\n      ...PageLinkFields\n    }\n    image {\n      url\n    }\n    imageStyle\n    colorPalette\n  }\n": types.ComponentDuplexFieldsFragmentDoc,
    "\n  fragment ComponentHeroBannerFields on ComponentHeroBanner {\n    __typename\n    sys {\n      id\n    }\n    headline\n    bodyText {\n      json\n    }\n    ctaText\n    targetPage {\n      ...PageLinkFields\n    }\n    image {\n      url\n    }\n    imageStyle\n    heroSize\n    colorPalette\n  }\n": types.ComponentHeroBannerFieldsFragmentDoc,
    "\n  fragment MenuGroupFields on MenuGroupFeaturedPagesCollection {\n    items {\n      ...PageLinkFields\n    }\n  }\n": types.MenuGroupFieldsFragmentDoc,
    "\n  fragment NavigationFields on NavigationMenuCollection {\n    items {\n      menuItemsCollection {\n        items {\n          __typename\n          sys {\n            id\n          }\n          groupName\n          link: groupLink {\n            ...PageLinkFields\n          }\n          children: featuredPagesCollection {\n            ...MenuGroupFields\n          }\n        }\n      }\n    }\n  }\n": types.NavigationFieldsFragmentDoc,
    "\n  fragment PageLinkFields on Page {\n    __typename\n    slug\n    sys {\n      id\n    }\n    pageName\n    pageContent(locale: $locale, preview: $preview) {\n      ... on Entry {\n        __typename\n        sys {\n          id\n        }\n      }\n    }\n  }\n": types.PageLinkFieldsFragmentDoc,
    "\n    query PageSlugQuery($slug: String, $locale: String, $preview: Boolean) {\n      pageCollection(\n        locale: $locale\n        preview: $preview\n        limit: 1\n        where: { slug: $slug }\n      ) {\n        items {\n          slug\n        }\n      }\n    }\n  ": types.PageSlugQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PageQuery($slug: String, $locale: String, $preview: Boolean) {\n      pageCollection(\n        locale: $locale\n        preview: $preview\n        limit: 1\n        where: { slug: $slug }\n      ) {\n        items {\n          topSectionCollection(limit: 10) {\n            items {\n              ...ComponentHeroBannerFields\n              ...ComponentDuplexFields\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query PageQuery($slug: String, $locale: String, $preview: Boolean) {\n      pageCollection(\n        locale: $locale\n        preview: $preview\n        limit: 1\n        where: { slug: $slug }\n      ) {\n        items {\n          topSectionCollection(limit: 10) {\n            items {\n              ...ComponentHeroBannerFields\n              ...ComponentDuplexFields\n            }\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Layout($locale: String, $preview: Boolean) {\n      navigationMenuCollection(locale: $locale, preview: $preview, limit: 1) {\n        ...NavigationFields\n      }\n    }\n  "): (typeof documents)["\n    query Layout($locale: String, $preview: Boolean) {\n      navigationMenuCollection(locale: $locale, preview: $preview, limit: 1) {\n        ...NavigationFields\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentDuplexFields on ComponentDuplex {\n    __typename\n    sys {\n      id\n    }\n    headline\n    bodyText {\n      json\n    }\n    ctaText\n    targetPage {\n      ...PageLinkFields\n    }\n    image {\n      url\n    }\n    imageStyle\n    colorPalette\n  }\n"): (typeof documents)["\n  fragment ComponentDuplexFields on ComponentDuplex {\n    __typename\n    sys {\n      id\n    }\n    headline\n    bodyText {\n      json\n    }\n    ctaText\n    targetPage {\n      ...PageLinkFields\n    }\n    image {\n      url\n    }\n    imageStyle\n    colorPalette\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentHeroBannerFields on ComponentHeroBanner {\n    __typename\n    sys {\n      id\n    }\n    headline\n    bodyText {\n      json\n    }\n    ctaText\n    targetPage {\n      ...PageLinkFields\n    }\n    image {\n      url\n    }\n    imageStyle\n    heroSize\n    colorPalette\n  }\n"): (typeof documents)["\n  fragment ComponentHeroBannerFields on ComponentHeroBanner {\n    __typename\n    sys {\n      id\n    }\n    headline\n    bodyText {\n      json\n    }\n    ctaText\n    targetPage {\n      ...PageLinkFields\n    }\n    image {\n      url\n    }\n    imageStyle\n    heroSize\n    colorPalette\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MenuGroupFields on MenuGroupFeaturedPagesCollection {\n    items {\n      ...PageLinkFields\n    }\n  }\n"): (typeof documents)["\n  fragment MenuGroupFields on MenuGroupFeaturedPagesCollection {\n    items {\n      ...PageLinkFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment NavigationFields on NavigationMenuCollection {\n    items {\n      menuItemsCollection {\n        items {\n          __typename\n          sys {\n            id\n          }\n          groupName\n          link: groupLink {\n            ...PageLinkFields\n          }\n          children: featuredPagesCollection {\n            ...MenuGroupFields\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment NavigationFields on NavigationMenuCollection {\n    items {\n      menuItemsCollection {\n        items {\n          __typename\n          sys {\n            id\n          }\n          groupName\n          link: groupLink {\n            ...PageLinkFields\n          }\n          children: featuredPagesCollection {\n            ...MenuGroupFields\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PageLinkFields on Page {\n    __typename\n    slug\n    sys {\n      id\n    }\n    pageName\n    pageContent(locale: $locale, preview: $preview) {\n      ... on Entry {\n        __typename\n        sys {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PageLinkFields on Page {\n    __typename\n    slug\n    sys {\n      id\n    }\n    pageName\n    pageContent(locale: $locale, preview: $preview) {\n      ... on Entry {\n        __typename\n        sys {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PageSlugQuery($slug: String, $locale: String, $preview: Boolean) {\n      pageCollection(\n        locale: $locale\n        preview: $preview\n        limit: 1\n        where: { slug: $slug }\n      ) {\n        items {\n          slug\n        }\n      }\n    }\n  "): (typeof documents)["\n    query PageSlugQuery($slug: String, $locale: String, $preview: Boolean) {\n      pageCollection(\n        locale: $locale\n        preview: $preview\n        limit: 1\n        where: { slug: $slug }\n      ) {\n        items {\n          slug\n        }\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;