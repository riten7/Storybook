import type { Meta, StoryObj } from '@storybook/react';
import LineChart from '.';
import { lineChartData } from '../json/LineChartData';

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
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    config: config,
    label: 'Line Chart',
  },
};
