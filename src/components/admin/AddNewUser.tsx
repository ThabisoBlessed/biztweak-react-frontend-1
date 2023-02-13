import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createEntrepreneur } from "../../services/admin/entrepreneur.service";
import { addUser } from "../../services/lms/user.service";
import { ActionsCard } from "./ActionsCard";
import { AddNewIncubator } from "./AddNewIncubator";
import { AdminMenu } from "./AdminMenu";
import { ChartCard } from "./ChartCard";
import { Mentors } from "./Mentors";
import { UsersCard } from "./UsersCard";

export const AddNewUser = () => {
  const { state } = useLocation();
  const [usertType, setUserType] = useState(state.selectedUserType || "");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eductaion, setEducation] = useState("");
  const [experience1, setExperience1] = useState("");
  const [experience2, setExperience2] = useState("n/a");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [industry, setIndustry] = useState("Manufacturing");
  const [type, setType] = useState("Ideation");
  const [yearsOfExp, setYearsOfExp] = useState("Ideation");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(usertType);
  });

  const handleIndustrySelect = (event: any) => {
    setIndustry(event.target.value);
  };

  const handleTypeSelect = (event: any) => {
    setIndustry(event.target.value);
  };

  const handleYearsOfExperienceSelect = (event: any) => {
    setYearsOfExp(event.target.value);
  };

  const onSave = async (e: any) => {
    e.preventDefault();
    setIsSaving(true);

    const user = new FormData();
    user.append("fullNames", fullName);
    user.append("email", email);
    user.append("phone", phone);
    user.append("workExperience", experience1);
    user.append("workExperience2", experience2);
    user.append("location", location);
    user.append("role", "ENTREPRENEUR");

    const addUserResult = await createEntrepreneur(user);
    // navigate("/admin/incubator-dashboard");

    setIsSaving(false);
    setIsLoading(false);

    window.location.reload();
  };

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 col-sm-12 min-h-[100vh]">
          <AdminMenu />
        </div>
        <div className="col-md-10 col-sm-12 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="card shadow mt-3">
              <div className="card-header bg-white border-0">
                <h5 className="mb-0 text-dark">
                  Add New <span className="capitalize">{usertType}</span>
                </h5>
              </div>
              {/**Entrepreneur */}
              {usertType === "entrepreneur" ? (
                <div className="card-body border-0">
                  <div className="row">
                    <div className="col-12">
                      <a
                        href="#"
                        className="btn mr-2 border-[#00c2cb] text-[#00c2cb] hover:bg-[#00c2cb] hover:text-white"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                      <a
                        href="#"
                        className="btn mr-2 border-[#00c2cb] text-[#00c2cb] hover:bg-[#00c2cb] hover:text-white"
                      >
                        <i className="fa fa-edit"></i>
                      </a>
                      <a href="#" className="btn btn-outline-danger">
                        <i className="fa fa-trash"></i>
                      </a>
                    </div>
                  </div>
                  <form action="#" className="mt-4">
                    <div className="form-group mt-2">
                      <div className="d-flex justify-content-between">
                        <label className="text-dark">
                          Full Name&nbsp;
                          <i
                            className="fa fa-info-circle text-muted"
                            data-bs-toggle="tooltip"
                            title="Name is required"
                            data-bs-original-title="Name is required."
                            aria-label="Name is required."
                          ></i>
                        </label>
                      </div>
                      <input
                        onChange={(e) => setFullName(e.target.value)}
                        type="text"
                        className="form-control core"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <div className="d-flex justify-content-between">
                        <label className="text-dark">
                          Email &nbsp;
                          <i
                            className="fa fa-info-circle text-muted"
                            data-bs-toggle="tooltip"
                            title="Email is required."
                            data-bs-original-title="Email is required."
                            aria-label="Email is required."
                          ></i>
                        </label>
                      </div>
                      <input
                        type="text"
                        className="form-control core"
                        value={!email ? "" : email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-2">
                      <div className="d-flex justify-content-between">
                        <label className="text-dark">
                          Phone &nbsp;
                          <i
                            className="fa fa-info-circle text-muted"
                            data-bs-toggle="tooltip"
                            title="Phone is required"
                            data-bs-original-title="Phone is required."
                            aria-label="Phone is required."
                          ></i>
                        </label>
                      </div>
                      <input
                        type="text"
                        className="form-control core"
                        value={!phone ? "" : phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-2">
                      <div className="d-flex justify-content-between">
                        <label className="text-dark">
                          Industry&nbsp;
                          <i
                            className="fa fa-info-circle text-muted"
                            data-bs-toggle="tooltip"
                            title="Industry is required"
                            data-bs-original-title="Industry is required."
                            aria-label="Industry is required."
                          ></i>
                        </label>
                      </div>
                      <select
                        name="type"
                        className="form-select core"
                        onChange={handleIndustrySelect}
                      >
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Energy">Energy</option>
                        <option value="Technology">Technology</option>
                      </select>
                    </div>
                    <div className="form-group mt-2">
                      <div className="d-flex justify-content-between">
                        <label className="text-dark">
                          Location&nbsp;
                          <i
                            className="fa fa-info-circle text-muted"
                            data-bs-toggle="tooltip"
                            title="Location is required"
                            data-bs-original-title="Location is required."
                            aria-label="Location is required."
                          ></i>
                        </label>
                      </div>
                      <input
                        type="text"
                        onChange={(e) => setLocation(e.target.value)}
                        className="form-control core"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <div className="d-flex justify-content-between">
                        <label className="text-dark">
                          Type&nbsp;
                          <i
                            className="fa fa-info-circle text-muted"
                            data-bs-toggle="tooltip"
                            title="Type is required"
                            data-bs-original-title="Type is required."
                            aria-label="Type is required."
                          ></i>
                        </label>
                      </div>
                      <select
                        name="type"
                        className="form-select core"
                        onChange={(e) => handleTypeSelect(e.target.value)}
                      >
                        <option value="Ideation">Ideation</option>
                        <option value="Pre-revenue">Pre-revenue</option>
                        <option value="Post-revenue">Post-revenue</option>
                      </select>
                    </div>
                    <div className="form-group mt-2">
                      <div className="d-flex justify-content-between">
                        <label className="text-dark">
                          Job Experience (Past jobs)&nbsp;
                          <i
                            className="fa fa-info-circle text-muted"
                            data-bs-toggle="tooltip"
                            title="Job Experience (Past jobs) is required"
                            data-bs-original-title="Job Experience (Past jobs) is required."
                            aria-label="Job Experience (Past jobs) is required."
                          ></i>
                        </label>
                      </div>
                      <input
                        type="text"
                        onChange={(e) => setExperience1(e.target.value)}
                        className="form-control core"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <div className="d-flex justify-content-between">
                        <label className="text-dark">
                          Years of Experience&nbsp;
                          <i
                            className="fa fa-info-circle text-muted"
                            data-bs-toggle="tooltip"
                            title="Years of Experience is required"
                            data-bs-original-title="Years of Experience is required."
                            aria-label="Years of Experience is required."
                          ></i>
                        </label>
                      </div>
                      <select
                        name="type"
                        className="form-select core"
                        onChange={(e) =>
                          handleYearsOfExperienceSelect(e.target.value)
                        }
                      >
                        <option value="1-5">1-5</option>
                        <option value="5-10">5-10</option>
                        <option value="10-15">10-15</option>
                        <option value="15-20">15-20</option>
                      </select>
                    </div>
                    <div className="form-group mt-2">
                      <div className="d-flex justify-content-between">
                        <label className="text-dark">
                          Qualification&nbsp;
                          <i
                            className="fa fa-info-circle text-muted"
                            data-bs-toggle="tooltip"
                            title="Qualification is required"
                            data-bs-original-title="Qualification is required."
                            aria-label="Qualification is required."
                          ></i>
                        </label>
                      </div>
                      <input
                        type="text"
                        onChange={(e) => setQualification(e.target.value)}
                        className="form-control core"
                      />
                    </div>
                    <button
                      onClick={onSave}
                      className="btn hover:bg-[#16f0fb] mt-2 bg-[#00c2cb] text-white btn-wide px-5"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              ) : null}

              {usertType === "incubator" ? <Mentors /> : null}
            </div>
            {/* <div className="row">
              <div className="col-lg-8">
                <div className="card shadow mt-3">
                  <div className="card-header bg-white border-0">
                    <h5 className="mb-0 text-dark">Add New User</h5>
                  </div>
                  <div className="card-body border-0">
                    <div className="row">
                      <div className="col-12">
                        <a
                          href="#"
                          className="btn mr-2 border-[#00c2cb] text-[#00c2cb] hover:bg-[#00c2cb] hover:text-white"
                        >
                          <i className="fa fa-plus"></i>
                        </a>
                        <a
                          href="#"
                          className="btn mr-2 border-[#00c2cb] text-[#00c2cb] hover:bg-[#00c2cb] hover:text-white"
                        >
                          <i className="fa fa-edit"></i>
                        </a>
                        <a href="#" className="btn btn-outline-danger">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </div>
                    <form action="#" className="mt-4">
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Name&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Name is required"
                              data-bs-original-title="Name is required."
                              aria-label="Name is required."
                            ></i>
                          </label>
                        </div>
                        <input type="text" className="form-control core" />
                      </div>
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Industry&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Industry is required"
                              data-bs-original-title="Industry is required."
                              aria-label="Industry is required."
                            ></i>
                          </label>
                        </div>
                        <select name="type" className="form-select core">
                          <option value="">Select</option>
                          <option value="">Manufacturing</option>
                          <option value="">Energy</option>
                          <option value="">Technology</option>
                        </select>
                      </div>
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Location&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Location is required"
                              data-bs-original-title="Location is required."
                              aria-label="Location is required."
                            ></i>
                          </label>
                        </div>
                        <input type="text" className="form-control core" />
                      </div>
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Type&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Type is required"
                              data-bs-original-title="Type is required."
                              aria-label="Type is required."
                            ></i>
                          </label>
                        </div>
                        <select name="type" className="form-select core">
                          <option value="">Select</option>
                          <option value="">Ideation</option>
                          <option value="">Pre-revenue</option>
                          <option value="">Post-revenue</option>
                        </select>
                      </div>
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Job Experience (Past jobs)&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Job Experience (Past jobs) is required"
                              data-bs-original-title="Job Experience (Past jobs) is required."
                              aria-label="Job Experience (Past jobs) is required."
                            ></i>
                          </label>
                        </div>
                        <input type="text" className="form-control core" />
                      </div>
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Years of Experience&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Years of Experience is required"
                              data-bs-original-title="Years of Experience is required."
                              aria-label="Years of Experience is required."
                            ></i>
                          </label>
                        </div>
                        <select name="type" className="form-select core">
                          <option value="">Select</option>
                          <option value="">1-5</option>
                          <option value="">5-10</option>
                          <option value="">10-15</option>
                          <option value="">15-20</option>
                        </select>
                      </div>
                      <div className="form-group mt-2">
                        <div className="d-flex justify-content-between">
                          <label className="text-dark">
                            Qualification&nbsp;
                            <i
                              className="fa fa-info-circle text-muted"
                              data-bs-toggle="tooltip"
                              title="Qualification is required"
                              data-bs-original-title="Qualification is required."
                              aria-label="Qualification is required."
                            ></i>
                          </label>
                        </div>
                        <input type="text" className="form-control core" />
                      </div>
                      <button className="btn hover:bg-[#16f0fb] mt-2 bg-[#00c2cb] text-white btn-wide px-5">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-12 my-3">
                  <UsersCard />
                </div>
                <div className="col-12 mb-3">
                  <ActionsCard />
                </div>
                <div className="col-12">
                  <ChartCard />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
