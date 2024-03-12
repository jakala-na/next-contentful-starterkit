import type { Meta, StoryObj } from "@storybook/react";
import { SampleForm } from "../form/form.stories";
import { FormContainer } from "./form-container";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/FormContainer",
  component: FormContainer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    headline: { control: "text" },
  },
} satisfies Meta<typeof FormContainer>;

export default meta;
type Story = StoryObj<typeof meta>;
const defaultArgs = {
  headline: "The from headline",
  form: <SampleForm />
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
