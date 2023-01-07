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
  const [businessIndustryAndPhase, setBusinessIndustryAndPhase] = useState({
    businessIndustry: "",
    businessPhase: "",
  });
  const [selecteBusinessIndustryAndPhase] = useState(
    state || { businessIndustryAndPhase }
  );

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
    console.log(selecteBusinessIndustryAndPhase);
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
        <div className="col-md-3 border-end">
          <BusinessMenu businessIndustryAndPhase={businessIndustryAndPhase} />
        </div>
        <div className="col-md-9 bg-white">
          <BusinessAssessment
            businessIndustryAndPhase={businessIndustryAndPhase}
          />
        </div>
      </div>
    </div>
  );
};
