'use client'

import React, {ReactNode, useState} from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';

interface NCSAccordionProps {
    heading?: string | null;
    items: {
        id?: string,
        heading?: string | null,
        body: ReactNode,
    }[],
    expandType: 'single' | 'multiple',
}

const NCSAccordion = ({heading, items, expandType = 'single'}: NCSAccordionProps) => {
    const [isOpen, open] = useState(expandType === 'multiple' ? [''] : '' );

    return (
        <div className="px-5 max-w-[80rem] mx-auto">
            {heading && (<h1>{heading}</h1>)}
            <Accordion.Root onValueChange={open} type={expandType}>
                {items.map((item) => (
                    <Accordion.Item key={item.id} className="border-b border-b-slate-300 pb-8 pt-12" value={`accordion-item-${item.id}`}>
                        <Accordion.Trigger className="flex items-center w-full font-bold text-xl">
                            <span>Q: {item.heading}</span>
                            {isOpen.includes(`accordion-item-${item.id}`) ? (
                                <MinusIcon className="bg-accent ml-auto h-6 w-6 p-1" aria-hidden />
                            ) : (
                                <PlusIcon className="bg-accent ml-auto h-6 w-6 p-1" aria-hidden />
                            )}
                        </Accordion.Trigger>
                        <Accordion.Content className="text-lg mt-2">
                            {item.body}
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>
    )
};

export default NCSAccordion;