import React from "react";
import { LMSMenu } from "./LMSMenu";
import AvatarImg from "../../images/avatar.png";
import { UserProfile } from '../shared/UserProfile'

export const Profile = () => {
  return (
    <div>
      <UserProfile menu={"lms"} />
    </div>
  );
};
