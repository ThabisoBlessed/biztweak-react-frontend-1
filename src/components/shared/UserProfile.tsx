import React from "react";
import AvatarImg from "../../images/avatar.png";
import { AdminMenu } from "../admin/AdminMenu";
import { CMPMenu } from "../cmp/CMPMenu";
import { LMSMenu } from "../lms/LMSMenu";

export const UserProfile = (props: any) => {
  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          {props.menu === "cmp" ? <CMPMenu /> : null}
          {props.menu === "admin" ? <AdminMenu /> : null}
          {props.menu === "lms" ? <LMSMenu /> : null}
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow mt-3">
                  <div className="card-header bg-white border-0">
                    <h5 className="mb-0 text-2xl font-medium text-dark">
                      Profile Settings
                    </h5>
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
                                <div className="form-group mt-2">
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <img
                                        src={AvatarImg}
                                        className="rounded-circle w-[60px]"
                                        alt=""
                                      />
                                    </div>
                                    <button className="mx-3 btn hover:bg-[#16f0fb]  hover:text-white bg-[#00c2cb] mt-2 text-[white]">
                                      <i className="fa fa-plus"></i> Upload new
                                      picture
                                    </button>
                                    <button className="btn mt-1 hover:bg-black hover:text-white border-black">
                                      Remove
                                    </button>
                                  </div>
                                </div>
                                <div className="form-group mt-2">
                                  <div className="d-flex justify-content-between">
                                    <label className="text-dark">
                                      Display name &nbsp;
                                      <i
                                        className="fa fa-info-circle text-muted"
                                        data-bs-toggle="tooltip"
                                        title="Name is required"
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
                                <div className="form-group mt-2">
                                  <div className="d-flex justify-content-between">
                                    <label className="text-dark">
                                      Email &nbsp;
                                      <i
                                        className="fa fa-info-circle text-muted"
                                        data-bs-toggle="tooltip"
                                        title="Email is required."
                                        data-bs-original-title="Email is required."
                                        aria-label="Email is required."
                                      ></i>
                                    </label>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control core"
                                  />
                                </div>
                                <div className="form-group mt-2">
                                  <div className="d-flex justify-content-between">
                                    <label className="text-dark">
                                      Location &nbsp;
                                      <i
                                        className="fa fa-info-circle text-muted"
                                        data-bs-toggle="tooltip"
                                        title="Location is required"
                                        data-bs-original-title="Location is required."
                                        aria-label="Location is required."
                                      ></i>
                                    </label>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control core"
                                  />
                                </div>
                                <div className="form-group mt-2">
                                  <div className="d-flex justify-content-between">
                                    <label className="text-dark">
                                      Bio &nbsp;
                                      <i
                                        className="fa fa-info-circle text-muted"
                                        data-bs-toggle="tooltip"
                                        title="Bio is required"
                                        data-bs-original-title="Name is required."
                                        aria-label="Bio is required."
                                      ></i>
                                    </label>
                                  </div>
                                  <textarea
                                    rows={4}
                                    className="form-control core"
                                  />
                                </div>
                                <h5 className="text-dark mt-2 fw-bold">
                                  Logins
                                </h5>
                                <div className="form-group mt-2">
                                  <div className="d-flex justify-content-between">
                                    <label className="text-dark">
                                      Old Password
                                      {/* &nbsp;<i
                                        className="fa fa-info-circle text-muted"
                                        data-bs-toggle="tooltip"
                                        title="Password is required"
                                        data-bs-original-title="Password is required."
                                        aria-label="Password is required."
                                      ></i> */}
                                    </label>
                                  </div>
                                  <input
                                    type="password"
                                    className="form-control core"
                                    autoComplete="false"
                                  />
                                </div>
                                <div className="row">
                                  <div className="form-group mt-2 col-lg-6">
                                    <div className="d-flex justify-content-between">
                                      <label className="text-dark">
                                        New Password
                                        {/* <i
                                          className="fa fa-info-circle text-muted"
                                          data-bs-toggle="tooltip"
                                          title="New Password is Required"
                                          data-bs-original-title="Name is required."
                                          aria-label="New Password is required."
                                        ></i> */}
                                      </label>
                                    </div>
                                    <input
                                      type="password"
                                      className="form-control core"
                                      autoComplete="false"
                                    />
                                  </div>
                                  <div className="form-group mt-2 col-lg-6">
                                    <div className="d-flex justify-content-between">
                                      <label className="text-dark">
                                        Confirm New Password
                                        {/* <i
                                          className="fa fa-info-circle text-muted"
                                          data-bs-toggle="tooltip"
                                          title=""
                                          data-bs-original-title="Name is required."
                                          aria-label="Name is required."
                                        ></i> */}
                                      </label>
                                    </div>
                                    <input
                                      type="password"
                                      className="form-control core"
                                      autoComplete="false"
                                    />
                                  </div>
                                </div>
                                <div className="form-group mt-2">
                                  <button className="btn mb-2 hover:bg-black hover:text-white border-black">
                                    Update Password
                                  </button>
                                </div>
                                <h5 className="text-dark fw-bold">
                                  Notifications
                                </h5>
                                <div className="form-group mt-2">
                                  <div className="d-flex justify-content-between">
                                    <label>
                                      Product updates and community
                                      announcements
                                    </label>
                                    <div className="form-check form-switch form-switch-md">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group mt-2">
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
                                <div className="form-group mt-2">
                                  <button className="btn btn-main w-[150px] text-white bg-[#00c2cb] hover:bg-[#16f0fb]">
                                    Save
                                  </button>
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
