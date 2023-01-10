import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getLocalStorageValue,
  isLoggedIn,
  LOCALSTORAGE_KEYS,
} from "../../config";
import { loading } from "../../constants";
import { IMappedAssessmentQuestion } from "../../model/mapped-assessment-question.model";
import { addCompany } from "../../services/business/company.service";
import { convertToBase64 } from "../util/file-util";
import { BusinessMenu } from "./BusinessMenu";

export const BusinessProfile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [businessIndustryAndPhase, setBusinessIndustryAndPhase] = useState({
    businessIndustry: "",
    businessPhase: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [registered, setRegistered] = useState("false");
  const [registrationDate, setRegistrationDate] = useState("");
  const [location, setLocation] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState(0);
  const [annualTurnover, setAnnualTurnover] = useState(0);
  const [monthlyTurnover, setMonthlyTurnover] = useState(0);
  const [productsOrServices, setProductsOrServices] = useState("");
  const mappedQuestionList: IMappedAssessmentQuestion[] = [];
  const [mappedQuestions, setMappedQuestions] = useState(mappedQuestionList);

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [navigate]);

  /**
   * Add new company
   */
  const onSave = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const industry = getLocalStorageValue(LOCALSTORAGE_KEYS.businessIndustry);
    const phase = getLocalStorageValue(LOCALSTORAGE_KEYS.businessPhase);

    if (industry && phase) {
      const company = {
        name: name,
        logo: logo,
        registration_date: registrationDate || new Date().toString(),
        registration_number: registrationNumber,
        registered: registered === "false" ? false : true,
        location: location,
        employees: numberOfEmployees,
        annual_turnover: annualTurnover,
        monthly_turnover: monthlyTurnover,
        products_or_services: productsOrServices,
        phase: JSON.parse(phase).replace(/['"\\]+/g, ''),
        industry: JSON.parse(industry).replace(/['"\\]+/g, '')
      };

      const response = await addCompany(company);
      if (response.status) {
        // const update = await addAssessmentQuestions(JSON.stringify(mappedQuestions), business.id);

        navigate("/business/manage-business/assessment");
      }
    }

    setIsLoading(false);
  };

  const handleLogoFile = async (e: any) => {
    const file = e.target.files[0];
    const base64: any = await convertToBase64(file);
    setLogo(base64);
  };

  const onBack = () => {
    navigate("/business/manage-business/add-company");
  };

  return (
    <div>
      <div className="row w-full m-0 p-0">
        <div className="col-md-3 border-end">
          <BusinessMenu />
        </div>
        <div className="col-md-9 bg-white">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="alert alert-success mt-4">
                <strong>
                  <i className="fa fa-check"></i> SUCCESS!
                </strong>
                &nbsp;Company Assessment Completed.
              </div>
              <div className="alert alert-info mt-4">
                <strong>
                  <i className="fa fa-info-circle"></i> Next Step!
                </strong>
                &nbsp;Complete your Company Profile.
              </div>
              <h4 className="mt-3 text-2xl">Complete Company Profile</h4>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Company Name</label>
                </div>
                <div className="col-md-8">
                  <input
                    placeholder="Company name..."
                    name="name"
                    type="text"
                    className="form-control"
                    id="companyName"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Company Logo</label>
                </div>
                <div className="col-md-8">
                  <input
                    name="image"
                    accept="image/*"
                    type="file"
                    className="form-control"
                    onChange={(e) => handleLogoFile(e)}
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Is your company registered?</label>
                </div>
                <div className="col-md-8">
                  <label className="mr-2">
                    Yes&nbsp;
                    <input
                      name="registered"
                      type="radio"
                      onClick={(e) => setRegistered("true")}
                      value="1"
                      className="radio"
                    />
                  </label>
                  <label>
                    No&nbsp;
                    <input
                      name="registered"
                      type="radio"
                      value="0"
                      onChange={(e) => setRegistered("false")}
                      className="radio"
                    />
                  </label>
                </div>
              </div>
              {registered === "true" ? (
                <div id="reg-bin">
                  <div className="row my-4">
                    <div className="col-md-4">
                      <label>Registration Number</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        id="reg_number"
                        placeholder="Registration number..."
                        name="reg_number"
                        type="text"
                        className="form-control"
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-md-4">
                      <label>Registration Date</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        id="reg_date"
                        placeholder="Registration date..."
                        name="reg_date"
                        type="date"
                        className="form-control"
                        onChange={(e) => setRegistrationDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Company Location</label>
                </div>
                <div className="col-md-8">
                  <input
                    id="autocomplete"
                    placeholder="Company physical address..."
                    name="location"
                    type="text"
                    className="form-control pac-target-input"
                    autoComplete="off"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Number of employees</label>
                </div>
                <div className="col-md-8">
                  <input
                    id="num_employees"
                    placeholder="Number of employees at your company..."
                    name="num_employees"
                    type="number"
                    className="form-control"
                    onChange={(e) =>
                      setNumberOfEmployees(e.target.valueAsNumber)
                    }
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Annual Turnover</label>
                </div>
                <div className="col-md-8">
                  <input
                    id="annual_turnover"
                    placeholder="What is your yearly turnover..."
                    name="annual_turnover"
                    type="number"
                    className="form-control"
                    onChange={(e) => setAnnualTurnover(e.target.valueAsNumber)}
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Monthly Turnover (Over 6 months)</label>
                </div>
                <div className="col-md-8">
                  <input
                    id="monthly_turnover"
                    placeholder="What was your monthly turnover in the past 6 months..."
                    name="6mo_turnover"
                    type="number"
                    className="form-control"
                    onChange={(e) => setMonthlyTurnover(e.target.valueAsNumber)}
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-4">
                  <label>Products/Services</label>
                </div>
                <div className="col-md-8">
                  <textarea
                    id="offering"
                    placeholder="What products or services is your company offering?"
                    name="offering"
                    className="form-control"
                    onChange={(e) => setProductsOrServices(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12 text-end">
                  {/* <button
                    className="btn btn-outline-info mr-2 btn-lg mt-2 p-3 w-[100px] hover:text-white hover:bg-[#16f0fb]"
                    onClick={onBack}
                  >
                    Back
                  </button> */}
                  <button
                    className="btn bg-[#00c2cb] btn-info btn-lg mt-2 p-3 w-[100px] text-white hover:text-white hover:bg-[#16f0fb]"
                    onClick={onSave}
                  >
                    {isLoading ? (
                      <span className="capitalize">{loading}...</span>
                    ) : (
                      <span className="capitalize">Save</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
