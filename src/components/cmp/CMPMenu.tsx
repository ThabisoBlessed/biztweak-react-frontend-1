import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOCALSTORAGE_KEYS } from "../../config";
import { IMenuListItem } from "../../model/menu-list-item.model";
import "./CMP.css";

export const CMPMenu = () => {
  const navigate = useNavigate();
  const menuList: IMenuListItem[] = [
    {
      id: 0,
      title: "Dashboard",
      link: "/cmp/dashboard",
      iconClass: "fa-lg fa-solid fa-home",
      isActive: false,
      titleClasses: "ml-3",
    },
    {
      id: 1,
      title: "Admin User",
      link: "/cmp/admin-user",
      iconClass: "fa-lg fa-solid fa-user",
      isActive: false,
      titleClasses: "ml-3",
    },
    {
      id: 2,
      title: "Statistics",
      link: "/cmp/statistics",
      iconClass: "fa-lg fas fa-chart-bar",
      isActive: false,
      titleClasses: "ml-4",
    },
    {
      id: 3,
      title: "Manage Course",
      link: "/cmp/manage-courses",
      iconClass: "fa-lg fa-solid fa-bars",
      isActive: false,
      titleClasses: "ml-3",
    }
  ];
  const [menu, setMenu] = useState(menuList);
  const [clickedMenuItem, setClickedMenuItem] = useState({} as IMenuListItem);

  useEffect(() => {
    const selected = localStorage.getItem(LOCALSTORAGE_KEYS.selectedMenu);
    console.log(selected);
    if (selected) {
      setClickedMenuItem(JSON.parse(selected));
    } else {
      setClickedMenuItem(menuList[0]);
    }
    navigate(clickedMenuItem.link);
  }, []);

  /**
   * Handles menu item click
   * @param menuItem
   */
  const handleMenuItemClick = (menuItem: IMenuListItem) => {
    localStorage.removeItem(LOCALSTORAGE_KEYS.selectedMenu);
    localStorage.setItem(
      LOCALSTORAGE_KEYS.selectedMenu,
      JSON.stringify(menuItem)
    );
    const selected = localStorage.getItem(LOCALSTORAGE_KEYS.selectedMenu);
    if (selected) {
      setClickedMenuItem(JSON.parse(selected));
    }
    navigate(menuItem.link)
  };

  return (
    <div className="w-full">
      <ul className="ml-5 navbar-nav pt-2 mb-4 text-dark">
        {menu.map((menu: IMenuListItem, index: number) => {
          return (
            <li
              className={`hover:bg-[#16f0fb]  hover:text-white w-full ${
                menu.id === clickedMenuItem.id
                  ? "bg-[#00c2cb] text-white"
                  : null
              } rounded-lg cursor-pointer`}
              key={`lms_menu_${index}`}
              onClick={() => handleMenuItemClick(menu)}
            >
              <div className="m-2" id={`${index}`}>
                <i
                  className={`${menu.iconClass} ${
                    menu.id === clickedMenuItem.id ? "text-white" : null
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
