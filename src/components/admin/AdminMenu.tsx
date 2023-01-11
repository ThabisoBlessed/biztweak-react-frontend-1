import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorageValue, LOCALSTORAGE_KEYS, removeLocalStorageValue, setLocalStorageValue } from "../../config";
import { IMenuListItem } from "../../model/menu-list-item.model";

export const AdminMenu = () => {
  const navigate = useNavigate();
  const menuList: IMenuListItem[] = [
    {
      id: 0,
      title: "Incubator Dash",
      link: "/admin",
      iconClass: "fa-lg fa-solid fa-home",
      isActive: false,
      titleClasses: "ml-3",
    },
    {
      id: 1,
      title: "Admin User",
      link: "/admin/admin-user",
      iconClass: "fa-lg fa-solid fa-user",
      isActive: false,
      titleClasses: "ml-3",
    },
    // {
    //   id: 2,
    //   title: "Statistics",
    //   link: "/admin/statistics",
    //   iconClass: "fa-lg fas fa-chart-bar",
    //   isActive: false,
    //   titleClasses: "ml-4",
    // },
    {
      id: 3,
      title: "Calendar",
      link: "/admin/calendar",
      iconClass: "fa-lg fas fa-calendar-alt",
      isActive: false,
      titleClasses: "ml-3",
    },
    // {
    //   id: 4,
    //   title: "Submission",
    //   link: "/admin/submission",
    //   iconClass: "fa-lg fa-solid fa-file-alt",
    //   isActive: false,
    //   titleClasses: "ml-3",
    // },
    // {
    //   id: 5,
    //   title: "Application",
    //   link: "/admin/application",
    //   iconClass: "fa-lg fa-solid fa-edit",
    //   isActive: false,
    //   titleClasses: "ml-3",
    // },
    {
      id: 6,
      title: "Attendance",
      link: "/admin/attendance",
      iconClass: "fa-lg fa-solid fa-file-waveform",
      isActive: false,
      titleClasses: "ml-4",
    },
    {
      id: 7,
      title: "SuperAdmin Dash",
      link: "/admin/super-user-dashboard",
      iconClass: "fa-lg fa-solid fa-home",
      isActive: false,
      titleClasses: "ml-2",
    },
    {
      id: 8,
      title: "Add New User",
      link: "/admin/add-user",
      iconClass: "fa-lg fa-solid fa-user",
      isActive: false,
      titleClasses: "ml-3",
    },
  ];
  const [menu, setMenu] = useState(menuList);
  const [selectedPath, setSelectedPath] = useState("");

  useEffect(() => {
    getSelectedMenu();
  }, []);

  /**
   * Sets default selected menu
   */
   const getSelectedMenu = () => {
    const pathName = window.location.href;
    const cleanedPath = `/${pathName.split("/#/")[1]}`;
    setSelectedPath(cleanedPath);
  };

  /**
   * Handles menu item click
   * @param menuItem
   */
  const handleMenuItemClick = (menuItem: IMenuListItem) => {
    setSelectedPath(menuItem.link);
    navigate(menuItem.link);
  };

  return (
    <div className="w-full">
      <ul className="ml-5 navbar-nav pt-2 mb-4 text-dark">
        {menu.map((menu: IMenuListItem, index: number) => {
          return (
            <li
              className={`hover:bg-[#16f0fb]  hover:text-white w-full ${
                menu.link.toLocaleLowerCase() === selectedPath
                  ? "bg-[#00c2cb] text-white"
                  : null
              } rounded-lg cursor-pointer`}
              key={`lms_menu_${index}`}
              onClick={() => handleMenuItemClick(menu)}
            >
              <div className="m-2" id={`${index}`}>
                <i
                  className={`${menu.iconClass} ${
                    menu.link.toLocaleLowerCase() === selectedPath ? "text-white" : null
                  }`}
                ></i>
                <span className={`${menu.titleClasses}`}>
                  {menu.title}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
