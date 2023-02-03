import React, { useState } from "react";
import AvatarImg from "../../images/avatar.png";
import { IUser } from "../../model/user.model";
import { updatePassword, updateProfile } from "../../services/lms/user.service";
import { AdminMenu } from "../admin/AdminMenu";
import { CMPMenu } from "../cmp/CMPMenu";
import { LMSMenu } from "../lms/LMSMenu";
import { convertToBase64 } from "../util/file-util";

export const UserProfile = (props: any) => {
  const [education, setEducation] = useState(props.user.education);
  const [fullNames, setFullname] = useState(props.user.fullNames);
  const [email, setEmail] = useState(props.user.email);
  const [id, setId] = useState(props.user.id);
  const [location, setLocation] = useState(props.user.location);
  const [phone, setPhone] = useState(props.user.phone);
  const [photo, setPhoto] = useState({} as File);
  const [registered, setRegistered] = useState(props.user.registered);
  const [role, setRole] = useState(props.user.role);
  const [workExperience, setWorkExperience] = useState(
    props.user.workExperience
  );
  const [workExperience2, setWorkExperience2] = useState(
    props.user.workExperience2
  );
  const [bio, setBio] = useState(props.user.bio);
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordSuccessMessage, setPasswordSuccessMessage] = useState("");
  const [marketNewsletter, setMarketNewsletter] = useState(
    props.user.marketNewsletter || ""
  );
  const [
    productUpdatesAndCommunityAnnouncements,
    setProductUpdatesAndCommunityAnnouncements,
  ] = useState(props.user.productUpdatesAndCommunityAnnouncements || "");

  /**
   * Updates current user password
   * @param e
   */
  const onUpdatePassword = async (e: any) => {
    e.preventDefault();
    setIsSaving(true);
    setPasswordErrorMessage("");
    setPasswordSuccessMessage("");
    setIsLoading(false);

    if (password === "" || confirmPassword === "" || oldPassword === "") {
      setPasswordErrorMessage("All password fields are required");
    } else if (confirmPassword !== password) {
      setPasswordErrorMessage("Passwords do not match");
    } else {
      const update = await updatePassword(oldPassword, password, id);

      // Successful call returns "data", failed call returns "response"
      const success = update.data;
      const fail = update.response;

      if (success) {
        setSuccessMessage(update.data.message);
      } else {
        setErrorMessage(fail.data.message);
      }
    }
    setIsSaving(false);
  };

  /**
   * Update current user profile
   */
  const onUpdateProfile = async (e: any) => {
    e.preventDefault();
    setIsSaving(true);
    setPasswordErrorMessage("");
    setPasswordSuccessMessage("");
    setIsLoading(false);

    const userProfile: IUser = {
      id: id,
      fullNames: fullNames,
      email: email,
      phone: phone,
      education: education,
      workExperience: workExperience,
      workExperience2: workExperience2,
      location: location,
      role: role,
      registered: registered,
      photo: photo,
      marketNewsletter: marketNewsletter === "true" ? true : false,
      productUpdatesAndCommunityAnnouncements:
        productUpdatesAndCommunityAnnouncements === "true" ? true : false,
      bio: "",
      assessments: null
    };

    const update = await updateProfile(userProfile);

    // Successful call returns "data", failed call returns "response"
    const success = update.data;
    const fail = update.response;

    if (success) {
      setSuccessMessage(update.data.message);
    } else {
      console.log(fail.data.message);
      setPasswordErrorMessage(fail.data.message);
      console.log(passwordErrorMessage);
    }

    setIsSaving(false);
  };

  const checkMarketNewsletterValue = (e: any) => {
    var value = e.target.value;
    const result = value === "true" ? "false" : "true";
    setMarketNewsletter(result);
  };

  const checkProductUpdatesAndCommunityAnnouncementsValue = (e: any) => {
    var value = e.target.value;
    const result = value === "true" ? "false" : "true";
    setProductUpdatesAndCommunityAnnouncements(result);
  };

  const handlePhotoFile = async (e: any) => {
    const file = e.target.files[0];
    const base64: any = await convertToBase64(file);
    setPhoto(base64);
  };

  const onRemovePhoto = (e: any) => {
    e.preventDefault();
    setPhoto({} as File);
  };

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
                                    <div className="ml-3 row my-4">
                                      <div className="col-md-8">
                                        <input
                                          name="image"
                                          accept="image/*"
                                          type="file"
                                          className="form-control"
                                          onChange={(e) => handlePhotoFile(e)}
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <button
                                          className="btn hover:bg-black hover:text-white border-black"
                                          onClick={(e) => onRemovePhoto(e)}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
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
                                    value={!fullNames ? "" : fullNames}
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
                                      Phone &nbsp;
                                      <i
                                        className="fa fa-info-circle text-muted"
                                        data-bs-toggle="tooltip"
                                        title="Phone is required"
                                        data-bs-original-title="Phone is required."
                                        aria-label="Phone is required."
                                      ></i>
                                    </label>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control core"
                                    value={!phone ? "" : phone}
                                    onChange={(e) =>
                                      setPhone(e.target.value)
                                    }
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
                                    value={!oldPassword ? "" : oldPassword}
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
                                      value={
                                        !confirmPassword ? "" : confirmPassword
                                      }
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

                                  {passwordSuccessMessage.length ===
                                  0 ? null : (
                                    <p className="text-success m-2">
                                      {passwordSuccessMessage}
                                    </p>
                                  )}

                                  {passwordErrorMessage.length === 0 ? null : (
                                    <p className="text-danger m-2">
                                      {passwordErrorMessage}
                                    </p>
                                  )}
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
                                        value={
                                          productUpdatesAndCommunityAnnouncements ===
                                          ""
                                            ? "false"
                                            : "true"
                                        }
                                        onChange={(e) =>
                                          checkProductUpdatesAndCommunityAnnouncementsValue(
                                            e
                                          )
                                        }
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
                                        value={
                                          marketNewsletter === "true"
                                            ? "true"
                                            : "false"
                                        }
                                        onChange={(e) =>
                                          checkMarketNewsletterValue(e)
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group mt-2">
                                  <button
                                    className="btn mb-3 btn-main w-[150px] text-white bg-[#00c2cb] hover:bg-[#16f0fb]"
                                    onClick={onUpdateProfile}
                                  >
                                    {isSaving ? (
                                      <span>Saving...</span>
                                    ) : (
                                      <span>Save</span>
                                    )}
                                  </button>
                                </div>

                                <div className="form-group mt-2">
                                  {errorMessage.length === 0 ? null : (
                                    <p className="m-2 text-danger">
                                      {errorMessage}
                                    </p>
                                  )}
                                </div>

                                <div className="form-group mt-2">
                                  {successMessage.length === 0 ? null : (
                                    <p className="m-2 text-success">
                                      {successMessage}
                                    </p>
                                  )}
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
