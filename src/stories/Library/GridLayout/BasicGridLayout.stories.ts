import type { Meta, StoryObj } from '@storybook/react';
import BasicGridLayout from '../../../components/GridLayout';
import { layoutData } from '../../../components/GridLayout/json/data';

const meta = {
  title: 'Library/GridLayout/BasicGridLayout',
  component: BasicGridLayout,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BasicGridLayout>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    label: "Basic Grid Layout",
    gridProps: {
      layouts: { lg: layoutData },
    },
  },
};
