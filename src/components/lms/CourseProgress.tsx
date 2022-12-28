import React from "react";
import { LMSMenu } from "./LMSMenu";
import CourseImg from "../../images/course.png";

export const CourseProgress = () => {
  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <LMSMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="row mt-3">
              <div className="card shadow">
                <div className="card-header bg-white border-0 d-flex justify-content-between">
                  <h5 className="mb-0 text-dark">Course Progress</h5>
                </div>
                <div className="card-body border-0">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="width-[500px]">Course</th>
                        <th>Progress</th>
                        <th>Score</th>
                        <th>Enrolled Date</th>
                        <th>Due in</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="max-w-[400px]">
                          <div className="d-flex align-items-center">
                            <img
                              src={CourseImg}
                              className="img-fluid rounded me-2 o-cover h-[50px] w-[50px]"
                              alt=""
                            />
                            <div>
                              <p className="mb-0 fw-600">
                                E-Bussiness Managment course learning
                              </p>
                              <p className="text-muted mb-0">10/40 Lessons</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-main width-[75%]"
                              role="progressbar"
                              aria-label="progress"
                              aria-valuenow={75} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success">75%</span>
                        </td>
                        <td>19-02-2022</td>
                        <td>1 days 2 hour</td>
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
  );
};
