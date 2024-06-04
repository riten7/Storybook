import { DefaultGridProps } from "./types";


export const GRID_CELL_HEIGHT = 150;
export const GRID_CELL_VMARGIN = 8;
export const GRID_COLUMN_COUNT_LG = 12;
export const GRID_COLUMN_COUNT_MD = 10;
export const GRID_COLUMN_COUNT_SM = 6;
export const GRID_COLUMN_COUNT_XS = 4;
export const GRID_COLUMN_COUNT_XSS = 2;
export const REPEAT_DIR_VERTICAL = 'v';
export const REPEAT_DIR_HORIZONTAL = 'h';

export const DEFAULT_PANEL_SPAN = 4;
export const DEFAULT_ROW_HEIGHT = 250;
export const MIN_PANEL_HEIGHT = GRID_CELL_HEIGHT * 3;


export const defaultGridProps: DefaultGridProps = {
  autoSize: true,
  cols: { 
    lg: GRID_COLUMN_COUNT_LG,
    md: GRID_COLUMN_COUNT_MD,
    sm: GRID_COLUMN_COUNT_SM,
    xs: GRID_COLUMN_COUNT_XS,
    xxs: GRID_COLUMN_COUNT_XSS
  },
  breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0},
  margin: [GRID_CELL_VMARGIN, GRID_CELL_VMARGIN],
  containerPadding: [0, 0],
  rowHeight: GRID_CELL_HEIGHT,
  useCSSTransforms: true,
};