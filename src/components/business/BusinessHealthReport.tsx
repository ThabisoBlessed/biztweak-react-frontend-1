import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";
import { BusinessMenu } from "./BusinessMenu";

export const BusinessHealthReport = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [navigate]);

  const onViewBizReport = () => {
    navigate("/business/manage-business/report-summary");
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
            <button className="btn w-[150px] text-white bg-[#00c2cb] hover:bg-[#16f0fb]" onClick={onViewBizReport}>
              <i className="fa fa-file-alt"></i> View Biz Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
