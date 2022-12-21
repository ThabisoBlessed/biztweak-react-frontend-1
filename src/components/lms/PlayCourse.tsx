import React from "react";
import { LMSMenu } from "./LMSMenu";
import { PlayCourseVideo } from "./PlayCourseVideo";
import "./Course.css";
import { IMenuListItem } from "../../model/menu-list-item.model";

export const PlayCourse = () => {
  const menuList: IMenuListItem[] = [
    {
      id: 0,
      title: "Course Video",
      link: "",
      iconClass: "fa fa-video text-dark",
      isActive: false,
      titleClasses: "btn btn-lg btn-main",
    },
    {
      id: 1,
      title: "Course Audio",
      link: "",
      iconClass: "fa-solid fa-microphone text-dark",
      isActive: false,
      titleClasses: "btn btn-lg btn-main",
    },
    {
      id: 2,
      title: "Course Text",
      link: "",
      iconClass: "fa-solid fa-align-justify text-dark",
      isActive: false,
      titleClasses: "btn btn-lg btn-main",
    },
  ];

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <LMSMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="row mt-3">
              <div className="col-1">
                <div className="control">
                  <div className="btn-group">
                    {menuList.map((menu: IMenuListItem, index: number) => {
                      return (
                        <button key={`play_course_top_menu_${index}`} className={menu.titleClasses}>
                          <i className={menu.iconClass}></i>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <PlayCourseVideo />
          </div>
        </div>
      </div>
    </div>
  );
};
