import React from "react";

export const Recommendations = () => {
  return (
    <div>
      <div className="recommendations bg-primary-light row">
        <div className="alert rounded-0 bg-[#00c2cb] text-center text-white p-4 mb-5">
          <div className="row justify-content-center">
            <p className="col-md-7 mb-0">
              The following are the topics and learning content you need to read
              and implement in order to improve the processes, systems in your
              bussiness, as well as bussiness perfomance
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="accordion" id="strategy">
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button bg-white text-dark fw-normal collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#item-1"
                    aria-expanded="false"
                  >
                    <img
                      src="https://biztweak.org.za/public/new/images/strategic.png"
                      className="me-3 rounded-circle img-fluid h-[50px] w-[50px]"
                      alt=""
                    />{" "}
                    Strategic Planning
                  </button>
                </h2>
                <div
                  id="item-1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#strategy"
                >
                  <div className="accordion-body">
                    <p className="recom lead">-Revenue models</p>
                    <p className="recom lead">-Value proposition canvas</p>

                    <p className="recom lead">-Scale strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="alert rounded-0 bg-[#00c2cb] text-center text-white p-4 mb-5">
          <div className="row justify-content-center">
            <p className="col-md-7 mb-0">
              The following are professionals you need in order to improve the
              processes, systems in your bussiness, as well as bussiness
              perfomance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
