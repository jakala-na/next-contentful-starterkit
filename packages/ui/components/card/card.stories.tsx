import type { Meta, StoryObj } from '@storybook/react';

import { colorConfigs } from '@repo/ui/theme';

import { Card } from './card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    headline: { control: 'text' },
    bodyText: { control: 'object' },
    image: { control: 'object' },
    colorPalette: {
      control: 'select',
      options: Object.keys(colorConfigs),
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  headline: 'With great power comes great responsibility',
  bodyText: (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero eget ultricies aliquam, nisl.</p>
    </div>
  ),
  link: '#',
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithImage: Story = {
  args: {
    ...defaultArgs,
    image: {
      src: 'https://picsum.photos/seed/picsum/1920/1080',
      alt: 'Placeholder image',
    },
  },
};

export const WithCta: Story = {
  args: {
    ...defaultArgs,
    cta: { children: 'Learn more', href: 'https://google.com' },
  },
};

export const WithImageAndCta: Story = {
  args: {
    ...defaultArgs,
    image: {
      src: 'https://picsum.photos/seed/picsum/1920/1080',
      alt: 'Placeholder image',
    },
    cta: { children: 'Learn more', href: 'https://google.com' },
  },
};
