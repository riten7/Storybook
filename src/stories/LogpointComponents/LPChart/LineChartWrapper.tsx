import React from "react";
import { lineChartData } from "../../Library/Chart/json/LineChartData";
import LineChart from "../../Library/Chart/Line";

type LineChartWrapperProps = {
  width?: number;
  height?: number;
}

const LineChartWrapper: React.FC<LineChartWrapperProps> = () => {
  const config = {
    autoFit: true,
    data: lineChartData,
    xField: "year",
    yField: "value",
    axis: {
      x: {
        line: true,
        lineStroke: "red",
      },
      y: {
        line: true,
        lineStroke: "red",
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
  return <LineChart label={'Chart'} config={config} defaultInitialWidth={200} />
};

export default LineChartWrapper;
