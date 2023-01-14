import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { IUser } from "../../model/user.model";
import { getAllUsers } from "../../services/admin/admin.service";
import { AdminMenu } from "./AdminMenu";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    if (users.length === 0) {
      getusers();
    }
  });

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

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <AdminMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="row mt-3">
              <div className="card shadow">
                <div className="card-header bg-white border-0 d-flex justify-content-between">
                  <h5 className="mb-0 text-2xl font-medium text-dark">Registered Users</h5>
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
                              <a
                                className="btn bg-[#00c2cb] text-white mr-2"
                                href="#"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
                              <a className="btn btn-warning mr-2" href="#">
                                <i className="fa fa-edit"></i>
                              </a>
                              <a className="btn btn-danger" href="#">
                                <i className="fa fa-trash"></i>
                              </a>
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
        </div>
      </div>
    </div>
  );
};
