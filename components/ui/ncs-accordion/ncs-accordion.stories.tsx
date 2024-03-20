import type { Meta, StoryObj } from '@storybook/react';

import NCSAccordion from "#/components/ui/ncs-accordion/ncs-accordion";
import {ReactNode} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Accordion',
  component: NCSAccordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    heading: { control: 'text' },
    expandType: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    items: {
      table: {
        disable: true
      },
    }
  },
} satisfies Meta<typeof NCSAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: {
  heading: string,
  expandType: 'single' | 'multiple',
  items: {
    id: string,
    heading: string | null,
    body: ReactNode,
  }[],
} = {
  heading: 'Vestibulum ante ipsum primis in',
  expandType: 'single',
  items: [
    {
      id: 'accordion-item-1',
      heading: 'Vestibulum ullamcorper mauris at ligula',
      body: 'In dui magna posuere eget',
    },
    {
      id: 'accordion-item-2',
      heading: 'Vestibulum dapibus nunc ac augue',
      body: 'Nunc interdum lacus sit amet',
    }
  ],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
