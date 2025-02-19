import type { Meta, StoryObj } from '@storybook/react';

import { TopicProduct } from './topic-product';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/TopicProduct',
  component: TopicProduct,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: { control: 'text' },
    description: { control: 'text' },
    featuredImage: { control: 'object' },
    features: { control: 'object' },
    price: { control: 'number' },
  },
} satisfies Meta<typeof TopicProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    name: 'With great power comes great responsibility',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero eget ultricies aliquam, nisl nunc ultricies nunc, vitae ultricies nisl nunc eget nunc. Donec auctor, libero eget ultricies aliquam, nisl nunc ultricies nunc, vitae ultricies nisl nunc eget nunc.',
    featuredImage: {
      src: 'https://picsum.photos/seed/picsum/1080/1080',
      alt: 'Placeholder image',
    },
    features: [
      'Aenean interdum imperdiet neque quis placerat.',
      'Aenean ut lorem sed est luctus tincidunt',
      'Sed vulputate, nisl quis tincidunt ultrices, tortor felis tempus neque.',
      'Nam consequat ligula eu efficitur pharetra.',
      'Morbi congue quam non elit consequat, vel dapibus sem pretium.',
    ],
    price: 49.99,
  },
};
