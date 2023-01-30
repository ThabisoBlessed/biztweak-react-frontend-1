import React, { useEffect, useState } from "react";
import { BusinessMenu } from "./BusinessMenu";
import { BarChart } from "../shared/charts/BarChart";
import { PieChart } from "../shared/charts/PieChart";
import { FullReport } from "./FullReport";
import { Recommendations } from "./Recommendations";
import { useLocation, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";

export const ReportSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedState] = useState(state || {});
  const [business, setBusiness] = useState(selectedState.business);
  const initRecommendedModules: string[] = [];
  const [recommendedModules, setRecommendedModules] = useState(
    initRecommendedModules
  );
  const [isNewCompany, setIsNewCompany] = useState(selectedState.isNewCompany);
  const initData: (string | number)[][] = [
    ["Elements", "Priority Elements Percentages"],
  ];
  const [data, setData] = useState(initData);
  const initModules: (string | number)[][] = [];
  const [modules, setModules] = useState(initModules);
  const initFullReport: (string | number)[][][] = [];
  const [fullReport, setFullReport] = useState(initFullReport);
  const [assessment, setAssessment] = useState(business);

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
    if (business && data.length === 1) {
      getReports();
    }
    console.log(data);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // setRecommendedModules(business.recommendedModules);
  }, [navigate]);

  // Set charts data
  const getReports = () => {
    const reports = isNewCompany
      ? business.report
      : JSON.parse(business.report);

    const initData: (string | number)[][] = [
      ["Elements", "Priority Elements Percentages"],
    ];
    initData.push([
      "Compliance and Certification",
      assessment.report["Compliance and Certification"],
    ]);
    initData.push(["Cost Structure", assessment.report["Cost Structure"]]);
    initData.push([
      "Customer Segments",
      assessment.report["Customer Segments"],
    ]);
    initData.push([
      "Functional Capability",
      assessment.report["Functional Capability"],
    ]);
    initData.push(["Key Resources", assessment.report["Key Resources"]]);
    initData.push(["Proof of Concept", assessment.report["Proof of Concept"]]);
    initData.push(["Prototype", assessment.report["Prototype"]]);
    initData.push(["Revenue Streams", assessment.report["Revenue Streams"]]);
    initData.push([
      "Value Proposition",
      assessment.report["Value Proposition"],
    ]);

    setData(initData);
  };

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
          <BusinessMenu />
        </div>
        <div className="col-md-9 bg-white">
          <div className="card mt-2 shadow-lg p-1 mb-5 bg-white rounded">
            <div className="card-body">
              <h2 className="mt-3 text-3xl text-dark">
                {business.name}'s Report Summary
                <button className="btn btn-sm text-white bg-[#00c2cb] btn-info p-3 float-end">
                  Download Report
                </button>
              </h2>
              <p className="d-flex mt-4 text-dark">
                <i className="fa fa-info m-0"></i>&nbsp;We are generating
                revenue, we would like to grow through investment
              </p>

              <div
                id="myReport"
                className="card shadow-lg p-3 mb-5 text-dark mt-3 bg-white rounded align-content-center"
              >
                <h6>Sales Score</h6>
                <div id="doughnutChart" className="card-body m-0 p-0">
                  {!data ? null : (
                    <PieChart data={data} width={"100%"} height={"300px"} />
                  )}
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

              {/* <div className="full-report">
                {modules && recommendedModules && fullReport ? (
                  <FullReport fullReport={fullReport} />
                ) : null}
              </div> */}

              <div className="recommendation">
                {assessment ? (
                  <Recommendations
                    recommendedModules={assessment.recommendedModules}
                    // data={data}
                    // modules={assessment.}
                  />
                ) : null}
              </div>

              {/* <div className="webinar">
                <Webinar />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
