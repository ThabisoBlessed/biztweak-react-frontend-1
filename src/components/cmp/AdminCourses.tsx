import React, { useEffect, useState } from "react";
import AvatarImg from "../../images/avatar.png";
import { useNavigate } from "react-router-dom";
import "./Course.css";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { getAllcourses, getCourse } from "../../services/cmp/course.service";
import { ICourse } from "../../model/course.model";
import { IUser } from "../../model/user.model";
import { getCurrentUser } from "../../services/lms/user.service";
import { ICompany } from "../../model/company.model";
import { CMPMenu } from "./CMPMenu";
import { AddCourse } from "./AddCourse";

export const AdminCourses = () => {
  const navigate = useNavigate();
  const initCourses: ICourse[] = [];
  const [courses, setCourses] = useState(initCourses);
  const [isLoading, setIsLoading] = useState(true);
  const [addCourse, setOnAddCourse] = useState(false);
  const [user, setUser] = useState({} as IUser);
  const [isInitLoad, setIsInitLoad] = useState(true);
  const initBiz: ICompany[] = [];
  const [businesses, setBusinesses] = useState(initBiz);
  const initRecommendedModules: (string | [])[][] = [];
  const [recommendedModules, setRecommendedModules] = useState(
    initRecommendedModules
  );

  useEffect(() => {
    if (isInitLoad) {
      getUser();
      setIsLoading(false);
      setIsInitLoad(false);
      getCourses();
    }
    // if (courses.length === 0) {
    //   getCourses();
    //   setIsLoading(false);
    // }
    console.log(user);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  const onEditCourse = async (course: ICourse) => {
    const couseResponse = await getCourse(course.id);
    if (couseResponse.data) {
      const course = couseResponse.data.package.data;
      navigate("/cmp/manage-courses/course-info", { state: { course } });
    }
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

  const getCourses = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const coursesResult = await getAllcourses();
      console.log(coursesResult);
      if (coursesResult && coursesResult.data && coursesResult.data.package) {
        const myCourses = coursesResult.data.package.data;
        setCourses(myCourses);
      }
    }
  };

  const onAddCourse = () => {
    setOnAddCourse(true);
  };

  const onClickInstructor = (instructor: IUser) => {
    navigate("/lms/instructor-profile", { state: { instructor } });
  };

  const onCancel = () => {
    setOnAddCourse(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <CMPMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="row mt-3">
            <div className="card bg-transparent border-0 mb-3">
              <div className="card-header bg-transparent border-0">
                <h5 className="mb-0 text-2xl font-medium text-dark">Courses</h5>
                {!addCourse ? (
                  <button
                    className="btn btn-lg mb-3 text-white hover:bg-[#16f0fb] w-[150px] bg-[#00c2cb] mt-2 "
                    onClick={onAddCourse}
                  >
                    Add Course
                  </button>
                ) : null}
              </div>
            </div>

            {isLoading ? (
              <div className="text-center text-4xl h-[100vh]">Loading...</div>
            ) : (
              <>
                {addCourse ? (
                  <div>
                    <AddCourse />

                    <button
                      onClick={onCancel}
                      className="btn btn-lg mb-3 hover:bg-[#16f0fb] w-[150px] hover:text-white bg-[#00c2cb] mt-2 text-[white]"
                    >
                      <span>Cancel</span>
                    </button>
                  </div>
                ) : (
                  <div className="col-12 row">
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
                                onClick={() => onEditCourse(course)}
                              >
                                Edit Course
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
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
