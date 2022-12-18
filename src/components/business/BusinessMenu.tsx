import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BusinessMenu = () => {
  const navigate = useNavigate();

  const onCompleteAssessment = () => {
    navigate("/business/assessment");
  };

  const onViewBizReport = () => {
    navigate("/business/manage-business/report-summary");
  };

  return (
    <div className="b-0 m-0 text-dark">
      <div className="section">
        <h6 className="fw-bold mt-3 mb-3">COMPANY</h6>
        <button
          data-bs-toggle="modal"
          data-bs-target="#addCompany"
          className="btn btn-outline-info dotted-border btn-lg col-12"
        >
          <i className="fa fa-plus"></i> Add Company
        </button>
      </div>

      <ul className="list-group mt-3">
        <li className="top-buffer">
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading37">
              <button
                className="accordion-button text-dark bg-[#f1feff]"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse37"
                aria-expanded="true"
                aria-controls="collapse37"
              >
                No name
              </button>
            </h2>
            <div
              id="collapse37"
              className="accordion-collapse collapse show"
              aria-labelledby="heading37"
              data-bs-parent="#assessment-accordion"
            >
              <div className="accordion-body">
                <h2 className="small text-center mb-0">No name</h2>

                <div className="text-center">
                  <small>Details</small>
                </div>
                <hr></hr>
                <div className="small text-start">
                  <p className="d-flex m-2">
                    <i className="fa fa-info me-3"></i> I have an idea but don’t
                    know what to do next
                  </p>

                  <p className="m-2">
                    <i className="fa fa-industry me-3"></i> Information
                    Technology
                  </p>
                </div>
                <div className="top-buffer">
                  <button
                    onClick={onCompleteAssessment}
                    className="btn profile-menu-action-btn mt-2 mb-2 bg-[#00c2cb] text-[white]"
                  >
                    <i className="fa fa-file-alt"></i> Complete Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="top-buffer">
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading38">
              <button
                className="accordion-button text-dark bg-[#f1feff]"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse38"
                aria-expanded="true"
                aria-controls="collapse38"
              >
                Developer
              </button>
            </h2>
            <div
              id="collapse38"
              className="accordion-collapse collapse show"
              aria-labelledby="heading38"
              data-bs-parent="#assessment-accordion"
            >
              <div className="accordion-body">
                <h2 className="small text-center mb-0 text-dark">Developer</h2>

                <div className="text-center">
                  <small>Details</small>
                </div>
                <hr></hr>
                <div className="small text-start">
                  <p className="d-flex m-2">
                    <i className="fa fa-info me-3"></i> I have an idea but don’t
                    know what to do next
                  </p>

                  <p className="m-2">
                    <i className="fa fa-industry me-3"></i> Information
                    Technology
                  </p>
                  <p className="m-2">
                    <i className="fa fa-map-marker me-3"></i> 20 Bishop Road,
                    Windermere, Berea, South Africa
                  </p>
                </div>
                <div className="top-buffer">
                  <button
                    className="btn profile-menu-action-btn mt-2 mb-2 bg-[#00c2cb] text-[white]"
                    onClick={onViewBizReport}
                  >
                    <i className="fa fa-file-alt"></i> View Biz Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
