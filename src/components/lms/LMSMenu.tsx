import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOCALSTORAGE_KEYS } from "../../config";
import { IMenuListItem } from "../../model/menu-list-item.model";
import "./LMS.css";

export const LMSMenu = () => {
  const menuList: IMenuListItem[] = [
    {
      id: 0,
      title: "Dashboard",
      link: "/lms/dashboard",
      iconClass: "fa-lg fa-solid fa-home",
      isActive: false,
      titleClasses: "ml-3",
    },
    {
      id: 1,
      title: "Course Progress",
      link: "/lms/course-progress",
      iconClass: "fa-lg fa-solid fa-clock",
      isActive: false,
      titleClasses: "ml-3",
    },
    {
      id: 2,
      title: "Courses",
      link: "/lms/courses",
      iconClass: "fa-lg fas fa-file-text",
      isActive: false,
      titleClasses: "ml-4",
    },
    {
      id: 3,
      title: "Messages",
      link: "/lms/messages",
      iconClass: "fa-lg fa-solid fa-envelope",
      isActive: false,
      titleClasses: "ml-3",
    },
    // {
    //   id: 4,
    //   title: "Digital Tools",
    //   link: "/lms/digital-tools",
    //   iconClass: "fa-lg fa-solid fa-cog",
    //   isActive: false,
    //   titleClasses: "ml-3",
    // },
    // {
    //   id: 5,
    //   title: "Growth Plan",
    //   link: "/lms/growth-plan",
    //   iconClass: "fa-lg fas fa-bar-chart",
    //   isActive: false,
    //   titleClasses: "ml-3",
    // },
    {
      id: 4,
      title: "Calendar",
      link: "/lms/calendar",
      iconClass: "fa-lg fas fa-calendar-alt",
      isActive: false,
      titleClasses: "ml-3",
    },
    // {
    //   id: 7,
    //   title: "Attendance",
    //   link: "/lms/attendance",
    //   iconClass: "fa-lg fas fa-file-waveform",
    //   isActive: false,
    //   titleClasses: "ml-3",
    // },
    {
      id: 5,
      title: "Profile",
      link: "/lms/profile",
      iconClass: "fa-lg fas fa-user",
      isActive: false,
      titleClasses: "ml-3",
    },
  ];
  const [menu, setMenu] = useState(menuList);
  const [clickedMenuItem, setClickedMenuItem] = useState({} as IMenuListItem);

  useEffect(() => {
    const selected = localStorage.getItem(LOCALSTORAGE_KEYS.selectedMenu);
    if (selected) {
      setClickedMenuItem(JSON.parse(selected));
    } else {
      setClickedMenuItem(menuList[0]);
    }
  }, []);

  const handleMenuItemClick = (menuItem: IMenuListItem) => {
    localStorage.removeItem(LOCALSTORAGE_KEYS.selectedMenu);
    localStorage.setItem(LOCALSTORAGE_KEYS.selectedMenu, JSON.stringify(menuItem));
    const selected = localStorage.getItem(LOCALSTORAGE_KEYS.selectedMenu);
    if (selected) {
      setClickedMenuItem(JSON.parse(selected));
    }
    // window.location.reload();
  };

  return (
    <div className="w-full">
      <ul className="ml-5 navbar-nav pt-2 mb-4">
        {menu.map((menu: IMenuListItem, index: number) => {
          return (
            <li
              className={`hover:bg-[#00c2cb] text-dark w-full ${
                menu.id === clickedMenuItem.id
                  ? "bg-[#00c2cb] text-white"
                  : null
              } rounded-lg cursor-pointer`}
              key={`lms_menu_${index}`}
              onClick={() => handleMenuItemClick(menu)}
            >
              <div className="m-2" id={`${index}`}>
                <Link to={menu.link}>
                  <i
                    className={`${menu.iconClass} ${
                      menu.id === clickedMenuItem.id ? "text-white" : null
                    }`}
                  ></i>
                  <span className={`hover:text-white ${menu.titleClasses}`}>
                    {menu.title}
                  </span>
                </Link>
              </div>
            </li>
          );
        })}
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
