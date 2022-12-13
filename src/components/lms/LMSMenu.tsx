import React from "react";
import { Link } from "react-router-dom";

export const LMSMenu = () => {
  return (
      <div className="w-full text-dark">
        {/* <div id="links" data-testid={"links"} className="max-w-[1240px] mx-auto">
          <p><Link to="/posts" data-testid={"link"} className="hover:underline link">LIST POSTS
          </Link></p>
            <p>
            <Link to="/posts/add" data-testid={"link"} className="hover:underline link">
            ADD POST
          </Link>
            </p>
        </div> */}
            <ul className="ml-5 navbar-nav pt-2 mb-4">
            <li className="nav-item">
                <a className="nav-link text-dark" href="javascript:void(0)">
                    <i className="fa-lg fa-solid fa-home"></i>
                    <span className="ml-3 text-dark">Dashboard</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="javascript:void(0)">
                    <i className="fa-lg fa-solid fa-clock"></i>
                    <span className="ml-3 text-dark">Course Progress</span>
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link text-dark" href="javascript:void(0)">
                    <i className="fa-lg fas fa-file-text"></i>
                    <span className="ml-3 text-dark">Courses</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="javascript:void(0)">
                    <i className="fa-lg fa-solid fa-envelope"></i>
                    <span className="ml-3 text-dark">Messages</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="javascript:void(0)">
                    <i className="fa-lg fa-solid fa-cog"></i>
                    <span className="ml-3 text-dark">Digital Tools</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="javascript:void(0)">
                    <i className="fa-lg fas fa-bar-chart"></i>
                    <span className="ml-3 text-dark">Growth Plan</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="javascript:void(0)">
                    <i className="fa-lg fas fa-calendar-alt"></i>
                    <span className="ml-3 text-dark">Calendar</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="javascript:void(0)">
                    <i className="fa-lg fas fa-file-waveform"></i>
                    <span className="ml-3 text-dark">Attendance</span>
                </a>
            </li>
        </ul>
        <div className="p-2 d-none d-md-block">
            <div className="card bg-light text-dark">
                <div className="card-header bg-transparent border-0">
                    <h6>Implementatio tasks</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <h5>Upload feedback</h5>
                        <p className="small">Our consultants will take a look and give you feedback</p>
                        <button className="btn px-4 btn-outline-secondary"><i className="fa fa-upload"></i></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
};