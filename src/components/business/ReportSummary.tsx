import React from "react";
import { ProfileMenu } from "../auth/ProfileMenu";
import { BarChart } from "../shared/charts/BarChart";
import { PieChart } from "../shared/charts/PieChart";

export const ReportSummary = () => {
  const data = [
    ["Elements", "Priority Elements"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
  };

  const columnChartOptions = {
    chart: {
      title: "Priorities",
      subtitle: "Priority Elements Percentages",
    },
    colors: ["#00c2cb"],
    // backgroundColor: "#00c2cb",
  };

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
                <div id="doughnutChart" className="card-body m-0 p-0">
                  <PieChart data={data} width={"100%"} height={"300px"} />
                </div>
              </div>

              <div className="card shadow-lg p-3 mb-5 text-dark mt-3 bg-white rounded align-content-center">
                <h6>Sales Score</h6>
                <div id="barChart" className="card-body m-0 p-0">
                  <BarChart
                    data={data}
                    width={"100%"}
                    height={"300px"}
                    options={columnChartOptions}
                  />
                </div>
              </div>

              <div className="full-report row my-5">
                <h2 className="mt-3 col-12 text-3xl text-dark">Full Report</h2>
                <div className="col-md-6">
                  <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                      <div className="accordion-item bg-transparent">
                        <h1
                          className="accordion-header mb-0 mt-0"
                          id="heading1"
                        >
                          <button
                            className="accordion-button collapsed bg-[#f1feff]"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse1"
                            aria-expanded="false"
                            aria-controls="collapse1"
                          >
                            Business Concept
                          </button>
                        </h1>
                        <div
                          id="collapse1"
                          className="accordion-collapse collapse show"
                        >
                          <div className="accordion-body">
                            <p className="text-dark">Business Diagnosis</p>
                            <div id="accordion1" className="accordion">
                              <div className="accordion-item bg-transparent cust-accordion">
                                <h2
                                  className="accordion-header"
                                  id="headingOne"
                                >
                                  <button
                                    className="accordion-button collapsed bg-[#f1feff]"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse2"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                    data-bs-parent="#accordion1"
                                  >
                                    Priority Elements
                                  </button>
                                  <div
                                    id="collapse2"
                                    className="accordion-body"
                                  >
                                    <ul className="list-group">
                                      <li className="list-group-item bg-[#f1feff]">
                                        <p className="text-2xl">
                                          Value proposition
                                          <span className="badge float-end rounded-pill bg-[#00c2cb]">
                                            30%
                                          </span>
                                        </p>
                                        <div className="clearfix"></div>
                                        <ul className="list-group list-group-numbered">
                                          <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                            <p className="mb-0 color-code text-sm">
                                              Problem being solved not
                                              determined
                                            </p>
                                          </div>
                                          <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                            <p className="mb-0 color-code text-sm">
                                              Value being delivered not
                                              determined.
                                            </p>
                                          </div>
                                          <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-success">
                                            <p className="mb-0 color-code text-sm">
                                              Customer needs have been
                                              determined.
                                            </p>
                                          </div>
                                          <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                            <p className="mb-0 color-code text-sm">
                                              Unique selling point not
                                              determined.
                                            </p>
                                          </div>
                                          <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                            <p className="mb-0 color-code text-sm">
                                              No elevator pitch
                                            </p>
                                          </div>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                      <div className="accordion-item bg-transparent">
                        <h1
                          className="accordion-header mb-0 mt-0"
                          id="heading1"
                        >
                          <button
                            className="accordion-button collapsed bg-[#f1feff]"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse1"
                            aria-expanded="false"
                            aria-controls="collapse1"
                          >
                            Business Structure
                          </button>
                        </h1>
                        <div
                          id="collapse1"
                          className="accordion-collapse collapse show"
                        >
                          <div className="accordion-body">
                            <p className="text-dark">Business Diagnosis</p>
                            <div id="accordion1" className="accordion">
                              <div className="accordion-item bg-transparent cust-accordion">
                                <h2
                                  className="accordion-header"
                                  id="headingOne"
                                >
                                  <button
                                    className="accordion-button collapsed bg-[#f1feff]"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse2"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                    data-bs-parent="#accordion1"
                                  >
                                    Priority Elements
                                  </button>
                                  <div
                                    id="collapse2"
                                    className="accordion-body"
                                  >
                                    <ul className="list-group">
                                      <li className="list-group-item bg-[#f1feff]">
                                        <p className="text-2xl">
                                          Value proposition
                                          <span className="badge float-end rounded-pill bg-[#00c2cb]">
                                            30%
                                          </span>
                                        </p>
                                        <div className="clearfix"></div>
                                        <ul className="list-group list-group-numbered">
                                          <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                            <p className="mb-0 color-code text-sm">
                                              Problem being solved not
                                              determined
                                            </p>
                                          </div>
                                          <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                            <p className="mb-0 color-code text-sm">
                                              Value being delivered not
                                              determined.
                                            </p>
                                          </div>
                                          <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-success">
                                            <p className="mb-0 color-code text-sm">
                                              Customer needs have been
                                              determined.
                                            </p>
                                          </div>
                                          <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                            <p className="mb-0 color-code text-sm">
                                              Unique selling point not
                                              determined.
                                            </p>
                                          </div>
                                          <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                            <p className="mb-0 color-code text-sm">
                                              No elevator pitch
                                            </p>
                                          </div>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
