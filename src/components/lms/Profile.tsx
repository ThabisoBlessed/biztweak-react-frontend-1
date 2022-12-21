import React from "react";
import { LMSMenu } from "./LMSMenu";
import CourseImg from "../../images/course.png";
import AvatarImg from "../../images/avatar.png";

export const Profile = () => {
  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <LMSMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow mt-3">
                  <div className="card-header bg-white border-0">
                    <h5 className="mb-0 text-dark">Profile Settings</h5>
                  </div>
                  <div className="card-body border-0">
                    <div className="col-12 bg-light">
                      <div className="row">
                        <div className="col-lg-10">
                          <div className="row">
                            <div className="col-lg-4 p-4">
                              <ul className="list-unstyled profile-menu">
                                <li className="active">
                                  <a href="#">Basics</a>
                                </li>
                                <li>
                                  <a href="#">Account</a>
                                </li>
                                <li>
                                  <a href="#">Notifications</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-8">
                              <form action="#" className="mt-4">
                                <h5 className="text-dark fw-bold">
                                  Profile Information
                                </h5>
                                <div className="form-group">
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <img
                                        src={AvatarImg}
                                        className="rounded-circle w-[60px]"
                                        alt=""
                                      />
                                    </div>
                                    <button className="mx-3 btn btn-main">
                                      <i className="fa fa-plus"></i> Upload new
                                      picture
                                    </button>
                                    <button className="btn btn-white">
                                      Remove
                                    </button>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="d-flex justify-content-between">
                                    <label className="text-dark">
                                      Display name{" "}
                                      <i
                                        className="fa fa-info-circle text-muted"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-original-title="Name is required."
                                        aria-label="Name is required."
                                      ></i>
                                    </label>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control core"
                                  />
                                </div>
                                <div className="form-group">
                                  <div className="d-flex justify-content-between">
                                    <label className="text-dark">
                                      Email{" "}
                                      <i
                                        className="fa fa-info-circle text-muted"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-original-title="Name is required."
                                        aria-label="Name is required."
                                      ></i>
                                    </label>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control core"
                                  />
                                </div>
                                <div className="form-group">
                                  <div className="d-flex justify-content-between">
                                    <label className="text-dark">
                                      Location{" "}
                                      <i
                                        className="fa fa-info-circle text-muted"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-original-title="Name is required."
                                        aria-label="Name is required."
                                      ></i>
                                    </label>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control core"
                                  />
                                </div>
                                <div className="form-group">
                                  <div className="d-flex justify-content-between">
                                    <label className="text-dark">
                                      Bio{" "}
                                      <i
                                        className="fa fa-info-circle text-muted"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-original-title="Name is required."
                                        aria-label="Name is required."
                                      ></i>
                                    </label>
                                  </div>
                                  <textarea
                                    rows={4}
                                    className="form-control core"
                                  />
                                </div>
                                <h5 className="text-dark fw-bold">Logins</h5>
                                <div className="form-group">
                                  <div className="d-flex justify-content-between">
                                    <label className="text-dark">
                                      Old Password{" "}
                                      <i
                                        className="fa fa-info-circle text-muted"
                                        data-bs-toggle="tooltip"
                                        title=""
                                        data-bs-original-title="Name is required."
                                        aria-label="Name is required."
                                      ></i>
                                    </label>
                                  </div>
                                  <input
                                    type="password"
                                    className="form-control core"
                                  />
                                </div>
                                <div className="row">
                                  <div className="form-group col-lg-6">
                                    <div className="d-flex justify-content-between">
                                      <label className="text-dark">
                                        New Password{" "}
                                        <i
                                          className="fa fa-info-circle text-muted"
                                          data-bs-toggle="tooltip"
                                          title=""
                                          data-bs-original-title="Name is required."
                                          aria-label="Name is required."
                                        ></i>
                                      </label>
                                    </div>
                                    <input
                                      type="password"
                                      className="form-control core"
                                    />
                                  </div>
                                  <div className="form-group col-lg-6">
                                    <div className="d-flex justify-content-between">
                                      <label className="text-dark">
                                        Confirm New Password{" "}
                                        <i
                                          className="fa fa-info-circle text-muted"
                                          data-bs-toggle="tooltip"
                                          title=""
                                          data-bs-original-title="Name is required."
                                          aria-label="Name is required."
                                        ></i>
                                      </label>
                                    </div>
                                    <input
                                      type="password"
                                      className="form-control core"
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <button className="btn btn-white">
                                    Update Password
                                  </button>
                                </div>
                                <h5 className="text-dark fw-bold">
                                  Notifications
                                </h5>
                                <div className="form-group">
                                  <div className="d-flex justify-content-between">
                                    <label>
                                      Product updates and community
                                      announcements
                                    </label>
                                    <div className="form-check form-switch form-switch-md">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={false}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="d-flex justify-content-between">
                                    <label>Market Newsletter</label>
                                    <div className="form-check form-switch form-switch-md">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <button className="btn btn-main">Save</button>
                                </div>
                              </form>
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
    </div>
  );
};
