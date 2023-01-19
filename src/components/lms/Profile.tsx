import React, { useEffect, useState } from "react";
import { UserProfile } from "../shared/UserProfile";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { IUser } from "../../model/user.model";
import { getCurrentUser } from "../../services/lms/user.service";
import { LMSMenu } from "./LMSMenu";

export const Profile = () => {
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
      {isLoading ? (
        <div className="w-full">
          <div className="row">
            <div className="col-md-2 min-h-[100vh]">
              <LMSMenu />
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

                      <div className="card-body border-0 text-center">
                        <h1>Loading...</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <UserProfile menu={"lms"} user={user} isLoading={isLoading} />
      )}
    </div>
  );
};
