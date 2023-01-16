import React, { useEffect, useState } from "react";
import EntreprenursImg from "../../images/icons/entreprenuers.png";
import ConsultantsImg from "../../images/icons/consultants.png";
import MentorImg from "../../images/icons/mentor.png";
import CoachesImg from "../../images/icons/mic.png";
import { AdminMenu } from "./AdminMenu";
import { Mentors } from "./Mentors";
import { UsersCard } from "./UsersCard";
import { ActionsCard } from "./ActionsCard";
import { ChartCard } from "./ChartCard";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { getAllUsers } from "../../services/admin/admin.service";
import { getAllCompanies } from "../../services/business/company.service";
import { getAllMentors } from "../../services/admin/mentor.service";

export const IncubatorDashboard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [mentors, setMentors] = useState();

  useEffect(() => {
    if (users.length === 0) {
      getusers();
    } 

    // if (companies.length === 0) {
    //   getCompanies();
    // }

    getMentors();
  });

  const getMentors = async () => {
    const mentorsResponse = await getAllMentors();
    if (mentorsResponse.data) {
      const courseResult = mentorsResponse.data.package.data;
      setMentors(courseResult)
    }
    console.log(mentors);
  }

  const getusers = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const usersResult = await getAllUsers();
      const usersBody = usersResult.data.package.data;
      setUsers(usersBody);
      console.log(usersBody);
    }
  };

  const getCompanies = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const companiesResult = await getAllCompanies();
      const companiesBody = companiesResult.data.package.data;
      setCompanies(companiesBody);

      console.log(companies);
    }
  };

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <AdminMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="card shadow mt-3">
              <div className="card-header bg-white border-0">
                <h5 className="mb-0 text-2xl font-medium text-dark">Overview</h5>
              </div>
              <div className="card-body border-0">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-1 p-4 rounded-2 text-dark bg-[#b5e4ca40]">
                      <img src={EntreprenursImg} width="40px" alt=""></img>
                      <p className="small my-2">Entrepreneurs</p>
                      <h1 className="m-0 fw-bold">{users.filter((u: any) => u.role === "ENTREPRENEUR").length}</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-2 p-4 rounded-2 text-dark bg-[#d8e5eb]">
                      <img src={ConsultantsImg} width="40px" alt=""></img>
                      <p className="small my-2">Consultants</p>
                      <h1 className="m-0 fw-bold">4</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-3 p-4 rounded-2 text-dark bg-[#dfdbec]">
                      <img src={MentorImg} width="40px" alt=""></img>
                      <p className="small my-2">Mentors</p>
                      <h1 className="m-0 fw-bold">2</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-4 p-4 rounded-2 text-dark bg-[#fff65a40]">
                      <img src={CoachesImg} width="40px" alt=""></img>
                      <p className="small my-2">Coaches</p>
                      <h1 className="m-0 fw-bold">5</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-4">
                {users.length > 0 ? <UsersCard mode={"incubator"} users={users} /> : null}
              </div>
              <div className="col-lg-4">
               <ActionsCard />
              </div>
              <div className="col-lg-4">
                <ChartCard />
              </div>
            </div>
            <div className="mt-2 mb-2">
              <Mentors mentors={mentors || []}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
