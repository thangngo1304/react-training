
import { Meta, StoryObj } from "@storybook/react";

// Component
import { Switch } from "..";

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  tags: ['autodocs'],
  component: Switch,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    title: 'Remember me',
  }
}

