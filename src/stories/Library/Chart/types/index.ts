export enum PointShapeEnum {
  "point", "star", "line", "circle", "square", "bowtie", "diamond", "hexagon", "triangle", "triangle-down", "triangle-up","pentagon"
}

export type LineChartConfig = {
  data: unknown[];
  xField: string;
  yField: string;
  axis: {
    x: {
      line: boolean;
      lineStroke: string;
    };
    y: {
      line: boolean;
      lineStroke: string;
    };
  };
  point: {
    shapeField: string;
    sizeField: number;
  };
  interaction: {
    tooltip: {
      marker: boolean;
    };
  };
  style: {
    lineWidth: number;
  };
};