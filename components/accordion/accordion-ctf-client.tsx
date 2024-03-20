'use client';

import {ComponentAccordionFieldsFragment} from '#/gql/graphql';
import NCSAccordion from "#/components/ui/ncs-accordion/ncs-accordion";
import {RichTextCtf} from "#/components/rich-text-ctf";
import {useComponentPreview} from "#/components/hooks/use-component-preview";
import {ReactNode} from "react";

interface AccordionChildItem {
    id?: string,
    heading?: string | null,
    body: ReactNode,
}

export const AccordionCtfClient: React.FC<{
    data: ComponentAccordionFieldsFragment;
}> = (props) => {
    const { data: originalData } = props;
    const { data, addAttributes } =
        useComponentPreview<ComponentAccordionFieldsFragment>(originalData);
    let accordionItems: AccordionChildItem[] = [];

    data.itemsCollection?.items.map((item) => {
        accordionItems.push({
            id: item?.sys.id,
            heading: item?.heading,
            body: item?.body && <div {...addAttributes("bodyText")}><RichTextCtf {...item.body} /></div>
        })
    });

    return (
        <NCSAccordion
            heading={data.heading}
            items={accordionItems}
            expandType={data.expandType === "multiple" ? "multiple" : "single"}
        />
    );
};