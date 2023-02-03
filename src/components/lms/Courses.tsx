import React, { useEffect, useState } from "react";
import { LMSMenu } from "./LMSMenu";
import CourseImg from "../../images/course.png";
import AvatarImg from "../../images/avatar.png";
import { useNavigate } from "react-router-dom";
import "./Course.css";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { getAllcourses } from "../../services/cmp/course.service";
import { ICourse } from "../../model/course.model";
import { IUser } from "../../model/user.model";
import { IAttendance } from "../../model/attendance.model";
import { getAllUsers } from "../../services/admin/admin.service";
import { getCurrentUser } from "../../services/lms/user.service";
import { UserProfile } from "../shared/UserProfile";
import { listCompaniesForLoggedInUser } from "../../services/business/company.service";

export const Courses = () => {
  const navigate = useNavigate();
  const initCourses: ICourse[] = [];
  const [courses, setCourses] = useState(initCourses);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({} as IUser);
  const [isInitLoad, setIsInitLoad] = useState(true);
  const [businesses, setBusinesses] = useState();

  useEffect(() => {
    if (isInitLoad) {
      getUser();
      getBusinesses();
      setIsLoading(false);
      setIsInitLoad(false)
    }
    // if (courses.length === 0) {
    //   getCourses();
    //   setIsLoading(false);
    // }
    console.log(user);
  });

  const onStartCourse = (course: ICourse) => {
    navigate("/lms/course", { state: { course } });
  };

  const getUser = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const userResult: IUser = JSON.parse(storageUser);

      const profile = await getCurrentUser(userResult.id);
      const userProfile = profile.data.package.data;
      setUser(userProfile);
    }
  };

  const getBusinesses = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const businessesResult = await listCompaniesForLoggedInUser();
      if (businessesResult.data) {
        const myBusinesses = businessesResult.data.package.data;
        setBusinesses(myBusinesses);
        console.log(myBusinesses);
      }
    }
  };

  const getCourses = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const coursesResult = await getAllcourses();
      if (coursesResult.data) {
        const myCourses = coursesResult.data.package.data;
        setCourses(myCourses);
        console.log(myCourses);
      }
    }
  };

  const onClickInstructor = (instructor: IUser) => {
    navigate("/lms/instructor-profile", { state: { instructor } });
  };

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <LMSMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="row mt-3">
            <div className="card bg-transparent border-0 mb-3">
              <div className="card-header bg-transparent border-0">
                <h5 className="mb-0 text-2xl font-medium text-dark">Courses</h5>
              </div>
            </div>

            {isLoading ? (
              <div className="text-center text-4xl h-[100vh]">Loading...</div>
            ) : (
              <>
                {courses.map((course: ICourse, index: number) => {
                  return (
                    <div className="col-lg-3 col-md-4 mb-3" key={index}>
                      <div className="card">
                        <div className="card-body">
                          <img
                            src={course.logo}
                            className="img-fluid card-img-top h-[150px]"
                            alt="logo"
                          />
                          <h5 className="my-2">{course.title}</h5>
                          <div className="d-flex justify-content-between align-items-center cursor-pointer">
                            <div
                              className="w-100 me-3 d-flex align-items-center"
                              onClick={() => onClickInstructor(course.user)}
                            >
                              <img
                                src={AvatarImg}
                                className="rounded-circle me-2 w-[30px] h-[30px]"
                                alt=""
                              />
                              <div>
                                <div>{course.user.fullNames}</div>
                                <div className="small">
                                  {
                                    courses.filter(
                                      (c) => c.user.id === course.user.id
                                    ).length
                                  }{" "}
                                  Lessons
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            className="btn btn-lg mb-3 text-white hover:bg-[#16f0fb] w-[150px] bg-[#00c2cb] mt-2 "
                            onClick={() => onStartCourse(course)}
                          >
                            Start Course
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {/* <div className="line-pagination">
              <div className="d-flex justify-content-between">
                <button className="arrow-btn">
                  <i className="fa fa-arrow-left"></i>
                </button>
                <button className="arrow-btn">
                  <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
