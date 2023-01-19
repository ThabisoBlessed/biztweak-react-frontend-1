import React, { useEffect, useState } from "react";
import { LMSMenu } from "./LMSMenu";
import "./LMS.css";
import FileImg from "../../images/icons/file.png";
import CheckImg from "../../images/icons/check.png";
import ClockImg from "../../images/icons/clock.png";
import CoinsImg from "../../images/icons/coins.png";
import { DashboardCourse } from "./DashboardCourse";
import { ICourse } from "../../model/course.model";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { IUser } from "../../model/user.model";
import { getAllcourses } from "../../services/cmp/course.service";
import { getCurrentUser } from "../../services/lms/user.service";

export const Dashboard = () => {
  const initCourses: ICourse[] = [];
  const [courses, setCourses] = useState(initCourses);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({} as IUser);
  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    if (isInitLoad) {
      getProfile();
      getCourses();
    }
    setIsInitLoad(false);
  });

  const getProfile = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const userResult: IUser = JSON.parse(storageUser);
      const profile = await getCurrentUser(userResult.id);
      setUser(profile.data.package.data);
      setIsLoading(false);

      console.log(profile);
    }
  };
  
  const getCourses = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const userResult: IUser = JSON.parse(storageUser);
      const coursesResult = await getAllcourses();
      console.log(coursesResult);
      if (coursesResult.data) {
        const myCourses: ICourse[] = coursesResult.data.package.data;
        const filtered = myCourses.filter((c) => c.user.id === Number(userResult.id));
        setCourses(filtered);
      }
    }
    console.log();
  };

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <LMSMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
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
                      <p className="small my-2">Total Courses</p>
                      <h1 className="m-0 fw-bold">{courses.length}</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-2 p-4 rounded-2 text-dark bg-[#d8e5eb]">
                      <img src={CheckImg} width="40px" alt=""></img>
                      <p className="small my-2">Completed</p>
                      <h1 className="m-0 fw-bold">5</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-3 p-4 rounded-2 text-dark bg-[#dfdbec]">
                      <img src={ClockImg} width="40px" alt=""></img>
                      <p className="small my-2">Training Time</p>
                      <h1 className="m-0 fw-bold">6</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-4 p-4 rounded-2 text-dark bg-[#fff65a40]">
                      <img src={CoinsImg} width="40px" alt=""></img>
                      <p className="small my-2">Points</p>
                      <h1 className="m-0 fw-bold">7</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 overflow-y-scroll h-[400px]">
             {courses.length > 0 ?  <DashboardCourse courses={courses} /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
