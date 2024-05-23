import { Line } from '@ant-design/charts';
import React from 'react';
import { LineChartConfig } from '../types';

type LineChartProps = {
  config: LineChartConfig;
}

type ExtendedLineChartProps = LineChartProps & {
  label: string;
};

const LineChart: React.FC<ExtendedLineChartProps> = ({ config }) => {
  return <Line {...config} />;
};

export default LineChart;
