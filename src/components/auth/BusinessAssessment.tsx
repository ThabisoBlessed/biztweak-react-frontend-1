import React from "react";

export const BusinessAssessment = (props: any): JSX.Element => {
  const questionList: any[] = [
    {id: "345342", name: "Channels", value: "Do you know how you are going to reach your customers?", answer: 0}
  ];
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
                  <b>Industry:</b> {props.industries.find((b: any) => b.id === props.businessIndustry).name}
                </p>industries
                <p>
                  <b>Business phase:</b> {props.bizPhases.find((b: any) => b.id === props.businessPhase).name}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion" id="assessment-accordion">
          <div className="accordion-item bg-[#f1feff]">
            <h2 className="accordion-header" id="heading62">
              <button
                className="accordion-button collapsed text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse62"
                aria-expanded="false"
                aria-controls="collapse62"
              >
                Channels
              </button>
            </h2>

            <div
              id="collapse62"
              className="accordion-collapse collapse show"
              aria-labelledby="heading62"
              data-bs-parent="#assessment-accordion"
            >
              <div className="accordion-body">
                <input name="assessment_id_3" type="hidden" value="3" />
                <input name="company_id" type="hidden" value="47" />
                <input name="category_id_3" type="hidden" value="62" />
                <input
                  name="po_outcome3"
                  type="hidden"
                  value="Channels to reach customers are developed"
                />
                <input
                  name="ne_outcome3"
                  type="hidden"
                  value="Channels to reach customers not developed"
                />
                <input
                  name="recom3"
                  type="hidden"
                  value="Social media marketing, marketing plan, marketing startegy, sales funnel, customer acquisition plan."
                />

                <div className="question" id="yes_no_group_3">
                  <p className="mb-1">
                    Do you know how you are going to reach your customers?
                  </p>
                  <label htmlFor="question-yes-3">Yes</label>
                  <input
                    name="question-3"
                    type="radio"
                    value="1"
                    id="question-yes-3"
                    className="m-2"
                  />
                  <label htmlFor="question-no-3">No</label>
                  <input
                    name="question-3"
                    type="radio"
                    value="0"
                    id="question-no-3"
                    className="m-2"
                  />
                </div>

                <input name="assessment_id_4" type="hidden" value="4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
