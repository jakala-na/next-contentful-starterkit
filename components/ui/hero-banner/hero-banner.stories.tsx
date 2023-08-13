import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";

import { HeroBanner } from "./hero-banner";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/HeroBanner",
  component: HeroBanner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    headline: { control: "text" },
    imageUrl: { control: "text" },
    bodyText: { control: "text" },
  },
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  headline: "With great power comes great responsibility",
  imageUrl: "https://picsum.photos/seed/picsum/1920/1080",
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
    bodyText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero eget ultricies aliquam, nisl nunc ultricies nunc, vitae ultricies nisl nunc eget nunc. Donec auctor, libero eget ultricies aliquam, nisl nunc ultricies nunc, vitae ultricies nisl nunc eget nunc.",
  },
};

export const WithReactComponent: Story = {
  args: {
    ...defaultArgs,
    bodyText: (
      <div>
        <strong>Bold text</strong> is easier to notice.
      </div>
    ),
  },
};

export const WithCta: Story = {
  args: {
    ...defaultArgs,
    ctaText: "Learn more",
    ctaLink: "https://google.com",
  },
};
