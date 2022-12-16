import { ProfileMenu } from "./ProfileMenu";
import "./Profile.css";
import { UpdateProfile } from "./UpdateProfile";
import { useState } from "react";

export const Profile = () => {
  const bizPhaseList: any[] = [
    {
      id: 0,
      title: "I have an idea but don’t know what to do next",
      value: "phase_1",
    },
    {
      id: 1,
      title: "I have a business but am not making money",
      value: "phase_2",
    },
    {
      id: 2,
      title: "I have products/services but I have poor sales",
      value: "phase_3",
    },
    {
      id: 3,
      title:
        "We are generating revenue, we would like to grow through investment",
      value: "phase_4",
    },
    {
      id: 4,
      title:
        " I would like to be an entrepreneur but don’t know where to start",
      value: "phase_5",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [bizPhases, setBizPhases] = useState(bizPhaseList);

  const handleBizPhaseItemClick = (event: any) => {};

  return (
    <div>
      <div className="row w-full m-0 p-0">
        <div className="col-md-3 border-end">
          <ProfileMenu />
        </div>
        <div className="col-md-9 bg-white">
          <div className="row justify-content-center">
            <img
              src="https://biztweak.org.za/public/new/images/dashboard-placeholder.png"
              className="img-fluid col-md-5"
              alt=""
            />
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addCompany"
                className="btn btn-outline-info dotted-border col-12 mb-2 btn-lg"
              >
                <i className="fa fa-plus"></i> Add Company
              </button>
              <p className="text-center">
                After completing the assessment you will get a business health
                report that will give you recommendations on
              </p>
            </div>
          </div>

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
                  <form
                    action="https://biztweak.org.za/public/102/save-company-new"
                    method="POST"
                  >
                    <input type="hidden" />{" "}
                    <div className="form-group my-3">
                      <div className="col-auto">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="industry"
                            name="industry"
                          >
                            <option value="Admin/Business support">
                              Admin/Business support
                            </option>
                            <option value="Agriculture, Forestry,Fishing and Hunting">
                              Agriculture, Forestry,Fishing and Hunting
                            </option>
                            <option value="Arts, Entertainment and Recreation">
                              Arts, Entertainment and Recreation
                            </option>
                            <option value="Constrution">Constrution</option>
                            <option value="Education">Education</option>
                            <option value="Finance and Insurance">
                              Finance and Insurance
                            </option>
                            <option value="Healthcare and Social Assistance">
                              Healthcare and Social Assistance
                            </option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Information Technology">
                              Information Technology
                            </option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Mining and Mineral processing">
                              Mining and Mineral processing
                            </option>
                            <option value="Professional, Scientific and Technical Services">
                              Professional, Scientific and Technical Services
                            </option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Retail">Retail</option>
                            <option value="Transport and Logistics">
                              Transport and Logistics
                            </option>
                            <option value="Other">Other</option>
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
                          >
                            {bizPhases.map((phase: any, index: number) => {
                              return (
                                <option
                                  key={index}
                                  id={`${index}`}
                                  onClick={(e) => handleBizPhaseItemClick(e)}
                                  value={phase.value}
                                >
                                  {phase.title}
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
                        className="btn bg-[#00c2cb] btn-info text-white"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
