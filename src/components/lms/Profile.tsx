import React, { useEffect, useState } from "react";
import { UserProfile } from "../shared/UserProfile";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { IUser } from "../../model/user.model";
import { getCurrentUser } from "../../services/lms/user.service";

export const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      getProfile();
    }
  });

  const getProfile = async () => {
    const user = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (user) {
      const userResult: IUser = JSON.parse(user);
      const profile = await getCurrentUser(userResult.id);
      setUser(profile.data.package.data);
      console.log(user);
    }
  };

  return <div>{!user ? <h1 className="text-4xl font-bold text-black">Loading Profile...</h1> : <UserProfile menu={"lms"} user={user} />}</div>;
};
