
import { Meta, StoryObj } from "@storybook/react";

// Component
import CardProject from ".";

// Mocks
import { PROJECT_DATA_MOCK } from "@/mocks";

const meta: Meta<typeof CardProject> = {
  title: 'Components/CardProject',
  tags: ['autodocs'],
  component: CardProject,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardProject>;

export const Default: Story = {
  args: {
    projectId: PROJECT_DATA_MOCK?.fields._id,
    image: PROJECT_DATA_MOCK?.fields.image,
    name: PROJECT_DATA_MOCK?.fields.projectName,
    description: PROJECT_DATA_MOCK?.fields.description,
  }
}

