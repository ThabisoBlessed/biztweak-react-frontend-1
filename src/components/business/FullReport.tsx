import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";

export const FullReport = (props: any) => {
  const navigate = useNavigate();
  const [percentages, setPercentages] = useState(props.percentages);
  const initFullReport: (string | any)[][] = [];
  const [businessStructure, setBusinessStructure] = useState(
    props.fullReport.filter(
      (r: any) => String(r.type).toLowerCase() === "business structure"
    )
  );
  const [businessConcept, setBusinessConcept] = useState(
    props.fullReport.filter(
      (r: any) => String(r.type).toLowerCase() === "business concept"
    )
  );
  const businessStructureDisplay = businessStructure.reduce(
    (
      businessSoFar: any,
      {
        questionId,
        answer,
        output,
        category,
        type,
        percentage = 0,
        isMajorGap = props.fullReportCategories.isMajorGap.includes(category),
        isPriorityElement = props.fullReportCategories.isPriorityElement.includes(
          category
        ),
        isBestPerforming = props.fullReportCategories.isBestPerforming.includes(
          category
        ),
      }: {
        questionId: number;
        answer: string;
        output: string;
        category: string;
        type: string;
        percentage: number;
        isMajorGap: boolean;
        isPriorityElement: boolean;
        isBestPerforming: boolean;
      }
    ) => {
      if (output.length > 0) {
        if (!businessSoFar[category]) businessSoFar[category] = [];
        businessSoFar[category].push({
          questionId,
          answer,
          output,
          category,
          type,
          percentage,
          isMajorGap,
          isPriorityElement,
          isBestPerforming,
        });
      }
      return businessSoFar;
    },
    {}
  );
  const [displayBusinessStructure, setDisplayBusinessStructure] = useState(
    Object.entries(businessStructureDisplay)
  );
  const businessConceptDisplay = businessConcept.reduce(
    (
      businessSoFar: any,
      {
        questionId,
        answer,
        output,
        category,
        type,
        percentage = 0,
        isMajorGap = props.fullReportCategories.isMajorGap.includes(category),
        isPriorityElement = props.fullReportCategories.isPriorityElement.includes(
          category
        ),
        isBestPerforming = props.fullReportCategories.isBestPerforming.includes(
          category
        ),
      }: {
        questionId: number;
        answer: string;
        output: string;
        category: string;
        type: string;
        percentage: number;
        isMajorGap: boolean;
        isPriorityElement: boolean;
        isBestPerforming: boolean;
      }
    ) => {
      if (output.length > 0) {
        if (!businessSoFar[category]) businessSoFar[category] = [];
        businessSoFar[category].push({
          questionId,
          answer,
          output,
          category,
          type,
          percentage,
          isMajorGap,
          isPriorityElement,
          isBestPerforming,
        });
      }
      return businessSoFar;
    },
    {}
  );
  const [displayBusinessConcept, setDisplayBusinessConcept] = useState(
    Object.entries(businessConceptDisplay)
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
    console.log(businessConceptDisplay);
    setIsLoading(false);
  }, [navigate]);

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
                  data-bs-target="#collapse_1_1"
                  aria-expanded="false"
                  aria-controls="collapse_1_1"
                >
                  Business Concept
                </button>
              </h1>
              <div
                id="collapse_1_1"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <p className="text-dark">Business Diagnosis</p>

                  {/* Priority */}
                  <div className="accordion-item bg-transparent">
                    <h1 className="accordion-header mb-0 mt-0" id="heading1">
                      <button
                        className="accordion-button collapsed bg-[#f1feff]"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse_priority_1"
                        aria-expanded="false"
                        aria-controls="collapsepriority_1"
                      >
                        Priority Elements
                      </button>
                    </h1>
                    <div
                      id="collapse_priority_1"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        {isLoading ? null : (
                          <>
                            {displayBusinessConcept.map(
                              (concept: any, index: number) => {
                                return (
                                  <>
                                    {concept[1][0].isBestPerforming ? (
                                      <ul className="list-group">
                                        <li className="list-group-item bg-[#f1feff]">
                                          <p className="text-sm">
                                            {concept[0]}
                                            <span className="badge float-end rounded-pill bg-[#00c2cb]">
                                              {percentages[concept[0]]}%
                                            </span>
                                          </p>
                                          <div className="clearfix"></div>
                                          <ul className="list-group list-group-numbered">
                                            {concept[1].map(
                                              (response: any, i: number) => {
                                                return (
                                                  <div
                                                    key={i}
                                                    className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger"
                                                  >
                                                    <p className="mb-0 color-code text-sm">
                                                      {response.output}
                                                    </p>
                                                  </div>
                                                );
                                              }
                                            )}
                                          </ul>
                                        </li>
                                      </ul>
                                    ) : null}
                                  </>
                                );
                              }
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Best Perfoming */}
                  <div className="accordion-item bg-transparent">
                    <h1 className="accordion-header mb-0 mt-0" id="heading1">
                      <button
                        className="accordion-button collapsed bg-[#f1feff]"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse_best_performing_1"
                        aria-expanded="false"
                        aria-controls="collapse_best_performing_1"
                      >
                        Best Performing
                      </button>
                    </h1>
                    <div
                      id="collapse_best_performing_1"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">Test</div>
                    </div>
                  </div>

                  {/* Major Gaps */}
                  <div className="accordion-item bg-transparent">
                    <h1 className="accordion-header mb-0 mt-0" id="heading1">
                      <button
                        className="accordion-button collapsed bg-[#f1feff]"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse_major_gaps_1"
                        aria-expanded="false"
                        aria-controls="collapse_major_gaps_1"
                      >
                        Major Gaps
                      </button>
                    </h1>
                    <div
                      id="collapse_major_gaps_1"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">Test 3</div>
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
                  {isLoading ? null : (
                    <>
                      {displayBusinessStructure.map(
                        (structure: any, index: number) => {
                          return (
                            <div
                              id={`accordion${index}`}
                              className="accordion"
                              key={index}
                            >
                              <div className="accordion-item bg-transparent cust-accordion">
                                <h2
                                  className="accordion-header"
                                  id="headingOne"
                                >
                                  <button
                                    className="accordion-button collapsed bg-[#f1feff]"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#structure_collapse${index}`}
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                    data-bs-parent={`accordion${index}`}
                                  >
                                    {structure[0]}
                                  </button>
                                  <div
                                    id={`structure_collapse${index}`}
                                    className="accordion-body"
                                  >
                                    <ul className="list-group">
                                      <li className="list-group-item bg-[#f1feff]">
                                        <p className="text-sm">
                                          {structure[0]}
                                          <span className="badge float-end rounded-pill bg-[#00c2cb]">
                                            {percentages[structure[0]]}%
                                          </span>
                                        </p>
                                        <div className="clearfix"></div>
                                        <ul className="list-group list-group-numbered">
                                          {structure[1].map(
                                            (response: any, i: number) => {
                                              return (
                                                <div
                                                  key={i}
                                                  className="list-group-item d-flex justify-content-between align-items-start list-group-item-danger"
                                                >
                                                  <p className="mb-0 color-code text-sm">
                                                    {response.output}
                                                  </p>
                                                </div>
                                              );
                                            }
                                          )}
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
