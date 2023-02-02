import React, { useEffect, useState } from "react";
import { BusinessMenu } from "./BusinessMenu";
import { BarChart } from "../shared/charts/BarChart";
import { PieChart } from "../shared/charts/PieChart";
import { Recommendations } from "./Recommendations";
import { useLocation, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";
import { FullReport } from "./FullReport";
import { getBusinessAssessment, getCompany } from "../../services/business/company.service";

export const ReportSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedState] = useState(state || {});
  const [business, setBusiness] = useState(selectedState.business);
  const [isViewReportMode, setIsViewReportMode] = useState(selectedState.isViewReportMode);
  const initRecommendedModules: (string | [])[][] = [];
  const [recommendedModules, setRecommendedModules] = useState(
    initRecommendedModules
  );
  // const [isNewCompany, setIsNewCompany] = useState(selectedState.isNewCompany);
  const initData: (string | number)[][] = [
    ["Elements", "Priority Elements Percentages"],
  ];
  const [data, setData] = useState(initData);
  const [percentagesMap, setPercentagesMap] = useState({} as any);
  const [fullReport, setFullReport] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
    if (isInitLoad) {
      findBusiness(business.id);
    }
    console.log(business);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  /**
   * Finds business by id and sets report
   * @param id 
   */
  const findBusiness = async (id: number) => {
    const businessResult = await getCompany(id);
    const data = businessResult.data.package.data;
    if (data) {
      setBusiness(data);
      getReports(data.assessment);
    }

    setFullReport(data.assessment.questionsAndAnswers);
    setIsInitLoad(false);
  }

  /**
   * Sets recommended modules and chart data
   * @param assessment 
   */
  const getReports = async(assessment: any) => {
    
    // Set charts data
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
    initData.push(["Value Proposition",assessment.report["Value Proposition"]]);
    initData.push(["Key Partners",assessment.report["Key Partners"]]);
    initData.push(["Current Alternatives",assessment.report["Current Alternatives"]]);
    initData.push(["Business and Customers",assessment.report["Business and Customers"]]);
    initData.push(["Ownership and Mindset",assessment.report["Ownership and Mindset"]]);
    initData.push(["Delivery Expertise",assessment.report["Delivery Expertise"]]);
    initData.push(["Marketing and Sales",assessment.report["Marketing and Sales"]]);

    const percentages = {
      "Compliance and Certification": assessment.report["Compliance and Certification"],
      "Cost Structure": assessment.report["Cost Structure"],
      "Customer Segments": assessment.report["Customer Segments"],
      "Functional Capability": assessment.report["Functional Capability"],
      "Key Resources": assessment.report["Key Resources"],
      "Proof of Concept": assessment.report["Proof of Concept"],
      "Prototype": assessment.report["Prototype"],
      "Revenue Streams": assessment.report["Revenue Streams"],
      "Value Proposition": assessment.report["Value Proposition"],
      "Key Partners": assessment.report["Key Partners"],
      "Current Alternatives": assessment.report["Current Alternatives"],
      "Business and Customers": assessment.report["Business and Customers"],
      "Ownership and Mindset": assessment.report["Ownership and Mindset"],
      "Delivery Expertise": assessment.report["Delivery Expertise"],
      "Marketing and Sales": assessment.report["Marketing and Sales"],
   };
   
   setPercentagesMap(percentages);

   console.log("percentages", percentages);
   console.log("percentages", percentages["Compliance and Certification"]);

    setData(initData);

    // Set recommendations
    const initRecommendations: (string | [])[][] = [];
    if (assessment.recommendedModules && assessment.recommendedModules["Strategic Planning"]) {
      initRecommendations.push([
        "Strategic Planning",
        assessment.recommendedModules["Strategic Planning"],
      ]);
    }
    if (assessment.recommendedModules && assessment.recommendedModules["Market Intelligence"]) {
      initRecommendations.push([
        "Market Intelligence",
        assessment.recommendedModules["Market Intelligence"],
      ]);
    }
    if (assessment.recommendedModules && assessment.recommendedModules["Talent Management"]) {
      initRecommendations.push([
        "Talent Management",
        assessment.recommendedModules["Talent Management"],
      ]);
    }
    if (assessment.recommendedModules && assessment.recommendedModules["Process Management"]) {
      initRecommendations.push([
        "Process Management",
        assessment.recommendedModules["Process Management"],
      ]);
    }
    if (assessment.recommendedModules && assessment.recommendedModules["Product Development"]) {
      initRecommendations.push([
        "Product Development",
        assessment.recommendedModules["Product Development"],
      ]);
    }
    if (assessment.recommendedModules && assessment.recommendedModules["Marketing and Sales"]) {
      initRecommendations.push([
        "Marketing and Sales",
        assessment.recommendedModules["Marketing and Sales"],
      ]);
    }
    
    setRecommendedModules(initRecommendations);
    setIsLoading(false);

    
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

              <div className="full-report">
                {!isInitLoad && !isLoading ? (
                  <FullReport fullReport={fullReport} chartData={data} percentages={percentagesMap} />
                ) : null}
              </div>

              <div className="recommendation">
                {isLoading ? null : (
                  <Recommendations recommendedModules={recommendedModules} />
                )}
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
