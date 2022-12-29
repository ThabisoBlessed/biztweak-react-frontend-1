import React, { useEffect, useState } from "react";
import { CMPMenu } from "./CMPMenu";
import CourseAudio from "../../images/audio.mp3";
import { useNavigate } from "react-router-dom";

export const AddAudio = () => {
  const [audioType, setAudioType] = useState("upload");
  const navigate = useNavigate();

  useEffect(() => {}, [audioType, navigate]);

  const chooseAudioType = (type: string) => {
    setAudioType(type);
  };

  const onSaveAndContinue = () => {
    navigate("/cmp/manage-courses/course-info");
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
                  <i className="fa fa-plus"></i> Add Course Audio
                </button> */}
                <div className="form-group row align-items-center my-3">
                  <div className="col-md-2">
                    <label>Audio Name</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="form-group row align-items-center my-3">
                  <label>Audio Description</label>
                  <div className="col-md-8">
                    <textarea className="form-control"></textarea>
                  </div>
                </div>

                <div className="form-group row align-items-center my-3">
                  <div className="col-md-2">
                    <label>Select Audio</label>
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
                          chooseAudioType("youtube");
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
                          chooseAudioType("upload");
                        }}
                      />
                      <label
                        className="btn btn-outline-secondary"
                        htmlFor="upload"
                      >
                        Upload Audio
                      </label>
                    </div>
                    <div className="mt-2">
                      {audioType === "upload" ? (
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

                <div className="form-group row align-items-center my-3 py-4">
                  <audio src={CourseAudio} controls={true}></audio>
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
