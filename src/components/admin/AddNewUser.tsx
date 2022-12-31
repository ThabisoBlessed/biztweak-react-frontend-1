import React from "react";
import { ActionsCard } from "./ActionsCard";
import { AdminMenu } from "./AdminMenu";
import { ChartCard } from "./ChartCard";
import { UsersCard } from "./UsersCard";

export const AddNewUser = () => {
  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 col-sm-12 min-h-[100vh]">
          <AdminMenu />
        </div>
        <div className="col-md-10 col-sm-12 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <div className="card shadow mt-3">
                  <div className="card-header bg-white border-0">
                    <h5 className="mb-0 text-dark">Add New User</h5>
                  </div>
                  <div className="card-body border-0">
                    <div className="row">
                      <div className="col-12">
                        <a
                          href="#"
                          className="btn mr-2 border-[#00c2cb] text-[#00c2cb] hover:bg-[#00c2cb] hover:text-white"
                        >
                          <i className="fa fa-plus"></i>
                        </a>
                        <a
                          href="#"
                          className="btn mr-2 border-[#00c2cb] text-[#00c2cb] hover:bg-[#00c2cb] hover:text-white"
                        >
                          <i className="fa fa-edit"></i>
                        </a>
                        <a href="#" className="btn btn-outline-danger">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </div>
                    <form action="#" className="mt-4">
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Name&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Name is required"
                              data-bs-original-title="Name is required."
                              aria-label="Name is required."
                            ></i>
                          </label>
                        </div>
                        <input type="text" className="form-control core" />
                      </div>
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Industry&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Industry is required"
                              data-bs-original-title="Industry is required."
                              aria-label="Industry is required."
                            ></i>
                          </label>
                        </div>
                        <select name="type" className="form-select core">
                          <option value="">Select</option>
                          <option value="">Manufacturing</option>
                          <option value="">Energy</option>
                          <option value="">Technology</option>
                        </select>
                      </div>
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Location&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Location is required"
                              data-bs-original-title="Location is required."
                              aria-label="Location is required."
                            ></i>
                          </label>
                        </div>
                        <input type="text" className="form-control core" />
                      </div>
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Type&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Type is required"
                              data-bs-original-title="Type is required."
                              aria-label="Type is required."
                            ></i>
                          </label>
                        </div>
                        <select name="type" className="form-select core">
                          <option value="">Select</option>
                          <option value="">Ideation</option>
                          <option value="">Pre-revenue</option>
                          <option value="">Post-revenue</option>
                        </select>
                      </div>
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Job Experience (Past jobs)&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Job Experience (Past jobs) is required"
                              data-bs-original-title="Job Experience (Past jobs) is required."
                              aria-label="Job Experience (Past jobs) is required."
                            ></i>
                          </label>
                        </div>
                        <input type="text" className="form-control core" />
                      </div>
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Years of Experience&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Years of Experience is required"
                              data-bs-original-title="Years of Experience is required."
                              aria-label="Years of Experience is required."
                            ></i>
                          </label>
                        </div>
                        <select name="type" className="form-select core">
                          <option value="">Select</option>
                          <option value="">1-5</option>
                          <option value="">5-10</option>
                          <option value="">10-15</option>
                          <option value="">15-20</option>
                        </select>
                      </div>
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Qualification&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Qualification is required"
                              data-bs-original-title="Qualification is required."
                              aria-label="Qualification is required."
                            ></i>
                          </label>
                        </div>
                        <input type="text" className="form-control core" />
                      </div>
                      <button className="btn hover:bg-[#16f0fb] mt-2 bg-[#00c2cb] text-white btn-wide px-5">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-12 my-3">
                  <UsersCard />
                </div>
                <div className="col-12 mb-3">
                  <ActionsCard />
                </div>
                <div className="col-12">
                  <ChartCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
