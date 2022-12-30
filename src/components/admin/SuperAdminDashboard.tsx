import React, { useState } from "react";
import AvatarImg from "../../images/avatar.png";
import PotImg from "../../images/icons/pot.png";
import ClockImg from "../../images/icons/clock.png";
import BulbImg from "../../images/icons/bulb.png";
import DashboardImg from "../../images/icons/dashboard.png";
import { PieChart } from "../shared/charts/PieChart";
import { Mentors } from "./Mentors";
import { useNavigate } from "react-router-dom";
import { AdminMenu } from "./AdminMenu";
import EntreprenursImg from "../../images/icons/entreprenuers.png";
import ConsultantsImg from "../../images/icons/consultants.png";
import MentorImg from "../../images/icons/mentor.png";
import CoachesImg from "../../images/icons/mic.png";
import CompanyImg from "../../images/company.png";
import { Entrepreneurs } from "./Entrepreneurs";

export const SuperAdminDashboard = () => {
  const initUsers: any[] = [
    {
      id: 0,
      name: "Jazmyn",
      email: "@jaz.designer",
      lastSeen: "8 hours ago",
      src: AvatarImg,
    },
    {
      id: 1,
      name: "Jane",
      email: "@jane.designer",
      lastSeen: "10 hours ago",
      src: AvatarImg,
    },
    {
      id: 2,
      name: "Mpho",
      email: "@mpho.developer",
      lastSeen: "8 hours ago",
      src: AvatarImg,
    },
  ];
  const innitActions: any[] = [
    { id: 0, title: "Early stage", src: ClockImg },
    { id: 1, title: "Start up", src: PotImg },
    { id: 2, title: "Idea concept", src: BulbImg },
    { id: 3, title: "Accelerate", src: DashboardImg },
  ];
  const [users, setUsers] = useState(initUsers);
  const [actions, setActions] = useState(innitActions);
  const navigate = useNavigate();

  const data = [
    ["Elements", "Priority Elements"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const onGoToUsers = () => {
    navigate("/admin/dashboard/users");
  };

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 col-sm-12 min-h-[100vh]">
          <AdminMenu />
        </div>
        <div className="col-md-10 col-sm-12 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="card shadow m-3">
              <div className="card-header bg-white border-0">
                <h5 className="mb-0 text-2xl font-medium text-dark">Overview</h5>
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
                            Total life change{" "}
                            <span className="badge bg-success">#6</span>
                          </h6>
                          <p className="text-muted small">
                            Email: kgowetisetso4@gmail.com <br></br>
                            Phone: 090037****
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
                      <h1 className="m-0 fw-bold">10</h1>
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

            <div className="m-4">
              <Entrepreneurs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
