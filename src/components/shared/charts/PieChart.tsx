import React from "react";
import { Chart } from "react-google-charts";

export const PieChart = (props: any) => {
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={props.data}
        options={props.options}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};
