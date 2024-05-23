import { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { GridProps } from "../types";
import React from "react";
import { defaultGridProps } from "../constant";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridItemWrapper = styled.div`
  background: #f5f5f5;
  overflow: auto;
`;

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;

type LPGridProps = {
  gridProps: GridProps;
  onResizeFinish?: () => void;
  label: string;
}

const BasicGridLayout: React.FC<LPGridProps> = ({ gridProps }) => {

  const mergedGridProps = { ...defaultGridProps, ...gridProps };
  return (
    <Root>
      <ResponsiveGridLayout
        className="layout"
        {...mergedGridProps}
      >
        <GridItemWrapper key="blue-eyes-dragon">
          <GridItemContent>Blue Eyes Dragon</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="dark-magician">
          <GridItemContent>Dark Magician</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="kuriboh">
          <GridItemContent>Kuriboh</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="spell-caster">
          <GridItemContent>Spell Caster</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="summoned-skull">
          <GridItemContent>Summoned Skull</GridItemContent>
        </GridItemWrapper>
      </ResponsiveGridLayout>
    </Root>
  );
};

export default BasicGridLayout;
