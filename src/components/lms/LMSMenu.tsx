import React from "react";
import { Link } from "react-router-dom";

export const LMSMenu = () => {
  return (
    <div className="w-full text-dark">
      {/* <div id="links" data-testid={"links"} className="max-w-[1240px] mx-auto">
          <p><Link to="/posts" data-testid={"link"} className="hover:underline link">LIST POSTS
          </p>
            <p>
            <Link to="/posts/add" data-testid={"link"} className="hover:underline link">
            ADD POST
          
            </p>
        </div> */}
      <ul className="ml-5 navbar-nav pt-2 mb-4">
        <li className="nav-item">
          <a className="nav-link text-dark" href="javascript:void(0)">
            <Link to="/lms/dashboard">
              <i className="fa-lg fa-solid fa-home"></i>
              <span className="ml-3 text-dark">Dashboard</span>
            </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="javascript:void(0)">
            <Link to="/lms/course-progress">
              <i className="fa-lg fa-solid fa-clock"></i>
              <span className="ml-3 text-dark">Course Progress</span>
            </Link>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link text-dark" href="javascript:void(0)">
            <Link to="/lms/courses">
              <i className="fa-lg fas fa-file-text"></i>
              <span className="ml-4 text-dark">Courses</span>
            </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="javascript:void(0)">
            <Link to="/lms/messages">
              <i className="fa-lg fa-solid fa-envelope"></i>
              <span className="ml-3 text-dark line-through">Messages</span>
            </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="javascript:void(0)">
            <Link to="/lms/digital-tools">
              <i className="fa-lg fa-solid fa-cog"></i>
              <span className="ml-3 text-dark line-through">Digital Tools</span>
            </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="javascript:void(0)">
            <Link to="/lms/growth-plan">
              <i className="fa-lg fas fa-bar-chart"></i>
              <span className="ml-3 text-dark line-through">Growth Plan</span>
            </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="javascript:void(0)">
            <Link to="/lms/calendar">
              <i className="fa-lg fas fa-calendar-alt"></i>
              <span className="ml-4 text-dark line-through">Calendar</span>
            </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="javascript:void(0)">
            <Link to="/lms/attendance">
              <i className="fa-lg fas fa-file-waveform"></i>
              <span className="ml-4 text-dark">Attendance</span>
            </Link>
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
              <p className="small">
                Our consultants will take a look and give you feedback
              </p>
              <button className="btn px-4 btn-outline-secondary">
                <i className="fa fa-upload"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
