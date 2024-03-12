import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label";

import { Input } from "./input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Email",
  }
};
export const Disabled: Story = {
  args: {
    ...Email.args,
    disabled: true,
  }
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" placeholder="Email" />
  </div>
  ),
};