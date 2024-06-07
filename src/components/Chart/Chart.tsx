/* eslint-disable no-empty-pattern */
import './chart.css';

import React, { useMemo, useState } from "react";
import { Area, Line, Bar, Column, Pie, Sankey } from "@ant-design/charts";

export interface ChartProps  {
  config: any;
  defaultInitialWidth?: number;
  chartType: "area" | "line" | "bar" | "column" | "pie" | "sankey" | "radar";
}

const Chart: React.FC<ChartProps> = ({
  config,
  defaultInitialWidth,
  chartType,
}) => {

  // const containerRef = useRef<HTMLDivElement>(null);
  
  const [containerWidth, setContainerWidth] =
    useState<number>(200);
  console.log(config, defaultInitialWidth, chartType, setContainerWidth)


  const updatedConfig = useMemo(() => {
    return {
      ...(config as object),
      width: containerWidth,
    };
  }, [config, containerWidth]);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const resizeObserver = new ResizeObserver((entries) => {
  //     for (const entry of entries) {
  //       if (entry.target === container) {
  //         const { width } = entry.contentRect;
  //         setContainerWidth(width);
  //       }
  //     }
  //   });
  //   container && resizeObserver.observe(container);

  //   return () => {
  //     container && resizeObserver.unobserve(container);
  //   };
  // }, []);

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

   return <div className='chart-wrapper'>{renderChart()}</div>;
  // return <div className='chart-wrapper' ref={containerRef}>{renderChart()}</div>;
  // return <div>If it works</div>
};

export default Chart;
