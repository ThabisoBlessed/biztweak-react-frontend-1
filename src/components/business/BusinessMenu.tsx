import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";
import { IBusinessMenuBusinessModel } from "../../model/business-menu-business-model";

export const BusinessMenu = (props: any) => {
  const businesses: IBusinessMenuBusinessModel[] = [
    {
      id: "asdfasd",
      name: "New Company",
      businessIndustry: "Admin/Business Support",
      businessPhase: "I have products/services but I have poor sales",
      assessmentComplete: true,
    },
    {
      id: "asdfasdsfawe",
      name: "Old Company",
      businessIndustry: "Admin/Business Support",
      businessPhase: "I have products/services but I have poor sales",
      assessmentComplete: true,
    },
  ];
  const navigate = useNavigate();
  const [activeBusinesses, setActiveBusinesses] = useState(businesses);

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
  }, [navigate]);

  const onCompleteAssessment = (business: IBusinessMenuBusinessModel) => {
    const businessIndustryAndPhase = JSON.stringify(business);
    navigate("/business/manage-business/assessment", { state: { businessIndustryAndPhase } });
  };

  const onViewBizReport = (business: IBusinessMenuBusinessModel) => {
    const selecteBusiness = JSON.stringify(business);
    navigate("/business/manage-business/report-summary", { state: { selecteBusiness } });
  };

  const onAddCompany = () => {
    const addCompanyModal = document.getElementById('addCompanyModal');
    if (!addCompanyModal) {
      navigate("/business");
    }
  }

  return (
    <div className="b-0 m-0 min-h-[100vh]">
      <div className="section">
        <h6 className="fw-bold mt-3 mb-3 text-dark">COMPANY</h6>
        <button
          data-bs-toggle="modal"
          data-bs-target="#addCompany"
          className="btn btn-outline-info dotted-border btn-lg col-12 hover:text-white hover:bg-[#16f0fb]"
          onClick={onAddCompany}
        >
          <i className="fa fa-plus"></i> Add Company
        </button>
      </div>

      {activeBusinesses.length > 0 ? (
        <ul className="list-group mt-3">
          {businesses.map(
            (business: IBusinessMenuBusinessModel, index: number) => {
              return (
                <li className="top-buffer" key={index} id={index.toString()}>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading37">
                      <button
                        className="accordion-button text-dark bg-[#f1feff]"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="true"
                        aria-controls={`collapse${index}`}
                      >
                        {business.name}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading37"
                      data-bs-parent={`#collapse${index}`}
                    >
                      <div className="accordion-body">
                        <h2 className="small text-center mb-0">
                          {business.name}
                        </h2>

                        <div className="text-center">
                          <small>Details</small>
                        </div>
                        <hr></hr>
                        <div className="small text-start">
                          <p className="d-flex m-2">
                            <i className="fa fa-info me-3"></i>{" "}
                            {business.businessPhase}
                          </p>

                          <p className="m-2">
                            <i className="fa fa-industry me-3"></i>{" "}
                            {business.businessIndustry}
                          </p>
                        </div>
                        <div className="top-buffer">
                          {business.assessmentComplete ? (
                            <button
                              className="btn profile-menu-action-btn mt-2 mb-2 text-white bg-[#00c2cb] hover:bg-[#16f0fb]"
                              onClick={() => onViewBizReport(business)}
                            >
                              <i className="fa fa-file-alt"></i> View Biz Report
                            </button>
                          ) : (
                            <button
                              onClick={() => onCompleteAssessment(business)}
                              className="btn profile-menu-action-btn mt-2 mb-2 text-white bg-[#00c2cb] hover:bg-[#16f0fb]"
                            >
                              <i className="fa fa-file-alt"></i> Complete
                              Assessment
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      ) : null}
    </div>
  );
};
