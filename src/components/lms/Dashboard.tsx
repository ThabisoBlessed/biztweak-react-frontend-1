import React, { useEffect, useState } from "react";
import { LMSMenu } from "./LMSMenu";
import "./LMS.css";
import FileImg from "../../images/icons/file.png";
import ClockImg from "../../images/icons/clock.png";
import CheckImg from "../../images/icons/check.png";
import CoinsImg from "../../images/icons/coins.png";
import { DashboardCourse } from "./DashboardCourse";

export const Dashboard = () => {
  const courses: any[] = [
    {
      id: "test1",
      title: "E-Bussiness Managment course learning",
      provider: "BizTweak",
      lessons: "10/40",
    },
    {
      id: "test2",
      title: "E-Bussiness Managment course learning",
      provider: "BizTweak",
      lessons: "10/40",
    },
    {
      id: "test3",
      title: "E-Bussiness Managment course learning",
      provider: "BizTweak",
      lessons: "10/40",
    },
    {
      id: "test4",
      title: "E-Bussiness Managment course learning",
      provider: "BizTweak",
      lessons: "10/40",
    },
  ];
  const [dashboardCourses, setDashboardCourses] = useState([...courses]);

  useEffect(() => {}, []);

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <LMSMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="card shadow mt-3">
              <div className="alert mb-0">
                <i className="fa fa-exclamation-circle text-warning me-2"></i>
                The following courses are recommended as a result of your
                BizTweak assesmenmt and full report. You need to know and apply
                the following information in your bussiness.
              </div>
            </div>

            <div className="card shadow mt-2">
              <div className="card-header bg-white border-0">
                <h5 className="mb-0 text-2xl font-medium text-dark">
                  Overview
                </h5>
              </div>
              <div className="card-body border-0">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-1 p-4 rounded-2 text-dark bg-[#b5e4ca40]">
                      <img src={FileImg} width="40px" alt=""></img>
                      <p className="small my-2">Total Course</p>
                      <h1 className="m-0 fw-bold">265</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-2 p-4 rounded-2 text-dark bg-[#d8e5eb]">
                      <img src={CheckImg} width="40px" alt=""></img>
                      <p className="small my-2">Completed</p>
                      <h1 className="m-0 fw-bold">334</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-3 p-4 rounded-2 text-dark bg-[#dfdbec]">
                      <img src={ClockImg} width="40px" alt=""></img>
                      <p className="small my-2">Training Time</p>
                      <h1 className="m-0 fw-bold">112</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-4 p-4 rounded-2 text-dark bg-[#fff65a40]">
                      <img src={CoinsImg} width="40px" alt=""></img>
                      <p className="small my-2">Points</p>
                      <h1 className="m-0 fw-bold">12K</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <DashboardCourse dashboardCourses={dashboardCourses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
