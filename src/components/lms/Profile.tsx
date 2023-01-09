import React, { useEffect, useState } from "react";
import { UserProfile } from '../shared/UserProfile'
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { IUser } from "../../model/user.model";

export const Profile = () => {
  const [user, setUser] = useState({} as IUser);
  useEffect(() => {
    getProfile();
  }, [user]);
  
  const getProfile = () => {
    const user = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (user) {
      const userResult: IUser = JSON.parse(user)
      console.log(userResult);
    }
  }
  return (
    <div>
      <UserProfile menu={"lms"} user={user} />
    </div>
  );
};
