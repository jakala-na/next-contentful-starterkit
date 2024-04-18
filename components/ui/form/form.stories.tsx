import type { Meta } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button } from "../button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../form/form";
import { Input } from "../input";

export const SampleForm = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <form action="">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI/Form",
  component: SampleForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof SampleForm>;

export default meta;
