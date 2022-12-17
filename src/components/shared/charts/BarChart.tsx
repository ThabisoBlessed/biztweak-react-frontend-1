import React from 'react';
import { Chart } from "react-google-charts";

export const BarChart = (props: any) => {
  return (
    <div>
      <Chart
        chartType="ColumnChart"
        data={props.data}
        options={props.options}
        width={props.width}
        height={props.height}
      />
    </div>
  )
}
