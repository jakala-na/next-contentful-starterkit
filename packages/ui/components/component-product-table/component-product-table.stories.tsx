import type { Meta, StoryObj } from '@storybook/react';

import { ComponentProductTable } from './component-product-table';
import { Card } from '../card/card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/ProductTable',
  component: ComponentProductTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    headline: { control: 'text' },
    subline: { control: 'text' },
    items: { control: 'object' },
  },
} satisfies Meta<typeof ComponentProductTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    headline: 'Products',
    subline:
      'Discover a diverse range of high-quality products designed to meet your everyday needs. Our collection offers innovative solutions, stylish essentials, and practical tools for any lifestyle.',
    items: [
      <Card
        headline="Multi-Purpose Storage Box"
        body="A durable and spacious storage solution for organizing household items, office supplies, or personal belongings."
        image={{
          src: 'https://picsum.photos/id/212/720/480',
          alt: 'Placeholder image',
        }}
        cta={{ children: 'Shop', href: '#' }}
        key="card-1"
      />,
      <Card
        headline="Wireless Smart Sensor Light"
        body="Motion-activated LED light that automatically turns on in dark spaces. Ideal for hallways, closets, or outdoor areas."
        image={{
          src: 'https://picsum.photos/id/225/720/480',
          alt: 'Placeholder image',
        }}
        key="card-2"
      />,
      <Card
        headline="Ergonomic Memory Foam Cushion"
        body="Provides superior comfort and support for prolonged sitting. Reduces pressure on the lower back and tailbone."
        image={{
          src: 'https://picsum.photos/id/250/720/480',
          alt: 'Placeholder image',
        }}
        cta={{ children: 'Shop', href: '#' }}
        key="card-3"
      />,
      <Card
        headline="Multi-Purpose Storage Box"
        body="A durable and spacious storage solution for organizing household items, office supplies, or personal belongings."
        image={{
          src: 'https://picsum.photos/id/212/720/480',
          alt: 'Placeholder image',
        }}
        cta={{ children: 'Shop', href: '#' }}
        key="card-4"
      />,
      <Card
        headline="Wireless Smart Sensor Light"
        body="Motion-activated LED light that automatically turns on in dark spaces. Ideal for hallways, closets, or outdoor areas."
        image={{
          src: 'https://picsum.photos/id/225/720/480',
          alt: 'Placeholder image',
        }}
        cta={{ children: 'Shop', href: '#' }}
        key="card-5"
      />,
      <Card
        headline="Ergonomic Memory Foam Cushion"
        body="Provides superior comfort and support for prolonged sitting. Reduces pressure on the lower back and tailbone."
        image={{
          src: 'https://picsum.photos/id/250/720/480',
          alt: 'Placeholder image',
        }}
        key="card-6"
      />,
    ],
  },
};
