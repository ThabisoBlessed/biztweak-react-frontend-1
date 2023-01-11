import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IMenuListItem } from "../../model/menu-list-item.model";
import "./CMP.css";

export const CMPMenu = () => {
  const navigate = useNavigate();
  const menuList: IMenuListItem[] = [
    {
      id: 0,
      title: "Dashboard",
      link: "/cmp",
      iconClass: "fa-lg fa-solid fa-home",
      isActive: false,
      titleClasses: "ml-3",
    },
    {
      id: 1,
      title: "Admin User",
      link: "/cmp/manage-courses/admin-user",
      iconClass: "fa-lg fa-solid fa-user",
      isActive: false,
      titleClasses: "ml-3",
    },
    {
      id: 2,
      title: "Statistics",
      link: "/cmp/manage-courses/statistics",
      iconClass: "fa-lg fas fa-chart-bar",
      isActive: false,
      titleClasses: "ml-3",
    },
    {
      id: 3,
      title: "Manage Course",
      link: "/cmp/manage-courses/quiz",
      iconClass: "fa-lg fa-solid fa-bars",
      isActive: false,
      titleClasses: "ml-3",
    },
  ];
  const [menu, setMenu] = useState(menuList);
  const [selectedPath, setSelectedPath] = useState("");

  useEffect(() => {
    getSelectedMenu();
    //  // Force app to change selected menu when back button is clicked
    //  const prevMenu = localStorage.getItem(LOCALSTORAGE_KEYS.selectedMenuPrev);
    //  if (prevMenu) {
    //    window.history.pushState(null, "", document.URL);
    //    window.addEventListener("popstate", function (event) {
    //      console.log("its navigating");
    //      navigate(prevMenu);
    //    });
    //  }
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
              <Link to={menu.link}>
                <div className="m-2" id={`${index}`}>
                  <i
                    className={`${menu.iconClass} ${
                      menu.link.toLocaleLowerCase() === selectedPath ? "text-white" : null
                    }`}
                  ></i>
                  <span className={`${menu.titleClasses}`}>{menu.title}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
