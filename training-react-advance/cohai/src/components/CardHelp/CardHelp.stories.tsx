
import { Meta, StoryObj } from "@storybook/react";

// Component
import CardHelp from ".";

const meta: Meta<typeof CardHelp> = {
  title: 'Components/CardHelp',
  tags: ['autodocs'],
  component: CardHelp,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardHelp>;

export const Default: Story = {
  args: {}
}

