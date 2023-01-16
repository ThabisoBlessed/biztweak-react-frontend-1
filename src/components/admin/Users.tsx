import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { IUser } from "../../model/user.model";
import { getAllUsers } from "../../services/admin/admin.service";
import { getCurrentUser } from "../../services/lms/user.service";
import { AdminMenu } from "./AdminMenu";
import { Mentors } from "./Mentors";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({} as IUser);
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useLocation();
  const [selectedUserMode] = useState(state || "");
  const [userMode, setUserMode] = useState(selectedUserMode.userMode);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    console.log(userMode);

    if (currentUser && !currentUser.email) {
      getProfile();
    }

    if (users.length === 0) {
      getusers();
    }
  });

  const getProfile = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const userResult: IUser = JSON.parse(storageUser);
      const profile = await getCurrentUser(userResult.id);
      setCurrentUser(profile.data.package.data);
      setIsLoading(false);
    }
  };

  const getusers = async () => {
    setIsLoading(true);
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const usersResult = await getAllUsers();
      const usersBody = usersResult.data.package.data;
      setUsers(usersBody);
      console.log(usersBody);
    }
    setIsLoading(false);
  };

  const onViewUser = (user: IUser) => {
    console.log(user);
  };

  return (
    <div className="w-full col-12">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <AdminMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          {userMode === "incubator" ? <div className="m-3"><Mentors /></div> : null}
          {userMode === "admin" ? (
            <div className="container-fluid">
              <div className="row mt-3">
                <div className="card shadow">
                  <div className="card-header bg-white border-0 d-flex justify-content-between">
                    <h5 className="mb-0 text-2xl font-medium text-dark">
                      Registered Users
                    </h5>
                    <button className="btn btn-main">
                      <i className="fa fa-download"></i> Export (CSV)
                    </button>
                  </div>
                  <div className="card-body border-0">
                    <table className="table table-borderless table-striped">
                      <thead>
                        <tr className="text-sm text-muted">
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>User Type</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user: IUser, index: number) => {
                          return (
                            <tr key={index}>
                              <td>{user.id}</td>
                              <td>{user.fullname}</td>
                              <td>{user.email}</td>
                              <td>{user.role}</td>
                              <td>
                                <button
                                  className="btn bg-[#00c2cb] text-white mr-2"
                                  onClick={() => onViewUser(user)}
                                >
                                  <i className="fa fa-eye"></i>
                                </button>
                                <button className="btn btn-warning mr-2">
                                  <i className="fa fa-edit"></i>
                                </button>
                                <button
                                  className="btn btn-danger"
                                  disabled={user.id === currentUser.id}
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
