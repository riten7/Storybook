import { Line } from "@ant-design/plots";
import React from "react";
import { lineChartData } from "../../Library/Chart/json/LineChartData";
import styled from "styled-components";

type LPChartProps = {
  width?: number;
  height?: number;
}

const LineWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const LPLineChart: React.FC<LPChartProps> = ({ width, height }) => {
  const config = {
    autoFit: true,
    data: lineChartData,
    // width: width,
    height: 150,
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
  return <LineWrapper>
      <Line {...config} />
  </LineWrapper>
};

export default LPLineChart;
