import React from "react";
import { CMPMenu } from "./CMPMenu";
import CourseVideo from "../../images/video.mp4";

export const CoursePreview = () => {
    
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
                    <h4 className="text-dark text-2xl font-medium">Introduction to Entrepreneurship</h4>
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages.
                    </p>
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
