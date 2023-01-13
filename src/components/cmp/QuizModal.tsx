import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ITestAnswer } from "../../model/test-answer.model";

export const QuizModal = (props: any) => {
  const initAnswers: ITestAnswer[] = [
    { id: 0, title: "Question 1", correctAnswer: false },
    { id: 1, title: "Question 2", correctAnswer: true },
  ];
  const [answers, setAnswers] = useState(initAnswers);

  return (
    <div>
      <div
        className="modal fade"
        id="quizModal"
        tabIndex={-1}
        aria-labelledby="quizModal"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
                <i className="fa fa-close"></i>
              </button>
            </div>
            <div className="modal-body m-0">
              <h4 className="text-dark text-2xl font-medium">
                Preview Question
              </h4>
              <p className="my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="form-group row align-items-center mb-3">
                <div className="col-md-6">
                  {answers.map((answer: ITestAnswer, index: number) => {
                    return (
                      <div key={index}>
                        <label
                          className="form-check-label"
                          id={`answer_${index}`}
                        >
                          <input
                            type="radio"
                            className="form-check-input"
                            name="answer"
                            autoComplete="off"
                            checked={answer.correctAnswer}
                            onChange={() => {}}
                          />
                          &nbsp;{answer.title}
                        </label>
                        <br></br>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="text-end">
                <button
                  className="btn btn-sm text-white bg-[#00c2cb]"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
