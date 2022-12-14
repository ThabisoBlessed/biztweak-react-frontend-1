import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LMS.css";

export const LMSMenu = () => {
  const menuList: any[] = [
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
    {
      id: 4,
      title: "Digital Tools",
      link: "/lms/digital-tools",
      iconClass: "fa-lg fa-solid fa-cog",
      isActive: false,
      titleClasses: "ml-3",
    },
    {
      id: 5,
      title: "Growth Plan",
      link: "/lms/growth-plan",
      iconClass: "fa-lg fas fa-bar-chart",
      isActive: false,
      titleClasses: "ml-3",
    },
    {
      id: 6,
      title: "Calendar",
      link: "/lms/calendar",
      iconClass: "fa-lg fas fa-calendar-alt",
      isActive: false,
      titleClasses: "ml-3",
    },
    {
      id: 7,
      title: "Attendance",
      link: "/lms/attendance",
      iconClass: "fa-lg fas fa-file-waveform",
      isActive: false,
      titleClasses: "ml-3",
    },
  ];
  const [menu, setMenu] = useState(menuList);

  const handleMenuItemClick = (event: any) => {
    console.log(event.currentTarget.id);
  };

  return (
    <div className="w-full text-dark">
      <ul className="ml-5 navbar-nav pt-2 mb-4">
        {menu.map((menu: any, index: number) => {
          return (
            <li className="hover:bg-[#00c2cb]">
              <div
                key={index}
                className="m-2"
                id={`${index}`}
                onClick={(e) => handleMenuItemClick(e)}
              >
                <Link to={menu.link}>
                  <i className={menu.iconClass}></i>
                  <span className={`text-dark ${menu.titleClasses}`}>
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
