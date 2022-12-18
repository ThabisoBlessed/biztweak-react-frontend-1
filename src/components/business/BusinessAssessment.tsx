import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";
import { BusinessAssessmentQuestions } from "./BusinessAssessmentQuestions";
import { CompleteCompanyProfileModal } from "./CompleteCompanyProfileModal";

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
  // const [businessPhase, setBusinessPhase] = useState(
  //   props.businessIndustryAndPhase.businessIndustryAndPhase.businessPhase
  // );
  // const [businessIndustry, setBusinessIndustry] = useState(
  //   props.businessIndustryAndPhase.businessIndustryAndPhase
  //     .businessIndustry
  // );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
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
              {/* <div>
                <p>
                  <b>Location:</b> n/a
                </p>
                <p>
                  <b>Industry:</b>
                  {businessIndustry ? (
                    <span>{businessIndustry.name}</span>
                  ) : (
                    "n/a"
                  )}
                </p>
                <p>
                  <b>Business phase:</b>
                  {businessPhase ? <span>{businessPhase.name}</span> : "n/a"}
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <BusinessAssessmentQuestions questionList={questionList} />

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

        <CompleteCompanyProfileModal />
      </div>
    </div>
  );
};
