import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loading } from "../../constants";
import UserImg from "../../images/icons/user.png";
import { ICourse } from "../../model/course.model";
import { addCourse } from "../../services/cmp/course.service";

export const AddCourse = () => {
  const [videoType, setVideoType] = useState("upload");
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [introVideo, setIntroVideo] = useState({} as File);
  const [startDatetime, setStartDatetime] = useState("");
  const [expiryDatetime, setExpiryDatetime] = useState("");
  const [phaseId, setPhaseId] = useState(0);
  const bizPhaseList: any[] = [
    {
      id: 1,
      name: "Ideation",
      value: "ideation",
    },
    {
      id: 2,
      name: "Start-Up",
      value: "start_up",
    },
    {
      id: 3,
      name: "Early Stage",
      value: "early_stage",
    },
  ];
  const [businessPhases, setBusinessPhases] = useState(bizPhaseList);
  const [businessPhase, setBusinessPhase] = useState(bizPhaseList[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [logo, setLogo] = useState({} as File);
  const [videoLink, setVideoLink] = useState("");
  const [selectedImage, setSelectedImage] = useState("" || videoLink);

  const chooseVideoType = (type: string) => {
    setVideoType(type);
  };

  const handleBizPhaseItemClick = (event: any) => {
    setBusinessPhase(event.target.value);
    const selected = bizPhaseList.find(b => b.value === event.target.value);
    setPhaseId(selected.id);
  };

  const handleVideo = (e: any) => {
    const file = e.target.files[0];
    setIntroVideo(file);
  };

  const handleLogoFile = async (e: any) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file))
    setLogo(file);
  };

  const onRemovePhoto = (e: any) => {
    e.preventDefault();
    setLogo({} as File);
  };

  const onSaveAndContinue = async (e: any) => {
    e.preventDefault();
    setIsLoading(false);

    const data = new FormData() 
    data.append('title', title);
    data.append('description', description);
    data.append('category', category);
    data.append('startDatetime', startDatetime);
    data.append('expiryDatetime', expiryDatetime);
    data.append('businessPhase', businessPhase);
    data.append('score', "0");
    data.append('logo', videoLink.length > 0 ? String(videoLink) : logo);
    data.append('introVideo', introVideo);
    data.append('phaseId', String(phaseId));
    data.append('timeOptions', String({}));

    const courseResult = await addCourse(data);
    const success = courseResult.data;
    if (success) {
      const course = courseResult.data.package.data;
      navigate("/cmp/manage-courses/add-test", { state: { course } });
    }
  };

  return (
    <div>
      <form className="row mt-3">
        <div className="col-md-7">
          {/* <button className="btn btn-wide btn-secondary">
            <i className="fa fa-plus"></i> Add Course
          </button> */}
          <div className="form-group row align-items-center my-3">
            <div className="col-md-2">
              <label>Course Name</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row align-items-center my-3">
            <div className="col-md-2">
              <label>Category</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row align-items-center my-3">
            <label>Description</label>
            <div className="col-md-8">
              <textarea
                rows={8}
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <hr></hr>
          <div className="form-group row align-items-center my-3">
            <div className="col-md-2">
              <label>Intro Video</label>
            </div>
            <div className="col-md-6">
              <div>
                <input
                  type="radio"
                  className="btn-check video-check"
                  name="options"
                  id="youtube"
                  autoComplete="off"
                  onClick={() => {
                    chooseVideoType("youtube");
                  }}
                />
                <label className="btn btn-outline-secondary" htmlFor="youtube">
                  Youtube
                </label>
                <input
                  type="radio"
                  className="btn-check video-check"
                  name="options"
                  id="upload"
                  autoComplete="off"
                  onClick={() => {
                    chooseVideoType("upload");
                  }}
                />
                <label className="btn btn-outline-secondary" htmlFor="upload">
                  Upload Video
                </label>
              </div>
              <div className="mt-2">
                {videoType === "upload" ? (
                  <input
                    type="file"
                    className="video-input form-control"
                    onChange={(e) => handleVideo(e)}
                  />
                ) : (
                  <div>
                    <input
                      type="text"
                      placeholder="Link"
                      className="video-input form-control"
                      onChange={(e) => setVideoLink(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="form-group row align-items-center mt-2 mb-2">
            <div className="col-md-2">
              <label>Time Option</label>
            </div>
            <div className="col-md-8">
              <div>
                <input
                  type="radio"
                  className="btn-check time-check"
                  name="time"
                  id="duration"
                  autoComplete="off"
                />
                <label className="btn btn-outline-secondary" htmlFor="duration">
                  Duration
                </label>
                <input
                  type="radio"
                  className="btn-check time-check"
                  name="time"
                  id="time"
                  autoComplete="off"
                />
                <label className="btn btn-outline-secondary" htmlFor="time">
                  Time Limit
                </label>
              </div>
              <div className="d-flex align-items-center mb-3 mt-3">
                <span>Start&nbsp;date</span>
                <input
                  type="date"
                  className="form-control d-inline-block ms-2"
                  onChange={(e) => setStartDatetime(e.target.value)}
                />
                <span className="mx-3">at</span>
                <input type="text" className="form-control d-inline-block" />
              </div>
              <div className="d-flex align-items-center">
                <div>Expiration&nbsp;date</div>
                <input
                  type="date"
                  className="form-control d-inline-block ms-2"
                  onChange={(e) => setExpiryDatetime(e.target.value)}
                />
                <div className="mx-3">at</div>
                <input type="text" className="form-control d-inline-block" />
              </div>
            </div>
          </div>
          <div className="form-group row align-items-center my-3">
            <div className="col-md-2">
              <label>Business Phase</label>
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                id="industry"
                name="industry"
                value={businessPhase.value}
                onChange={handleBizPhaseItemClick}
              >
                {businessPhases.map((phase: any, index: number) => {
                  return (
                    <option key={index} value={phase.value}>
                      {phase.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <button
            onClick={(e) => onSaveAndContinue(e)}
            className="btn btn-lg mb-3 hover:bg-[#16f0fb] w-[150px] hover:text-white bg-[#00c2cb] mt-2 text-[white]"
          >
            {isLoading ? (
              <span className="capitalize">Saving...</span>
            ) : (
              <span>Save &amp; Continue</span>
            )}
          </button>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <div>Overview card</div>
            <label className="rounded-3 bg-[#dfdbec] px-5 py-4 text-center">
              <img
                src={selectedImage.length > 0 ? selectedImage : UserImg}
                alt="courseLogo"
                className="mx-auto"
                height={60}
                width={60}
              />
              <div className="mt-2 text-dark">Upload Course Image</div>
              <input type="file" className="d-none" onChange={(e) => handleLogoFile(e)} />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
