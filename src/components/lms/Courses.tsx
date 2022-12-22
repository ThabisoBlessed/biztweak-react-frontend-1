import React from "react";
import { LMSMenu } from "./LMSMenu";
import CourseImg from "../../images/course.png";
import AvatarImg from "../../images/avatar.png";
import { useNavigate } from "react-router-dom";
import "./Course.css";

export const Courses = () => {
  const navigate = useNavigate();

  const onStartCourse = () => {
    navigate("/lms/course");
  }

  const onClickInstructor = () => {
    navigate("/lms/instructor-profile");
  }
  
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
                <h5 className="mb-0 text-dark">Courses</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-dark">
                  <img
                    src={CourseImg}
                    className="img-fluid card-img-top"
                    alt=""
                  />
                  <h5 className="my-2">
                    E-Bussiness Managment course learning
                  </h5>
                  <div className="d-flex justify-content-between align-items-center cursor-pointer">
                    <div className="w-100 me-3 d-flex align-items-center" onClick={onClickInstructor}>
                      <img
                        src={AvatarImg}
                        className="rounded-circle me-2 w-[30px] h-[30px]"
                        alt=""
                      />
                      <div>
                        <div>BizTweak</div>
                        <div className="small">40 Lessons</div>
                      </div>
                    </div>
                    <div className="w-100 text-end">
                      <button className="btn btn-main hover:bg-[#16f0fb]  hover:text-white bg-[#00c2cb] mt-2 text-[white]" onClick={onStartCourse}>Start Course</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="line-pagination">
              <div className="d-flex justify-content-between">
                <button className="arrow-btn">
                  <i className="fa fa-arrow-left"></i>
                </button>
                <button className="arrow-btn">
                  <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
