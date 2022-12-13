import React from "react";
import { LMSMenu } from "./LMSMenu";

export const CourseDashboard = () => {
  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <LMSMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="card-header bg-transparent border-0">
              <div className="card shadow mt-3">
                <div className="alert mb-0">
                  <i className="fa fa-exclamation-circle text-warning me-2"></i>{" "}
                  The following course are recommended as a result of your
                  BizTweak assesmenmt and full report. You need to know and
                  apply the following information in your bussiness.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
