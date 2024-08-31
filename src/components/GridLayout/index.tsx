import './grid.css';

import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { GridProps } from "./types";
import React from "react";
import { defaultGridProps } from "./constant";
import styled from 'styled-components';

const ResponsiveGridLayout = WidthProvider(Responsive);

type LPGridProps = {
  gridProps: GridProps;
  onResizeFinish?: () => void;
  label: string;
}

const GridContainer = styled.div`
  padding: 16px;
`

const GridItemWrapper = styled.div`
  background: #f5f5f5;
  overflow: auto;
`

const GridItemContent = styled.div`
  padding: 8px;
`

const BasicGridLayout: React.FC<LPGridProps> = ({ gridProps }) => {

  const mergedGridProps = { ...defaultGridProps, ...gridProps };
  return (
    <GridContainer>
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
    </GridContainer>
  );
};

export default BasicGridLayout;
