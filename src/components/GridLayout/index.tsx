import './grid.css';

import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { GridProps } from "./types";
import React from "react";
import { defaultGridProps } from "./constant";

const ResponsiveGridLayout = WidthProvider(Responsive);

type LPGridProps = {
  gridProps: GridProps;
  onResizeFinish?: () => void;
  label: string;
}

const BasicGridLayout: React.FC<LPGridProps> = ({ gridProps }) => {

  const mergedGridProps = { ...defaultGridProps, ...gridProps };
  return (
    <div className="grid">
      <ResponsiveGridLayout
        className="layout"
        {...mergedGridProps}
      >
        <div className="grid-item-wrapper" key="blue-eyes-dragon">
          <div className="grid-item-content">Blue Eyes Dragon</div>
        </div>
        <div className="grid-item-wrapper" key="dark-magician">
          <div className="grid-item-content">Dark Magician</div>
        </div>
        <div className="grid-item-wrapper" key="kuriboh">
          <div className="grid-item-content">Kuriboh</div>
        </div>
        <div className="grid-item-wrapper" key="spell-caster">
          <div className="grid-item-content">Spell Caster</div>
        </div>
        <div className="grid-item-wrapper" key="summoned-skull">
          <div className="grid-item-content">Summoned Skull</div>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default BasicGridLayout;
