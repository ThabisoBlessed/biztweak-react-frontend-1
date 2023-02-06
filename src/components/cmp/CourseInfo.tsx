import React, { useEffect, useState } from "react";
import { CMPMenu } from "./CMPMenu";
import UserImg from "../../images/icons/user.png";
import { useLocation, useNavigate } from "react-router-dom";
import { IMenuListItem } from "../../model/menu-list-item.model";
import { ICourse } from "../../model/course.model";
import { getCourse } from "../../services/cmp/course.service";

export const CourseInfo = () => {
  const { state } = useLocation();
  const [selectedCourse] = useState(state || ({} as ICourse));
  const [course, setCourse] = useState(selectedCourse.course);
  const [isInitLoad, setIsInitLoad] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  
  const dropDownMenuInit: IMenuListItem[] = [
    {
      id: 0,
      title: "Video",
      link: "/cmp/manage-courses/add-video",
      iconClass: "fa-lg fa-solid fa-video",
      isActive: false,
      titleClasses: "ml-3",
    },
    // {
    //   id: 1,
    //   title: "Text",
    //   link: "/cmp/manage-courses/add-text",
    //   iconClass: "fa-lg fa-solid fa-text-slash",
    //   isActive: false,
    //   titleClasses: "ml-3",
    // },
    {
      id: 2,
      title: "Audio",
      link: "/cmp/manage-courses/add-audio",
      iconClass: "fa-lg fa-solid fa-audio-description",
      isActive: false,
      titleClasses: "ml-3",
    },
    {
      id: 3,
      title: "Quiz",
      link: "/cmp/manage-courses/add-test",
      iconClass: "fa-lg fa-solid fa-question",
      isActive: false,
      titleClasses: "ml-6",
    },
    // {
    //   id: 4,
    //   title: "Assignment",
    //   link: "/cmp/manage-courses/add-assignment",
    //   iconClass: "fa-lg fa-solid fa-file-alt",
    //   isActive: false,
    //   titleClasses: "ml-4",
    // },
  ];
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(dropDownMenuInit);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    if (isInitLoad) {
      onGetCourse();
      setIsInitLoad(false);
    }
    console.log(course);
    if (course.logo) {
      setSelectedImage(course.logo)
    }
  });

  const onEditCourse = () => {
    // navigate("/cmp/manage-courses/edit-course");
  };

  const onGetCourse = async () => {
    const couseResponse = await getCourse(course.id);
    if (couseResponse.data) {
      const courseResult = couseResponse.data.package.data;
      setCourse(courseResult)
    }
  }

  const onPreviewCourse = () => {
    navigate("/cmp/manage-courses/course-preview", { state: { course } });
  };

  const handleDropdownItemClick = (menu: IMenuListItem) => {
    const selected = dropdown.find(s => s.id === menu.id);
    if (selected) {
      const updateMode = true;
      navigate(selected.link, { state: { course, updateMode } });
    }
  };

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <CMPMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="row my-4">
              <div className="col-md-8">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div>Overview card</div>
                    <label className="rounded-3 bg-[#dfdbec] px-5 py-4 text-center">
                      <img src={selectedImage.length > 0 ? selectedImage : UserImg} alt="" height="60px" />
                      {/* <div className="mt-2 text-dark">Upload Course Image</div>
                      <input type="file" className="d-none" /> */}
                    </label>
                  </div>
                  <div className="col-md-9">
                    <h4 className="text-dark text-2xl font-medium">
                      {course.title}
                    </h4>
                    <p className="mb-0">{course.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div>
                  <div className="dropdown d-inline-block">
                    <button
                      className="btn btn-main dropdown-toggle mr-2 hover:bg-[#16f0fb]  hover:text-white bg-[#00c2cb] mt-2 text-[white]"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Add
                    </button>
                    <ul className="dropdown-menu">
                      {dropdown.map((menu: IMenuListItem, index: number) => {
                        return (
                          <li
                            className={`w-full cursor-pointer`}
                            key={`dropdown_menu_${index}`}
                            onClick={() => handleDropdownItemClick(menu)}
                          >
                            <div className="m-2" id={`${index}`}>
                              <i className={`${menu.iconClass}`}></i>
                              <span className={`${menu.titleClasses}`}>
                                {menu.title}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <button
                    className="btn btn btn-main mr-2 hover:bg-[#16f0fb]  hover:text-white bg-[#00c2cb] mt-2 text-[white]"
                    onClick={onEditCourse}
                  >
                    Edit Course
                  </button>
                  {/* <button
                    className="btn btn btn-main hover:bg-[#16f0fb]  hover:text-white bg-[#00c2cb] mt-2 text-[white]"
                    onClick={onPreviewCourse}
                  >
                    Preview Course
                  </button> */}
                  {/* <button className="btn btn-secondary">...</button> */}
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-8">
                <div className="card card-body h-100"></div>
              </div>
              <div className="col-md-4 text-center">
                <div>
                  <span className="badge bg-[#65c8d0] text-dark">
                    Total Courses
                  </span>
                  <h2 className="text-dark fw-600">1</h2>
                </div>
                <div>
                  <span className="badge bg-[#65c8d0] text-dark">
                    Total Videos
                  </span>
                  <h2 className="text-dark fw-600">{course.videos.length}</h2>
                </div>
                <div>
                  <span className="badge bg-[#65c8d0] text-dark">
                    Total Audios
                  </span>
                  <h2 className="text-dark fw-600">{course.audios.length}</h2>
                </div>
                <div>
                  <span className="badge bg-[#65c8d0] text-dark">
                    Total Tests
                  </span>
                  <h2 className="text-dark fw-600">{course.tests.length}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
