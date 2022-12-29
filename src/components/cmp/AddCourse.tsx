import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserImg from "../../images/icons/user.png";

export const AddCourse = () => {
  const [videoType, setVideoType] = useState("upload");
  const navigate = useNavigate();

  useEffect(() => {}, [videoType, navigate]);

  const chooseVideoType = (type: string) => {
    setVideoType(type);
  };

  const onSaveAndContinue = () => {
    navigate("/cmp/manage-courses/add-test");
  }

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
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row align-items-center my-3">
            <div className="col-md-2">
              <label>Category</label>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row align-items-center my-3">
            <label>Description</label>
            <div className="col-md-8">
              <textarea rows={8} className="form-control"></textarea>
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
                  <input type="file" className="video-input form-control" />
                ) : (
                  <div>
                    <input
                      type="text"
                      placeholder="Link"
                      className="video-input form-control"
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
                />
                <span className="mx-3">at</span>
                <input type="text" className="form-control d-inline-block" />
              </div>
              <div className="d-flex align-items-center">
                <div>Expiration&nbsp;date</div>
                <input
                  type="date"
                  className="form-control d-inline-block ms-2"
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
              <select name="phase" id="phase" className="form-select">
                <option value="">Select</option>
                <option value="">Ideation</option>
                <option value="">Start-up</option>
                <option value="">Early stage</option>
              </select>
            </div>
          </div>
          <button onClick={onSaveAndContinue} className="btn btn-lg hover:bg-[#16f0fb] hover:text-white bg-[#00c2cb] mt-2 text-[white]">
            Save &amp; Continue
          </button>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <div>Overview card</div>
            <label className="rounded-3 bg-[#dfdbec] px-5 py-4 text-center">
              <img
                src={UserImg}
                alt=""
                className="mx-auto"
                height={60}
                width={60}
              />
              <div className="mt-2 text-dark">Upload Course Image</div>
              <input type="file" className="d-none" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
