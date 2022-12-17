import React from "react";
import { ProfileMenu } from "../auth/ProfileMenu";
import { Chart } from "react-google-charts";

export const ReportSummary = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  return (
    <div>
      <div className="row w-full m-0 p-0">
        <div className="col-md-3 border-end">
          <ProfileMenu />
        </div>
        <div className="col-md-9 bg-white">
          <div className="card shadow-lg p-1 mb-5 bg-white rounded">
            <div className="card-body">
              <h2 className="mt-3 text-3xl text-dark">
                My Company's Report Summary
                <button className="btn btn-sm text-white bg-[#00c2cb] btn-info p-3 float-end">
                  Download Report
                </button>
              </h2>
              <p className="d-flex mt-4 text-dark">
                <i className="fa fa-info me-3"></i> We are generating revenue,
                we would like to grow through investment
              </p>

              <div className="card shadow-lg p-3 mb-5 text-dark mt-3 bg-white rounded align-content-center">
                <h6>Sales Score</h6>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
          {/* <Chart
            chartType="ScatterChart"
            data={[
              ["Age", "Weight"],
              [4, 5.5],
              [8, 12],
            ]}
            width="100%"
            height="400px"
            legendToggle
          /> */}
        </div>
      </div>
    </div>
  );
};
