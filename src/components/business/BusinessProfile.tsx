import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";
import { BusinessMenu } from "./BusinessMenu";

export const BusinessProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");

    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [navigate]);

  const onSave = () => {
    navigate("/business/manage-business/business-health-report");
  };

  const onBack = () => {
    navigate("/business/assessment");
  }

  return (
    <div>
      <div className="row w-full m-0 p-0">
        <div className="col-md-3 border-end">
          <BusinessMenu />
        </div>
        <div className="col-md-9 bg-white">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="alert alert-success mt-4">
                <strong>
                  <i className="fa fa-check"></i> SUCCESS!
                </strong>
                Company Assessment Completed.
              </div>
              <div className="alert alert-info mt-4">
                <strong>
                  <i className="fa fa-info-circle"></i> Next Step!
                </strong>
                Complete your Company Profile.
              </div>
              <h4 className="mt-3">Complete Company Profile</h4>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Company Name</label>
                </div>
                <div className="col-md-8">
                  <input
                    placeholder="Company name..."
                    name="name"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Company Logo</label>
                </div>
                <div className="col-md-8">
                  <input name="image" type="file" className="form-control" />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Is your company registered?</label>
                </div>
                <div className="col-md-8">
                  <label className="mr-2">
                    Yes
                    <input
                      name="registered"
                      type="radio"
                      onChange={() => {}}
                      value="1"
                      className="radio"
                    />
                  </label>
                  <label>
                    No
                    <input
                      name="registered"
                      type="radio"
                      value="0"
                      onChange={() => {}}
                      className="radio"
                    />
                  </label>
                </div>
              </div>
              <div style={{ display: "none" }} id="reg-bin">
                <div className="row my-4">
                  <div className="col-md-4">
                    <label>Registration Number</label>
                  </div>
                  <div className="col-md-8">
                    <input
                      id="reg_number"
                      placeholder="Registration number..."
                      name="reg_number"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-md-4">
                    <label>Registration Date</label>
                  </div>
                  <div className="col-md-8">
                    <input
                      id="reg_date"
                      placeholder="Registration date..."
                      name="reg_date"
                      type="date"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Company Location</label>
                </div>
                <div className="col-md-8">
                  <input
                    id="autocomplete"
                    placeholder="Company physical address..."
                    name="location"
                    type="text"
                    className="form-control pac-target-input"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Number of employees</label>
                </div>
                <div className="col-md-8">
                  <input
                    id="num_employees"
                    placeholder="Number of employees at your company..."
                    name="num_employees"
                    type="number"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Annual Turnover</label>
                </div>
                <div className="col-md-8">
                  <input
                    id="annual_turnover"
                    placeholder="What is your yearly turnover..."
                    name="annual_turnover"
                    type="number"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Monthly Turnover (Over 6 months)</label>
                </div>
                <div className="col-md-8">
                  <input
                    id="monthly_turnover"
                    placeholder="What was your monthly turnover in the past 6 months..."
                    name="6mo_turnover"
                    type="number"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Products/Services</label>
                </div>
                <div className="col-md-8">
                  <textarea
                    id="offering"
                    placeholder="What products or services is your company offering?"
                    name="offering"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12 text-end">
                  <button className="btn btn-outline-info mr-2 btn-lg mt-2 p-3 w-[100px] hover:text-white hover:bg-[#16f0fb]" onClick={onBack}>
                    Back
                  </button>
                  <button className="btn bg-[#00c2cb] btn-info btn-lg mt-2 p-3 w-[100px] text-white hover:text-white hover:bg-[#16f0fb]" onClick={onSave}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
