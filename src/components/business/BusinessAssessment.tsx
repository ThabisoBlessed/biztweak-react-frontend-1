import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ManageBusiness } from "./ManageBusiness";

export const BusinessAssessment = (props: any): JSX.Element => {
  const questionList: any[] = [
    {
      id: "345342",
      name: "Channels",
      questions: [
        {
          id: "dajsdflfsd",
          value: "Do you know how you are going to reach your customers?",
          answer: 0,
        },
        {
          id: "drwtetwe",
          value: "Do you have a marketing plan in place?",
          answer: 0,
        },
      ],
    },
  ];
  const navigate = useNavigate();
  const [showManageBusiness, setShowManageBusiness] = useState(false);

  const onSave = () => {
    setShowManageBusiness(true)
  };

  return (
    <div>
      {showManageBusiness ? (
        <ManageBusiness />
      ) : (
        <div className="row justify-content-center m-3">
          <div className="alert alert-info mt-4">
            <strong>
              <i className="fa fa-info-circle"></i> Next Step!
            </strong>
            Complete your Company Assessment.
          </div>
          <h4 className="mt-3 text-3xl text-dark">Biz Assessment</h4>
          <div className="card my-3 bg-light">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <img
                  src="https://biztweak.org.za/public/new/images/company.png"
                  className="img-fluid h-[80px] w-[80px] rounded-circle me-4"
                  alt="companyLogo"
                />
                <div>
                  <p>
                    <b>Location:</b> n/a
                  </p>
                  <p>
                    <b>Industry:</b>
                    {
                      props.industries.find(
                        (b: any) => b.id === props.businessIndustry
                      ).name
                    }
                  </p>
                  <p>
                    <b>Business phase:</b>
                    {
                      props.bizPhases.find(
                        (b: any) => b.id === props.businessPhase
                      ).name
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion" id="assessment-accordion">
            {questionList.map((question: any, index: number) => {
              return (
                <div
                  className="accordion-item bg-[#f1feff]"
                  key={`${String(question.name).toLowerCase()}_${index}`}
                  id={`${String(question.name).toLowerCase()}_${index}`}
                >
                  <h2 className="accordion-header" id="heading62">
                    <button
                      className="accordion-button collapsed text-dark"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse62"
                      aria-expanded="false"
                      aria-controls="collapse62"
                    >
                      {question.name}
                    </button>
                  </h2>
                  <div
                    id="collapse62"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading62"
                    data-bs-parent="#assessment-accordion"
                  >
                    <div className="accordion-body bg-[white]">
                      {question.questions.map(
                        (subQuestion: any, index: number) => {
                          return (
                            <div
                              className="question mb-3"
                              key={`${String(subQuestion.value).toLowerCase()}`}
                              id={`${String(subQuestion.value).toLowerCase()}`}
                            >
                              <p className="mb-1">{subQuestion.value}</p>
                              <label
                                htmlFor={`${String(
                                  subQuestion.value
                                ).toLowerCase()}_yes`}
                              >
                                Yes
                              </label>
                              <input
                                name={`${String(
                                  subQuestion.value
                                ).toLowerCase()}_yes`}
                                type="radio"
                                value="1"
                                id={`${String(
                                  subQuestion.value
                                ).toLowerCase()}_yes`}
                                className="m-2"
                              />
                              <label
                                htmlFor={`${String(
                                  subQuestion.value
                                ).toLowerCase()}_no`}
                              >
                                No
                              </label>
                              <input
                                name={`${String(
                                  subQuestion.value
                                ).toLowerCase()}_no`}
                                type="radio"
                                value="0"
                                id={`${String(
                                  subQuestion.value
                                ).toLowerCase()}_no`}
                                className="m-2"
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-end mt-3">
            <button
              type="button"
              className="btn bg-[#00c2cb] btn-info btn-lg p-3 w-[100px] text-white"
              data-bs-toggle="modal"
              data-bs-target="#completeCompanyProfile"
            >
              Save
            </button>
          </div>

          <div
            className="modal fade"
            id="completeCompanyProfile"
            tabIndex={-1}
            aria-labelledby="completeCompanyProfileLabel"
            aria-hidden="false"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="text-center">
                    <img
                      src="https://biztweak.org.za/public/new/images/complete-profile.png"
                      alt=""
                      className="col-md-6 img-fluid"
                    />
                    <h1 className="h3">Complete Company Profile</h1>
                    <p>
                      Completing your company information will help us know more
                      about your business. Lets fill the assessment text:
                      Completing your business assessment will help us know what
                      kind of help your business needs.
                    </p>
                    <button
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      id="okBtn"
                      type="button"
                      className="btn bg-[#00c2cb] btn-info btn-lg mt-2 p-3 w-[100px] text-white"
                      onClick={() => onSave()}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
    </div>
  );
};
