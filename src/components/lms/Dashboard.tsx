import React, { useEffect, useState } from "react";
import { LMSMenu } from "./LMSMenu";
import "./LMS.css";
import FileImg from "../../images/icons/file.png";
import ClockImg from "../../images/icons/clock.png";
import CheckImg from "../../images/icons/check.png";
import CoinsImg from "../../images/icons/coins.png";
import { DashboardCourse } from "./DashboardCourse";
import { ICourse } from "../../model/course.model";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { IUser } from "../../model/user.model";
import { getAllcourses } from "../../services/cmp/course.service";

export const Dashboard = () => {
  const initCourses: ICourse[] = [];
  const [courses, setCourses] = useState(initCourses);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (courses.length === 0) {
      getCourses();
      setIsLoading(false);
    }
  });
  

  const getCourses = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const userResult: IUser = JSON.parse(storageUser);
      const coursesResult = await getAllcourses();
      if (coursesResult.data) {
        const myCourses: ICourse[] = coursesResult.data.package.data;
        setCourses(
          myCourses.filter((c) => c.user.id === Number(userResult.id))
        );
      }
    }
  };

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
                BizTweak assessment and full report. You need to know and apply
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
                      <h1 className="m-0 fw-bold">{courses.length}</h1>
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

            <div className="mt-2 overflow-y-scroll h-[400px]">
              <DashboardCourse courses={courses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
