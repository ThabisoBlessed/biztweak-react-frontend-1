import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ICourse } from "../../model/course.model";
import { ITestAnswer } from "../../model/test-answer.model";
import { Answer } from "./Answer";
import { CMPMenu } from "./CMPMenu";
import { TextEditor } from "./TextEditor";

export const AddTest = () => {
  const initAnswers: ITestAnswer[] = [];
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedCourse] = useState(state || ({} as ICourse));
  const [course, setCourse] = useState(selectedCourse.course);
  const [textEditorText, setTextEditorText] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    console.log(course);
  }, [isLoading]);

  const onAddAnswer = () => {};

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <CMPMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            {/* <button
                  type="button"
                  className="btn btn-wide bg-[#6c757d] hover:bg-[#a1b0bc] text-white w-[150px]"
                >
                  <i className="fa fa-plus"></i> Add Test
                </button> */}

            <div className="form-group row align-items-center my-3">
              <div className="col-md-6 col-lg-6 bg-white">
                <TextEditor />
              </div>
            </div>

            <Answer />

            <div className="form-group d-flex justify-content-between my-5">
              <button className="btn btn-main btn-wide bg-[#6c757d] hover:bg-[#a1b0bc] text-white w-[150px]">
                Submit Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
