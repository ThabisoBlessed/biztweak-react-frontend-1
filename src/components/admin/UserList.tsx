import React, { useEffect, useState } from "react";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { getAllUsers } from "../../services/admin/admin.service";
import { AdminMenu } from "./AdminMenu";
import { Users } from "./Users";

export const UserList = (props: any) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    if (isInitLoad) {
      getusers();
    }
    setIsInitLoad(false);
  });

  const getusers = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const usersResult = await getAllUsers();
      const usersBody = usersResult.data.package.data;
      setUsers(usersBody);
      console.log(users);
    }
  };

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <AdminMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <Users users={props.users || []} />
        </div>
      </div>
    </div>
  );
};
