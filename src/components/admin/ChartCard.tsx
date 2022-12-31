import React from "react";
import { PieChart } from "../shared/charts/PieChart";

export const ChartCard = () => {
  const data = [
    ["Elements", "Priority Elements"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
  return (
    <div className="card h-100 shadow">
      <div className="card-header bg-white border-0">
        <h5 className="mb-0 text-2xl font-medium text-dark">Concept chart</h5>
      </div>
      <div className="card-body border-0">
        <PieChart data={data} width={"100%"} height={"200px"} />
      </div>
    </div>
  );
};
