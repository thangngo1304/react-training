
import { Meta, StoryObj } from "@storybook/react";

// Component
import Author from ".";

const meta: Meta<typeof Author> = {
  title: 'Components/Author',
  tags: ['autodocs'],
  component: Author,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Author>;

export const Default: Story = {
  args: {
    src: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    alt: 'cat',
    name: 'Cat',
    email: 'cat@gmail.com'
  }
}

