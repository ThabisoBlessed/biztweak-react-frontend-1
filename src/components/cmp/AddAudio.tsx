import React, { useEffect, useState } from "react";
import { CMPMenu } from "./CMPMenu";
import CourseAudio from "../../images/audio.mp3";
import { useLocation, useNavigate } from "react-router-dom";
import { ICourse } from "../../model/course.model";
import { addCourseAudio } from "../../services/cmp/course.service";

export const AddAudio = () => {
  const [audioType, setAudioType] = useState("upload");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedCourse] = useState(state || ({} as ICourse));
  const [course, setCourse] = useState(selectedCourse.course);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [audio, setAudio] = useState({} as File);
  const [audioPreview, setAudioPreview] = useState("");

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    console.log(course);
  });

  const handleAudio = (e: any) => {
    const file = e.target.files[0];
    setAudio(file);
    setAudioPreview(URL.createObjectURL(file));
  };

  const onSkip = () => {
    navigate("/cmp/manage-courses/course-info", { state: { course } });
  };

  const onSave = async (event: any) => {
    event.preventDefault();
   
    const data = new FormData() 
    data.append('name', name);
    data.append('description', description);
    data.append('type', "test");
    data.append('file', String(audio));

    const addedAudio = await addCourseAudio(data, course.id);
    console.log(addedAudio);
    if (addedAudio.data) {
      const audioResult = addedAudio.data.package.data;
      console.log(audioResult);
      navigate("/cmp/manage-courses/course-info", { state: { course } });
    }
    setIsLoading(false);
  };

  const chooseAudioType = (type: string) => {
    setAudioType(type);
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
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>
                <div className="form-group row align-items-center my-3">
                  <label>Audio Description</label>
                  <div className="col-md-8">
                    <textarea className="form-control" onChange={(e) => setDescription(e.target.value)}></textarea>
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
                          onChange={handleAudio}
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
                  <audio src={audioPreview} controls={true}></audio>
                </div>
                <div className="form-group d-flex justify-content-between my-5">
                  {/* <button className="btn hover:bg-[#16f0fb] w-[150px] h-[50px] hover:text-white bg-[#00c2cb] mt-2 text-[white]">
                    Save &amp; View
                  </button> */}
                  <button onClick={onSkip} className="btn w-[150px] h-[50px] mt-2 bg-black text-white hover:bg-gray-900">
                    Cancel
                  </button>
                  <button
                    onClick={onSkip}
                    className="btn w-[150px] h-[50px] mt-2 bg-black text-white hover:bg-gray-900"
                  >
                    Skip
                  </button>
                  <button
                    onClick={onSave}
                    className="btn hover:bg-[#16f0fb] w-[150px] h-[50px] hover:text-white bg-[#00c2cb] mt-2 text-[white]"
                  >
                    {isLoading ? (
                      <span className="capitalize">Saving...</span>
                    ) : (
                      <span className="capitalize">Save</span>
                    )}
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
