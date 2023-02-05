import React, { useEffect, useState } from "react";
import { CMPMenu } from "./CMPMenu";
import CourseVideo from "../../images/video.mp4";
import { useLocation } from "react-router-dom";
import { ICourse } from "../../model/course.model";

export const CoursePreview = () => {
  const { state } = useLocation();
  const [selectedCourse] = useState(state || ({} as ICourse));
  const [course, setCourse] = useState(selectedCourse.course);
  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    console.log(course);
  });
    
  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <CMPMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="row my-4">
              <div className="col-md-8">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <h4 className="text-dark text-2xl font-medium">{course.title}</h4>
                    <p className="mb-0">{course.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="text-end">
                  <button className="btn btn-white border-[#212529] hover:bg-[#212529] hover:text-white mr-2">Edit</button>
                  <div className="dropdown d-inline-block">
                    <button
                      className="btn btn-white dropdown-toggle border-[#212529] hover:bg-[#212529] hover:text-white"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Add
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-text-slash"></i> Text
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-file-alt"></i> Assignment
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-8">
                <video
                  src={CourseVideo}
                  controls={true}
                  className="img-fluid h-[450px] mt-2"
                ></video>
                <div className="mt-2 text-end">
                  <button className="btn border-[#212529] hover:bg-[#212529] hover:text-white">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
