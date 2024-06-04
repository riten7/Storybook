import type { Meta, StoryObj } from '@storybook/react';
import { areaChartData } from '../json/AreaChartData';
import Chart from '../../../../components/Chart/Chart';

const config = {
  data: areaChartData,
  xField: (d: { date: string | number | Date; }) => new Date(d.date),
  yField: 'close',
};

const meta = {
  title: 'Library/Chart/Area',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Area: Story = {
  args: {
    config: config,
    defaultInitialWidth: 400,
    // label: 'Area Chart',
    chartType: 'area',
  },
};
