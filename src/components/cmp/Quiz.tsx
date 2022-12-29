import React from "react";
import { CMPMenu } from "./CMPMenu";

export const Quiz = () => {
  return (
    <div className="w-full">
      <div className="m-3">
        <div className="row">
          <div className="col-md-2 min-h-[100vh]">
            <CMPMenu />
          </div>
          <div className="col-md-10 text-left bg-light border-start">
            <form className="row mt-3">
              <div className="col-md-12">
                <h2 className="fw-600 text-dark">Test Name</h2>
                <table className="table">
                  <thead className="bg-[#00c2cb]">
                    <tr>
                      <th className="text-white fw-600">Status</th>
                      <th className="text-white fw-600">Question</th>
                      <th className="text-white fw-600">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Added</td>
                      <td>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </td>
                      <td>
                        <a className="btn text-dark btn-link" href="#">
                          <i className="fa fa-edit fa-lg"></i>
                        </a>
                        <a
                          className="btn text-dark btn-link"
                          href="#quiz-modal"
                          data-bs-toggle="modal"
                        >
                          <i className="fa fa-search fa-lg"></i>
                        </a>
                        <a className="btn text-dark btn-link" href="#">
                          <i className="fa fa-trash fa-lg"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
