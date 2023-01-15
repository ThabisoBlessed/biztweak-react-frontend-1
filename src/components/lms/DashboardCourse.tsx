import React, { useEffect, useState } from "react";
import CourseImg from "../../images/course.png";
import AvatarImg from "../../images/avatar.png";
import { useNavigate } from "react-router-dom";
import { ICourse } from "../../model/course.model";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { IUser } from "../../model/user.model";
import { getAllcourses } from "../../services/cmp/course.service";

export const DashboardCourse = (props: any) => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(props.courses);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (event: any) => {
    const index = event.currentTarget.id;
    props.handleCourseClick(index);
  };

  const onStartCourse = (course: any) => {
    navigate("/lms/course", { state: { course } });
  };

  return (
    <div>
      <div className="row" id="courses">
        {courses.map((course: ICourse, i: number) => {
          return (
            <div
              id={course.id}
              data-testid={course.id}
              // onClick={(event) => handleClick(event)}
              key={i}
              className="col-lg-3 col-md-4 mb-3 mb-lg-0"
            >
              <div className="card">
                <div className="card-body">
                  <img
                    src={CourseImg}
                    className="img-fluid card-img-top"
                    alt=""
                  ></img>
                  <h5 className="my-2 text-dark">{course.title}</h5>
                  <p className="my-2 text-dark">
                    <img
                      src={AvatarImg}
                      className="rounded-circle"
                      width="30px"
                      alt=""
                    ></img>
                    {course.user.fullname}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="w-100 me-3 text-dark">
                      {courses.length} Lessons
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning w-[75%]"
                          role="progressbar"
                          aria-label="progress"
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="btn text-[white] hover:bg-[#16f0fb] bg-[#00c2cb]"
                        onClick={() => onStartCourse(course)}
                      >
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
  );
};
