import React from "react";
import { LMSMenu } from "./LMSMenu";
import "./LMS.css";
import FileImg from "../../images/icons/file.png"

export const CourseDashboard = () => {
  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <LMSMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="card-header bg-transparent border-0 w-full">
              <div className="card shadow mt-3">
                <div className="alert mb-0">
                  <i className="fa fa-exclamation-circle text-warning me-2"></i>{" "}
                  The following course are recommended as a result of your
                  BizTweak assesmenmt and full report. You need to know and
                  apply the following information in your bussiness.
                </div>
              </div>
            </div>

            <div className="card shadow m-3">
              <div className="card-header bg-white border-0">
                <h5 className="mb-0 text-dark">Overview</h5>
              </div>
              <div className="card-body border-0">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-1 p-4 rounded-2 text-dark bg-[#b5e4ca40]">
                      <img
                        src={FileImg}
                        width="40px"
                        alt=""
                      ></img>
                      <p className="small my-2">Total Course</p>
                      <h1 className="m-0 fw-bold">265</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-2 p-4 rounded-2 text-dark bg-[#d8e5eb]">
                      <img
                        src="../../images/icons/check.png"
                        width="40px"
                        alt=""
                      ></img>
                      <p className="small my-2">Completed</p>
                      <h1 className="m-0 fw-bold">334</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-3 p-4 rounded-2 text-dark bg-[#dfdbec]">
                      <img
                        src="../../images/icons/clock.png"
                        width="40px"
                        alt=""
                      ></img>
                      <p className="small my-2">Training Time</p>
                      <h1 className="m-0 fw-bold">112</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-4 p-4 rounded-2 text-dark bg-[#fff65a40]">
                      <img
                        src="../../images/icons/coins.png"
                        width="40px"
                        alt=""
                      ></img>
                      <p className="small my-2">Points</p>
                      <h1 className="m-0 fw-bold">12K</h1>
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
