import type { Meta, StoryObj } from '@storybook/react';
import { barChartData } from '../json/BarChartData';
import Chart from '../../../../components/Chart/Chart';

const config = {
  data: barChartData,
  xField: 'year',
  yField: 'value',
  // shapeField: 'hollow',
  colorField: 'year',
  legend: {
    color: { size: 72, autoWrap: true, maxRows: 3, cols: 6 },
  },
};

const meta = {
  title: 'Library/Chart/Bar',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bar: Story = {
  args: {
    config: config,
    defaultInitialWidth: 400,
    // label: 'Bar Chart',
    chartType: 'bar',
  },
};
