import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";
import { getCompany } from "../../services/business/company.service";
import { BusinessMenu } from "./BusinessMenu";

export const BusinessHealthReport = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedBusiness] = useState(state || {});
  const [business, setBusiness] = useState(selectedBusiness.business);

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
    console.log(business);
    getBusiness();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [navigate]);

  const getBusiness = async () => {
    const updatedBusiness = await getCompany(business.id);

     // Successful call return "data", failed call returns "response"
     const success = updatedBusiness.data;

     if (success) {
       setBusiness(updatedBusiness.data.package.data);
       console.log("updated business: ", business);
       navigate("/business/manage-business/business-health-report", {
         state: { business },
       });
     }
  }

  const onViewBizReport = () => {
    navigate("/business/manage-business/report-summary", { state: { business } });
  };

  return (
    <div className="row w-full m-0 p-0">
      <div className="col-md-3 border-end">
        <BusinessMenu />
      </div>
      <div className="col-md-9 bg-white">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="alert alert-success mt-4">
              <strong>
                <i className="fa fa-check"></i> SUCCESS!
              </strong>
              &nbsp;Company Assessment Completed.
            </div>
            <div className="alert alert-info mt-4">
              <strong>
                <i className="fa fa-check"></i> SUCCESS!
              </strong>
              &nbsp;Company Profile Completed.
            </div>
            <div className="alert alert-primary mt-4">
              <strong>
                <i className="fa fa-info-circle"></i> Congratulations!
              </strong>
              &nbsp;Your report is ready.
            </div>
            <h2>Business Health Report</h2>
            <p>
              In this nicely designed report you can check your business factors
              in graphical way and understand easily, moreover you will also get
              recommendations from our system based on the assessment.
            </p>
            <button
              className="btn w-[150px] text-white bg-[#00c2cb] hover:bg-[#16f0fb]"
              onClick={onViewBizReport}
            >
              <i className="fa fa-file-alt"></i> View Biz Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
