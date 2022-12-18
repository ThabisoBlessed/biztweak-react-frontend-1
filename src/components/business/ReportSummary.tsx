import React, { useEffect, useState } from "react";
import { BusinessMenu } from "./BusinessMenu";
import { BarChart } from "../shared/charts/BarChart";
import { PieChart } from "../shared/charts/PieChart";
import { FullReport } from "./FullReport";
import { Recommendations } from "./Recommendations";
import { Webinar } from "./Webinar";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import { useLocation, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";
import { IBusinessMenuBusinessModel } from "../../model/business-menu-business-model";

export const ReportSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedBusiness] = useState(state || {});
  const [selectedBusinessValue, setSelectedBusinessValue] = useState(
    JSON.parse(selectedBusiness.selecteBusiness) as IBusinessMenuBusinessModel
  );

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
    console.log(selectedBusinessValue);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [navigate]);

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

  const onDownloadReport = () => {
    let domElement: any = document.getElementById("myReport");
    htmlToImage
      .toPng(domElement)
      .then(function (dataUrl) {
        console.log(dataUrl);
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, "PNG", 10, 20, 380, 200);
        pdf.save("download.pdf");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div>
      <div className="row w-full m-0 p-0">
        <div className="col-md-3 border-end">
          <BusinessMenu />
        </div>
        <div className="col-md-9 bg-white">
          <div className="card shadow-lg p-1 mb-5 bg-white rounded">
            <div className="card-body">
              <h2 className="mt-3 text-3xl text-dark">
                {selectedBusinessValue.name}'s Report Summary
                <button
                  className="btn btn-sm text-white bg-[#00c2cb] btn-info p-3 float-end"
                  onClick={onDownloadReport}
                >
                  Download Report
                </button>
              </h2>
              <p className="d-flex mt-4 text-dark">
                <i className="fa fa-info me-3"></i> We are generating revenue,
                we would like to grow through investment
              </p>

              <div
                id="myReport"
                className="card shadow-lg p-3 mb-5 text-dark mt-3 bg-white rounded align-content-center"
              >
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

              <div className="full-report">
                <FullReport />
              </div>

              <div className="recommendation">
                <Recommendations />
              </div>

              <div className="webinar">
                <Webinar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
