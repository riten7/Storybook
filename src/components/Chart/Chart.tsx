/* eslint-disable no-empty-pattern */
import React, { useEffect, useMemo, useRef } from "react";
import { Area, Line, Bar, Column, Pie, Sankey } from "@ant-design/charts";
import styled from 'styled-components';

export interface ChartProps<T>  {
  config: T;
  defaultInitialWidth?: number;
  chartType: "area" | "line" | "bar" | "column" | "pie" | "sankey" | "radar";
}

const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Chart = <T,> ({
  config,
  defaultInitialWidth = 200,
  chartType,
}: ChartProps<T>): React.ReactElement => {
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] =
    React.useState(defaultInitialWidth);

    console.log({ React, containerWidth, setContainerWidth })

  const updatedConfig = useMemo(() => {
    return {
      ...(config as object),
      width: containerWidth,
    };
  }, [config, containerWidth]);

  useEffect(() => {
    const container = containerRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === container) {
          const { width } = entry.contentRect;
          setContainerWidth(width);
        }
      }
    });
    container && resizeObserver.observe(container);

    return () => {
      container && resizeObserver.unobserve(container);
    };
  }, []);

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return <Line {...updatedConfig} />;
      case "bar":
        return <Bar {...updatedConfig} />;
      case "column":
        return <Column {...updatedConfig} />;
      case "pie":
        return <Pie {...updatedConfig} />;
      case "area":
        return <Area {...updatedConfig} />;
      case "sankey":
        return <Sankey {...updatedConfig} />;
      default:
        return <Line {...updatedConfig} />;
    }
  };

  return <ChartWrapper ref={containerRef}>{renderChart()}</ChartWrapper>;
};

export default Chart;
