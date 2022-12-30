import React from "react";
import { LMSMenu } from "./LMSMenu";
import CourseImg from "../../images/course.png";
import AvatarImg from "../../images/avatar.png";
import "./Profile.css";

export const InstructorProfile = () => {
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
                <h5 className="mb-0 text-2xl font-medium text-dark">Instructor Profile</h5>
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

                    <h4 className="my-2 fw-600 text-dark">Jason Ritchey</h4>
                    <p className="text-dark small">Instructor</p>
                    <p className="small text-muted">Total Course : 27</p>
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <p>
                          he Lorem ipum filling text is used by graphic
                          designers, programmers and printers with the aim of
                          occupying the spaces of a website, an advertising
                          product or.he Lorem ipum filling text is used by
                          graphic designers, programmers and printers with the
                          aim of occupying the spaces of a website, an
                          advertising product or. he Lorem ipum filling text is
                          used by graphic designers, programmers and printers
                          with the aim of occupying the spaces of a website, an
                          advertising product or .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-3 col-md-4 mb-3 mb-lg-0">
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
                        <p className="my-2">
                          <img
                            src={AvatarImg}
                            className="rounded-circle"
                            width="30px"
                            alt=""
                          />{" "}
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
                            <button className="btn btn-main">Continue</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mb-3 mb-lg-0">
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
                        <p className="my-2">
                          <img
                            src={AvatarImg}
                            className="rounded-circle"
                            width="30px"
                            alt=""
                          />{" "}
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
                            <button className="btn btn-main">Continue</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mb-3 mb-lg-0">
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
                        <p className="my-2">
                          <img
                            src={AvatarImg}
                            className="rounded-circle"
                            width="30px"
                            alt=""
                          />{" "}
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
                            <button className="btn btn-main">Continue</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mb-3 mb-lg-0">
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
                        <p className="my-2">
                          <img
                            src={AvatarImg}
                            className="rounded-circle"
                            width="30px"
                            alt=""
                          />{" "}
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
                            <button className="btn btn-main">Continue</button>
                          </div>
                        </div>
                      </div>
                    </div>
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
