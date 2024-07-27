import type { Meta, StoryObj } from "@storybook/react";
import NewsLetter from "./news-letter";

const meta: Meta<typeof NewsLetter> = {
  title: "Molecules/NewsLetter",
  component: NewsLetter,
};

export default meta;
type Story = StoryObj<typeof NewsLetter>;

export const NewsLetterCard: Story = {
  args: {},
};
