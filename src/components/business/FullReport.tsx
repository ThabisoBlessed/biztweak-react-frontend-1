import React from "react";

export const FullReport = () => {
  return (
    <div className="row my-5">
      <h2 className="mt-3 col-12 text-3xl text-dark">Full Report</h2>
      <div className="col-md-6">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <div className="accordion-item bg-transparent">
              <h1 className="accordion-header mb-0 mt-0" id="heading1">
                <button
                  className="accordion-button collapsed bg-[#f1feff]"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  Business Concept
                </button>
              </h1>
              <div id="collapse1" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <p className="text-dark">Business Diagnosis</p>
                  <div id="accordion1" className="accordion">
                    <div className="accordion-item bg-transparent cust-accordion">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed bg-[#f1feff]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                          data-bs-parent="#accordion1"
                        >
                          Priority Elements
                        </button>
                        <div id="collapse2" className="accordion-body">
                          <ul className="list-group">
                            <li className="list-group-item bg-[#f1feff]">
                              <p className="text-2xl">
                                Value proposition
                                <span className="badge float-end rounded-pill bg-[#00c2cb]">
                                  30%
                                </span>
                              </p>
                              <div className="clearfix"></div>
                              <ul className="list-group list-group-numbered">
                                <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                  <p className="mb-0 color-code text-sm">
                                    Problem being solved not determined
                                  </p>
                                </div>
                                <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                  <p className="mb-0 color-code text-sm">
                                    Value being delivered not determined.
                                  </p>
                                </div>
                                <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-success">
                                  <p className="mb-0 color-code text-sm">
                                    Customer needs have been determined.
                                  </p>
                                </div>
                                <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                  <p className="mb-0 color-code text-sm">
                                    Unique selling point not determined.
                                  </p>
                                </div>
                                <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                  <p className="mb-0 color-code text-sm">
                                    No elevator pitch
                                  </p>
                                </div>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <div className="accordion-item bg-transparent">
              <h1 className="accordion-header mb-0 mt-0" id="heading1">
                <button
                  className="accordion-button collapsed bg-[#f1feff]"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  Business Structure
                </button>
              </h1>
              <div id="collapse1" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <p className="text-dark">Business Diagnosis</p>
                  <div id="accordion1" className="accordion">
                    <div className="accordion-item bg-transparent cust-accordion">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed bg-[#f1feff]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                          data-bs-parent="#accordion1"
                        >
                          Priority Elements
                        </button>
                        <div id="collapse2" className="accordion-body">
                          <ul className="list-group">
                            <li className="list-group-item bg-[#f1feff]">
                              <p className="text-2xl">
                                Value proposition
                                <span className="badge float-end rounded-pill bg-[#00c2cb]">
                                  30%
                                </span>
                              </p>
                              <div className="clearfix"></div>
                              <ul className="list-group list-group-numbered">
                                <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                  <p className="mb-0 color-code text-sm">
                                    Problem being solved not determined
                                  </p>
                                </div>
                                <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                  <p className="mb-0 color-code text-sm">
                                    Value being delivered not determined.
                                  </p>
                                </div>
                                <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-success">
                                  <p className="mb-0 color-code text-sm">
                                    Customer needs have been determined.
                                  </p>
                                </div>
                                <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                  <p className="mb-0 color-code text-sm">
                                    Unique selling point not determined.
                                  </p>
                                </div>
                                <div className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger">
                                  <p className="mb-0 color-code text-sm">
                                    No elevator pitch
                                  </p>
                                </div>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </h2>
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