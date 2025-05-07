/* eslint-disable */
/* prettier-ignore */
import type { TadaDocumentNode, $tada } from 'gql.tada';

declare module 'gql.tada' {
 interface setupCache {
    "\n  fragment MediaImage on MediaImage {\n    __typename\n    id\n    mediaImage {\n      src: url\n      width\n      height\n      alt\n    }\n  }\n":
      TadaDocumentNode<{ __typename: "MediaImage"; id: string; mediaImage: { src: string; width: number; height: number; alt: string | null; }; }, {}, { fragment: "MediaImage"; on: "MediaImage"; masked: true; }>;
    "\n    fragment ComponentHeroBannerFields on ParagraphHero {\n      __typename\n      heading\n      description {\n        processed\n      }\n      image {\n        ...MediaImage\n      }\n    }\n  ":
      TadaDocumentNode<{ __typename: "ParagraphHero"; heading: string | null; description: { processed: unknown; } | null; image: { __typename?: "MediaImage" | undefined; [$tada.fragmentRefs]: { MediaImage: "MediaImage"; }; } | null; }, {}, { fragment: "ComponentHeroBannerFields"; on: "ParagraphHero"; masked: true; }>;
    "\n    fragment NodePage on NodePage {\n      __typename\n      title\n      components {\n        __typename\n        ...ComponentHeroBannerFields\n      }\n    }\n  ":
      TadaDocumentNode<{ __typename: "NodePage"; title: string; components: { __typename: "ParagraphHero"; [$tada.fragmentRefs]: { ComponentHeroBannerFields: "ParagraphHero"; }; }[] | null; }, {}, { fragment: "NodePage"; on: "NodePage"; masked: true; }>;
    "\n  fragment MenuItem on MenuItem {\n    title\n    url\n    children {\n      title\n      url\n    }\n  }\n":
      TadaDocumentNode<{ title: string; url: string | null; children: { title: string; url: string | null; }[]; }, {}, { fragment: "MenuItem"; on: "MenuItem"; masked: true; }>;
    "\n    fragment MainNav on Menu {\n      items {\n        ...MenuItem\n      }\n    }\n  ":
      TadaDocumentNode<{ items: { [$tada.fragmentRefs]: { MenuItem: "MenuItem"; }; }[]; }, {}, { fragment: "MainNav"; on: "Menu"; masked: true; }>;
    "\n      query Layout($locale: String) {\n        menu(name: MAIN, langcode: $locale) {\n          ...MainNav\n        }\n      }\n    ":
      TadaDocumentNode<{ menu: { [$tada.fragmentRefs]: { MainNav: "Menu"; }; } | null; }, { locale?: string | null | undefined; }, void>;
    "\n      query Route($path: String!, $locale: String!) {\n        route(path: $path, langcode: $locale) {\n          __typename\n          ... on RouteRedirect {\n            url\n          }\n          ... on RouteInternal {\n            entity {\n              __typename\n              ...NodePage\n            }\n          }\n        }\n      }\n    ":
      TadaDocumentNode<{ route: { __typename: "RouteExternal"; } | { __typename: "RouteInternal"; entity: { __typename: "MediaImage"; } | { __typename: "NodePage"; [$tada.fragmentRefs]: { NodePage: "NodePage"; }; } | { __typename: "NodeArticle"; } | { __typename: "TermTag"; } | null; } | { __typename: "RouteRedirect"; url: string; } | null; }, { locale: string; path: string; }, void>;
    "\n      query allNodePaths {\n        nodeArticles(first: 50) {\n          nodes {\n            translations {\n              langcode {\n                id\n              }\n              path\n            }\n          }\n        }\n        nodePages(first: 50) {\n          nodes {\n            translations {\n              langcode {\n                id\n              }\n              path\n            }\n          }\n        }\n      }\n    ":
      TadaDocumentNode<{ nodeArticles: { nodes: { translations: { langcode: { id: string | null; }; path: string | null; }[]; }[]; }; nodePages: { nodes: { translations: { langcode: { id: string | null; }; path: string | null; }[]; }[]; }; }, {}, void>;
  }
}
