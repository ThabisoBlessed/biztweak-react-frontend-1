import { useEffect } from "preact/hooks";
import React, { useState } from "react";
import { getAllMentors } from "../../services/admin/mentor.service";
import "./Mentors.css";

export const Mentors = (props: any) => {
  const [mentors, setMentors] = useState(props.mentors);

  return (
    <div className="card shadow">
      <div className="card-header bg-white border-0 d-flex justify-content-between">
        <h5 className="mb-0 text-2xl font-medium text-dark">Mentors</h5>
        <form action="#">
          <div className="row g-3">
            <div className="col-6">
              <select name="" className="form-select">
                <option value="">Industry</option>
              </select>
            </div>
            <div className="col-6">
              <select name="" className="form-select">
                <option value="">Experience</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className="card-body border-0">
        <table className="table table-borderless table-striped">
          <thead>
            <tr className="text-sm text-muted">
              <th>No</th>
              <th>Biz Name</th>
              <th>Biz Code</th>
              <th>Manage Biz Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((mentor: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{mentor.id}</td>
                  <td>
                    <span className="badge bg-white text-dark">
                      {mentor.name}
                    </span>
                  </td>
                  <td>{mentor.bizCode}</td>
                  <td>
                    <div className="form-check form-switch form-switch-md">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </td>
                  <td>{mentor.manageBizCode}</td>
                  <td>
                    <a href="#" className="text-[#00c2cb]">
                      View profile
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
