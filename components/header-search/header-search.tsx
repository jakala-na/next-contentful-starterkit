"use client"

import algoliasearch from "algoliasearch/lite";
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import HeaderSearchForm from "#/components/header-search/header-search-form";
import HeaderSearchResults from "#/components/header-search/header-search-results";

const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string,
);

export default function HeaderSearch() {
  return (
      <>
        <InstantSearchNext
            searchClient={searchClient}
            indexName="next-contentful-starterkit">
          <HeaderSearchForm/>
          <HeaderSearchResults/>
        </InstantSearchNext>
      </>
  )
}