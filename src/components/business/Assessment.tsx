import { BusinessMenu } from "./BusinessMenu";
import "./Assessment.css";
import { useEffect, useState } from "react";
import { BusinessAssessment } from "./BusinessAssessment";
import { isLoggedIn } from "../../config";
import { useLocation, useNavigate } from "react-router-dom";
import { IBusinessMenuBusinessModel } from "../../model/business-menu-business-model";
import { getBusinessIndustry, getBusinessPhases } from "../../services/business/assessment.service";

export const Assessment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Update existing company
  // If "business" exists then we have an existing company
  const [selectedBusiness] = useState(
    state || ({} as IBusinessMenuBusinessModel)
  );
  const [business, setBusiness] = useState(selectedBusiness.business);
  
  // Update new company
  // If "business" exists then we use the defaults
  const [businessIndustryAndPhase, setBusinessIndustryAndPhase] = useState({
    businessIndustry: "",
    businessPhase: "",
  });
  const [selecteBusinessIndustryAndPhase] = useState(
    state || { businessIndustryAndPhase }
  );
  const [businessInfo, setBusinessInfo] = useState(
    !business
      ? selecteBusinessIndustryAndPhase.businessIndustryAndPhase
      : {
          businessIndustry: business.industry,
          businessPhase: business.phase,
        }
  );

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
  }, [navigate]);

  return (
    <div>
      <div className="row w-full m-0 p-0">
        <div className="col-md-3 border-end">
          <BusinessMenu businessIndustryAndPhase={businessInfo} business={business} />
        </div>
        <div className="col-md-9 bg-white">
          <BusinessAssessment businessIndustryAndPhase={businessInfo} business={business} />
        </div>
      </div>
    </div>
  );
};
