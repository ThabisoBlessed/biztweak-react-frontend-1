import React, { useState } from "react";

export const UpdateProfile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eductaion, setEducation] = useState("");
  const [experience1, setExperience1] = useState("");
  const [experience2, setExperience2] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl mt-2" style={{ fontSize: "38px" }}>
        Profile Settings
      </h2>
      <form className="rounded px-8 pt-3 pb-8 mb-4 md:w-[50%]">
        <div className="form-group mb-2">
          <label className="small" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control form-control-lg"
            id="name"
            placeholder="Name"
            autoComplete="false"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label className="small" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control form-control-lg"
            id="email"
            placeholder="Email"
            autoComplete="false"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label className="small" htmlFor="phone">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="form-control form-control-lg"
            id="phone"
            placeholder="Phone"
            autoComplete="false"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label className="small" htmlFor="eductaion">
            Education
          </label>
          <input
            type="text"
            name="eductaion"
            className="form-control form-control-lg"
            id="education"
            placeholder="Education"
            autoComplete="false"
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label className="small" htmlFor="phone">
            Work Experience 1
          </label>
          <input
            type="text"
            name="workExperience1"
            className="form-control form-control-lg"
            id="workExperience1"
            placeholder="Work Experience 1"
            autoComplete="false"
            onChange={(e) => setExperience1(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label className="small" htmlFor="phone">
            Work Experience 2
          </label>
          <input
            type="text"
            name="workExperience2"
            className="form-control form-control-lg"
            id="workExperience2"
            placeholder="Work Experience 2"
            autoComplete="false"
            onChange={(e) => setExperience2(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label className="small" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            name="location"
            className="form-control form-control-lg"
            id="location"
            placeholder="Location"
            autoComplete="false"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <p className="small m-3">
          NOTE: Only fill bottom fields if you want to change your password
        </p>

        <div className="form-group mb-2">
          <label className="small" htmlFor="currentPassword">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            className="form-control form-control-lg"
            id="currentPassword"
            placeholder="Current Password"
            autoComplete="false"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label className="small" htmlFor="newPassword">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            className="form-control form-control-lg"
            id="newpPassword"
            placeholder="New Password"
            autoComplete="false"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label className="small" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control form-control-lg"
            id="confirmPassword"
            placeholder="Confirm Password"
            autoComplete="false"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-info mt-2 profile-menu-action-btn text-white bg-[#00C2CB]">
            Update Profile
          </button>
        </div>

        <div className="clearfix mb-3"></div>
      </form>
    </div>
  );
};
