import React from "react";
import { AdminMenu } from "../admin/AdminMenu";

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
                        <a href="#" className="btn btn-main-outline">
                          <i className="fa fa-plus"></i>
                        </a>
                        <a href="#" className="btn btn-main-outline">
                          <i className="fa fa-edit"></i>
                        </a>
                        <a href="#" className="btn btn-outline-danger">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </div>
                    <form action="#" className="mt-4">
                      <div className="form-group">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Name{" "}
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title=""
                              data-bs-original-title="Name is required."
                              aria-label="Name is required."
                            ></i>
                          </label>
                        </div>
                        <input type="text" className="form-control core" />
                      </div>
                      <div className="form-group">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Industry{" "}
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title=""
                              data-bs-original-title="Name is required."
                              aria-label="Name is required."
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
                      <div className="form-group">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Location{" "}
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title=""
                              data-bs-original-title="Name is required."
                              aria-label="Name is required."
                            ></i>
                          </label>
                        </div>
                        <input type="text" className="form-control core" />
                      </div>
                      <div className="form-group">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Type{" "}
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title=""
                              data-bs-original-title="Name is required."
                              aria-label="Name is required."
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
                      <div className="form-group">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Job Experience (Past jobs){" "}
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title=""
                              data-bs-original-title="Name is required."
                              aria-label="Name is required."
                            ></i>
                          </label>
                        </div>
                        <input type="text" className="form-control core" />
                      </div>
                      <div className="form-group">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Years of Experience{" "}
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title=""
                              data-bs-original-title="Name is required."
                              aria-label="Name is required."
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
                      <div className="form-group">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Qualification{" "}
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title=""
                              data-bs-original-title="Name is required."
                              aria-label="Name is required."
                            ></i>
                          </label>
                        </div>
                        <input type="text" className="form-control core" />
                      </div>
                      <button className="btn btn-main btn-wide px-5">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-12 my-3">
                  <div className="card h-100 shadow">
                    <div className="card-header bg-white border-0 d-flex justify-content-between">
                      <h5 className="mb-0 text-dark">Users</h5>
                      <a href="#">See all</a>
                    </div>
                    <div className="card-body border-0">
                      <div className="d-flex mb-2">
                        <div>
                          <img
                            src="../images/avatar.png"
                            height="40px"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 fw-600">
                            <span className="text-dark">Jazmyn</span>
                            <span className="text-muted">@jaz.designer</span>
                          </h6>
                          <p>8hour ago</p>
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <div>
                          <img
                            src="../images/avatar.png"
                            height="40px"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 fw-600">
                            <span className="text-dark">Jazmyn</span>
                            <span className="text-muted">@jaz.designer</span>
                          </h6>
                          <p>8hour ago</p>
                        </div>
                      </div>
                      <div className="d-flex mb-2">
                        <div>
                          <img
                            src="../images/avatar.png"
                            height="40px"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 fw-600">
                            <span className="text-dark">Jazmyn</span>
                            <span className="text-muted">@jaz.designer</span>
                          </h6>
                          <p>8hour ago</p>
                        </div>
                      </div>
                      <button className="btn btn-main btn-wide col-12">
                        Send email
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="card h-100 shadow">
                    <div className="card-header bg-white border-0">
                      <h5 className="mb-0 text-dark">Actions</h5>
                    </div>
                    <div className="card-body border-0">
                      <div className="bg-light rounded-3 p-3">
                        <div className="row">
                          <div className="col-6 text-center text-dark p-2">
                            <img
                              src="../images/icons/clock.png"
                              width="50px"
                              alt=""
                            />
                            <p className="my-2">Early stage</p>
                          </div>
                          <div className="col-6 text-center text-dark p-2">
                            <img
                              src="../images/icons/pot.png"
                              width="50px"
                              alt=""
                            />
                            <p className="my-2">Start up</p>
                          </div>
                          <div className="col-6 text-center text-dark p-2">
                            <img
                              src="../images/icons/bulb.png"
                              width="50px"
                              alt=""
                            />
                            <p className="my-2">Idea concept</p>
                          </div>
                          <div className="col-6 text-center text-dark p-2">
                            <img
                              src="../images/icons/dashboard.png"
                              width="50px"
                              alt=""
                            />
                            <p className="my-2">Accelerate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card h-100 shadow">
                    <div className="card-header bg-white border-0">
                      <h5 className="mb-0 text-dark">Rating</h5>
                    </div>
                    <div className="card-body border-0">
                      {/* <canvas id="myChart3" width="672" height="514" style="display: block; box-sizing: border-box; height: 257px; width: 336px;"></canvas> */}
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
