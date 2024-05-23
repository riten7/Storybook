import { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import React, { useMemo } from "react";
import { GridProps, Layout } from "../../Library/GridLayout/types";
import { defaultGridProps } from "../../Library/GridLayout/constant";
import LineChartWrapper from "./LineChartWrapper";

const GridItemWrapper = styled.div`
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Root = styled.div`
  padding: 16px;
`;

type LPGridProps = {
  gridProps: GridProps;
  onResizeFinish?: () => void;
  label: string;
};

const grids = [
  {
    key: "blue-eyes-dragon",
    title: "Blue Eyes Dragon",
  },
  {
    key: "dark-magician",
    title: "Dark Magician",
  },
  {
    key: "kuriboh",
    title: "Kuriboh",
  },
  {
    key: "spell-caster",
    title: "Spell Caster",
  },
  {
    key: "summoned-skull",
    title: "Summoned Skull",
  },
];

const LPChart: React.FC<LPGridProps> = ({ gridProps }) => {

  const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), []);
  const mergedGridProps = { ...defaultGridProps, ...gridProps };

  const handleResizeStop = (oldItem: Layout,) => {
    console.log("oldItem", oldItem);
  };

  return (
    <Root>
      <ResponsiveReactGridLayout
        className="layout"
        {...mergedGridProps}
        onResizeStop={handleResizeStop}
      >
        {grids.map((grid) => (
            <GridItemWrapper key={grid.key}>
            <LineChartWrapper />
          </GridItemWrapper>
          
        ))}
      </ResponsiveReactGridLayout>
    </Root>
  );
};

export default LPChart;
