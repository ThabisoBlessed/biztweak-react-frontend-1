import React, { useState } from "react";
import { ProfileMenu } from "./ProfileMenu";
import "./Profile.css";
import { UpdateProfile } from "./UpdateProfile";

export const Profile = () => {

  return (
    <div>
      <div className="row w-full m-0 p-0">
        <div className="col-md-3 border-end">
          <ProfileMenu />
        </div>
        <div className="col-md-9 bg-white">
          <UpdateProfile />
        </div>
      </div>
    </div>
  );
};
