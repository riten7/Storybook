import { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import React, { useMemo } from "react";
import { GridProps } from "../../GridLayout/types";
import { LPWidgetWrapperProps } from "./types";
import { defaultGridProps } from "../../GridLayout/constant";
import LPWidgetWrapper from "./LpWidgetWrapper";

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
    type: "line"
  },
  {
    key: "dark-magician",
    title: "Dark Magician",
    type: "bar"
  },
  {
    key: "kuriboh",
    title: "Kuriboh",
    type: "column"
  },
  {
    key: "spell-caster",
    title: "Spell Caster",
    type: "radar"
  },
  {
    key: "summoned-skull",
    title: "Summoned Skull",
    type: "sankey"
  },
  {
    key: "summoned-banger",
    title: "Summoned Banger",
    type: "pie"
  },
];

const LPWidget: React.FC<LPGridProps> = ({ gridProps }) => {
  const ResponsiveReactGridLayout = useMemo(
    () => WidthProvider(Responsive),
    []
  );
  const mergedGridProps = { ...defaultGridProps, ...gridProps };

  const handleResizeStop = () => {};

  return (
    <Root>
      <ResponsiveReactGridLayout
        className="layout"
        {...mergedGridProps}
        onResizeStop={handleResizeStop}
      >
        {grids.map((grid) => (
          <GridItemWrapper key={grid.key}>
            <LPWidgetWrapper chartType={grid.type as LPWidgetWrapperProps['chartType']} />
          </GridItemWrapper>
        ))}
      </ResponsiveReactGridLayout>
    </Root>
  );
};

export default LPWidget;
