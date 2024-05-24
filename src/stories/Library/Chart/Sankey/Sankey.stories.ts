import type { Meta, StoryObj } from '@storybook/react';
import { sankeyData } from '../json/SankeyChartData';
import Chart from '..';

const config = {
  data: sankeyData,
  scale: {
    color: {
      range: [
        '#4e79a7',
        '#f28e2c',
        '#e15759',
        '#76b7b2',
        '#59a14f',
        '#edc949',
        '#af7aa1',
        '#ff9da7',
        '#9c755f',
        '#bab0ab',
      ],
    },
  },
  layout: { nodeAlign: 'center', nodePadding: 0.03 },
  style: {
    labelSpacing: 3,
    labelFontWeight: 'bold',
    nodeStrokeWidth: 1.2,
    linkFillOpacity: 0.4,
  },
};

const meta = {
  title: 'Library/Chart/Sankey',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sankey: Story = {
  args: {
    config: config,
    defaultInitialWidth: 1000,
    // label: 'Sankey Chart',
    chartType: 'sankey',
  },
};
