import React, { useState } from "react";
import { ProfileMenu } from "./ProfileMenu";

export const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-3 border-end">
          <ProfileMenu />
        </div>
        <div className="col-md-9 bg-white">
          {/* <div className="h-[600px] flex flex-col justify-center items-center">
            <h2 className="text-4xl" style={{ fontSize: "45px" }}>
              Profile Settings
            </h2>
            <form className="rounded px-8 pt-3 pb-8 mb-4 md:w-[50%]">
              <div className="input-group input-group-lg p-2 mb-3">
                <input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="form-control text-sm"
                  autoComplete="false"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="input-group input-group-lg p-2 mb-3">
                <input
                  id="email"
                  type="email"
                  placeholder="E-mail address"
                  className="form-control "
                  autoComplete="false"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group input-group-lg p-2 mb-3">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="form-control text-sm"
                  autoComplete="false"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-group input-group-lg p-2 mb-3">
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control text-sm"
                  autoComplete="false"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="clearfix mb-3"></div>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};
