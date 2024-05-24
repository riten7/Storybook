import { areaChartData } from "../../../Library/Chart/json/AreaChartData";
import { barChartData } from "../../../Library/Chart/json/BarChartData";
import { lineChartData } from "../../../Library/Chart/json/LineChartData";
import { sankeyData } from "../../../Library/Chart/json/SankeyChartData";

export const lineConfig = {
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

export const sankeyConfig = {
  data: sankeyData,
  scale: {
    color: {
      range: [
        "#4e79a7",
        "#f28e2c",
        "#e15759",
        "#76b7b2",
        "#59a14f",
        "#edc949",
        "#af7aa1",
        "#ff9da7",
        "#9c755f",
        "#bab0ab",
      ],
    },
  },
  layout: { nodeAlign: "center", nodePadding: 0.03 },
  style: {
    labelSpacing: 3,
    labelFontWeight: "bold",
    nodeStrokeWidth: 1.2,
    linkFillOpacity: 0.4,
  },
};

export const areaConfig = {
  data: areaChartData,
  xField: (d: { date: string | number | Date }) => new Date(d.date),
  yField: "close",
};

export const barConfig = {
  data: barChartData,
  xField: "year",
  yField: "value",
  // shapeField: "hollow",
  colorField: "year",
  legend: {
    color: { size: 72, autoWrap: true, maxRows: 3, cols: 6 },
  },
};

export const pieConfig = {
  data: [
    { type: "Apple", value: 27 },
    { type: "Ball", value: 25 },
    { type: "Carrot", value: 18 },
    { type: "Donkey", value: 15 },
    { type: "Eagle", value: 10 },
    { type: "Fish", value: 5 },
  ],
  angleField: "value",
  colorField: "type",
  label: {
    text: "value",
    style: {
      fontWeight: "bold",
    },
  },
  legend: {
    color: {
      title: false,
      position: "right",
      rowPadding: 5,
    },
  },
};
