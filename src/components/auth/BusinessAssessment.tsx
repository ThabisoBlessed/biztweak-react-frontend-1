import React from "react";

export const BusinessAssessment = (props: any): JSX.Element => {
  return (
    <div>
      <div className="row justify-content-center m-3">
        <div className="alert alert-info mt-4">
          <strong>
            <i className="fa fa-info-circle"></i> Next Step!
          </strong>{" "}
          Complete your Company Assessment.
        </div>
        <h4 className="mt-3 text-3xl text-dark">Biz Assessment</h4>
        <div className="card my-3 bg-light">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img
                src="https://biztweak.org.za/public/new/images/company.png"
                className="img-fluid h-[80px] w-[80px] rounded-circle me-4"
                alt=""
              />
              <div>
                <p>
                  <b>Location:</b> n/a
                </p>
                <p>
                  <b>Industry:</b> {props.businessIndustry}
                </p>
                <p>
                  <b>Business phase:</b> {props.businessPhase}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion" id="assessment-accordion">
          <div className="accordion-item bg-[#f1feff]">
            <h2 className="accordion-header" id="heading62">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse62"
                aria-expanded="false"
                aria-controls="collapse62"
              >
                Channels
              </button>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
