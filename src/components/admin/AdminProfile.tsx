import React, { useEffect, useState } from 'react'
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from '../../config';
import { IUser } from '../../model/user.model'
import { getCurrentUser } from '../../services/lms/user.service';
import { UserProfile } from '../shared/UserProfile'

export const AdminProfile = () => {
  const [user, setUser] = useState({} as IUser);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    if (isInitLoad) {
      getProfile();
    }
    setIsInitLoad(false);
  });

  const getProfile = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const userResult: IUser = JSON.parse(storageUser);
      const profile = await getCurrentUser(userResult.id);
      setUser(profile.data.package.data);
      setIsLoading(false);

      console.log(profile);
    }
  };

  return (
    <div>
      {isLoading ? <div className="text-center text-4xl h-[100vh]">Loading...</div> : (
        <UserProfile menu={"admin"} user={user} isLoading={isLoading} />
      )}
    </div>
  );
}
