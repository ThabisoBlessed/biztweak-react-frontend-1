import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";

export const FullReport = (props: any) => {
  const navigate = useNavigate();
  const [fullReport, setFullReport] = useState(props.fullReport);
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
        percentage,
      }: {
        questionId: number;
        answer: string;
        output: string;
        category: string;
        type: string;
        percentage: number;
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
          percentage: 0,
        });
      }
      return businessSoFar;
    },
    {}
  );
  const [displayBusinessStructure, setDisplayBusinessStructure] = useState(
    Object.entries(businessStructureDisplay)
  );
  const businessConceptDisplay: any[] = businessConcept.reduce(
    (
      businessSoFar: any,
      {
        questionId,
        answer,
        output,
        category,
        type,
        percentage,
      }: {
        questionId: number;
        answer: string;
        output: string;
        category: string;
        type: string;
        percentage: number;
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
          percentage: 0,
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
    // console.log(fullReport);

    // setDisplayBusinessStructure(businessStructureDisplay);

    console.log(displayBusinessStructure);
    // console.log(displayBusinessConcept);
    // console.log(businessStructure);

    // console.log('businessConcept', businessConcept);
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
                  {isLoading ? null : (
                    <>
                      {displayBusinessConcept.map(
                        (concept: any, index: number) => {
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
                                    {concept[0]}
                                  </button>
                                  <div
                                    id={`structure_collapse${index}`}
                                    className="accordion-body"
                                  >
                                    <ul className="list-group">
                                      <li className="list-group-item bg-[#f1feff]">
                                        <p className="text-sm">
                                          {concept[0]}
                                          <span className="badge float-end rounded-pill bg-[#00c2cb]">
                                            {concept[1].percentage}%
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
                                            {structure[1].percentage}%
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
