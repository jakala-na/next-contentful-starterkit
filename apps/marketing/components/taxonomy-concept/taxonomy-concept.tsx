import { type ResultOf, type FragmentOf, graphql, readFragment } from 'gql.tada';

import { TaxonomyConceptClient } from './taxonomy-concept-client';
import { getTaxonomyConcepts, type ConceptProps } from '#/lib/get-taxonomy-concepts';

const getTaxonomyConceptProps = async (props: TaxonomyConceptProps): Promise<TaxonomyConceptAddFieldsProps | null> => {
  const data = readFragment(TaxonomyConceptFragment, props.data);
  const taxonomyConcepts = await getTaxonomyConcepts(process.env.CONTENTFUL_ORGANIZATION ?? '<missing organization>');
  const concept = taxonomyConcepts.find((item) => item.sys.id === data.id);
  return concept ? { ...data, ...concept } : null;
};

export const TaxonomyConceptFragment = graphql(`
  fragment TaxonomyConcept on TaxonomyConcept {
    __typename
    id
  }
`);

export type TaxonomyConceptAddFieldsProps = ResultOf<typeof TaxonomyConceptFragment> & ConceptProps;

export interface TaxonomyConceptProps {
  data: FragmentOf<typeof TaxonomyConceptFragment>;
}

export async function TaxonomyConcept(props: TaxonomyConceptProps) {
  const data = await getTaxonomyConceptProps(props);
  return data ? <TaxonomyConceptClient data={data} /> : null;
}
