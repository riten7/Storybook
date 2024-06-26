import type { Meta, StoryObj } from '@storybook/react';
import { lineChartData } from '../json/LineChartData';
import Chart from '../../../../components/Chart/Chart';

const config = {
  data: lineChartData,
  xField: 'year',
  yField: 'value',
  axis: {
    x: {
      line: true,
      lineStroke: 'red',
    },
    y: {
      line: true,
      lineStroke: 'red',
    },
  },
  point: {
    shapeField: "circle",
    sizeField: 4,
  },
  interaction: {
    tooltip: {
      marker: false,
    },
  },
  style: {
    lineWidth: 2,
  },
};

const meta = {
  title: 'Library/Chart/Line',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Line: Story = {
  args: {
    config: config,
    defaultInitialWidth: 400,
    // label: 'Line Chart',
    chartType: 'line',
  },
};
