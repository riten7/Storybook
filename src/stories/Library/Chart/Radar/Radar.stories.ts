import type { Meta, StoryObj } from '@storybook/react';
import { radarData } from '../json/RadarData';
import Chart from '..';

const config = {
  data: radarData.map((d) => ({ ...d, star: Math.sqrt(d.star) })),
  xField: 'name',
  yField: 'star',
  area: {
    style: {
      fillOpacity: 0.2,
    },
  },
  scale: {
    x: {
      padding: 0.5,
      align: 0,
    },
    y: {
      nice: true,
    },
  },
  axis: {
    x: {
      title: false,
      grid: true,
    },
    y: {
      gridAreaFill: 'rgba(0, 0, 0, 0.04)',
      label: false,
      title: false,
    },
  },
};

const meta = {
  title: 'Library/Chart/Radar',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Radar: Story = {
  args: {
    config: config,
    defaultInitialWidth: 400,
    // label: 'Radar Chart',
    chartType: 'radar',
  },
};
