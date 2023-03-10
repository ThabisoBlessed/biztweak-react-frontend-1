import { e } from "@fullcalendar/core/internal-common";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IBusinessIndustryAndPhase } from "../../model/business-industry-and-phase.model";

export const AddCompanyModal = (props: any) => {
  const [businessPhase, setBusinessPhase] = useState(props.bizPhases[0].label);
  const [businessIndustry, setBusinessIndustry] = useState(props.industries[0].label);
  const navigate = useNavigate();

  useEffect(() => {
  }, [businessIndustry, businessPhase]);

  const handleIndustryItemClick = (event: any) => {
    console.log(event.target.value)
    setBusinessIndustry(event.target.value);
  };

  const handleBizPhaseItemClick = (event: any) => {
    console.log(event.target.value)
    setBusinessPhase(event.target.value);
  };

  const onSave = () => {
    const businessIndustryAndPhaseModel = {} as IBusinessIndustryAndPhase;
    businessIndustryAndPhaseModel.businessIndustry = props.industries.find((b: any) => b.label === businessIndustry).id;
    businessIndustryAndPhaseModel.businessPhase = props.bizPhases.find((b: any) => b.label === businessPhase).id;

    const businessIndustryAndPhase = businessIndustryAndPhaseModel;

    navigate("/business/manage-business/assessment", {
      state: { businessIndustryAndPhase },
    });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="addCompany"
        tabIndex={-1}
        aria-labelledby="addCompanyLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa fa-close"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="text-center">
                <img
                  src="https://biztweak.org.za/public/new/images/add-company.png"
                  alt=""
                  className="col-md-6 img-fluid"
                />
              </div>
              <h5>Add new company</h5>
              <input type="hidden" />
              <div className="form-group my-3">
                <div className="col-auto">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="industry"
                      name="industry"
                      value={businessIndustry.label}
                      onChange={handleIndustryItemClick}
                    >
                      {props.industries.map((industry: any, index: number) => {
                        return (
                          <option key={index} value={industry.label}>
                            {industry.label}
                          </option>
                        );
                      })}
                    </select>
                    <label htmlFor="industry" className="form-label">
                      Business industry
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group my-3">
                <div className="col-auto">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="biz_phase"
                      name="biz_phase"
                      value={businessPhase.label}
                      onChange={handleBizPhaseItemClick}
                    >
                      {props.bizPhases.map((phase: any, index: number) => {
                        return (
                          <option key={index} value={phase.label}>
                            {phase.label}
                          </option>
                        );
                      })}
                    </select>
                    <label htmlFor="biz_phase" className="form-label">
                      Business phase
                    </label>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <button
                  type="submit"
                  className="btn bg-[#00c2cb] p-3 w-[100px] btn-info text-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => onSave()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
