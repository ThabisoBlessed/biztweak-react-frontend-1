import { ProfileMenu } from "../auth/ProfileMenu";
import "./Assessment.css";
import { useEffect, useState } from "react";
import { BusinessAssessment } from "./BusinessAssessment";
import { isLoggedIn } from "../../config";
import { useLocation, useNavigate } from "react-router-dom";
import { IBusinessIndustryAndPhase } from "../../model/business-industry-and-phase.model";

export const Assessment = () => {
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

    if (selecteBusinessIndustryAndPhase) {
      businessIndustryAndPhase.businessIndustry = parse.businessIndustry;
      businessIndustryAndPhase.businessPhase = parse.businessPhase;
      setBusinessIndustryAndPhase(businessIndustryAndPhase);
    } else {
      navigate("/business/manage-business/add-company")
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
