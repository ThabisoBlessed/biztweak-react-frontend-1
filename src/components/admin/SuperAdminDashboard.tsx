import React, { useEffect, useState } from "react";
import AvatarImg from "../../images/avatar.png";
import PotImg from "../../images/icons/pot.png";
import ClockImg from "../../images/icons/clock.png";
import BulbImg from "../../images/icons/bulb.png";
import DashboardImg from "../../images/icons/dashboard.png";
import { useNavigate } from "react-router-dom";
import { AdminMenu } from "./AdminMenu";
import EntreprenursImg from "../../images/icons/entreprenuers.png";
import ConsultantsImg from "../../images/icons/consultants.png";
import MentorImg from "../../images/icons/mentor.png";
import CoachesImg from "../../images/icons/mic.png";
import CompanyImg from "../../images/company.png";
import { Entrepreneurs } from "./Entrepreneurs";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { IUser } from "../../model/user.model";
import { getCurrentUser } from "../../services/lms/user.service";
import { getAllUsers } from "../../services/admin/admin.service";
import { getAllCompanies } from "../../services/business/company.service";

export const SuperAdminDashboard = () => {
  const innitActions: any[] = [
    { id: 0, title: "Early stage", src: ClockImg },
    { id: 1, title: "Start up", src: PotImg },
    { id: 2, title: "Idea concept", src: BulbImg },
    { id: 3, title: "Accelerate", src: DashboardImg },
  ];
  const [companies, setCompanies] = useState([]);
  const [actions, setActions] = useState(innitActions);
  const [user, setUser] = useState({} as IUser);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const data = [
    ["Elements", "Priority Elements"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  useEffect(() => {
    if (user && !user.email) {
      getProfile();
    }

    if (companies.length === 0) {
      getCompanies();
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
      const userProfile = profile.data.package.data;
      setUser(userProfile);
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
        <div className="col-md-2 col-sm-12 min-h-[100vh]">
          <AdminMenu />
        </div>
        <div className="col-md-10 col-sm-12 text-left bg-light border-start">
        {isLoading || !user ? <div className="text-center text-4xl h-[100vh]">Loading...</div> : (
           <div className="container-fluid">
           <div className="card shadow mt-3">
             <div className="card-header bg-white border-0">
               <h5 className="mb-0 text-2xl font-medium text-dark">
                 Overview
               </h5>
             </div>
             <div className="card-body border-0">
               <div className="row justify-content-between">
                 <div className="mb-3 mb-md-0 col-md-4 col-sm-6">
                   <div className="col-12 px-lg-4">
                     <div className="text-dark d-flex">
                       <div className="me-3">
                         <img
                           src={CompanyImg}
                           width="60px"
                           className="rounded-circle"
                           alt=""
                         />
                       </div>
                       <div>
                         <h6 className="mb-0">
                           Total life change
                           <span className="badge bg-success">#6</span>
                         </h6>
                         <p className="text-muted small">
                           Email: {user.email} <br></br>
                           Phone:{user.phone}
                         </p>
                         <button className="me-3 btn btn-main-outline">
                           Message
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="col-md-2 col-sm-6 mb-3 mb-lg-0">
                   <div className="col-12 bg-1 p-4 rounded-2 text-dark bg-[#b5e4ca40]">
                     <img src={EntreprenursImg} width="40px" alt=""></img>
                     <p className="small my-2">Entrepreneurs</p>
                     <h1 className="m-0 fw-bold">{companies.length}</h1>
                   </div>
                 </div>
                 <div className="col-md-2 col-sm-6 mb-3 mb-lg-0">
                   <div className="col-12 bg-2 p-4 rounded-2 text-dark bg-[#d8e5eb]">
                     <img src={ConsultantsImg} width="40px" alt=""></img>
                     <p className="small my-2">Consultants</p>
                     <h1 className="m-0 fw-bold">4</h1>
                   </div>
                 </div>
                 <div className="col-md-2 col-sm-6 mb-3 mb-lg-0">
                   <div className="col-12 bg-3 p-4 rounded-2 text-dark bg-[#dfdbec]">
                     <img src={MentorImg} width="40px" alt=""></img>
                     <p className="small my-2">Mentors</p>
                     <h1 className="m-0 fw-bold">2</h1>
                   </div>
                 </div>
                 <div className="col-md-2 col-sm-6 mb-3 mb-lg-0">
                   <div className="col-12 bg-4 p-4 rounded-2 text-dark bg-[#fff65a40]">
                     <img src={CoachesImg} width="40px" alt=""></img>
                     <p className="small my-2">Coaches</p>
                     <h1 className="m-0 fw-bold">5</h1>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           <div className="mb-2 mt-2">
             <Entrepreneurs companies={companies} />
           </div>
         </div>
      )}
         
        </div>
      </div>
    </div>
  );
};
