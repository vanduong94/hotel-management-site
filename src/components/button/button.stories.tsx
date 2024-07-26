import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '@/components/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const defaultArgs = {
  title: 'Atom/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default defaultArgs;
type Story = StoryObj<typeof defaultArgs>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    isPrimary: true,
    children: "This is a button",
    className: "bg-primary inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500 uppercase"
  },
};