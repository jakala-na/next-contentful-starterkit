import { type ResultOf, type FragmentOf, graphql } from 'gql.tada';

export const TaxonomyConceptFragment = graphql(`
  fragment TaxonomyConcept on TaxonomyConcept @_unmask {
    __typename
    id
  }
`);

export type TaxonomyConceptAddFieldsProps = {
  prefLabel?: string | null;
} & ResultOf<typeof TaxonomyConceptFragment>;

export interface TaxonomyConceptProps {
  data: FragmentOf<typeof TaxonomyConceptFragment>;
}
