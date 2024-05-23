export type Layout = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type DefaultGridProps = {
  autoSize: boolean;
  // cols: number;
  cols: { lg: number; md: number; sm: number; xs: number; xxs: number };
  margin: [number, number];
  containerPadding: [number, number];
  rowHeight: number;
  useCSSTransforms: boolean;
}

export type GridProps = {
  layouts: { lg: Layout[] };
};