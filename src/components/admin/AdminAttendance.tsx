import React from "react";
import { AdminMenu } from "./AdminMenu";

export const AdminAttendance = () => {
  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <AdminMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow mt-3">
                  <div className="card-header bg-white border-0">
                    <h5 className="mb-0 text-dark">Attendance</h5>
                  </div>
                  <div className="card-body border-0">
                    <div className="row align-items-center mb-3">
                      <div className="col-lg-3">
                        <div className="input-group">
                          <span className="input-group-text bg-form-field border-0">
                            <i className="fa fa-search"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control bg-secondary-site core"
                            placeholder="Employee Namee"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <input type="date" className="form-control core" />
                      </div>
                      <div className="col-lg-2">
                        <select name="" className="form-select core">
                          <option value="">Life Coaching</option>
                        </select>
                      </div>
                      <div className="col-lg-2">
                        <button className="btn btn-main btn-lg">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th className="text-center">Employee Name</th>
                            <th className="text-center">1</th>
                            <th className="text-center">2</th>
                            <th className="text-center">3</th>
                            <th className="text-center">4</th>
                            <th className="text-center">5</th>
                            <th className="text-center">6</th>
                            <th className="text-center">7</th>
                            <th className="text-center">8</th>
                            <th className="text-center">9</th>
                            <th className="text-center">10</th>
                            <th className="text-center">11</th>
                            <th className="text-center">12</th>
                            <th className="text-center">13</th>
                            <th className="text-center">14</th>
                            <th className="text-center">15</th>
                            <th className="text-center">16</th>
                            <th className="text-center">17</th>
                            <th className="text-center">18</th>
                            <th className="text-center">19</th>
                            <th className="text-center">20</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">Jhon Doe</td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center">
                              <i className="fa fa-lg fa-times-circle text-danger"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center">
                              <i className="fa fa-lg fa-times-circle text-danger"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center">
                              <i className="fa fa-lg fa-times-circle text-danger"></i>
                            </td>
                            <td className="text-center">
                              <i className="fa fa-lg fa-times-circle text-danger"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                            <td className="text-center">
                              <i className="fa fa-lg fa-times-circle text-danger"></i>
                            </td>
                            <td className="text-center text-[#00c2cb]">
                              <i className="fa fa-lg fa-check-circle text-main"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
