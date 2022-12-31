import React, { useState } from "react";
import EntreprenursImg from "../../images/icons/entreprenuers.png";
import ConsultantsImg from "../../images/icons/consultants.png";
import MentorImg from "../../images/icons/mentor.png";
import CoachesImg from "../../images/icons/mic.png";
import { AdminMenu } from "./AdminMenu";
import PotImg from "../../images/icons/pot.png";
import ClockImg from "../../images/icons/clock.png";
import BulbImg from "../../images/icons/bulb.png";
import DashboardImg from "../../images/icons/dashboard.png";
import { PieChart } from "../shared/charts/PieChart";
import { Mentors } from "./Mentors";
import { useNavigate } from "react-router-dom";
import { UsersCard } from "./UsersCard";

export const IncubatorDashboard = () => {
  const innitActions: any[] = [
    { id: 0, title: "Early stage", src: ClockImg },
    { id: 1, title: "Start up", src: PotImg },
    { id: 2, title: "Idea concept", src: BulbImg },
    { id: 3, title: "Accelerate", src: DashboardImg },
  ];
  const [actions, setActions] = useState(innitActions);

  const data = [
    ["Elements", "Priority Elements"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];


  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <AdminMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="card shadow m-3">
              <div className="card-header bg-white border-0">
                <h5 className="mb-0 text-2xl font-medium text-dark">Overview</h5>
              </div>
              <div className="card-body border-0">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                    <div className="col-12 bg-1 p-4 rounded-2 text-dark bg-[#b5e4ca40]">
                      <img src={EntreprenursImg} width="40px" alt=""></img>
                      <p className="small my-2">Entrepreneurs</p>
                      <h1 className="m-0 fw-bold">10</h1>
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

            <div className="row m-1">
              <div className="col-lg-4">
              <UsersCard />
              </div>
              <div className="col-lg-4">
                <div className="card h-100 shadow">
                  <div className="card-header bg-white border-0">
                    <h5 className="mb-0 text-2xl font-medium text-dark">Actions</h5>
                  </div>
                  <div className="card-body border-0">
                    <div className="bg-light rounded-3 p-3">
                      <div className="row">
                        {actions.map((action: any, index: number) => {
                          return (
                            <div
                              className="col-6 text-center text-dark p-2"
                              key={`action_menu_${index}`}
                            >
                              <img
                                src={action.src}
                                className="mx-auto"
                                width="50px"
                                alt=""
                              />
                              <p className="my-2">{action.title}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card h-100 shadow">
                  <div className="card-header bg-white border-0">
                    <h5 className="mb-0 text-2xl font-medium text-dark">Concept chart</h5>
                  </div>
                  <div className="card-body border-0">
                  <PieChart data={data} width={"100%"} height={"200px"} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="m-4">
              <Mentors />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
