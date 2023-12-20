import { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import '@assets/css/main.css';

const meta: Meta<typeof Select> = {
  title: 'COMPONENTS/Common/Sort',
  component: Select
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => (
    <Select
      {...args}
      selectOptions={[
        {
          value: undefined,
          disabled: true,
          children: 'Sort by name'
        },
        {
          value: 'Default',
          disabled: false,
          children: 'Default'
        },
        {
          value: 'Ascending',
          disabled: false,
          children: 'Ascending'
        },
        {
          value: 'Descending',
          disabled: false,
          children: 'Descending'
        }
      ]}
    ></Select>
  )
};
