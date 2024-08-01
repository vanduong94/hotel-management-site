import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "@/components/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const defaultArgs = {
  title: "Atom/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    buttonType: { control: "text" },
    href: {
      control: "text",
      description: "Specifies the URL for an anchor button",
      defaultValue: "https://example.com",
    },
  },
} satisfies Meta<typeof Button>;

export default defaultArgs;
type Story = StoryObj<typeof defaultArgs>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    buttonType: "btn-primary",
    children: "This is a button",
  },
};

export const Tertiary: Story = {
  args: {
    buttonType: "btn-tertiary",
    children: "This is a button",
  },
};

export const Link: Story = {
  args: {
    href: "https://example.com",
    buttonType: "btn-outline",
    children: "This is a link",
    target: "_blank"
  },
};
