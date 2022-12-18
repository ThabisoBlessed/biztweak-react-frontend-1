import { BusinessMenu } from "./BusinessMenu";
import "./Assessment.css";
import { useEffect, useState } from "react";
import { BusinessAssessment } from "./BusinessAssessment";
import { isLoggedIn } from "../../config";
import { useLocation, useNavigate } from "react-router-dom";
import { IBusinessIndustryAndPhase } from "../../model/business-industry-and-phase.model";

export const Assessment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [businessIndustryAndPhase, setBusinessIndustryAndPhase] = useState(
    {} as IBusinessIndustryAndPhase
  );
  const [selecteBusinessIndustryAndPhase] = useState(
    state || { businessIndustryAndPhase }
  );

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");

    const stringifiedState = JSON.stringify(
      JSON.stringify(selecteBusinessIndustryAndPhase)
    );
    const parsedState = JSON.parse(stringifiedState);

    if (selecteBusinessIndustryAndPhase) {
      businessIndustryAndPhase.businessIndustry = parsedState.businessIndustry;
      businessIndustryAndPhase.businessPhase = parsedState.businessPhase;
      setBusinessIndustryAndPhase(businessIndustryAndPhase);
    } else {
      navigate("/business/manage-business/add-company");
    }
  }, [navigate]);

  return (
    <div>
      <div className="row w-full m-0 p-0">
        <div className="col-md-3 border-end">
          <BusinessMenu />
        </div>
        <div className="col-md-9 bg-white">
          <BusinessAssessment
            selecteBusinessIndustryAndPhase={selecteBusinessIndustryAndPhase}
          />
        </div>
      </div>
    </div>
  );
};
