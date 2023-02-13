import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IBusinessIndustryAndPhase } from "../../model/business-industry-and-phase.model";

export const AddUserModal = (props: any) => {
    const [userTypes, setUserTypes] = useState(["entrepreneur", "mentor", "consultant", "coach", "incubator"]);
    const [selectedUserType, setSelectedUserType] = useState("entrepreneur");
    const navigate = useNavigate();
  
    const handleUserTypeItemClick = (event: any) => {
      console.log(event.target.value)
      setSelectedUserType(event.target.value);
    };
  
    const onSave = () => {
      navigate("/admin/add-user", {
        state: { selectedUserType },
      });
    };
  
    return (
      <div>
        <div
          className="modal fade"
          id="addUser"
          tabIndex={-1}
          aria-labelledby="addUserLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa fa-close"></i>
                </button>
              </div>
              <div className="modal-body">
                <h5>Add New User</h5>
                <input type="hidden" />
                <div className="form-group my-3">
                  <div className="col-auto">
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="userType"
                        name="userType"
                        value={selectedUserType}
                        onChange={handleUserTypeItemClick}
                      >
                        {userTypes.map((userType: string, index: number) => {
                          return (
                            <option key={index} value={userType}>
                              {userType}
                            </option>
                          );
                        })}
                      </select>
                      <label htmlFor="userType" className="form-label">
                        User Type
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="submit"
                    className="btn bg-[#00c2cb] p-3 w-[100px] btn-info text-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={(e) => onSave()}
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
