import React, { useState } from "react";
import { LMSMenu } from "./LMSMenu";
import { PlayCourseVideo } from "./PlayCourseVideo";
import "./Course.css";
import { IMenuListItem } from "../../model/menu-list-item.model";
import { PlayCourseAudio } from "./PlayCourseAudio";
import { PlayCourseText } from "./PlayCourseText";

export const PlayCourse = () => {
  const [selectedTopMenu, setSelectedTopMenu] = useState("video");
  const menuList: IMenuListItem[] = [
    {
      id: 0,
      title: "video",
      link: "",
      iconClass: "fa fa-video text-dark",
      isActive: true,
      titleClasses: "btn btn-lg btn-main",
    },
    {
      id: 1,
      title: "audio",
      link: "",
      iconClass: "fa-solid fa-microphone text-dark",
      isActive: false,
      titleClasses: "btn btn-lg btn-main",
    },
    {
      id: 2,
      title: "text",
      link: "",
      iconClass: "fa-solid fa-align-justify text-dark",
      isActive: false,
      titleClasses: "btn btn-lg btn-main",
    },
  ];

  const onClickCourseTopMenu = (title: string) => {
    setSelectedTopMenu(title);
  };

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
                        <button
                          onClick={() => {
                            onClickCourseTopMenu(menu.title);
                          }}
                          key={`play_course_top_menu_${index}`}
                          className={menu.titleClasses}
                        >
                          <i className={menu.iconClass}></i>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {selectedTopMenu === "video" ? <PlayCourseVideo /> : null}
            {selectedTopMenu === "audio" ? <PlayCourseAudio /> : null}
            {selectedTopMenu === "text" ? <PlayCourseText /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};
