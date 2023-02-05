import React, { useEffect, useState } from "react";
import "./CMP.css";
import EntreprenursImg from "../../images/icons/entreprenuers.png";
import ConsultantsImg from "../../images/icons/consultants.png";
import MentorImg from "../../images/icons/mentor.png";
import CoachesImg from "../../images/icons/mic.png";
import { CMPMenu } from "./CMPMenu";
import { AddCourse } from "./AddCourse";
import { useNavigate } from "react-router-dom";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { IUser } from "../../model/user.model";
import { getCurrentUser } from "../../services/lms/user.service";
import { getAllCompanies } from "../../services/business/company.service";

export const Dashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [user, setUser] = useState({} as IUser);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitLoad, setIsInitLoad] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !user.email) {
      getProfile();
    }

    if (companies.length === 0 && isInitLoad) {
      getCompanies();
      setIsInitLoad(false);
    }
  });

  const onAddNewUser = () => {
    navigate("/admin/dashboard/add-user");
  };

  const getProfile = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const userResult: IUser = JSON.parse(storageUser);
      const profile = await getCurrentUser(userResult.id);
      if (profile.data) {
        const userProfile = profile.data.package.data;
        setUser(userProfile);
      }
      setIsLoading(false);
    }
  };

  const getCompanies = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const companiesResult = await getAllCompanies();
      const companies = companiesResult.data.package.data;
      setCompanies(companies);
      setIsLoading(false);
      console.log(companies);
      console.log(companiesResult);
    }
  };

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <CMPMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="card shadow mt-3">
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
                      <h1 className="m-0 fw-bold">{companies.length}</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-2 p-4 rounded-2 text-dark bg-[#d8e5eb]">
                      <img src={ConsultantsImg} width="40px" alt=""></img>
                      <p className="small my-2">Consultants</p>
                      <h1 className="m-0 fw-bold">0</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-3 p-4 rounded-2 text-dark bg-[#dfdbec]">
                      <img src={MentorImg} width="40px" alt=""></img>
                      <p className="small my-2">Mentors</p>
                      <h1 className="m-0 fw-bold">0</h1>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-4 p-4 rounded-2 text-dark bg-[#fff65a40]">
                      <img src={CoachesImg} width="40px" alt=""></img>
                      <p className="small my-2">Points</p>
                      <h1 className="m-0 fw-bold">0</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <AddCourse />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
