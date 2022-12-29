import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CMPMenu } from "./CMPMenu";
import CourseVideo from "../../images/video.mp4";

export const AddVideo = () => {
  const [videoType, setVideoType] = useState("upload");
  const navigate = useNavigate();

  useEffect(() => {}, [videoType, navigate]);

  const choosevideoType = (type: string) => {
    setVideoType(type);
  };

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <CMPMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <form className="row mt-3">
              <div className="col-md-7">
                {/* <button type="button" className="btn btn-wide btn-secondary">
                  <i className="fa fa-plus"></i> Add Course Video
                </button> */}
                <div className="form-group row align-items-center my-3">
                  <div className="col-md-2">
                    <label>Video Name</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="form-group row align-items-center my-3">
                  <label>Video Description</label>
                  <div className="col-md-8">
                    <textarea className="form-control"></textarea>
                  </div>
                </div>

                <div className="form-group row align-items-center my-3">
                  <div className="col-md-2">
                    <label>Add to Video</label>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="v-options"
                          id="free-text"
                          autoComplete="off"
                        />
                        <label className="form-check-label" htmlFor="free-text">
                          Free Text
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          checked={true}
                          name="v-options"
                          id="questions"
                          autoComplete="off"
                          onChange={() => {}}
                        />
                        <label className="form-check-label" htmlFor="questions">
                          Questions
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="v-options"
                          id="downloads"
                          autoComplete="off"
                        />
                        <label className="form-check-label" htmlFor="downloads">
                          Downloads
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group row align-items-center my-3">
                  <div className="col-md-2">
                    <label>Select Video</label>
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
                          choosevideoType("youtube");
                        }}
                      />
                      <label
                        className="btn btn-outline-secondary"
                        htmlFor="youtube"
                      >
                        Youtube
                      </label>
                      <input
                        type="radio"
                        className="btn-check video-check"
                        name="options"
                        id="upload"
                        autoComplete="off"
                        onClick={() => {
                          choosevideoType("upload");
                        }}
                      />
                      <label
                        className="btn btn-outline-secondary"
                        htmlFor="upload"
                      >
                        Upload Video
                      </label>
                    </div>
                    <div className="mt-2">
                      {videoType === "upload" ? (
                        <input
                          type="file"
                          className="video-input form-control"
                        />
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

                <div className="form-group row align-items-center my-3">
                  <video
                    src={CourseVideo}
                    controls={true}
                    className="img-fluid h-[450px] mt-2"
                  ></video>
                </div>

                <div className="form-group d-flex justify-content-between my-5">
                  {/* <button className="btn hover:bg-[#16f0fb] w-[150px] h-[50px] hover:text-white bg-[#00c2cb] mt-2 text-[white]">
                    Save &amp; View
                  </button> */}
                  <button className="btn hover:bg-[#16f0fb] w-[150px] h-[50px] hover:text-white bg-[#00c2cb] mt-2 text-[white]">
                    Save
                  </button>
                  <button className="btn w-[150px] h-[50px] bg-black text-white hover:bg-gray-900">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
