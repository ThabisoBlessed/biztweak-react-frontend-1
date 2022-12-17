import { ProfileMenu } from "../auth/ProfileMenu";
import "./Assessment.css";
import { useEffect, useState } from "react";
import { BusinessAssessment } from "./BusinessAssessment";
import { BUSINESS_KEYS, getLocalStorageValue, isLoggedIn } from "../../config";
import { useLocation, useNavigate } from "react-router-dom";
import { IBusinessIndustryAndPhase } from "../../model/business-industry-and-phase.model";

export const Assessment = () => {
  const bizPhaseList: any[] = [
    {
      id: 0,
      name: "I have an idea but don’t know what to do next",
      value: "phase_1",
    }
  ];
  const industryList: any[] = [
    {
      id: 0,
      name: "Admin/Business Support",
      value: "AdminBusinessSupport",
    }
  ];
  const [businessPhase, setBusinessPhase] = useState(bizPhaseList[0]);
  const [businessIndustry, setBusinessIndustry] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [businessIndustryAndPhase, setBusinessIndustryAndPhase] = useState({ } as IBusinessIndustryAndPhase);
  const [selecteBusinessIndustryAndPhase] = useState(
    state || { businessIndustryAndPhase }
  );

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");

    const stringify = JSON.stringify(JSON.stringify(selecteBusinessIndustryAndPhase));
    const parse = JSON.parse(stringify);
    console.log(parse);
    console.log();

    if (selecteBusinessIndustryAndPhase) {
      // setBusinessIndustry(selectedBusiness.businessIndustry);
      // setBusinessPhase(selectedBusiness.businessPhase);

      businessIndustryAndPhase.businessIndustry = businessIndustry;
      businessIndustryAndPhase.businessPhase = businessPhase;
      setBusinessIndustryAndPhase(businessIndustryAndPhase);
    }
  }, [navigate]);

  return (
    <div>
      <div className="row w-full m-0 p-0">
        <div className="col-md-3 border-end">
          <ProfileMenu />
        </div>
        <div className="col-md-9 bg-white">
            <BusinessAssessment selecteBusinessIndustryAndPhase={selecteBusinessIndustryAndPhase} />
        </div>
      </div>
    </div>
  );
};
