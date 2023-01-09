import React, { useEffect, useState } from "react";
import { UserProfile } from "../shared/UserProfile";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { IUser } from "../../model/user.model";
import { getCurrentUser } from "../../services/lms/user.service";

export const Profile = () => {
  const [user, setUser] = useState({} as IUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getProfile();
    }
  });

  const getProfile = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const userResult: IUser = JSON.parse(storageUser);
      const profile = await getCurrentUser(userResult.id);
      setUser(profile.data.package.data);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? <div className="text-center text-4xl h-[100vh]">Loading...</div> : (
        <UserProfile menu={"lms"} user={user} isLoading={isLoading} />
      )}
    </div>
  );
};
