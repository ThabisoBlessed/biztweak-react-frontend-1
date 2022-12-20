import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";
import { BusinessAssessmentQuestions } from "./BusinessAssessmentQuestions";
import { CompleteCompanyProfileModal } from "./CompleteCompanyProfileModal";

export const BusinessAssessment = (props: any): JSX.Element => {
  const [businessPhase, setBusinessPhase] = useState();
  const [businessIndustry, setBusinessIndustry] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
    setBusinessIndustry(props.businessIndustryAndPhase.businessIndustry);
    setBusinessPhase(props.businessIndustryAndPhase.businessPhase);
  }, [navigate]);

  return (
    <div>
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
                  {businessIndustry ? (
                    <span>{businessIndustry}</span>
                  ) : (
                    "n/a"
                  )}
                </p>
                <p>
                  <b>Business phase:</b>
                  {businessPhase ? <span>{businessPhase}</span> : "n/a"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <BusinessAssessmentQuestions />

        <CompleteCompanyProfileModal businessIndustry={businessIndustry} />
      </div>
    </div>
  );
};
