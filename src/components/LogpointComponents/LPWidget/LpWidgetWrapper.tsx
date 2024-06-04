import React, { useMemo } from "react";
import Chart from "../../../components/Chart/Chart";
import { areaConfig, barConfig, lineConfig, pieConfig, sankeyConfig } from "../../../components/LogpointComponents/LPWidget/utils";
import { LPWidgetWrapperProps } from "./types";

const LPWidgetWrapper: React.FC<LPWidgetWrapperProps> = ({ chartType = 'line'}) => {

  const chartConfig = useMemo(() => {
    switch (chartType) {
      case 'line':
        return lineConfig;
      case 'bar':
        return barConfig;
      case 'column':
        return barConfig;
      case 'pie':
        return pieConfig
      case 'area':
        return areaConfig;
      case 'sankey':
        return sankeyConfig;
      default:
        return lineConfig;
    }
  }, [ chartType ] );

  return <Chart config={chartConfig} defaultInitialWidth={200} chartType={chartType} />
};

export default LPWidgetWrapper;
