import React, { useState } from "react";
import "./Entrepreneurs.css";

export const Entrepreneurs = () => {
  const initEntrepreneurs: any[] = [
    {
      id: 1,
      name: "Guide App",
      location: "Johannesburg, South Africa",
      turnover: 56000,
      score: "67%",
      courseProgress: "79%",
      coursePoint: "50%"
    },
  ];
  const [entreprenuers, setEntreprenuers] = useState(initEntrepreneurs);

  return (
    <div className="row mt-3">
      <div className="card shadow">
        <div className="card-header bg-white border-0 d-flex justify-content-between">
          <h5 className="mb-0 text-2xl font-medium text-dark">Entrepreneurs</h5>
          <form action="#">
            <div className="row col-12">
              <div className="col-6">
                <select name="" className="form-select">
                  <option value="">Industry</option>
                </select>
              </div>
              <div className="col-6">
                <select name="" className="form-select">
                  <option value="">Stage</option>
                </select>
              </div>
              <div className="col-6">
                <select name="" className="form-select">
                  <option value="">Employee</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="card-body border-0">
          <table className="table table-borderless table-striped">
            <thead>
              <tr className="text-sm text-muted">
                <th>Biz Name</th>
                <th>Location</th>
                <th>Turnover</th>
                <th>Score</th>
                <th>Course Progress</th>
                <th>Course Point</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {entreprenuers.map((entrepreneur: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>
                      <span className="badge bg-white text-dark">
                        {entrepreneur.name}
                      </span>
                    </td>
                    <td>{entrepreneur.location}</td>
                    <td>{entrepreneur.turnover}</td>
                    <td>{entrepreneur.score}</td>
                    <td>{entrepreneur.courseProgress}</td>
                    <td>{entrepreneur.coursePoint}</td>
                    <td>
                      <a href="#" className="text-[#00c2cb]">View Report</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
