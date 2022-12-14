import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../images/logo.png";
import UserPlaceholderImg from "../../images/user-placeholder.png";
import { useNavigate } from "react-router-dom";
import * as constants from "../../constants";

export const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="border-b" data-testid="navbar">
      <nav className="navbar navbar-expand-md border-bottom navbar-light bg-white">
        <div className="container-fluid">
          <Link to="/auth/edit-profile">
            <div className="navbar-brand">
              <img src={LogoImg} height={160} width={160} alt="logo" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex">
            <div className="input-group">
              <div className="input-group-text bg-light border-0">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <input
                className="bg-light border-0 form-control me-2"
                type="text"
                placeholder="Search here"
              />
            </div>
          </form>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav align-items-center ms-auto">
              <li className="nav-item me-2">
                <select className="form-select form-select-sm d-inline" id="">
                  <option value="">English</option>
                </select>
              </li>
              <li className="nav-item me-2">
                <Link to="/">
                  <i className="fa-lg fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link to="/notifications">
                  <i className="fa-lg fa-solid fa-bell"></i>
                </Link>
              </li>
              <li className="nav-item dropdown no-arrow">
                <div
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <span className="d-flex flex-nowrap align-items-center">
                    <div className="mt-4">
                      <img
                        src={UserPlaceholderImg}
                        width="36px"
                        className="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="mt-4 ml-2">
                      <h6 className="mb-0">Alfred Sinaga</h6>
                      <p className="mb-0 small text-muted">alfreds@email.com</p>
                    </div>
                  </span>
                </div>
                <ul className="dropdown-menu">
                  <li className="m-2">
                    <Link to="/auth/edit-profile">Edit Profile</Link>
                  </li>
                  <li className="m-2">
                    <Link to="/auth/login">Login</Link>
                  </li>
                  <li className="m-2">
                    <Link to="/auth/login">Logout</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
