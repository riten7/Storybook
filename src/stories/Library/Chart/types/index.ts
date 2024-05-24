export enum PointShapeEnum {
  "point", "star", "line", "circle", "square", "bowtie", "diamond", "hexagon", "triangle", "triangle-down", "triangle-up","pentagon"
}

// line chart config
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

// bar chart config 
export type BarChartConfig = {
  data: unknown[];
  xField: string;
  yField: string;
  shapeField?: string;
  colorField: string;
  legend: {
    color: {
      size: number;
      autoWrap: boolean;
      maxRows: number;
      cols: number;
    };
  };
};

// area chart config
export type AreaChartConfig = {
  data:  unknown[];
  xField: (d: { date: string | number | Date }) => Date;
  yField: string;
};

// radar chart config

type DataItem = {
  star: number;
  [key: string]: any; // Replace 'any' with the actual type of other properties in data items
};

export type RadarChartConfig = {
  data: DataItem[];
  xField: string;
  yField: string;
  area: {
    style: {
      fillOpacity: number;
    };
  };
  scale: {
    x: {
      padding: number;
      align: number;
    };
    y: {
      nice: boolean;
    };
  };
  axis: {
    x: {
      title: boolean;
      grid: boolean;
    };
    y: {
      gridAreaFill: string;
      label: boolean;
      title: boolean;
    };
  };
};

// sankey config
export type SankeyConfig = {
  data: unknown[];
  scale: {
    color: {
      range: string[];
    };
  };
  layout: {
    nodeAlign: string;
    nodePadding: number;
  };
  style: {
    labelSpacing: number;
    labelFontWeight: string;
    nodeStrokeWidth: number;
    linkFillOpacity: number;
  };
};