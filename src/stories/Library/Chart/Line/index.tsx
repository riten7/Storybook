import { Bar, Column, Line, Pie } from "@ant-design/charts";
import React, { useCallback, useEffect, useMemo } from "react";
import { LineChartConfig } from "../types";
import ResizeObserver from "resize-observer-polyfill";
import styled from "styled-components";

type LineChartProps = {
  defaultInitialWidth: number
  config: LineChartConfig;
  chartType: string;
};

type ExtendedLineChartProps = LineChartProps & {
  label: string;
};

const LineWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LineChart: React.FC<ExtendedLineChartProps> = ({ config, defaultInitialWidth = 200, chartType='line' }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState<number>(defaultInitialWidth);

  const updatedConfig = useMemo(() => {
    return {
      ...config,
      width: containerWidth,
    }
  }, [config, containerWidth])

  useEffect(() => {
    const container = containerRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === container) {
          const { width, height } = entry.contentRect;
          // container.style.width = `${width}px`;
          // container.style.height = `${height}px`;
          setContainerWidth(width);
        }
      }
    });
    container && resizeObserver.observe(container);

    return () => {
      container && resizeObserver.unobserve(container);
    }
  }, []);

  const renderChart = useCallback((type: string) => {
    switch (type) {
      case 'line':
        return <Line {...updatedConfig} />;
      case 'bar':
        return <Bar {...updatedConfig} />;
      case 'column':
        return <Column {...updatedConfig} />;
      case 'pie':
        return <Pie {...updatedConfig} />;
      default:
        return <Line {...updatedConfig} />;
    }
  }, [updatedConfig])

  return (
    <LineWrapper ref={containerRef}>
      {renderChart(chartType)}
    </LineWrapper>
  );
};

export default LineChart;
