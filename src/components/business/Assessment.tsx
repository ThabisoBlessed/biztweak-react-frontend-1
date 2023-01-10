import { BusinessMenu } from "./BusinessMenu";
import "./Assessment.css";
import { useEffect, useState } from "react";
import { BusinessAssessment } from "./BusinessAssessment";
import { isLoggedIn } from "../../config";
import { useLocation, useNavigate } from "react-router-dom";
import { IBusinessMenuBusinessModel } from "../../model/business-menu-business-model";

export const Assessment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Update existing company
  const [selectedBusiness] = useState(
    state || {} as IBusinessMenuBusinessModel
  );
  const [business, setBusiness] = useState(selectedBusiness.business);

  // Update new company
  const [businessIndustryAndPhase, setBusinessIndustryAndPhase] = useState({
    businessIndustry: "",
    businessPhase: "",
  });
  const [selecteBusinessIndustryAndPhase] = useState(
    state || { businessIndustryAndPhase }
  ); 
  const [businessInfo, setBusinessInfo] = useState(!business ? JSON.parse(selecteBusinessIndustryAndPhase.businessIndustryAndPhase) : {
    businessIndustry: business.industry,
    businessPhase: business.phase,
  });

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
    console.log(businessInfo);
    // setBusinessIndustryAndPhase({
    //   businessIndustry: "",
    //   businessPhase: "",
    // });
    // if (
    //   selecteBusinessIndustryAndPhase &&
    //   selecteBusinessIndustryAndPhase.businessIndustry &&
    //   selecteBusinessIndustryAndPhase.businessPhase
    // ) {
    //   const parsed = JSON.parse(
    //     selecteBusinessIndustryAndPhase.businessIndustryAndPhase
    //   );

    //   businessIndustryAndPhase.businessIndustry = parsed.businessIndustry;
    //   businessIndustryAndPhase.businessPhase = parsed.businessPhase;
    //   setBusinessIndustryAndPhase(businessIndustryAndPhase);
    // } else {
    //   navigate("/business/manage-business/add-company");
    // }
  }, [navigate]);

  return (
    <div>
      <div className="row w-full m-0 p-0">
        {/* <div className="col-md-3 border-end">
          <BusinessMenu businessIndustryAndPhase={businessInfo} />
        </div>
        <div className="col-md-9 bg-white">
          <BusinessAssessment
            businessIndustryAndPhase={businessInfo}
          />
        </div> */}
      </div>
    </div>
  );
};
