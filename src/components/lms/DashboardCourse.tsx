import React, { useEffect, useState } from "react";
import CourseImg from "../../images/course.png";
import AvatarImg from "../../images/avatar.png";
import { useNavigate } from "react-router-dom";

export const DashboardCourse = (props: any) => {
  const navigate = useNavigate();
  
  const [dashboardCourses, setDashboardCourse] = useState(
    props.dashboardCourses
  );

  useEffect(() => {
    console.log(dashboardCourses);
  }, [props.dashboardCourses]);

  const handleClick = (event: any) => {
    const index = event.currentTarget.id;
    props.handleCourseClick(index);
  };

  const onStartCourse = () => {
    navigate("/lms/course");
  }

  return (
    <div className="row col-12">
      {dashboardCourses.map((course: any, i: number) => {
        return (
          <div
            id={course.id}
            data-testid={course.id}
            onClick={(event) => handleClick(event)}
            key={i}
            className="col-lg-3 col-md-4 mb-3 mb-lg-0"
          >
            <div className="card">
              <div className="card-body text-dark">
                <img
                  src={CourseImg}
                  className="img-fluid card-img-top"
                  alt=""
                ></img>
                <h5 className="my-2">{course.title}</h5>
                <p className="my-2">
                  <img
                    src={AvatarImg}
                    className="rounded-circle"
                    width="30px"
                    alt=""
                  ></img>
                  {course.provider}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="w-100 me-3">
                    {course.lessons} Lessons
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
                    <button className="btn btn-main bg-[#00c2cb] text-[white]" onClick={onStartCourse}>Continue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
