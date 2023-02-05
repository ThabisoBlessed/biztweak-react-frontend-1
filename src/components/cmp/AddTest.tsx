import React, { useEffect, useState } from "react";
import { EditorState } from "react-draft-wysiwyg";
import { useLocation, useNavigate } from "react-router-dom";
import { ICourse } from "../../model/course.model";
import { ITestAnswer } from "../../model/test-answer.model";
import { addCourseTest } from "../../services/cmp/course.service";
import { Answer } from "./Answer";
import { CMPMenu } from "./CMPMenu";
import { TextEditor } from "./TextEditor";

export const AddTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedCourse] = useState(state || ({} as ICourse));
  const [updateMode] = useState(selectedCourse.updateMode);
  const [course, setCourse] = useState(selectedCourse.course);
  const [textEditorText, setTextEditorText] = useState("");
  const [answers, setAnswers] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    console.log(course);
  });

  const onSubmitQuestion = async () => {
    setIsSaving(true);
    // console.log(textEditorText);
    // console.log(answers);
    const test = {
      question: textEditorText,
      answers: JSON.stringify(answers),
      status: false,
      correctAnswer: false,
    };
    const courseTest = await addCourseTest(test, course.id);
    if (!updateMode) {
      navigate("/cmp/manage-courses/add-video", { state: { course } });
    } else {
      navigate("/cmp/manage-courses/quiz", { state: { course, updateMode } });
    }

    setIsSaving(false);
  };

  const handleEditorStateChange = (text: string) => {
    setTextEditorText(text);
  };

  const handleAnswerChange = (answers: any) => {
    setAnswers(answers);
  };

  const onSkip = () => {
    navigate("/cmp/manage-courses/add-video", { state: { course } });
  };

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
                <TextEditor handleEditorStateChange={handleEditorStateChange} />
              </div>
            </div>

            <Answer handleAnswerChange={handleAnswerChange} />

            <div className="form-group d-flex my-5">
              <button
                onClick={onSubmitQuestion}
                className="btn btn-main btn-wide bg-[#6c757d] hover:bg-[#a1b0bc] text-white w-[150px]"
              >
                {isSaving ? (
                  <span>Saving...</span>
                ) : (
                  <span>Submit Question</span>
                )}
              </button>
              <button
                onClick={onSkip}
                className="btn btn-main btn-wide ml-4 bg-[#6c757d] hover:bg-[#a1b0bc] text-white w-[150px]"
              >
                {isSaving ? <span>Next</span> : <span>Next</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
