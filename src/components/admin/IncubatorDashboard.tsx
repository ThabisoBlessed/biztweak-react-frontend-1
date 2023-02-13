import React, { useEffect, useState } from "react";
import EntreprenursImg from "../../images/icons/entreprenuers.png";
import ConsultantsImg from "../../images/icons/consultants.png";
import MentorImg from "../../images/icons/mentor.png";
import IncubatorsImg from "../../images/icons/incubators.png";
import { ICourse } from "../../model/course.model";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { IUser } from "../../model/user.model";
import { getAllcourses } from "../../services/cmp/course.service";
import { AdminMenu } from "./AdminMenu";
import { getAllUsers } from "../../services/admin/admin.service";
import { getAllMentors } from "../../services/admin/mentor.service";
import { getAllCompanies } from "../../services/business/company.service";
import { ActionsCard } from "./ActionsCard";
import { ChartCard } from "./ChartCard";
import { Mentors } from "./Mentors";
import { UsersCard } from "./UsersCard";
import { Users } from "./Users";
import { AdminUserList } from "./AdminUserList";
import { ICompany } from "../../model/company.model";
import CoachesImg from "../../images/icons/mic.png";

export const IncubatorDashboard = () => {
  const initCourses: ICourse[] = [];
  const [courses, setCourses] = useState(initCourses);
  const [isLoading, setIsLoading] = useState(true);
  const initCompanies: ICompany[] = [];
  const [companies, setCompanies] = useState(initCompanies);
  const initMentors: any[] = [];
  const [mentors, setMentors] = useState(initMentors);
  const [users, setUsers] = useState([]);
  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    if (isInitLoad) {
      getCourses();
      getusers();
    }
    setIsInitLoad(false);
  });

  const getCourses = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const userResult: IUser = JSON.parse(storageUser);
      const coursesResult = await getAllcourses();
      if (coursesResult.data) {
        const myCourses: ICourse[] = coursesResult.data.package.data;
        setCourses(
          myCourses.filter((c) => c.user.id === Number(userResult.id))
        );
      }
    }
  };

  const getMentors = async () => {
    const mentorsResponse = await getAllMentors();
    if (mentorsResponse.data) {
      const courseResult = mentorsResponse.data.package.data;
      setMentors(courseResult);
    }
    console.log(mentors);
  };

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
            <div className="card shadow mt-2">
              <div className="card-header bg-white border-0">
                <h5 className="mb-0 text-2xl font-medium text-dark">
                  Overview
                </h5>
              </div>
              <div className="card-body border-0">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-1 p-4 rounded-2 text-dark bg-[#b5e4ca40]">
                      <img src={EntreprenursImg} width="40px" alt=""></img>
                      <p className="small my-2">Entrepreneurs</p>
                      <h1 className="m-0 fw-bold">
                        {
                          users.filter((u: any) => u.role === "ENTREPRENEUR")
                            .length
                        }
                      </h1>
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
          </div>

          <div className="row m-3">
            <div className="col-md-4 mb-3 mb-md-0">
              <button className="btn col-12 p-3 border-[black] hover:bg-[black] hover:text-white rounded-2 btn-white">
                <i className="fas fa-plus"></i> Add New user
              </button>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <button className="btn col-12 p-3 border-[black] hover:bg-[black] hover:text-white rounded-2 btn-white">
                <i className="fas fa-users"></i> Total registered user
              </button>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <button className="btn col-12 p-3 border-[black] hover:bg-[black] hover:text-white rounded-2 btn-white">
                <i className="fas fa-file-alt"></i> All assesments
              </button>
            </div>
          </div>

          <div className="row m-3">
            <div className="col-lg-4">
              {users.length > 0 ? (
                <UsersCard userMode={"incubator"} users={users || []} />
              ) : null}
            </div>
            <div className="col-lg-4">
              <ActionsCard />
            </div>
            <div className="col-lg-4">
              <ChartCard />
            </div>
          </div>
          <div className="m-4">
            <Mentors mentors={mentors} />
          </div>
        </div>
      </div>
    </div>
  );
};
