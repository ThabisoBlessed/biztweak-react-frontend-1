import React from "react";
import { ProfileMenu } from "../auth/ProfileMenu";

export const BusinessHealthReport = () => {
  return (
    <div className="row w-full m-0 p-0">
      <div className="col-md-3 border-end">
        <ProfileMenu />
      </div>
      <div className="col-md-9 bg-white">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="alert alert-success mt-4">
              <strong>
                <i className="fa fa-check"></i> SUCCESS!
              </strong>
              Company Assessment Completed.
            </div>
            <div className="alert alert-info mt-4">
              <strong>
                <i className="fa fa-check"></i> SUCCESS!
              </strong>
              Company Profile Completed.
            </div>
            <div className="alert alert-primary mt-4">
              <strong>
                <i className="fa fa-info-circle"></i> Congratulations!
              </strong>
              Your report is ready.
            </div>
            <h2>Business Health Report</h2>
            <p>
              In this nicely designed report you can check your business factors
              in graphical way and understand easily, moreover you will also get
              recommendations from our system based on the assessment.
            </p>
            <a
              className="btn btn-info"
              href="https://biztweak.org.za/public/46/report-summary"
            >
              <i className="fa fa-file-alt"></i> View Biz Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
