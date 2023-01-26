import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";
import { IBusinessIndustryAndPhase } from "../../model/business-industry-and-phase.model";
import { getBusinessPhases, getBusinessIndustry } from "../../services/business/assessment.service";
import { BusinessAssessmentQuestions } from "./BusinessAssessmentQuestions";
import { CompleteCompanyProfileModal } from "./CompleteCompanyProfileModal";

export const BusinessAssessment = (props: any): JSX.Element => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [businessPhase, setBusinessPhase] = useState();
  const [businessIndustry, setBusinessIndustry] = useState();
  const [business, setBusiness] = useState(props.business);
  const [businessIndustryAndPhaseState] = useState(state || {} as IBusinessIndustryAndPhase);
  const [businessIndustryAndPhase, setBusinessIndustryAndPhase] = useState(businessIndustryAndPhaseState.businessIndustryAndPhase);
  const bizPhaseList: any[] = [];
  const industryList: any[] = [];
  const [bizPhases, setBizPhases] = useState(bizPhaseList);
  const [bizIndustries, setBizIndustries] = useState(industryList);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");

    if (isInitLoad) {
      getBizPhases();
      getBizIndustry();

      console.log(bizIndustries);
      console.log(bizPhases);
    }

    
    setBusinessPhase(businessIndustryAndPhase.businessPhase);
  }, [navigate]);
  const getBizPhases = async () => {
    const phases = await getBusinessPhases();
    
    if (phases.data && phases.data.package) {
      setBizPhases(phases.data.package.data);
      setBusinessPhase(phases.data.package.data.find((ind: any) => ind.id === businessIndustryAndPhase.businessPhase).label);
    }
    setIsLoading(false);
  };

  const getBizIndustry = async () => {
    const industry = await getBusinessIndustry();
    if (industry.data && industry.data.package) {
      setBizIndustries(industry.data.package.data);
      setBusinessIndustry(industry.data.package.data.find((ind: any) => ind.id === businessIndustryAndPhase.businessIndustry).label);
    }
    setIsLoading(false);
    setIsInitLoad(false);
  };

  return (
    <div>
      <div className="row justify-content-center m-3">
        <div className="alert alert-info mt-4">
          <strong>
            <i className="fa fa-info-circle"></i> Next Step!&nbsp;
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
                    <span>&nbsp;{businessIndustry}</span>
                  ) : (
                    "n/a"
                  )}
                </p>
                <p>
                  <b>Business phase:</b>
                  {businessPhase ? <span>&nbsp;{businessPhase}</span> : "n/a"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <BusinessAssessmentQuestions business={business} businessIndustryAndPhase={businessIndustryAndPhase} />

        <CompleteCompanyProfileModal businessIndustry={businessIndustry} />
      </div>
    </div>
  );
};
