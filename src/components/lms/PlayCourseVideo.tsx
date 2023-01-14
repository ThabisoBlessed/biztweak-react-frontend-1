import React from "react";
import AvatarImg from "../../images/avatar.png";
import CourseVideo from "../../images/video.mp4";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../model/user.model";

export const PlayCourseVideo = (props: any) => {
  const navigate = useNavigate();

  const onClickInstructor = (instructor: IUser) => {
    navigate("/lms/instructor-profile", { state: { instructor }});
  };

  return (
    <div>
      <div className="row">
        <div className="order-1 order-md-0 col-md-8">
          <div className="video bg-2">
            <video
              controls={true}
              src={props.course.intro_video}
              className="img-fluid h-[400px] mt-2"
            ></video>
          </div>
          <div className="title d-flex justify-content-between mt-3 align-items-center">
            <h4 className="fw-600 text-dark text-2xl">{props.course.title}</h4>
            <div className="text-muted">
              <i className="fa fa-eye text-dark"></i> 2.3K
            </div>
          </div>
          <div
            className="d-flex my-3 cursor-pointer"
            onClick={() => onClickInstructor(props.course.user)}
          >
            <img src={AvatarImg} className="h-[40px] w-[40px]" alt="" />
            <div className="ms-2">
              <h6 className="mb-0 text-dark">{props.course.user.fullname}</h6>
              <p className="mb-0">BizTweak</p>
            </div>
          </div>
          <h5 className="text-dark fw-600">About Course</h5>
          <p>{props.course.description}</p>
          <h5 className="text-dark fw-600 mt-3 mb-1">Related to this Course</h5>
          <div className="flex mb-3">
            <div className="mt-3">
              <small className="text-dark">Ex_Files_Figma_EssT.zip</small>
              <br></br>
              <small className="text-muted">(308.76MB)</small>
            </div>
            <button className="btn mt-2 ml-2 mb-2 text-white bg-[#00c2cb] hover:bg-[#16f0fb]">
              Download
            </button>
          </div>
        </div>
        <div className="order-0 mb-3 mb-md-0 order-md-1 col-md-4 bg-light">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div>
                    <h6 className="mb-0 fw-600">Accordion Item #1</h6>
                    <small style={{ fontSize: "11px" }} className="text-muted">
                      1/12 Videos = 28m
                    </small>
                  </div>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body p-0">
                  <ul className="list-group">
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-main fw-600 list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div>
                    <h6 className="mb-0 fw-600">Accordion Item #2</h6>
                    <small style={{ fontSize: "11px" }} className="text-muted">
                      1/12 Videos = 28m
                    </small>
                  </div>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body p-0">
                  <ul className="list-group">
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-main fw-600 list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div>
                    <h6 className="mb-0 fw-600">Accordion Item #3</h6>
                    <small style={{ fontSize: "11px" }} className="text-muted">
                      1/12 Videos = 28m
                    </small>
                  </div>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body p-0">
                  <ul className="list-group">
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-main fw-600 list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
