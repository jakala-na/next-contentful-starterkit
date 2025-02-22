/* eslint-disable */
/* prettier-ignore */
import type { TadaDocumentNode, $tada } from 'gql.tada';

declare module 'gql.tada' {
 interface setupCache {
    "\n  fragment MenuItem on MenuItem {\n    title\n    url\n    children {\n      title\n      url\n    }\n  }\n":
      TadaDocumentNode<{ title: string; url: string | null; children: { title: string; url: string | null; }[]; }, {}, { fragment: "MenuItem"; on: "MenuItem"; masked: true; }>;
    "\n    fragment MainNav on Menu {\n      items {\n        ...MenuItem\n      }\n    }\n  ":
      TadaDocumentNode<{ items: { [$tada.fragmentRefs]: { MenuItem: "MenuItem"; }; }[]; }, {}, { fragment: "MainNav"; on: "Menu"; masked: true; }>;
    "\n      query Layout($locale: String) {\n        menu(name: MAIN, langcode: $locale) {\n          ...MainNav\n        }\n      }\n    ":
      TadaDocumentNode<{ menu: { [$tada.fragmentRefs]: { MainNav: "Menu"; }; } | null; }, { locale?: string | null | undefined; }, void>;
    "\n      query Route($path: String!, $locale: String!) {\n        route(path: $path, langcode: $locale) {\n          ... on RouteInternal {\n            entity {\n              ... on NodePage {\n                title\n              }\n            }\n          }\n        }\n      }\n    ":
      TadaDocumentNode<{ route: { __typename?: "RouteExternal" | undefined; } | { __typename?: "RouteInternal" | undefined; entity: { __typename?: "MediaImage" | undefined; } | { __typename?: "NodeArticle" | undefined; } | { __typename?: "NodePage" | undefined; title: string; } | { __typename?: "TermTags" | undefined; } | null; } | { __typename?: "RouteRedirect" | undefined; } | null; }, { locale: string; path: string; }, void>;
  }
}
