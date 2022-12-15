import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProfileMenu = () => {
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
    <div className="b-0 m-0 text-dark">
      <div className="section pl-2">
        <h6 className="fw-bold mt-3 mb-3">COMPANY</h6>
        <button
          data-bs-toggle="modal"
          data-bs-target="#add-company"
          className="btn btn-outline-info dotted-border btn-lg col-12"
        >
          <i className="fa fa-plus"></i> Add Company
        </button>
      </div>

      <ul className="list-group mt-3">
        <li className="top-buffer">
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading37">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse37"
                aria-expanded="true"
                aria-controls="collapse37"
              >
                No name
              </button>
            </h2>
            <div
              id="collapse37"
              className="accordion-collapse collapse show"
              aria-labelledby="heading37"
              data-bs-parent="#assessment-accordion"
            >
              <div className="accordion-body">
                <h2 className="small text-center mb-0">No name</h2>

                <div className="text-center">
                  <small>Details</small>
                </div>
                <hr></hr>
                <div className="small text-start">
                  <p className="d-flex">
                    <i className="fa fa-info me-3"></i> I have an idea but don’t
                    know what to do next
                  </p>

                  <p>
                    <i className="fa fa-industry me-3"></i> Information
                    Technology
                  </p>
                </div>
                <div className="top-buffer">
                  <a
                    className="btn btn-info"
                    href="https://biztweak.org.za/public/37/manage-company"
                  >
                    <i className="fa fa-file-alt"></i> Complete Assessment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="top-buffer">
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading38">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse38"
                aria-expanded="true"
                aria-controls="collapse38"
              >
                Developer
              </button>
            </h2>
            <div
              id="collapse38"
              className="accordion-collapse collapse show"
              aria-labelledby="heading38"
              data-bs-parent="#assessment-accordion"
            >
              <div className="accordion-body">
                <h2 className="small text-center mb-0">Developer</h2>

                <div className="text-center">
                  <small>Details</small>
                </div>
                <hr></hr>
                <div className="small text-start">
                  <p className="d-flex">
                    <i className="fa fa-info me-3"></i> I have an idea but don’t
                    know what to do next
                  </p>

                  <p>
                    <i className="fa fa-industry me-3"></i> Information
                    Technology
                  </p>
                  <p>
                    <i className="fa fa-map-marker me-3"></i> 20 Bishop Road,
                    Windermere, Berea, South Africa
                  </p>
                </div>
                <div className="top-buffer">
                  <a
                    className="btn btn-info"
                    href="https://biztweak.org.za/public/38/report-summary"
                  >
                    <i className="fa fa-file-alt"></i> View Biz Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
