import React, { useState } from "react";
import AvatarImg from "../../images/avatar.png";
import { updatePassword } from "../../services/lms/user.service";
import { AdminMenu } from "../admin/AdminMenu";
import { CMPMenu } from "../cmp/CMPMenu";
import { LMSMenu } from "../lms/LMSMenu";

export const UserProfile = (props: any) => {
  const [education, setEducation] = useState(props.user.education);
  const [fullname, setFullname] = useState(props.user.fullname);
  const [email, setEmail] = useState(props.user.email);
  const [id, setId] = useState(props.user.id);
  const [location, setLocation] = useState(props.user.location);
  const [phone, setPhone] = useState(props.user.phone);
  const [registered, setRegistered] = useState(props.user.registered);
  const [role, setRole] = useState(props.user.role);
  const [work_experience, setWorkExperience] = useState(
    props.user.work_experience
  );
  const [work_experience2, setWorkExperience2] = useState(
    props.user.work_experience2
  );
  const [bio, setBio] = useState(props.user.bio);
  const [old_password, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const onUpdatePassword = async () => {
    if (password === "" || confirmPassword === "" || old_password === "") {
      setPasswordErrorMessage("All password fields are required");
    } else if (confirmPassword !== password) {
      setPasswordErrorMessage("Passwords do not match");
    } else {
      const update = await updatePassword(old_password, password, id);
      console.log(update);
    }
  };

  const onUpdateProfile = () => {};

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
                <div className="card shadow mt-3 mb-3">
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
                                      Display Name &nbsp;
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
                                    value={!fullname ? "" : fullname}
                                    onChange={(e) =>
                                      setFullname(e.target.value)
                                    }
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
                                    value={!email ? "" : email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={!location ? "" : location}
                                    onChange={(e) =>
                                      setLocation(e.target.value)
                                    }
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
                                    value={!bio ? "" : bio}
                                    onChange={(e) => setBio(e.target.value)}
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
                                    id="oldPassword"
                                    value={!old_password ? "" : old_password}
                                    onChange={(e) =>
                                      setOldPassword(e.target.value)
                                    }
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
                                      id="newPassword"
                                      value={!password ? "" : password}
                                      onChange={(e) =>
                                        setPassword(e.target.value)
                                      }
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
                                      value={!password ? "" : password}
                                      id="confirmPassword"
                                      onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="form-group mt-2">
                                  <button
                                    className="btn mb-2 hover:bg-black hover:text-white border-black"
                                    onClick={onUpdatePassword}
                                  >
                                    {isSaving ? (
                                      <span>Saving...</span>
                                    ) : (
                                      <span>Update Password</span>
                                    )}
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
                                  <button className="btn mb-3 btn-main w-[150px] text-white bg-[#00c2cb] hover:bg-[#16f0fb]">
                                    {isSaving ? (
                                      <span>Saving...</span>
                                    ) : (
                                      <span>Save</span>
                                    )}
                                  </button>
                                </div>

                                {errorMessage.length > 0 ? null : (
                                  <small className="text-center text-danger">
                                    {errorMessage}
                                  </small>
                                )}
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
