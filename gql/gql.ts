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
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query EntryBySlug($slug: String!) {\n    pageCollection(limit: 1, where: { slug: $slug }, preview: false) {\n      items {\n        __typename\n        ...PageItem\n      }\n    }\n    productCollection(limit: 1, where: { slug: $slug }, preview: false) {\n      items {\n        __typename\n        ...ProductItem\n      }\n    }\n  }\n": types.EntryBySlugDocument,
    "\n  query AllSlugs {\n    pageCollection(limit: 1000, preview: false) {\n      items {\n        slug\n      }\n    }\n    productCollection(limit: 1000, preview: false) {\n      items {\n        slug\n      }\n    }\n  }\n": types.AllSlugsDocument,
    "\n    query MenuLinks {\n      menuLinkCollection(limit: 100) {\n        items {\n          ...LinkItem\n        }\n      }\n    }\n  ": types.MenuLinksDocument,
    "\n  fragment AssetItem on Asset {\n    sys {\n      ...SysItem\n    }\n    title\n    description\n    contentType\n    fileName\n    size\n    url\n    width\n    height\n  }\n": types.AssetItemFragmentDoc,
    "\n  fragment ComponentArticleCardItem on ComponentArticleCard {\n    sys {\n      ...SysItem\n    }\n    eyebrow\n    title\n    subtext {\n      json\n    }\n    buttonLabel\n    buttonExternalUrl\n    image {\n      ...AssetItem\n    }\n  }\n": types.ComponentArticleCardItemFragmentDoc,
    "\n  fragment ComponentImageAndTextItem on ComponentImageAndText {\n    sys {\n      ...SysItem\n    }\n    title\n    subtext {\n      json\n    }\n    buttonLabel\n    buttonExternalUrl\n    image {\n      ...AssetItem\n    }\n  }\n": types.ComponentImageAndTextItemFragmentDoc,
    "\n  fragment ComponentMarqueeBannerItem on ComponentMarqueeBanner {\n    sys {\n      ...SysItem\n    }\n    title\n    subtextString: subtext\n    backgroundImage {\n      ...AssetItem\n    }\n  }\n": types.ComponentMarqueeBannerItemFragmentDoc,
    "\n  fragment ComponentTextCtaItem on ComponentTextCta {\n    sys {\n      ...SysItem\n    }\n    title\n    subtext {\n      json\n    }\n    buttonLabel\n    buttonExternalUrl\n    link\n  }\n": types.ComponentTextCtaItemFragmentDoc,
    "\n  fragment ComponentTextSectionItem on ComponentTextSection {\n    sys {\n      ...SysItem\n    }\n    body {\n      json\n    }\n  }\n": types.ComponentTextSectionItemFragmentDoc,
    "\n  fragment ComponentThreeCardCollectionItem on ComponentThreeCardCollection {\n    sys {\n      ...SysItem\n    }\n    title\n    subtext {\n      json\n    }\n    buttonLabel\n    buttonExternalUrl\n    cardsCollection(limit: 3, preview: false) {\n      items {\n        ...ComponentArticleCardItem\n      }\n    }\n  }\n": types.ComponentThreeCardCollectionItemFragmentDoc,
    "\n  fragment LinkItem on MenuLink {\n    sys {\n      id\n      ...SysItem\n    }\n    linkUrl\n    linkText\n    linkReference {\n      ... on Page {\n        title\n        slug\n      }\n      ... on Product {\n        title\n        slug\n      }\n    }\n  }\n": types.LinkItemFragmentDoc,
    "\n  fragment PageItem on Page {\n    sys {\n      ...SysItem\n    }\n    slug\n    title\n    content {\n      ... on PageLanding {\n        ...PageLandingItem\n      }\n    }\n  }\n": types.PageItemFragmentDoc,
    "\n  fragment PageLandingItem on PageLanding {\n    sys {\n      ...SysItem\n    }\n    name\n    sectionsCollection(preview: false) {\n      items {\n        __typename\n        ... on ComponentTextCta {\n          ...ComponentTextCtaItem\n        }\n        ... on ComponentTextSection {\n          ...ComponentTextSectionItem\n        }\n        ... on ComponentImageAndText {\n          ...ComponentImageAndTextItem\n        }\n        ... on ComponentMarqueeBanner {\n          ...ComponentMarqueeBannerItem\n        }\n        ... on ComponentThreeCardCollection {\n          ...ComponentThreeCardCollectionItem\n        }\n      }\n    }\n  }\n": types.PageLandingItemFragmentDoc,
    "\n  fragment ProductItem on Product {\n    sys {\n      ...SysItem\n    }\n    slug\n    title\n    price\n    image {\n      ...AssetItem\n    }\n  }\n": types.ProductItemFragmentDoc,
    "\n  fragment SysItem on Sys {\n    id\n    spaceId\n    environmentId\n    publishedAt\n    firstPublishedAt\n    publishedVersion\n  }\n": types.SysItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query EntryBySlug($slug: String!) {\n    pageCollection(limit: 1, where: { slug: $slug }, preview: false) {\n      items {\n        __typename\n        ...PageItem\n      }\n    }\n    productCollection(limit: 1, where: { slug: $slug }, preview: false) {\n      items {\n        __typename\n        ...ProductItem\n      }\n    }\n  }\n"): (typeof documents)["\n  query EntryBySlug($slug: String!) {\n    pageCollection(limit: 1, where: { slug: $slug }, preview: false) {\n      items {\n        __typename\n        ...PageItem\n      }\n    }\n    productCollection(limit: 1, where: { slug: $slug }, preview: false) {\n      items {\n        __typename\n        ...ProductItem\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllSlugs {\n    pageCollection(limit: 1000, preview: false) {\n      items {\n        slug\n      }\n    }\n    productCollection(limit: 1000, preview: false) {\n      items {\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllSlugs {\n    pageCollection(limit: 1000, preview: false) {\n      items {\n        slug\n      }\n    }\n    productCollection(limit: 1000, preview: false) {\n      items {\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query MenuLinks {\n      menuLinkCollection(limit: 100) {\n        items {\n          ...LinkItem\n        }\n      }\n    }\n  "): (typeof documents)["\n    query MenuLinks {\n      menuLinkCollection(limit: 100) {\n        items {\n          ...LinkItem\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AssetItem on Asset {\n    sys {\n      ...SysItem\n    }\n    title\n    description\n    contentType\n    fileName\n    size\n    url\n    width\n    height\n  }\n"): (typeof documents)["\n  fragment AssetItem on Asset {\n    sys {\n      ...SysItem\n    }\n    title\n    description\n    contentType\n    fileName\n    size\n    url\n    width\n    height\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentArticleCardItem on ComponentArticleCard {\n    sys {\n      ...SysItem\n    }\n    eyebrow\n    title\n    subtext {\n      json\n    }\n    buttonLabel\n    buttonExternalUrl\n    image {\n      ...AssetItem\n    }\n  }\n"): (typeof documents)["\n  fragment ComponentArticleCardItem on ComponentArticleCard {\n    sys {\n      ...SysItem\n    }\n    eyebrow\n    title\n    subtext {\n      json\n    }\n    buttonLabel\n    buttonExternalUrl\n    image {\n      ...AssetItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentImageAndTextItem on ComponentImageAndText {\n    sys {\n      ...SysItem\n    }\n    title\n    subtext {\n      json\n    }\n    buttonLabel\n    buttonExternalUrl\n    image {\n      ...AssetItem\n    }\n  }\n"): (typeof documents)["\n  fragment ComponentImageAndTextItem on ComponentImageAndText {\n    sys {\n      ...SysItem\n    }\n    title\n    subtext {\n      json\n    }\n    buttonLabel\n    buttonExternalUrl\n    image {\n      ...AssetItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentMarqueeBannerItem on ComponentMarqueeBanner {\n    sys {\n      ...SysItem\n    }\n    title\n    subtextString: subtext\n    backgroundImage {\n      ...AssetItem\n    }\n  }\n"): (typeof documents)["\n  fragment ComponentMarqueeBannerItem on ComponentMarqueeBanner {\n    sys {\n      ...SysItem\n    }\n    title\n    subtextString: subtext\n    backgroundImage {\n      ...AssetItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentTextCtaItem on ComponentTextCta {\n    sys {\n      ...SysItem\n    }\n    title\n    subtext {\n      json\n    }\n    buttonLabel\n    buttonExternalUrl\n    link\n  }\n"): (typeof documents)["\n  fragment ComponentTextCtaItem on ComponentTextCta {\n    sys {\n      ...SysItem\n    }\n    title\n    subtext {\n      json\n    }\n    buttonLabel\n    buttonExternalUrl\n    link\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentTextSectionItem on ComponentTextSection {\n    sys {\n      ...SysItem\n    }\n    body {\n      json\n    }\n  }\n"): (typeof documents)["\n  fragment ComponentTextSectionItem on ComponentTextSection {\n    sys {\n      ...SysItem\n    }\n    body {\n      json\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentThreeCardCollectionItem on ComponentThreeCardCollection {\n    sys {\n      ...SysItem\n    }\n    title\n    subtext {\n      json\n    }\n    buttonLabel\n    buttonExternalUrl\n    cardsCollection(limit: 3, preview: false) {\n      items {\n        ...ComponentArticleCardItem\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ComponentThreeCardCollectionItem on ComponentThreeCardCollection {\n    sys {\n      ...SysItem\n    }\n    title\n    subtext {\n      json\n    }\n    buttonLabel\n    buttonExternalUrl\n    cardsCollection(limit: 3, preview: false) {\n      items {\n        ...ComponentArticleCardItem\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LinkItem on MenuLink {\n    sys {\n      id\n      ...SysItem\n    }\n    linkUrl\n    linkText\n    linkReference {\n      ... on Page {\n        title\n        slug\n      }\n      ... on Product {\n        title\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment LinkItem on MenuLink {\n    sys {\n      id\n      ...SysItem\n    }\n    linkUrl\n    linkText\n    linkReference {\n      ... on Page {\n        title\n        slug\n      }\n      ... on Product {\n        title\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PageItem on Page {\n    sys {\n      ...SysItem\n    }\n    slug\n    title\n    content {\n      ... on PageLanding {\n        ...PageLandingItem\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PageItem on Page {\n    sys {\n      ...SysItem\n    }\n    slug\n    title\n    content {\n      ... on PageLanding {\n        ...PageLandingItem\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PageLandingItem on PageLanding {\n    sys {\n      ...SysItem\n    }\n    name\n    sectionsCollection(preview: false) {\n      items {\n        __typename\n        ... on ComponentTextCta {\n          ...ComponentTextCtaItem\n        }\n        ... on ComponentTextSection {\n          ...ComponentTextSectionItem\n        }\n        ... on ComponentImageAndText {\n          ...ComponentImageAndTextItem\n        }\n        ... on ComponentMarqueeBanner {\n          ...ComponentMarqueeBannerItem\n        }\n        ... on ComponentThreeCardCollection {\n          ...ComponentThreeCardCollectionItem\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PageLandingItem on PageLanding {\n    sys {\n      ...SysItem\n    }\n    name\n    sectionsCollection(preview: false) {\n      items {\n        __typename\n        ... on ComponentTextCta {\n          ...ComponentTextCtaItem\n        }\n        ... on ComponentTextSection {\n          ...ComponentTextSectionItem\n        }\n        ... on ComponentImageAndText {\n          ...ComponentImageAndTextItem\n        }\n        ... on ComponentMarqueeBanner {\n          ...ComponentMarqueeBannerItem\n        }\n        ... on ComponentThreeCardCollection {\n          ...ComponentThreeCardCollectionItem\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProductItem on Product {\n    sys {\n      ...SysItem\n    }\n    slug\n    title\n    price\n    image {\n      ...AssetItem\n    }\n  }\n"): (typeof documents)["\n  fragment ProductItem on Product {\n    sys {\n      ...SysItem\n    }\n    slug\n    title\n    price\n    image {\n      ...AssetItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SysItem on Sys {\n    id\n    spaceId\n    environmentId\n    publishedAt\n    firstPublishedAt\n    publishedVersion\n  }\n"): (typeof documents)["\n  fragment SysItem on Sys {\n    id\n    spaceId\n    environmentId\n    publishedAt\n    firstPublishedAt\n    publishedVersion\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;