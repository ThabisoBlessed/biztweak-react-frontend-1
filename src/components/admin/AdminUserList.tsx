import React, { useEffect, useState } from "react";
import { ICompany } from "../../model/company.model";
import { getAllCompanies } from "../../services/business/company.service";

export const AdminUserList = (props: any) => {
  const initCompanies: ICompany[] = [];
  const [companies, setCompanies] = useState(props.companies || initCompanies);

  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    if (isInitLoad) {
      getCompanies();
    }
    setIsInitLoad(false);
  });

  const getCompanies = async () => {
    const companiesResponse = await getAllCompanies();
    if (companiesResponse.data) {
      const courseResult = companiesResponse.data.package.data;
      setCompanies(courseResult);
    }
    console.log(companies);
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-white border-0 d-flex justify-content-between">
        <h5 className="mb-0 text-2xl font-medium text-dark">
          Profiles by registered
        </h5>
        <form action="#">
          <div className="col-12">
            <select name="" className="form-select col-12">
              <option value="">Non Registered Companies</option>
            </select>
          </div>
        </form>
      </div>
      <div className="card-body border-0">
        <table className="table table-borderless table-striped">
          <thead>
            <tr className="text-sm text-muted">
              <th>ID</th>
              <th>Company</th>
              <th>Location</th>
              <th>Phase</th>
              <th>Industry</th>
              <th>Employees</th>
              <th>Turnover</th>
              <th>Bizrating</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company: ICompany, index: number) => {
              return (
                <tr key={index}>
                  <td>{company.id}</td>
                  <td>
                    <span className="badge bg-white text-dark">
                      {company.name}
                    </span>
                  </td>
                  <td>{company.location}</td>
                  <td>{company.phase}</td>
                  <td>{company.industry}</td>
                  <td>{company.employees}</td>
                  <td>{company.annual_turnover}</td>
                  <td>{company.rating}</td>
                  <td>
                    <a href="#" className="text-[#00c2cb]">
                      View profile
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
