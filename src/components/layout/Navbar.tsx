import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../images/logo.png";
import UserPlaceholderImg from "../../images/user-placeholder.png";
import { useNavigate } from "react-router-dom";
import {
  getLocalStorageValue,
  isLoggedIn,
  LOCALSTORAGE_KEYS,
  removeLocalStorageValue,
} from "../../config";
import { IUser } from "../../model/user.model";
import { IMenuListItem } from "../../model/menu-list-item.model";

export const Navbar = () => {
  const menuList: IMenuListItem[] = [
    {
      id: 0,
      title: "BIZ",
      link: "/business",
      iconClass: "",
      isActive: false,
      titleClasses: "nav-item me-2 hover:text-[#00c2cb]",
    },
    {
      id: 1,
      title: "LMS",
      link: "/lms",
      iconClass: "",
      isActive: false,
      titleClasses: "nav-item me-2 hover:text-[#00c2cb]",
    },
    {
      id: 2,
      title: "CMP",
      link: "/cmp",
      iconClass: "",
      isActive: false,
      titleClasses: "nav-item me-2 hover:text-[#00c2cb]",
    },
    {
      id: 3,
      title: "Admin",
      link: "/admin",
      iconClass: "",
      isActive: false,
      titleClasses: "nav-item me-2 hover:text-[#00c2cb]",
    },
  ];
  const [menu, setMenu] = useState(menuList);
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [clickedMenuName, setClickedMenuName] = useState("");

  useEffect(() => {
    console.log("Logged in: ", loggedIn);
    const user = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (user) {
      const userResult: IUser = JSON.parse(user);
      setUserEmail(userResult.email);
      setUserName(userResult.fullNames);
    }
    
    setSelectedMenu();
  }, [loggedIn]);

  /**
   * Set seleted menu
   */
  const setSelectedMenu = () => {
    const pathName = window.location.href;
    const cleanedPath = `/${pathName.split("/#/")[1]}`;
    const selected = cleanedPath.split("/")[1];

    if (selected !== "") {
      console.log("top menu set");
      setClickedMenuName(selected);
    }
  }

  const onLogout = () => {
    removeLocalStorageValue(LOCALSTORAGE_KEYS.accessToken);
    removeLocalStorageValue(LOCALSTORAGE_KEYS.user);
    window.location.reload();
  };

  /**
   * Handles menu item click
   * @param menuItem
   */
  const handleMenuItemClick = (menuItem: IMenuListItem) => {
    const pathName = window.location.href;
    const cleanedPath = `/${pathName.split("/#/")[1]}`;
    const selected = cleanedPath.split("/")[1];
    setClickedMenuName(selected)
  };

  return (
    <>
      {loggedIn ? (
        <nav
          data-testid="navbar"
          // onClick={onClearSelectedNavMenukNav}
          className="navbar navbar-expand-md border-b navbar-light text-dark m-0 bg-white"
        >
          <Link to="/">
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
                <select
                  className="form-select form-select-sm d-inline"
                  id="english"
                >
                  <option value="">English</option>
                </select>
              </li>
              {menu.map((menu: IMenuListItem, index: number) => {
                return (
                  <li
                    className={`hover:text-white mr-2 ${
                      menu.link.toLowerCase().includes(clickedMenuName)
                        ? "bg-[#00c2cb] text-white"
                        : null
                    } rounded-lg cursor-pointer`}
                    id="lms"
                    key={`nav_menu_${index}`}
                    onClick={() => handleMenuItemClick(menu)}
                  >
                    <Link
                      to={menu.link}
                      className={` ${
                        menu.link.toLowerCase().includes(clickedMenuName)
                          ? "hover:text-white"
                          : "hover:text-[#00c2cb]"
                      }`}
                    >
                      &nbsp;{menu.title}&nbsp;
                    </Link>
                  </li>
                );
              })}
              <li className="nav-item me-2 hover:text-[#00c2cb]" id="home">
                <Link to="/" className="hover:text-[#00c2cb]">
                  <i className="fa-lg fa-solid fa-house"></i>
                </Link>
              </li>
              <li
                className="nav-item me-2 hover:text-[#00c2cb]"
                id="notification"
              >
                <Link to="/notifications" className="hover:text-[#00c2cb]">
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
                      <h6 className="mb-0">{userName}</h6>
                      <p className="mb-0 small text-muted">{userEmail}</p>
                    </div>
                  </span>
                </div>
                <ul className="dropdown-menu">
                  {/* <li className="m-2 hover:text-[#00c2cb]">
                      <Link to="/lms/profile" className="hover:text-[#00c2cb]">
                        Edit Profile
                      </Link>
                    </li> */}
                  <li className="m-2 hover:text-[#00c2cb]" onClick={onLogout}>
                    <Link to="/auth/login" className="hover:text-[#00c2cb]">
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-sm navbar-light bg-white">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand logo w-[150px] ml-2">
              <img src={LogoImg} height={160} width={160} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to={"/blog"} className="nav-link px-sm-3">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/blog"} className="nav-link px-sm-3">
                    Blog
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/about-us"} className="nav-link px-sm-3">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/auth/login"} className="nav-link px-sm-3">
                    Sign in
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to={"/auth/register"}
                    className="nav-link btn btn-outline-info btn-login border-3 px-5 py-2"
                  >
                    <span className="hover:text-white">Register</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
