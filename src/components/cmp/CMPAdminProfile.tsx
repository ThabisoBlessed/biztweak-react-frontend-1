import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from '../../config';
import { IUser } from '../../model/user.model';
import { getCurrentUser } from '../../services/lms/user.service';
import { UserProfile } from '../shared/UserProfile'

export const CMPAdminProfile = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
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

      console.log(profile);
    }
  };

  return (
    <div>
      {isLoading ? <div className="text-center text-4xl h-[100vh]">Loading...</div> : (
        <UserProfile menu={"cmp"} user={user} isLoading={isLoading} />
      )}
    </div>
  );
}
