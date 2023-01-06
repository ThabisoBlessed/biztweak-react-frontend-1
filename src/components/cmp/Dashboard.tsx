import React, { useEffect } from "react";
import "./CMP.css";
import EntreprenursImg from "../../images/icons/entreprenuers.png";
import ConsultantsImg from "../../images/icons/consultants.png";
import MentorImg from "../../images/icons/mentor.png";
import CoachesImg from "../../images/icons/mic.png";
import { CMPMenu } from "./CMPMenu";
import { AddCourse } from "./AddCourse";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const menu = {
    id: 0,
    title: "Dashboard",
    link: "/cmp/manage-courses/product-overview",
    iconClass: "fa-lg fa-solid fa-home",
    isActive: false,
    titleClasses: "ml-3",
  };
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, "", document.URL);
    window.addEventListener("popstate", function (event) {
      console.log("hello");
      navigate(-1);
    });
  });

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
                      <p className="small my-2">Points</p>
                      <h1 className="m-0 fw-bold">5</h1>
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
