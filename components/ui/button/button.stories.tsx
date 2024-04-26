import type { Meta, StoryObj } from '@storybook/react';

import { Icons } from '#/components/icons';

import { Button } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Icon: Story = {
  args: {
    variant: 'ghost',
    size: 'icon',
    children: <Icons.logo />,
  },
};
