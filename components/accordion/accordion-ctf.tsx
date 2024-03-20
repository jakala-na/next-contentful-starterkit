import { FragmentType, getFragmentData, graphql } from '#/gql';
import {AccordionCtfClient} from "#/components/accordion/accordion-ctf-client";

export const ComponentAccordionFieldsFragment = graphql(/* GraphQL */ `
    fragment ComponentAccordionFields on Accordion {
        __typename
        sys {
            id
        }
        heading
        expandType
        itemsCollection {
            items {
                sys {
                    id
                }
                heading
                body {
                    json
                }
            }
        }
    }
`);

export type AccordionProps = {
    data: FragmentType<typeof ComponentAccordionFieldsFragment>;
};

export const AccordionCtf: React.FC<AccordionProps> = (props) => {
    const data = getFragmentData(ComponentAccordionFieldsFragment, props.data);
    return <AccordionCtfClient data={data} />;
};
