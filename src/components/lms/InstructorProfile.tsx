import React, { useEffect, useState } from "react";
import { LMSMenu } from "./LMSMenu";
import CourseImg from "../../images/course.png";
import AvatarImg from "../../images/avatar.png";
import "./Profile.css";
import { IUser } from "../../model/user.model";
import { useLocation } from "react-router-dom";
import { ICourse } from "../../model/course.model";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { getAllcourses } from "../../services/cmp/course.service";

export const InstructorProfile = () => {
  const { state } = useLocation();
  const [selectedInstructor] = useState(state || ({} as IUser));
  const [instructor, setInstructor] = useState(selectedInstructor.instructor);
  const initCourses: ICourse[] = [];
  const [courses, setCourses] = useState(initCourses);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(instructor);
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
              <div className="card-header bg-white border-0">
                <h5 className="mb-0 text-2xl font-medium text-dark">
                  Instructor Profile
                </h5>
              </div>
              <div className="card-body border-0">
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col">
                        <img
                          src={AvatarImg}
                          className="h-[150px] w-[150px] center-block rounded-circle img-thumbnail"
                          alt=""
                        />
                      </div>
                      <div className="col"></div>
                    </div>

                    <h4 className="my-2 fw-600 text-dark">
                      {instructor?.fullname}
                    </h4>
                    <p className="text-dark small">Instructor</p>
                    <p className="small text-muted">
                      Total Course : {courses.length}
                    </p>
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <p>{instructor?.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="overflow-y-scroll h-[400px] row" id="courses">
                    {courses.map((course: ICourse, index: number) => {
                      return (
                        <div
                          className="col-lg-3 col-md-4 mb-3 mt-2 mb-lg-0"
                          key={index}
                        >
                          <div className="card">
                            <div className="card-body text-dark">
                              <img
                                src={course.logo}
                                className="img-fluid card-img-top h-[150px]"
                                alt=""
                              />
                              <h5 className="my-2">
                                {course.title}
                              </h5>
                              <p className="my-2">
                                <img
                                  src={AvatarImg}
                                  className="rounded-circle"
                                  width="30px"
                                  alt=""
                                />
                                BizTweak
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="w-100 me-3">
                                  10/40 Lessons
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-warning w-[75%]"
                                      role="progressbar"
                                      aria-label="Warning example"
                                      aria-valuenow={75}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    ></div>
                                  </div>
                                </div>
                                <div>
                                  <button className="btn btn-main">
                                    Continue
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
