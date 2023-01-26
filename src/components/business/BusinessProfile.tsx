import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getLocalStorageValue,
  isLoggedIn,
  LOCALSTORAGE_KEYS,
} from "../../config";
import { loading } from "../../constants";
import { IBusinessIndustryAndPhase } from "../../model/business-industry-and-phase.model";
import { IBusinessMenuBusinessModel } from "../../model/business-menu-business-model";
import { IMappedAssessmentQuestion } from "../../model/mapped-assessment-question.model";
import { addAssessmentQuestions } from "../../services/business/assessment.service";
import {
  addCompany,
  getCompany,
} from "../../services/business/company.service";
import { convertToBase64 } from "../util/file-util";
import { BusinessMenu } from "./BusinessMenu";

export const BusinessProfile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [businessIndustryAndPhaseState] = useState(
    state || ({} as IBusinessIndustryAndPhase)
  );
  const [businessIndustryAndPhase, setBusinessIndustryAndPhase] = useState(
    businessIndustryAndPhaseState.businessIndustryAndPhase
  );
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [logo, setLogo] = useState({} as File);
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [registered, setRegistered] = useState("false");
  const [registrationDate, setRegistrationDate] = useState("");
  const [location, setLocation] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState(0);
  const [annualTurnover, setAnnualTurnover] = useState(0);
  const [monthlyTurnover, setMonthlyTurnover] = useState(0);
  const [productsOrServices, setProductsOrServices] = useState("");
  const mappedQuestionList: IMappedAssessmentQuestion[] = [];
  const [questions] = useState(state || mappedQuestionList);
  const [questionAndAnswer, setQuestionAndAnswer] = useState(
    questions.questionList
  );
  const formatted: any[] = [];
  const [formatedQuestionAndAnswer, setFormatedQuestionAndAnswer] = useState(formatted);

  useEffect(() => {
    if (!isLoggedIn()) navigate("/auth/login");

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    if (questionAndAnswer && questionAndAnswer.length > 0) {
      const result: any[] = [];
      for (let index = 0; index < questionAndAnswer.length; index++) {
        const question = questionAndAnswer[index];
        const formatted = { questionId: question.id, answer: question.answer };
        result.push(formatted);
      }
      console.log(result);
      setFormatedQuestionAndAnswer(result);
    }
    // console.log(questionAndAnswer);
  }, [navigate]);

  /**
   * Add new company
   */
  const onSave = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (businessIndustryAndPhase) {
      // const company = {
      //   id: 0,
      //   name: name,
      //   logo: "",
      //   registration_date: registrationDate || new Date().toString(),
      //   registration_number: registrationNumber,
      //   registered: registered === "false" ? false : true,
      //   location: location,
      //   employees: numberOfEmployees,
      //   annual_turnover: annualTurnover,
      //   monthly_turnover: monthlyTurnover,
      //   products_or_services: productsOrServices,
      //   phase: businessIndustryAndPhase.businessPhase,
      //   industry: businessIndustryAndPhase.businessIndustry,
      // };

      const company = new FormData();
      company.append("id", String(0));
      company.append("name", name);
      company.append("logo", logo);
      company.append(
        "registrationDate",
        registrationDate || new Date().toString()
      );
      company.append("registrationNumber", registrationNumber);
      company.append(
        "registered",
        registered === "false" ? String(false) : String(true)
      );
      company.append("location", location);
      company.append("numberOfEmployees", String(numberOfEmployees));
      company.append("annualTurnover", String(annualTurnover));
      company.append("monthlyTurnover", String(monthlyTurnover));
      company.append("productsOrServices", String(productsOrServices));
      company.append("phaseId", String(businessIndustryAndPhase.businessPhase));
      company.append(
        "industryId",
        String(businessIndustryAndPhase.businessIndustry)
      );

      const response = await addCompany(company);
      console.log("create new company response: ", response.data);
      if (response.data.package.data.data) {
        const assessment = await addAssessmentQuestions(
          JSON.stringify(formatedQuestionAndAnswer),
          Number(response.data.package.data.data.id),
          Number(businessIndustryAndPhase.businessPhase)
        );
        const success = assessment.data;
        const isNewCompany = true;
        console.log(
          "create new company assessment response: ",
          assessment.data
        );
        if (success) {
          const business = assessment.data.package.data.data;
          navigate("/business/manage-business/report-summary", {
            state: { business, isNewCompany },
          });
        }
      } else {
        navigate("/business");
      }
    }
    setIsLoading(false);
  };

  const handleLogoFile = async (e: any) => {
    const file = e.target.files[0];
    setLogo(file);
    // const base64: any = await convertToBase64(file);
    // setLogo(base64);
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
                      onChange={(e) => setRegistered("true")}
                      value="1"
                      className="radio"
                      checked={registered === "true"}
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
                      checked={registered === "false"}
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
