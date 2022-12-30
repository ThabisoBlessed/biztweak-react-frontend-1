import React from "react";
import { LMSMenu } from "./LMSMenu";
import CourseImg from "../../images/course.png";
import AvatarImg from "../../images/avatar.png";

export const Messages = () => {
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
                <h5 className="mb-0 text-2xl font-medium text-dark">Messaging</h5>
              </div>
              <div className="card-body border-0">
                <div className="row full-height">
                  <div className="col-md-4 col-lg-3 mb-3 mb-md-0">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div id="contact-list">
                        <a
                          className="contact unread justify-content-between align-items-center d-flex p-3 pe-4"
                          href="#"
                        >
                          <img
                            src={AvatarImg}
                            className="img-fluid me-2"
                            alt=""
                          />
                          <div>
                            <div className="d-flex justify-content-between">
                              <h6 className="text-dark fw-600 mb-0">Waelchi</h6>
                              <p className="small mb-0">03:30PM</p>
                            </div>
                            <div className="text-sm">When do you release the coded...</div>
                          </div>
                        </a>
                        <a
                          className="contact read bg-light rounded justify-content-between align-items-center d-flex p-3 pe-4"
                          href="#"
                        >
                          <img
                            src={AvatarImg}
                            className="img-fluid me-2"
                            alt=""
                          />
                          <div>
                            <div className="d-flex justify-content-between">
                              <h6 className="text-dark fw-600 mb-0">Waelchi</h6>
                              <p className="small mb-0">03:30PM</p>
                            </div>
                            <div className="text-sm">When do you release the coded...</div>
                          </div>
                        </a>
                        <a
                          className="contact unread justify-content-between align-items-center d-flex p-3 pe-4"
                          href="#"
                        >
                          <img
                            src={AvatarImg}
                            className="img-fluid me-2"
                            alt=""
                          />
                          <div>
                            <div className="d-flex justify-content-between">
                              <h6 className="text-dark fw-600 mb-0">Waelchi</h6>
                              <p className="small mb-0">03:30PM</p>
                            </div>
                            <div className="text-sm">When do you release the coded...</div>
                          </div>
                        </a>
                        <a
                          className="contact read justify-content-between align-items-center d-flex p-3 pe-4"
                          href="#"
                        >
                          <img
                            src={AvatarImg}
                            className="img-fluid me-2"
                            alt=""
                          />
                          <div>
                            <div className="d-flex justify-content-between">
                              <h6 className="text-dark fw-600 mb-0">Waelchi</h6>
                              <p className="small mb-0">03:30PM</p>
                            </div>
                            <div className="text-sm">When do you release the coded...</div>
                          </div>
                        </a>
                      </div>
                      <div className="input-group">
                        <div className="input-group-text bg-transparent border-end-0">
                          <i className="fa fa-search"></i>
                        </div>
                        <input
                          type="text"
                          placeholder="search messages.."
                          className="form-control border-start-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 card card-body p-0 me-2">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <div className="bg-light rounded-2 p-4">
                          <div className="bg-white rounded-3 p-3 mb-3">
                            <div className="d-flex justify-content-between align-items-start">
                              <div>
                                <h5 className="mb-1 fw-600 text-dark">
                                  Casper
                                </h5>
                                <p className="mb-0">
                                  Instructor | Course:{" "}
                                  <span className="fw-600 text-dark">
                                    1 item
                                  </span>{" "}
                                  | Lifetime:{" "}
                                  <span className="fw-600 text-dark">
                                    $1,235.00
                                  </span>
                                </p>
                              </div>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-circle btn-light rounded-circle border-0 dropdown-toggle no-arrow"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa fa-ellipsis-h"></i>
                                </button>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Mark as read
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <h6 className="fw-600 text-dark">Course tasks</h6>
                          <div className="container p-0 mb-3">
                            <div className="row m-0 align-items-center">
                              <div className="col-md-9 ps-0">
                                <div className="slider">
                                  <div className="d-flex align-items-center">
                                    <img
                                      src={CourseImg}
                                      alt="course"
                                      className="h-[80px] w-[80px] o-cover img-fluid rounded-2 me-2"
                                    />
                                    <div>
                                      <h6 className="fw-600 text-dark">
                                        E-Business...
                                      </h6>
                                      <p className="text-muted fw-600 mb-0">
                                        10/40 Lessons <br></br>{" "}
                                        <span className="text-main">
                                          Due in 2 days
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src={CourseImg}
                                      alt="course"
                                      className="h-[80px] w-[80px] o-cover img-fluid rounded-2 me-2"
                                    />
                                    <div>
                                      <h6 className="fw-600 text-dark">
                                        E-Business...
                                      </h6>
                                      <p className="text-muted fw-600 mb-0">
                                        10/40 Lessons <br></br>{" "}
                                        <span className="text-main">
                                          Due in 2 days
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src={CourseImg}
                                      alt="course"
                                      className="h-[80px] w-[80px] o-cover img-fluid rounded-2 me-2"
                                    />
                                    <div>
                                      <h6 className="fw-600 text-dark">
                                        E-Business...
                                      </h6>
                                      <p className="text-muted fw-600 mb-0">
                                        10/40 Lessons <br></br>{" "}
                                        <span className="text-main">
                                          Due in 2 days
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src={CourseImg}
                                      alt="course"
                                      className="h-[80px] w-[80px] o-cover img-fluid rounded-2 me-2"
                                    />
                                    <div>
                                      <h6 className="fw-600 text-dark">
                                        E-Business...
                                      </h6>
                                      <p className="text-muted fw-600 mb-0">
                                        10/40 Lessons <br></br>{" "}
                                        <span className="text-main">
                                          Due in 2 days
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src={CourseImg}
                                      alt="course"
                                      className="h-[80px] w-[80px] o-cover img-fluid rounded-2 me-2"
                                    />
                                    <div>
                                      <h6 className="fw-600 text-dark">
                                        E-Business...
                                      </h6>
                                      <p className="text-muted fw-600 mb-0">
                                        10/40 Lessons <br></br>{" "}
                                        <span className="text-main">
                                          Due in 2 days
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src={CourseImg}
                                      alt="course"
                                      className="h-[80px] w-[80px] o-cover img-fluid rounded-2 me-2"
                                    />
                                    <div>
                                      <h6 className="fw-600 text-dark">
                                        E-Business...
                                      </h6>
                                      <p className="text-muted fw-600 mb-0">
                                        10/40 Lessons <br></br>{" "}
                                        <span className="text-main">
                                          Due in 2 days
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src={CourseImg}
                                      alt="course"
                                      className="h-[80px] w-[80px] o-cover img-fluid rounded-2 me-2"
                                    />
                                    <div>
                                      <h6 className="fw-600 text-dark">
                                        E-Business...
                                      </h6>
                                      <p className="text-muted fw-600 mb-0">
                                        10/40 Lessons <br></br>{" "}
                                        <span className="text-main">
                                          Due in 2 days
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src={CourseImg}
                                      alt="course"
                                      className="h-[80px] w-[80px] o-cover img-fluid rounded-2 me-2"
                                    />
                                    <div>
                                      <h6 className="fw-600 text-dark">
                                        E-Business...
                                      </h6>
                                      <p className="text-muted fw-600 mb-0">
                                        10/40 Lessons <br></br>{" "}
                                        <span className="text-main">
                                          Due in 2 days
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 text-center mt-3 mt-md-0">
                                <button className="prev arrow-btn me-3">
                                  <i className="fa fa-arrow-left"></i>
                                </button>
                                <button className="next arrow-btn">
                                  <i className="fa fa-arrow-right"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <h6 className="fw-600 text-dark">
                            Mentor tips and task 💡
                          </h6>
                          <div className="container p-0">
                            <div className="row m-0">
                              <button className="btn btn-white col-auto px-4 me-md-4">
                                Visit the resource
                              </button>
                              <button className="btn btn-white col-auto px-4 me-md-4">
                                Remember to be mindful
                              </button>
                              <button className="btn btn-white col-auto px-4">
                                Elements
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row">
                            <div className="messages mt-4 col-12 mb-4">
                              <div className="message d-flex">
                                <img
                                  src={AvatarImg}
                                  className="h-[40px] w-[40px] rounded-circle me-3"
                                  alt=""
                                />
                                <div>
                                  <h6 className="mb-0">
                                    Orval{" "}
                                    <span
                                      className="ms-4"
                                      style={{ fontSize: "80%" }}
                                    >
                                      11:59AM
                                    </span>
                                  </h6>
                                  <div className="text-dark">
                                    When do you release the coded for the Fleet
                                    - Travel kit?
                                    <a href="#">https://ui8.net/product-link</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="messages mt-4 col-12 mb-4">
                              <div className="message d-flex">
                                <img
                                  src={AvatarImg}
                                  className="h-[40px] w-[40px] rounded-circle me-3"
                                  alt=""
                                />
                                <div>
                                  <h6 className="mb-0">
                                    Britney Beer{" "}
                                    <span
                                      className="ms-4"
                                      style={{ fontSize: "80%" }}
                                    >
                                      11:59AM
                                    </span>
                                  </h6>
                                  <div className="text-dark">
                                    Hi @orval, thanks for contacting.All
                                    recommended courses are shown in list and
                                    dropdown form where the subheadings course
                                    can be read :
                                    <a href="https://dribbble.com.com/johnyahmed">
                                      https://dribbble.com.com/johnyahmed
                                    </a>
                                    <br></br>
                                    <br></br>Thanks for your patience and
                                    understanding. 🙌
                                    <br></br> Regards,
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex me-2 mb-3 align-items-center">
                        <a className="btn" href="#">
                          <i className="fa fa-lg text-muted fa-file-upload"></i>
                        </a>
                        <a className="btn" href="#">
                          <i className="fa fa-lg text-muted fa-smile"></i>
                        </a>
                        <div className="input-group bg-light rounded-3 p-2">
                          <input
                            placeholder="send a message..."
                            type="text"
                            className="shadow-none bg-light border-0 form-control"
                            value="P/s: One more thing I need to tell you"
                            onChange={() => {}}
                          />
                          <button className="btn rounded-3 btn-main">
                            Send
                          </button>
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
