import { Line } from "@ant-design/charts";
import React, { useEffect, useMemo } from "react";
import { LineChartConfig } from "../types";
import ResizeObserver from "resize-observer-polyfill";
import styled from "styled-components";

type LineChartProps = {
  config: LineChartConfig;
};

type ExtendedLineChartProps = LineChartProps & {
  label: string;
};

const LineWrapper = styled.div`
  width: "100%";
  height: "100%";
  position: "relative";
`;

const LineChart: React.FC<ExtendedLineChartProps> = ({ config }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState<number>(200);

  // const updatedConfig = {
  //   ...config,
  //   width: containerWidth,
  // }

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

  return (
    <LineWrapper ref={containerRef}>
      <Line {...updatedConfig} />
    </LineWrapper>
  );
};

export default LineChart;
