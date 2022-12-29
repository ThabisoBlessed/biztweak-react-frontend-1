import React from "react";
import { CMPMenu } from "./CMPMenu";

export const CourseInfo = () => {
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
                    <div className="col-md-3">
                      <div>Overview card</div>
                      <label className="rounded-3 bg-3 px-5 py-4 text-center">
                        <img
                          src="../images/icons/user.png"
                          alt=""
                          height="60px"
                        />
                        <div className="mt-2 text-dark">
                          Upload Course Image
                        </div>
                        <input type="file" className="d-none" />
                      </label>
                    </div>
                    <div className="col-md-9">
                      <h4 className="fw-600">
                        Introduction to Entrepreneurship
                      </h4>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div>
                    <div className="dropdown d-inline-block">
                      <button
                        className="btn btn-main dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Add
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-video"></i> Video
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-text-slash"></i> Text
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-audio-description"></i> Audio
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-question"></i> Quiz
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-file-alt"></i> Assignment
                          </a>
                        </li>
                      </ul>
                    </div>
                    <button className="btn btn-main">Edit Course</button>
                    <button className="btn btn-main">Preview Course</button>
                    <button className="btn btn-secondary">...</button>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-8">
                  <div className="card card-body h-100"></div>
                </div>
                <div className="col-md-4 text-center">
                  <div>
                    <span className="badge bg-main text-dark">
                      Total Courses
                    </span>
                    <h2 className="text-dark fw-600">52</h2>
                  </div>
                  <div>
                    <span className="badge bg-main text-dark">
                      Total Videos
                    </span>
                    <h2 className="text-dark fw-600">452</h2>
                  </div>
                  <div>
                    <span className="badge bg-main text-dark">
                      Total Audios
                    </span>
                    <h2 className="text-dark fw-600">524</h2>
                  </div>
                  <div>
                    <span className="badge bg-main text-dark">Total Text</span>
                    <h2 className="text-dark fw-600">525</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
