import { ProfileMenu } from "./ProfileMenu";
import "./Profile.css";
import { useState } from "react";
import { BusinessAssessment } from "../business/BusinessAssessment";
import { AddCompanyModal } from "../business/AddCompanyModal";

export const Profile = () => {
  const bizPhaseList: any[] = [
    {
      id: 0,
      name: "I have an idea but don’t know what to do next",
      value: "phase_1",
    },
    {
      id: 1,
      name: "I have a business but am not making money",
      value: "phase_2",
    },
    {
      id: 2,
      name: "I have products/services but I have poor sales",
      value: "phase_3",
    },
    {
      id: 3,
      title:
        "We are generating revenue, we would like to grow through investment",
      value: "phase_4",
    },
    {
      id: 4,
      name: " I would like to be an entrepreneur but don’t know where to start",
      value: "phase_5",
    },
  ];
  const industryList: any[] = [
    {
      id: 0,
      name: "Admin/Business Support",
      value: "AdminBusinessSupport",
    },
    {
      id: 1,
      name: "Agriculture, Forestry,Fishing and Hunting",
      value: "AgricultureForestryFishingAndHunting",
    },
    {
      id: 2,
      name: "Arts, Entertainment and Recreation",
      value: "ArtsEntertainmentAndRecreation",
    },
    {
      id: 3,
      name: "Finance and Insurance",
      value: "FinanceAndInsurance",
    },
    {
      id: 4,
      name: "Healthcare and Social Assistance",
      value: "HealthcareAndSocialAssistance",
    },
    {
      id: 5,
      name: "Hospitality",
      value: "Hospitality",
    },
    {
      id: 6,
      name: "Information Technology",
      value: "InformationTechnology",
    },
    {
      id: 7,
      name: "Hospitality",
      value: "Hospitality",
    },
    {
      id: 8,
      name: "Manufacturing",
      value: "Manufacturing",
    },
    {
      id: 5,
      name: "Mining and Mineral processing",
      value: "MiningAndMineralProcessing",
    },
    {
      id: 6,
      name: "Professional, Scientific and Technical Services",
      value: "ProfessionalScientificAndTechnicalServices",
    },
    {
      id: 8,
      name: "Real Estate",
      value: "RealEstate",
    },
    {
      id: 9,
      name: "Retail",
      value: "Retail",
    },
    {
      id: 10,
      name: "TransportAndLogistics",
      value: "Transport and Logistics",
    },
    {
      id: 12,
      name: "Other",
      value: "Other",
    },
  ];
  const [bizPhases, setBizPhases] = useState(bizPhaseList);
  const [industries, setIndustries] = useState(industryList);
  const [showBizAssessment, setShowBizAssessment] = useState(false);
  const [businessPhase, setBusinessPhase] = useState(0);
  const [businessIndustry, setBusinessIndustry] = useState(0);

  const handleBizPhaseItemClick = (event: any) => {
    setBusinessPhase(Number(event.currentTarget.id));
  };

  const handleIndustryItemClick = (event: any) => {
    setBusinessIndustry(Number(event.currentTarget.id));
  };

  const onSave = (event: any) => {
    setShowBizAssessment(true);
  };

  return (
    <div>
      <div className="row w-full m-0 p-0">
        <div className="col-md-3 border-end">
          <ProfileMenu />
        </div>
        <div className="col-md-9 bg-white">
          {showBizAssessment ? (
            <BusinessAssessment
              businessPhase={businessPhase}
              bizPhases={bizPhases}
              industries={industries}
              businessIndustry={businessIndustry}
            />
          ) : (
            <>
              <div className="row justify-content-center">
                <img
                  src="https://biztweak.org.za/public/new/images/dashboard-placeholder.png"
                  className="img-fluid col-md-5"
                  alt=""
                />
              </div>

              <div className="row justify-content-center">
                <div className="col-md-6">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#addCompany"
                    className="btn btn-outline-info dotted-border col-12 mb-2 btn-lg"
                  >
                    <i className="fa fa-plus"></i> Add Company
                  </button>
                  <p className="text-center">
                    After completing the assessment you will get a business
                    health report that will give you recommendations on
                  </p>
                </div>
              </div>

              <AddCompanyModal
                industries={industries}
                bizPhases={bizPhases}
                onSave={onSave}
                handleBizPhaseItemClick={handleBizPhaseItemClick}
                handleIndustryItemClick={handleIndustryItemClick}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
