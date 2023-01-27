import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLocalStorageValue,
  isLoggedIn,
  LOCALSTORAGE_KEYS,
  setLocalStorageValue,
} from "../../config";
import { BusinessMenu } from "./BusinessMenu";
import { AddCompanyModal } from "./AddCompanyModal";
import {
  getBusinessIndustry,
  getBusinessPhases,
} from "../../services/business/assessment.service";

export const AddCompany = () => {
  const navigate = useNavigate();
  const bizPhaseList: any[] = [];
  const industryList: any[] = [];
  const [bizPhases, setBizPhases] = useState(bizPhaseList);
  const [bizIndustries, setBizIndustries] = useState(industryList);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    if (isInitLoad) {
      getBizPhases();
      getBizIndustry();
    }

    const isNewUserMode = getLocalStorageValue(
      LOCALSTORAGE_KEYS.newUserMode
    )?.replace(/['"\\]+/g, "");

    if (isNewUserMode === "true") {
      let element: HTMLElement = document.getElementsByClassName(
        "add-company-modal"
      )[0] as HTMLElement;
      element.click();
      setLocalStorageValue(LOCALSTORAGE_KEYS.newUserMode, "false");
    }
  }, [navigate]);

  const getBizPhases = async () => {
    const phases = await getBusinessPhases();
    console.log(phases);
    if (phases.data && phases.data.package) {
      setBizPhases(phases.data.package.data);
    }
    setIsLoading(false);
  };

  const getBizIndustry = async () => {
    const industry = await getBusinessIndustry();
    if (industry.data && industry.data.package) {
      setBizIndustries(industry.data.package.data);
    }
    setIsLoading(false);
    setIsInitLoad(false);
  };

  return (
    <div>
      <div className="row w-full m-0 p-0" id="addCompanyModal">
        <div className="col-md-3 border-end">
          <BusinessMenu />
        </div>
        <div className="col-md-9 bg-white">
          <div className="row justify-content-center">
            <img
              src="https://biztweak.org.za/public/new/images/dashboard-placeholder.png"
              className="img-fluid mt-4 col-md-5"
              alt=""
            />
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addCompany"
                className="btn btn-outline-info add-company-modal dotted-border col-12 mb-2 btn-lg hover:text-white hover:bg-[#16f0fb]"
              >
                <i className="fa fa-plus"></i> Add Company
              </button>
              <p className="text-center">
                After completing the assessment you will get a business health
                report that will give you recommendations
              </p>
            </div>
          </div>

          {bizIndustries.length > 0 && bizPhases.length > 0 ? (
            <AddCompanyModal industries={bizIndustries} bizPhases={bizPhases} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
