import type { Meta, StoryObj } from '@storybook/react';

// components
import { PhoneIcon } from '@chakra-ui/icons';
import { ItemIcon } from '..';


const meta: Meta<typeof ItemIcon> = {
  title: 'Components/ItemIcon',
  tags: ['autodocs'],
  component: ItemIcon,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ItemIcon>;


export const Default: Story = {
  args: {
    icon: <PhoneIcon />
  },
};

export const Active: Story = {
  args: {
    icon: <PhoneIcon />,
    isActive: true
  },
};

